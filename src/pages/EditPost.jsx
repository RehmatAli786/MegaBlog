import { useState, useEffect } from "react"
import service from "../services/appwrite/config"
import { useNavigate, useParams } from "react-router-dom"
import { Container, PostForm } from "../components";

function EditPost() {
    const [post, setPost] = useState([]);
    const navigate = useNavigate();
    const { slug } = useParams();

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                setPost(post);
            });
        } else {
            navigate('/');
        }
    }, [slug, navigate])

    return post ? (
        <div className="py-8">
            <Container>
                <PostForm
                    post={post}
                />
            </Container>
        </div>
    ) : null;
}

export default EditPost