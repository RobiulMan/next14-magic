import blogs from "../../data/blogs";

export const generateStaticParams = () => {
  return blogs.map((blog) => ({ id: String(blog.id) }));
};

const SingleBlog = ({ params }) => {
  const { id } = params;
  const blog = blogs?.find((blog) => blog.id == id);
  const { title, description } = blog;
  return (
    <div className="p-8">
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="mt-6">{description}</p>
    </div>
  );
};

export default SingleBlog;
