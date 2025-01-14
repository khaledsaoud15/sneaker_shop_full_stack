import { CompareArrows, Favorite, Search } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Product = ({ p }) => {
  return (
    <>
      <div className="relative w-full h-[60vh] p-6 shadow-xl flex flex-col gap-2 overflow-hidden rounded-lg md:w-auto  group lg:w-full lg:h-auto">
        <div className="absolute top-8 -right-8 flex flex-col gap-2 group-hover:right-4 transition-all duration-300">
          <Favorite className="bg-[#2F4858] rounded-full text-white !w-8 !h-8 p-1 cursor-pointer" />
          <CompareArrows className="bg-[#2F4858] rounded-full text-white !w-8 !h-8 p-1 cursor-pointer" />
        </div>
        <img
          src={p.img}
          alt={p.title}
          className="w-full h-auto mx-auto md:h-[25vh] md:w-2/3 lg:h-[40vh] object-fit"
        />
        <h1 className="text-xl mt-4">
          title: <b>{p.title}</b>
        </h1>
        <div className="flex items-center justify-between">
          <p>
            price: <b>${p.price}</b>
          </p>
          <div className="flex items-center gap-2">
            {p.category.map((c, i) => (
              <p key={i} className="text-gray-500">
                {c}
              </p>
            ))}
          </div>
        </div>
        <Button
          variant="contained"
          endIcon={<Search />}
          className="!bg-[#2F4858] hover:!bg-[#04090c] !mt-auto"
        >
          <Link to={`/product/${p.id}`}>More Details</Link>
        </Button>
      </div>
    </>
  );
};

export default Product;
