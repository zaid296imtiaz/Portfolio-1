import React from "react";
import dynamic from "next/dynamic";

// const Layout = dynamic(() => import("@/components/Layout"), { ssr: false });

import Layout from "@/components/Layout";

export default function page() {
  return <Layout />;
}
