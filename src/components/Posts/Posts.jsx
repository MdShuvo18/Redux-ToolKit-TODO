import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../../features/posts/postSlice";


const Posts = () => {
    const dispatch = useDispatch();
    const { isLoading, posts, error } = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(fetchPost());
    }, [dispatch]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
        <h1 className="text-2xl font-bold mb-5">Posts</h1>
        <div className="grid grid-cols-4 gap-5">
            {posts.map((post) => (
                <div
                    key={post.id}
                    className="border-2 border-gray-300 bg-gray-100 p-4 rounded-lg shadow-md"
                >
                    <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
                    <p className="text-sm text-gray-600">{post.body}</p>
                </div>
            ))}
        </div>
    </div>
    );
};

export default Posts;
