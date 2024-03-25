import React from "react";
import { Link } from "react-router-dom";
const CTA = () => {
  return (
    <section className="relative bg-blue-300  py-16">
      <div className="text-center text-white mx-3">
        <h2 className=" text-4xl my-4 font-semibold text-white">
          Ready to clear the path to perfect communication?
        </h2>
        <p className=" text-lg my-6">
          Nunito connects everyone in the design process so teams can deliver
          better products, faster.
        </p>
      </div>

      <Link to={""} className="flex items-center justify-center my-4 ">
        <button
          className="group px-7 py-2 text-white font-medium text-lg bg-blue-600
         rounded-full inline-flex items-center"
        >
          Get Started
          <svg
            className="h-6 w-6 ml-1 duration-150 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </Link>
      {/* <div
        className="absolute top-0  w-full h-full"
        style={{
          background:
            "linear-gradient(268.24deg, rgba(59, 130, 246, 0.76) 50%, rgba(59, 130, 246, 0.545528) 80.61%, rgba(55, 48, 163, 0) 117.35%)",
        }}
      /> */}
    </section>
  );
};

export default CTA;
