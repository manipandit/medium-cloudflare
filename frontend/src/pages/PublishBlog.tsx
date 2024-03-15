import { useState } from "react";
import Appbar from "../components/Appbar";
import axios from "axios";
import { backendUrl } from "../utils/util";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

export default function PublishBlog() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const addBlog = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${backendUrl}/blog/`,
        {
          title,
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );
      const blogId = data.id;
      navigate(`/blog/${blogId}`);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Appbar />
      <div className="flex justify-center pt-20">
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-2">
            <label htmlFor="title" className="text-sm font-semibold">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setTitle(e.target.value);
              }}
              className="p-2 text-base border focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="content" className="text-sm font-semibold">
              Content
            </label>
            <textarea
              name=""
              id="content"
              cols={100}
              rows={10}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setContent(e.target.value)
              }
              className="p-2 text-sm border focus:outline-none"
            ></textarea>
          </div>
          <button
            onClick={addBlog}
            className="px-4 py-2 text-sm text-white bg-green-700 rounded-lg"
          >
            {loading ? (
              <ClipLoader
                color="white"
                size={15}
                className="flex items-center justify-center "
              />
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
