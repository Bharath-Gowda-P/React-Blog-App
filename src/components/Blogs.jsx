import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import BlogDetails from "./BlogDetails";

function Blogs() {
  const { loading, posts } = useContext(AppContext);
  console.log("Printing inside blogs component");
  console.log(posts);

  return (
    <div className=" flex flex-col gap-y-10 justify-center items-center">
      {loading ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <Spinner />
        </div>
      ) : posts.length === 0 ? (
        <div>
          <p>No Posts Found</p>
        </div>
      ) : (
        posts.map((post) => <BlogDetails key={post.id} post={post} />)
      )}
    </div>
  );
}

export default Blogs;
