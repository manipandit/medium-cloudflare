import { Link } from "react-router-dom";
import Avatar from "../components/Avatar";

interface BlogProps {
  id: string;
  title: string;
  content: string;
  authorName: string;
  publishedDate: string;
}

export function BlogCard({
  id,
  title,
  content,
  authorName,
  publishedDate,
}: BlogProps) {
  return (
    <Link to={`/blog/${id}`}>
      <div className="flex flex-col p-3  border-b cursor-pointer w-[350px] sm:w-[500px] md:w-[750px] gap-y-3 border-slate-300">
        <div className="flex items-center gap-x-3">
          <div>
            <Avatar name={authorName || "anonymous"} />
          </div>
          <div className="text-base capitalize">{authorName}</div>
          <div className="text-sm font-extralight">{publishedDate}</div>
        </div>

        <div className="text-xl font-bold">{title}</div>
        <div className="text-sm font-normal">
          {content.length > 100 ? `${content.slice(0, 220)}...` : `${content}`}
        </div>
        <div>{/* {Math.ceil(`${content.length/100} min read`)} */}</div>
      </div>
    </Link>
  );
}
