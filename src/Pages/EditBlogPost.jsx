import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditBlogPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [blogPost, setBlogPost] = useState({
    title: "",
    author: "",
    description: "",
  });

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await axios.get(
          `https://self-blog-backend.onrender.com/api/v1/blog/single-blog/${postId}`
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogPost({ ...blogPost, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `https://self-blog-backend.onrender.com/api/v1/blog/update-blog/${postId}`,
        blogPost
      );
      alert("Blog post updated successfully");
      navigate(`/single-post/${postId}`);
    } catch (error) {
      console.error("Error updating blog post:", error);
      alert("Failed to update blog post");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <form onSubmit={handleSubmit} className="p-4 border rounded-lg">
        <h2 className="text-2xl font-semibold">Edit Post</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={blogPost.title}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Author
          </label>
          <input
            type="text"
            name="author"
            value={blogPost.author}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={blogPost.description}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded resize-none"
            rows="4"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditBlogPost;
