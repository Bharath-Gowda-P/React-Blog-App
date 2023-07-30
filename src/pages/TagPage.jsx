import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../components/Blogs";
import Header from "../components/Header";
import Pagination from "../components/Pagination";

function TagPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);

  return (
    <div className="">
      <Header />
      <div className="max-w-2xl w-11/12 mx-auto flex mb-6 space-x-2 items-center">
        <button 
        className="border-2 border-gray-300 py-1 px-4 rounded-md"
        onClick={() => navigate(-1)}>Back</button>
        <h2 className="text-xl font-bold">
          Blogs Tagged <span className="underline text-blue-700">#{tag}</span>{" "}
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
}

export default TagPage;
