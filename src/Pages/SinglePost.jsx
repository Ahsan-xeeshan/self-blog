import axios from "axios";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";

const SinglePost = () => {
  const { postId } = useParams();
  let navigate = useNavigate();
  const [blogPost, setBlogPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/blog/single-blog/${postId}`
        );
        setBlogPost(response.data);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.post(
        `http://localhost:3000/api/v1/blog/delete-blog/${postId}`
      );
      alert("Blog post deleted successfully");
      navigate("/");
    } catch (error) {
      console.error("Error deleting blog post:", error);
      alert("Failed to delete blog post");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-8">
      {blogPost ? (
        <div className="p-4 border rounded-lg">
          <h2 className="text-2xl font-semibold">{blogPost.title}</h2>
          <div className="inline-block p-1 bg-slate-600 rounded-lg my-3">
            <p className="font-medium text-white text-sm">
              Written by: {blogPost.author}
            </p>
          </div>
          <p className="text-gray-700">{blogPost.description}</p>
          <div className="flex mt-5 gap-3">
            <button onClick={handleDelete} className="text-red-500">
              <MdOutlineDelete />
            </button>
            <Link to={`/edit-post/${postId}`}>
              <CiEdit />
            </Link>
          </div>
        </div>
      ) : (
        <p>Blog post not found.</p>
      )}
    </div>
  );
};

export default SinglePost;
