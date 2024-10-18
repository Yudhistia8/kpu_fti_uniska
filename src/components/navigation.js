"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Navigation = () => {
  const route = usePathname();
  const [name, setName] = useState("");

  useEffect(() => {
    if (route === "/") {
      setName("Category");
    } else if (route === "/bilik/bem") {
      setName("Bilik BEM FTI");
    } else if (route === "/bilik/hmpti") {
      setName("Bilik HMP-TI FTI");
    } else if (route === "/bilik/hmpsi") {
      setName("Bilik HMP-SI FTI");
    } else {
      setName(route);
    }
  }, [route]);

  return (
    <div className="text-xl font-semibold fixed bg-white w-full top-0 left-0 p-3 shadow-sm z-20">
      <h1>{name ?? "Loading..."}</h1>
    </div>
  );
};

export default Navigation;
