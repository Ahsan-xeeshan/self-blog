import BlogCard from "../Components/BlogCard/BlogCard";

const LandingPage = () => {
  return (
    <main>
      <div className="bg-[#1f2937d8] py-20">
        <div className="container mx-auto text-white text-center">
          <h1 className="font-semibold text-6xl">Welcome to Self Blog</h1>
          <p className="uppercase mt-4">
            Explore number of blogs from different categories
          </p>
        </div>
      </div>
      <BlogCard />
    </main>
  );
};

export default LandingPage;
