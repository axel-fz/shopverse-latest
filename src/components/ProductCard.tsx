"use client";
import React from "react";
import { Product } from "./PopularProducts";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { TiHeartFullOutline } from "react-icons/ti";
import { motion} from "framer-motion";
import {
  buttonVariants,
} from "@/animation/variants";


interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <motion.div
    initial = 'hidden'
    whileInView = 'visible'
    viewport={{once: true, amount: 0.1}}
    variants = {buttonVariants}
    className="h-[400px] relative w-[300px] p-5 ring ring-gray-200 rounded-[50px] flex items-center group flex-col gap-2 justify-center overflow-hidden">
      <img src={product.image} alt="" className="w-[70%]" />
      <div className="flex gap-3">
        <FaStar color="gold" />
        <FaStar color="gold" />
        <FaStar color="gold" />
        <FaStarHalfAlt color="gold" />
      </div>
      <h1 className="text-2xl font-bold">{product.title.slice(0, 10)}</h1>
      <div className="flex ">
        <h2>${product.price}</h2>
        <span className="line-through text-gray-400 ">{product.oldPrice}</span>
      </div>
      <button className="bg-orange-500 text-white px-5 py-3 rounded-full absolute bottom-2 transition-all opacity-0 duration-300 group-hover:translate-y-0 translate-y-5 group-hover:opacity-100">
        Add to Card
      </button>
      <div className="bg-[#ff6900]  p-2 absolute rounded-full top-5 right-5 flex items-center justify-center">
        <TiHeartFullOutline size={30} color="#fff" className=" transition-all hover:scale-125"/>

      </div>
    </motion.div>
  );
};

export default ProductCard;
