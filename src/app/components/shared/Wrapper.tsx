import React from "react";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[2400px] mx-auto sm:mx-4 md:mx-8 lg:mx-12 py-8 ">
      {children}
    </div>
  );
}
