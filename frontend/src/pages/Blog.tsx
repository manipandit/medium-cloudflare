import { useParams } from "react-router-dom";
import useBlogId from "../hooks/useBlogId";
import Appbar from "../components/Appbar";
import FullBlog from "../components/FullBlog";
import BlogSkeleton from "../components/BlogSkeleton";

export function Blog() {
  const { id } = useParams();

  const { loading, blog } = useBlogId({
    id: id || "",
  });
  if (loading || !blog) {
    return (
      <div>
        <Appbar />
        <div className="mt-10 ml-10">
          <BlogSkeleton />
        </div>
      </div>
    );
  }
  return (
    <div>
      <Appbar />
      <div>
        <FullBlog blog={blog} />
      </div>
    </div>
  );
}
