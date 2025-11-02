import React from "react";
import Image from "next/image";
import '../../styles/ribbon.css'
import {Badge} from "@/components/ui/badge";
import {cn} from "@/lib/utils";
import {Star} from "lucide-react";
import {formatNumberShort, formatUSD} from "@/utils/utils";

interface Props {
    item:IProduct
}

const ProductItem = (props:Props) => {
    const {item} = props;
    const {image,name,discountPrice,price,badges,rating,sold} = item

    return (
        <div
            className="border relative flex flex-col bg-white rounded-md gap-3 p-1 cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
        >
            <div className={'p-1'}>
                {badges.map(b => (
                    <Badge
                        key={b.type}
                        className={
                            cn('text-xs',b.type === "new"
                                ? "bg-green-100 text-green-700"
                                : b.type === "installment"
                                    ? "bg-blue-100 text-blue-700"
                                    : b.type === "discount"
                                        ? "bg-red-100 text-red-700"
                                        : "bg-amber-100 text-amber-700")
                        }
                    >
                        {b.label}
                    </Badge>
                ))}
            </div>

            <Image
                width={200}
                height={200}
                src={image}
                alt="product"
                className="rounded-md z-10 relative"
            />
            <div className="flex flex-col gap-2 p-2">
                <h4>{name}</h4>
                <b className="text-red-500">
                    {formatUSD(price)}{" "}
                    <span className="line-through text-xs font-normal text-gray-500">{formatUSD(discountPrice)}</span>
                </b>
            </div>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                <Star color="orange" size={14} className="shrink-0" />
                <span className="font-medium text-foreground">{rating}</span>
                <span className="mx-1 text-gray-400">•</span>
                <span>Sold {formatNumberShort(sold)}</span>
</span>
        </div>
    );
};

export default ProductItem;
