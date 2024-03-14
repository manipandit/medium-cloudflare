import Appbar from "../components/Appbar";
import { useBlogs } from "../hooks/useBlogs";
import { Blog } from "./Blog";

export function Blogs() {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div className="relative">
        <Appbar />
        <div>Loading...</div>
      </div>
    );
  }
  return (
    <div className="relative">
      <Appbar />
      <div className="flex justify-center">
        <div className="flex flex-col">
          {blogs.map((blog) => {
            return (
              <Blog
                key={blog.id}
                authorName={blog.author.name || "Anonymous"}
                title={blog.title}
                content={blog.content}
                publishedDate="14 Mar 2024"
              />
            );
          })}
          <Blog
            authorName="mani"
            title="Unveiling the Power of Mindfulness: Cultivating Peace in a Chaotic World"
            content="In today's fast-paced world, finding moments of tranquility can feel like searching for a needle in a haystack. Amidst the hustle and bustle of daily life, stress often becomes a constant companion, taking a toll on our mental and physical well-being. However, amidst the chaos, there exists a potent tool for cultivating peace and resilience: mindfulness. Mindfulness, rooted in ancient practices but increasingly embraced in modern psychology, involves being fully present and aware of our thoughts, feelings, sensations, and surroundings without judgment. It's about tuning into the present moment, accepting it as it is, and letting go of the need to control or change it.Research has shown that regular mindfulness practice can lead to a myriad of benefits, including reduced stress, anxiety, and depression, enhanced focus and cognitive function, improved emotional regulation, and increased overall well-being"
            publishedDate="Mar 13, 2024"
          />
        </div>
      </div>
    </div>
  );
}
