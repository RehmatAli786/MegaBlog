import { useEffect, useState } from "react"
import { Container, PostCard } from "../components"
import service from "../services/appwrite/config"

function AllPost() {
    const [posts, setPosts] = useState();

    useEffect(() => {

    }, []);

    service.getPosts([]).then((posts) = {
        if(posts) {
            setPosts(posts.documents);
        }
    });

    return (
        <div className="w-100 py-8">
            <Container>
                <div className="d-flex flex-wrap">
                    <div className="row">
                        {posts.map((post) => (
                            <div key={post.$id} className="p-2 col-3">
                                <PostCard
                                    post={post}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default AllPost