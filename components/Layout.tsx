"use client";

import React, { useEffect, useState } from "react";

import NavLinks from "@/components/NavLinks";
import Header from "@/components/Header";
import Personal from "@/components/Personal";
import Hero from "@/components/Hero";
import { motion, useScroll, useTransform } from "framer-motion";

const Layout = () => {
  const { scrollY } = useScroll();
  const [documentHeight, setDocumentHeight] = useState(0);

  useEffect(() => {
    // This code will now only run on the client-side
    const height = document.documentElement.scrollHeight;
    setDocumentHeight(height);
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="min-h-screen">
      <div className="flex justify-between">
        <Personal />
        <div className="space-x-2 mb-2 pt-2 mr-2">
          {/* @ts-ignore */}
          <NavLinks />
        </div>
      </div>

      <motion.div
        className="relative w-screen"
        style={{
          y: useTransform(scrollY, [0, 5000], [0, documentHeight], {
            clamp: false,
          }),
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Header />
      </motion.div>

      <div className="p-2">
        <Hero />
      </div>
    </div>
  );
}

export default Layout;
