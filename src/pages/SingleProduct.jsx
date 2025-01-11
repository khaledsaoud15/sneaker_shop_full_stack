import {
  Add,
  FavoriteBorder,
  Remove,
  Search,
  ShoppingCartCheckout,
} from "@mui/icons-material";
import Header from "../components/Header";
import { Button } from "@mui/material";

const SingleProduct = () => {
  return (
    <>
      <Header />
      <section className="flex flex-col h-full px-8 lg:px-16">
        <div className="flex flex-col gap-6 w-full relative">
          <Search className="absolute right-8 top-8 !text-3xl p-1 rounded-full bg-gray-100 flex items-center justify-center" />
          <img
            src="./assets/sb.png"
            alt=""
            className="h-[40vh] w-3/4 mx-auto object-cover"
          />
          <div className="flex flex-col gap-2 w-full h-fit">
            <h1 className="text-2xl font-semibold">Nike SB GRAY ALPHA</h1>
            <p className="text-gray-800 text-xl">$850</p>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full cursor-pointer bg-red-600"></div>
              <div className="w-4 h-4 rounded-full cursor-pointer bg-green-600"></div>
              <div className="w-4 h-4 rounded-full cursor-pointer bg-orange-600"></div>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xl font-semibold cursor-pointer">35</p>
              <p className="text-xl font-semibold cursor-pointer">40</p>
              <p className="text-xl font-semibold cursor-pointer">32</p>
              <p className="text-xl font-semibold cursor-pointer">36</p>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2 w-full">
                <Button
                  variant="outlined"
                  size="large"
                  className="!border-main !text-main"
                >
                  <Remove className="!text-sm" />
                </Button>
                <span className="text-lg font-semibold">0</span>
                <Button
                  variant="outlined"
                  size="large"
                  className="!border-main !text-main"
                >
                  <Add className="!text-sm" />
                </Button>
              </div>
              <Button
                variant="contained"
                size="medium"
                className="w-full !bg-main"
                endIcon={<ShoppingCartCheckout />}
              >
                ADD TO CART
              </Button>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <FavoriteBorder />
                <p className="text-lg">Add to wishlist</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-bold text-sm">
                  SKU: <span className="text-gray-500">WOO-VNECK-TEE-1</span>
                </p>
                <p className="font-bold text-sm">
                  CATEGORY: <span className="text-blue-500">HOODIES</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
