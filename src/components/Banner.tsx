"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

interface BannerProps {
    banners: string[];
}

export default function Banner({ banners }: BannerProps) {
    if (!banners?.length) return null;

    const [swipes, banner] = [banners.slice(0, -2), banners.slice(-2)];
    return (
        <div className="grid grid-cols-10 gap-4 w-full">
            <div className="col-span-6">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    slidesPerView={1}
                    loop
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    className="w-full h-full"
                >
                    {swipes.map((src, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white relative w-full h-full overflow-hidden rounded-md">
                                <img
                                    src={src}
                                    className="w-full h-full object-cover rounded-md"
                                    alt="Banner"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="col-span-4 flex flex-col gap-4">
                {banner.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt={`Banner ${i}`}
                        className="w-full h-full object-cover rounded-md"
                    />
                ))}
            </div>
        </div>
    );
}