"use client";
import React, { useState, useRef, useEffect,  } from "react";
import {
    NavigationMenu, NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu";

const Categories = () => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<number | string>("auto");

    // Cập nhật chiều cao B theo A
    useEffect(() => {
        if (containerRef.current) {
            setHeight(containerRef.current.offsetHeight);
        }
    }, []);

    return (
        <NavigationMenu orientation={'vertical'} ref={containerRef} >
            <NavigationMenuList className={'flex-col items-start'}>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="p-3 w-48 space-y-2">
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default Categories;
