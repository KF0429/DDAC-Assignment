import React from "react";

export default function ProductDescription() {
  return (
    <div className="bg-white rounded-sm shadow-ssm mt-[.9375rem] overflow-hidden p-[.625rem]">
      <section className="px-[.9375rem] pt-[.9375rem] pb-0 block">
        <h2 className="bg-[rgba(0,0,0,.02)] text-[rgba(0,0,0,.87)] text-lg font-normal m-0 p-[.875rem] capitalize">
          Product Specification
        </h2>
        <div className="mt-[1.875rem] mx-[.9375rem] mb-[.9375rem]">
          <div className="flex mb-[1.125rem]">
            <label htmlFor="">Category</label>
          </div>
          <div className="flex mb-[1.125rem]"></div>
          <div className="flex mb-[1.125rem]"></div>
          <div className="flex mb-[1.125rem]"></div>
          <div className="flex mb-[1.125rem]"></div>
          <div className="flex mb-[1.125rem]"></div>
          <div className="flex mb-[1.125rem]"></div>
          <div className="flex mb-[1.125rem]"></div>
        </div>
      </section>
      <section className="px-[.9375rem] pt-[.9375rem] pb-0 block">
        <h2 className="bg-[rgba(0,0,0,.02)] text-[rgba(0,0,0,.87)] text-lg font-normal m-0 p-[.875rem] capitalize">
          Product Description
        </h2>
        <div className="mt-[1.875rem] mx-[.9375rem] mb-[.9375rem]"></div>
      </section>
      <section className="px-[.9375rem] pt-[.9375rem] pb-0 block"></section>
    </div>
  );
}
