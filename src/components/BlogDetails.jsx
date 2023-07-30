import { NavLink } from "react-router-dom";

function BlogDetails({ post }) {
  return (
    <div className="max-w-2xl w-11/12 mx-auto">
      <div key={post.id} >
        <NavLink to={`/blog/${post.id}`}>
          <p className="font-bold text-lg">{post.title}</p>
        </NavLink>

        <p className="text-sm my-1">
          By
          <span className="italic">{post.author}{" "}</span>
          On{" "}
          <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
            <span className="underline font-semibold cursor-pointer">
              {post.category}{" "}
            </span>
          </NavLink>
        </p>
        <p className="text-sm">
          Posted On
          <span>{" "}{post.date}</span>
        </p>
        <p className="mt-4 mb-2">{post.content}</p>
        <div className="flex flex-wrap gap-x-2 items-center">
          {post.tags.map((tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
              <span className="text-xs font-semibold text-blue-700 underline cursor-pointer">
                {`#${tag} `}
              </span>
            </NavLink>
          ))}{" "}
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
