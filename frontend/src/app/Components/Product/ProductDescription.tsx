import React from "react";

export default function ProductDescription({
  category,
  stock,
  description,
}: {
  category: string;
  stock: number;
  description: string;
}) {
  return (
    <div className="bg-white rounded-sm shadow-ssm mt-[.9375rem] overflow-hidden p-[.625rem]">
      <section className="px-[.9375rem] pt-[.9375rem] pb-0 block">
        <h2 className="bg-[rgba(0,0,0,.02)] text-[rgba(0,0,0,.87)] text-lg font-normal m-0 p-[.875rem] capitalize">
          Product Specification
        </h2>
        <div className="mt-[1.875rem] mx-[.9375rem] mb-[.9375rem]">
          <div className="flex mb-[1.125rem]">
            <label className="box-border text-[rgba(0,0,0,.4)] text-sm pr-3 w-[8.75rem] break-words">
              Category
            </label>
            <div>{category}</div>
          </div>
          <div className="flex mb-[1.125rem]">
            <label className="box-border text-[rgba(0,0,0,.4)] text-sm pr-3 w-[8.75rem] break-words">
              Stock
            </label>
            <div>{stock}</div>
          </div>
        </div>
      </section>
      <section className="px-[.9375rem] pt-[.9375rem] pb-0 block">
        <h2 className="bg-[rgba(0,0,0,.02)] text-[rgba(0,0,0,.87)] text-lg font-normal m-0 p-[.875rem] capitalize">
          Product Description
        </h2>
        <div className="mt-[1.875rem] mx-[.9375rem] mb-[.9375rem]">
          <div className="text-[rgba(0,0,0,.8)] text-sm leading-[1.7] overflow-hidden text-ellipsis whitespace-pre-wrap">
            <p>{description}</p>
          </div>
        </div>
      </section>
      <section className="px-[.9375rem] pt-[.9375rem] pb-0 block"></section>
    </div>
  );
}
