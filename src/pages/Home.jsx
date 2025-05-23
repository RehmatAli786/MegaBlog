import { useEffect, useState } from "react"
import service from "../services/appwrite/config"
import { Container, PostCard } from "../components";


function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        service.getPosts().then((posts) => {
            setPosts(posts)
        })
    }, []);

    if (posts.length === 0) {
        <div className="w-100 py-8 mt-4 text-center">
            <Container>
                <div className="d-flex flex-wrap">
                    <div className="p-2 w-full">
                        <h1 className="fs-2 fw-bold">
                            Login to read posts.
                        </h1>
                    </div>
                </div>
            </Container>
        </div>
    } else {
        <div className="w-full py-8">
            <Container>
                <div className="d-flex flex-wrap">
                    <div className="row">
                        {posts.map((post) => (
                            <div key={post.$id} className="p-2 col-3">
                                <PostCard
                                    {...post}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    }
}

export default Home