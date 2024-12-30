"use client";

import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>

          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-desc mt-5">
            Effortlessly turn your ideas into a fully functional, responsive
            SaaS website in just a minute with this template.
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="product-image" className="mt-10" />
          <motion.img
            src={pyramidImage.src}
            alt="pyramid-image"
            className="hidden md:block absolute -right-36 -top-32"
            width={262}
            height={262}
            style={{
              translateY: translateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="tube-image"
            className="hidden md:block absolute bottom-24 -left-36"
            height={248}
            width={248}
            style={{
              translateY: translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
