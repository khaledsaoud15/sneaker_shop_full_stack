import { CompareArrows, Favorite, Search } from "@mui/icons-material";
import { Button, Rating } from "@mui/material";
import { Link } from "react-router-dom";

const Product = ({ p }) => {
  return (
    <>
      <Link to={`/product/${p.id}`}>
        <div className="cursor-pointer w-full h-fit p-6 shadow-xl flex flex-col gap-4 overflow-hidden rounded-lg md:w-auto lg:w-full lg:h-full">
          <img
            src={p.img}
            alt={p.title}
            className="w-full h-auto mx-auto md:h-full md:w-full lg:h-full object-fit"
          />
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <h1 className="text-sm mt-4 font-medium">{p.title}</h1>
              <p className="text-sm text-gray-500">{p.brand}</p>
            </div>
            <Rating
              name="half-rating-read"
              defaultValue={2}
              precision={p.stars}
              readOnly
              className="!text-sm flex items-center"
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              ({p.reviews}k) user have rated this
            </p>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">${p.price}</h2>
            <span className="text-red-600 text-sm">Almost sold out</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Product;
