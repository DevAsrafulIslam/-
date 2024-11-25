import { products } from "@/data/product";
import Link from "next/link";
import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const Products = () => {
  return (
    <div className="container px-0">
      <div>
        <h2 className="text-3xl text-primary font-medium my-4">
          Our Latest Products
        </h2>
        {/*  border-2 border-[#0c232722] border-dashed w-3/12 */}
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                className="border border-dashed rounded-md hover:shadow-md"
                key={product.id}
              >
                <Link
                  href={{ pathname: `/products/${product.id}` }}
                  className="relative aspect-square block"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-52 object-cover rounded-md mb-4"
                  />
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-gray-500">{product.shortDescription}</p>
                  <div className="divider my-0"></div>
                  <div className="container my-2 flex justify-between self-center">
                    <p className="text-[#9b2d11]">
                      ৳<span className="text-2xl">{product.price}</span>
                    </p>
                    <span className="flex space-x-2">
                      <button className="text-white bg-orange-300 p-2 rounded mt-2">
                        Add Cart
                      </button>
                      <button className="text-white bg-slate-600 p-2 rounded mt-2">
                        Buy Now
                      </button>
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          {/* <div className="text-center text-[#a11a1a]">dfjls</div>
          <div className=" divider" />
          <div className="text-center text-[#a11a1a]">dfjls</div> */}
        </div>
      </div>
    </div>
  );
};

export default Products;
