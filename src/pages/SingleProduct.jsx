import {
  Add,
  FacebookSharp,
  FavoriteBorder,
  Pinterest,
  Remove,
  Search,
  ShoppingCartCheckout,
  Twitter,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data";

const Description = ({ desc }) => {
  return <p className="text-center text-sm md:text-base lg:text-lg">{desc}</p>;
};
const Reviews = () => {
  return <h1>Reviews content</h1>;
};

const SingleProduct = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [text, setText] = useState("description");
  const { id } = useParams();
  const [product, setProduct] = useState({
    images: [],
  });

  useEffect(() => {
    const p = products.find((i) => i.id === +id);

    if (p) {
      setProduct(p);
    }
  }, [id]);

  return (
    <>
      <section className="flex flex-col h-full px-8 lg:px-16 gap-8">
        <div className="flex flex-col gap-6 w-full relative lg:flex-row">
          <Search className="absolute right-8 top-8 !text-3xl p-1 rounded-full bg-gray-100 flex items-center justify-center" />
          <div className="w-full h-fit flex flex-col-reverse gap-3 md:flex-row md:gap-0">
            <div className="flex items-center gap-2 lg:gap-4 w-full md:w-1/6 md:flex-col md:justify-evenly">
              {product.images?.map((i, index) => (
                <img
                  key={index}
                  onClick={() => setImageIndex(index)}
                  src={i}
                  alt={product.title}
                  className="w-1/4 h-auto aspect-square object-cover rounded-md cursor-pointer md:w-full"
                />
              ))}
            </div>
            {product.images?.length > 0 ? (
              <img
                src={product.images[imageIndex]}
                alt={product.title}
                className="h-[40vh] rounded-md w-full mx-auto object-cover md:w-3/4 md:h-full lg:w-3/5 lg:aspect-square"
              />
            ) : (
              <p className="text-gray-500">No images available</p>
            )}
          </div>

          <div className="flex flex-col gap-2 w-full h-fit lg:w-1/2 lg:justify-center lg:h-[80vh]">
            <h1 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
              {product.title}
            </h1>
            <p className="text-gray-800 text-xl">${product.price}</p>
            <div className="flex items-center gap-2">
              {product.colors?.map((c, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full cursor-pointer border"
                  style={{ backgroundColor: c }}
                ></div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              {product.size?.map((s, index) => (
                <p key={index} className="text-xl font-semibold cursor-pointer">
                  {s}
                </p>
              ))}
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
                className="w-full !bg-main !text-xs md:!text-base"
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
              <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:w-full lg:justify-between">
                <div className="flex flex-col gap-2">
                  <p className="font-bold text-sm">
                    SKU: <span className="text-gray-500">WOO-VNECK-TEE-1</span>
                  </p>
                  <p className="font-bold text-sm">
                    CATEGORY: <span className="text-blue-500">HOODIES</span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FacebookSharp />
                  <Twitter />
                  <Pinterest />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="border-b pb-2 flex items-center justify-between lg:justify-evenly">
            <p onClick={() => setText("description")} className="font-semibold">
              Description
            </p>
            <p>Additional Content</p>
            <p onClick={() => setText("reviews")}>Reviews</p>
          </div>
          {text === "description" ? (
            <Description desc={product.description} />
          ) : null}
          {text === "reviews" ? <Reviews /> : null}
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
