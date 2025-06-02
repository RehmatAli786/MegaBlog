import { useEffect, useState } from "react"
import service from "../services/appwrite/config"
import { Navigate, useNavigate, useParams, Link } from "react-router-dom"
import { Button, Container } from "../components"
import { useSelector } from "react-redux"

function Post() {
    const [post, setPost] = useSelector([]);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.store.userData);

    const isAuthor = post && userData ? post.$id === userData.id : false;

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate('/');
            })
        } else navigate('/');
    }, [slug, navigate])

    const deletePost = () => {
        service.deletePost(post.$id).then((status) => {
            if (status) {
                service.deleteFile(post.featuredImage);
                navigate('/');
            }
        })
    }
    return post ? (
        <div className="py-8">
            <Container>
                <div className="d-flex justify-content-center mb-4 border rounded-lg p-2">
                    <img
                        src={service.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rouded-lg"
                    />

                    {isAuthor && (
                        <div className="position-absolute top-0 end-0 m-3">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="success" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="danger" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-100 mb-6">
                    <h1 className="fs-3 fw-bold">{post.title}</h1>
                </div>
                <div className="">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null;
}

export default Post