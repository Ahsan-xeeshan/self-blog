/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";

const BlogPost = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://self-blog-backend.onrender.com/api/v1/blog/create-blog",
        {
          title,
          author,
          description,
        }
      );
      setMessage("Blog posted successfully!");
      setTitle("");
      setAuthor("");
      setDescription("");
    } catch (error) {
      console.error("Error posting blog:", error);
      setMessage("Failed to post blog. Please try again later.");
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4 capitalize mx-auto w-[250px]">
        Write your blog here
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-[300px] md:w-[850px] border rounded-md p-4 mx-auto "
      >
        <div>
          <label htmlFor="title" className="block font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="my-2">
          <label htmlFor="author" className="block font-medium">
            Author
          </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block font-medium">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 resize-none"
            rows="4"
            required
          />
        </div>
        {message && <p className="text-red-500">{message}</p>}
        <button
          type="submit"
          className="bg-blue-500 text-white mt-5 py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Post Blog
        </button>
      </form>
    </div>
  );
};

export default BlogPost;
