import Avatar from "../components/Avatar";

interface BlogProps {
  title: string;
  content: string;
  authorName: string;
  publishedDate: string;
}

export function Blog({ title, content, authorName, publishedDate }: BlogProps) {
  return (
    <div className="flex flex-col max-w-xl p-3 border-b gap-y-3 border-slate-300">
      <div className="flex items-center gap-x-3">
        <div>
          <Avatar name={"mani"} />
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
  );
}
