import Appbar from "../components/Appbar";
import BlogsSkeleton from "../components/BlogsSkeleton";
import { useBlogs } from "../hooks/useBlogs";
import { BlogCard } from "./BlogCard";

export function Blogs() {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div className="relative">
        <Appbar />
        <div className="flex flex-col items-center justify-center">
          <BlogsSkeleton />
          <BlogsSkeleton />
          <BlogsSkeleton />
          <BlogsSkeleton />
          <BlogsSkeleton />
        </div>
      </div>
    );
  }
  return (
    <div className="relative">
      <Appbar />
      <div className="flex justify-center">
        <div className="flex flex-col items-center w-full ">
          {blogs.map((blog) => {
            return (
              <BlogCard
                id={blog.id}
                key={blog.id}
                authorName={blog.author.name || "Anonymous"}
                title={blog.title}
                content={blog.content}
                publishedDate="14 Mar 2024"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
