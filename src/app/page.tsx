import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import List from "@/components/List";
import ProductItem from "@/features/product/ProductItem";
import React from "react";
import {Button} from "@/components/ui/button";
import Image from "next/image";


const banners = [
    'https://2tmobile.com/wp-content/uploads/2025/09/banner-iphone-17-pro-t9-2tmobile.webp',
    "https://2tmobile.com/wp-content/uploads/2025/09/banner-iphone-17-air-t9-25-2tmobile.webp",
    "https://2tmobile.com/wp-content/uploads/2025/05/banner-laptop-t5-25-2tmobile-2048x812.webp",
    "https://2tmobile.com/wp-content/uploads/2025/03/banner-ipad-gen-11-t3-2tmobile.webp",
    'https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/a1/8a/a18aa930d483ca05665219353a61caac.png',
    'https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/fa/97/fa97498308c9e58905faa0e61afeb2df.png'
]


 const data = [
    {
        id: 1,
        name: "Hoshizaki KM-231BAJ Ice Machine",
        image: "https://arcrestaurantequipment.com/wp-content/uploads/2022/09/KM-231BAJ-scaled-1-300x300.jpg",
        price: 3890,
        discountPrice: 3490,
        rating: 4.8,
        sold: 125,
        badges: [
            { type: "new", label: "Sản phẩm mới" },
            { type: "installment", label: "Trả góp 0 đồng" },
        ],
    },
    {
        id: 2,
        name: "Hoshizaki KM-161BAJ Ice Maker",
        image: "https://arcrestaurantequipment.com/wp-content/uploads/2022/09/KM-161BAJ-scaled-1-300x300.jpg",
        price: 3290,
        discountPrice: 2990,
        rating: 4.6,
        sold: 210,
        badges: [
            { type: "installment", label: "Trả góp 0 đồng" },
            { type: "discount", label: "Giảm giá" },
        ],
    },
    {
        id: 3,
        name: "Hoshizaki DKM-500BAJ Cube Ice Machine",
        image: "https://arcrestaurantequipment.com/wp-content/uploads/2022/09/DKM-500BAJ-scaled-1-300x300.jpg",
        price: 5790,
        discountPrice: 5190,
        rating: 4.9,
        sold: 320,
        badges: [
            { type: "new", label: "Sản phẩm mới" },
            { type: "bestseller", label: "Bán chạy" },
        ],
    },
    {
        id: 4,
        name: "Hoshizaki KM-420MWJ Ice Maker",
        image: "https://arcrestaurantequipment.com/wp-content/uploads/2022/10/KM-420MWJ-scaled-1-300x300.jpg",
        price: 4890,
        discountPrice: 4590,
        rating: 4.7,
        sold: 185,
        badges: [
            { type: "installment", label: "Trả góp 0 đồng" },
            { type: "discount", label: "Giảm giá" },
        ],
    },
    {
        id: 5,
        name: "Polar Chest Freezer PCPC-1BR",
        image: "https://arcrestaurantequipment.com/wp-content/uploads/2023/07/pcpc-1br_1.jpg",
        price: 1590,
        discountPrice: 1390,
        rating: 4.4,
        sold: 98,
        badges: [{ type: "new", label: "Sản phẩm mới" }],
    },
    {
        id: 6,
        name: "Polar Chest Freezer PCPC-1BL",
        image: "https://arcrestaurantequipment.com/wp-content/uploads/2023/07/pcpc-1bl_1.jpg",
        price: 1590,
        discountPrice: 1390,
        rating: 4.5,
        sold: 1342,
        badges: [{ type: "installment", label: "Trả góp 0 đồng" }],
    },
    {
        id: 7,
        name: "Polar Upright Freezer PLBL240C",
        image: "https://arcrestaurantequipment.com/wp-content/uploads/2023/07/plbl240c.jpg",
        price: 2190,
        discountPrice: 1990,
        rating: 4.6,
        sold: 2870,
        badges: [{ type: "bestseller", label: "Bán chạy" }],
    },
];

const companies = [
    'https://arcrestaurantequipment.com/wp-content/uploads/2022/12/Atosa.jpg',
    'https://arcrestaurantequipment.com/wp-content/uploads/2022/12/Cambro-Logo.png',
    'https://arcrestaurantequipment.com/wp-content/uploads/2022/12/Dukers-Logo.png',
    'https://arcrestaurantequipment.com/wp-content/uploads/2022/12/Hoshizaki.png',
    'https://arcrestaurantequipment.com/wp-content/uploads/2022/12/Migali.png',
    'https://arcrestaurantequipment.com/wp-content/uploads/2022/12/robot-coupe-vector-logo.png'
]

export default function HomePage() {
    const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);


    const renderItem = (item:IProduct,index:number)=><ProductItem key={index} item={item}/>
    const renderFilter = (item: string) => {
        return (
            <button className="relative w-15 h-10 overflow-hidden rounded-md bg-gray-100 cursor-pointer hover:border border-primary">
                <Image
                    src={item}
                    alt="filter"
                    fill
                    className="object-contain"
                />
            </button>
        )
    }

    return (
        <>
            <main className="container mx-auto py-8 px-4">
                <Banner banners={banners}/>
                <ul className={'bg-white py-10 px-5 my-10 rounded-md'}>
                    <div className={'gap-5 flex flex-row mb-5'}>
                        <button className="relative w-15 h-10 overflow-hidden rounded-md border border-primary  cursor-pointer hover:bg-blue-100">
                            <span className={'text-sm'}>Filter</span>
                        </button>
                        {companies.map(renderFilter)}
                    </div>
                    <List columns={5} data={[...data,...data,...data]} renderItem={renderItem }/>
                </ul>
            </main>
        </>

    );
}
