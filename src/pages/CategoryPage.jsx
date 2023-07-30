import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

function CategoryPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);

  return (
    <div>
      <Header />
      <div className="flex max-w-2xl w-11/12 mx-auto mb-6 space-x-2 items-center">
        <button
        className="border-2 border-gray-300 py-1 px-4 rounded-md"
        onClick={() => navigate(-1)}>Back</button>
        <h2 className="text-xl font-bold">
          Blogs On <span className="underline">{category}</span>
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
}

export default CategoryPage;
