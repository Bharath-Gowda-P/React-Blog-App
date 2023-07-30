import { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../components/Blogs";
import { AppContext } from "../context/AppContext";
import { baseUrl } from "../baseUrl";
import Spinner from "../components/Spinner";
import BlogDetails from "../components/BlogDetails";

function BlogPage() {
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { setLoading, loading } = useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      console.log("Error in blog id api call");
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <div className=" mb-6 max-w-2xl mx-auto">
        <button
          className="border-2 border-gray-300 py-1 px-4 rounded-md"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
      {loading ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <Spinner />
        </div>
      ) : blog ? (
        <div>
          <BlogDetails post={blog} />
          <h2 className="max-w-2xl mx-auto mt-12 font-bold text-3xl mb-8">
            Related Blogs
          </h2>
          <div className="flex flex-col gap-y-10 my-4">
            {relatedBlogs.map((post) => (
              <div key={post.id}>
                <BlogDetails post={post} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          {" "}
          <p>No Blog Found</p>{" "}
        </div>
      )}
    </div>
  );
}

export default BlogPage;
