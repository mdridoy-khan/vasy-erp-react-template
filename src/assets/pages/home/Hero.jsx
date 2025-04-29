import React from "react";
import BannerImage from "../../images/pos-banner-new.webp";
import BannnerRightImage from "../../images/solution-bannerlaptop.webp";
const Hero = () => {
    return (
        <section className="mt-40 relative pb-20 overflow-x-hidden">
            <div className="container mx-auto z-20 relative pt-20 pr-[900px]">
                <h1 className="text-3xl xl:text-4xl font-bold text-secondary mb-5">
                    Cloud-based POS billing software for retail shop
                </h1>
                <h3 className="text-lg font-semibold text-secondary mb-20">
                    India’s most trusted billing software for easy retail billing, accounting, CRM, inventory and online store management.
                </h3>
                <div className="flex items-center gap-2">
                    <button className="bg-primary text-white px-4 border border-primary py-4 rounded-lg font-semibold text-base hover:bg-transparent hover:text-primary transition duration-300 font-semibold text-sm">Schedule a demo</button>
                    <button className="bg-primary text-white px-4 border border-primary py-4 rounded-lg font-semibold text-base hover:bg-transparent hover:text-primary transition duration-300 font-semibold text-sm">Explore features</button>
                </div>
            </div>
            <div className="absolute top-0 left-0 w-7/12 h-full cover z-10">
                <img src={BannerImage} alt="Banner" className="h-full" />
            </div>
            <div className="absolute top-1/2 -translate-y-2/4 right-20 w-5/12 object-cover scale-150 z-0">
                <img src={BannnerRightImage} alt="Banner" className="w-full" />
            </div>
        </section>
    )
}
export default Hero;