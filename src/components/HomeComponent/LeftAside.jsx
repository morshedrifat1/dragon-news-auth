import React, { Suspense } from "react";
import Catagories from "../Catagories";

const LeftAside = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        }
      >
        <Catagories></Catagories>
      </Suspense>
    </div>
  );
};

export default LeftAside;
