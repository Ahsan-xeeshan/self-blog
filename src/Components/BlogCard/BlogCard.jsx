import Card from "./Card";

const BlogCard = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-10 text-center md:text-start">
        <h3 className="font-bold text-2xl">All Blogs</h3>
        <div className="mt-5">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
