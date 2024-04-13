import Link from "next/link";
import React from "react";

export default function Personal() {
  return (
    <div className="flex space-x-24">
      <Link href="/" className="text-xl text-[#999] pt-2 mb-2 ml-2">
        Zaid Imtiaz Chughtai
      </Link>
      <h2 className="text-xl text-[#999] pt-2 mb-2 ml-2 hidden lg:flex">
        Software Engineer | Front End Developer
      </h2>
    </div>
  );
}
