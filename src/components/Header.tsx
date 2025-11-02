"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {Menu} from "@/components/Menu";
import Search from "@/components/Search";
import {Button} from "@/components/ui/button";
import {MapPinHouse, ShoppingCart, User} from "lucide-react";

const navItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Giới thiệu", href: "/about" },
    { label: "Liên hệ", href: "/contact" },
];

export const Header = () => {
    return (
        <header className="sticky top-0 z-150 w-full border-b  backdrop-blur-md " >
            <div className="hidden md:flex container mx-auto  h-25 items-center px-4 flex-row gap-3" >
                <Link href="/" className="flex text-lg font-semibold tracking-tight">
                    <Image quality={100} width={300} height={300} alt={'ARC'} src={'https://arcrestaurantequipment.com/wp-content/uploads/2022/12/arc_logo.png'}  />
                </Link>
                <Menu/>
                <Button variant="outline" className="w-3xs justify-start shadow-none text-left">
                    <MapPinHouse />
                    <span className={'truncate'}> 12345 Elmwood Drive, Apartment 678, Springfield, IL 62704, United States</span>
                </Button>
                <Search/>
                <Button variant="outline" className={'shadow-none-none'}>
                    <User /> Login
                </Button>
                <Button variant="outline" className={'shadow-none-none'}>
                    <ShoppingCart /> Cart
                </Button>
            </div>
            <div className="md:hidden container flex-col gap-3 py-3">
                <div className={'flex row gap-2'}>
                    <Link href="/" className="flex text-lg font-semibold tracking-tight">
                        <Image quality={100} width={100} height={100} alt={'ARC'} src={'https://arcrestaurantequipment.com/wp-content/uploads/2022/12/arc_logo.png'}  />
                    </Link>
                    <Menu/>
                    <Button variant="outline" className="w-3xs justify-start shadow-none text-left">
                        <MapPinHouse />
                        <span className={'truncate'}> 12345 Elmwood Drive, Apartment 678, Springfield, IL 62704, United States</span>
                    </Button>
                    <Button variant="outline" className={'shadow-none-none'}>
                        <User /> Login
                    </Button>
                    <Button variant="outline" className={'shadow-none-none'}>
                        <ShoppingCart /> Cart
                    </Button>
                </div>
                <Search className={'mt-3'}/>
            </div>

        </header>
    );
};

export default Header;
