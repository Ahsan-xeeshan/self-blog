import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/blog/all-blog"
        );
        setBlogData(response.data.data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogData();
  }, [blogData]);

  const truncateDescription = (description) => {
    const words = description.split(" ");
    const truncated = words.slice(0, 25).join(" ");
    return truncated + (words.length > 25 ? "..." : "");
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {blogData.map((item) => (
        <div key={item.id} className="p-4 border rounded-lg">
          <h5 className="font-semibold text-xl mb-2">{item.title}</h5>
          <div className="inline-block p-1 bg-slate-600 rounded-lg mb-3">
            <p className="font-medium text-white text-sm">
              Written by: {item.author}
            </p>
          </div>
          <p className="text-gray-700">
            {truncateDescription(item.description)}
          </p>
          <Link
            to={`/single-post/${item._id}`}
            className="font-bold mt-3 inline-block text-blue-600"
          >
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Card;
