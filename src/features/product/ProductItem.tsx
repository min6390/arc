import React from "react";
import Image from "next/image";
import '../../styles/ribbon.css'

const ProductItem = () => {
    return (
        <div
            className="relative flex flex-col bg-white rounded-md gap-3 p-1 cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
        >
            <div className="ribbon absolute top-2 right-2 z-20">
                -11%
            </div>
            <Image
                width={300}
                height={300}
                src="https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone_air-3_2.jpg"
                alt="product"
                className="rounded-md z-10 relative"
            />
            <div className="flex flex-col gap-2 p-2">
                <h4>IPhone 17 Air</h4>
                <b className="text-red-500">
                    31.000.000đ{" "}
                    <span className="line-through text-xs font-normal text-gray-500">33.000.000đ</span>
                </b>
            </div>
        </div>
    );
};

export default ProductItem;
