import Link from "next/link";
import blogs from "../data/blogs";
import BlogItem from "../components/BlogItem";

const Blogs = () => {
  return (
    <div className="p-8">
      <h1 className="text-xl font-black">Blog List</h1>
      <div className="mt-6 p-4">
        {blogs.map((blog) => (
          <Link href={`/blogs/${blog?.id}`} key={blog.id}>
            <BlogItem title={blog.title} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
