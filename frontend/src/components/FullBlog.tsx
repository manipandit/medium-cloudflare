import { Blog } from "../hooks/useBlogId";
import Avatar from "./Avatar";

export default function FullBlog({ blog }: { blog: Blog }) {
  return (
    <div className="grid grid-cols-12 px-20 pt-10 gap-x-12">
      <div className="flex flex-col col-span-9 gap-y-5">
        <div className="text-4xl font-bold">{blog.title}</div>
        <div className="text-sm font-extralight">Posted on Mar 15, 2024</div>
        <div className="text-base font-normal leading-relaxed">
          {blog.content}
        </div>
      </div>
      <div className="flex flex-col col-span-3 gap-y-4">
        <div>Author</div>
        <div className="flex gap-x-2">
          <Avatar name={blog.author.name || "Anonymous"} />
          <div className="text-xl font-bold">
            {blog.author.name || "Anonymous"}
          </div>
        </div>
      </div>
    </div>
  );
}
