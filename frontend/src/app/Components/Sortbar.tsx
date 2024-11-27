import React from "react";

export default function Sortbar() {
  return (
    <div>
      <fieldset
        style={{ border: "0px", marginRight: "0px", marginLeft: "0px" }}
        className="items-center bg-[rgba(0,0,0,.03)] rounded-sm flex font-normal 
        justify-between py-[.8125rem] px-[1.25rem] my-0 mx-[2px]"
      >
        <legend style={{ display: "none" }}></legend>
        <div className="text-[#555] my-0 mr-[3.125rem] ml-0 font-normal">
          Sort by
        </div>
        <div className="items-stretch flex flex-1 gap-y-[.625rem] gap-x-[.625rem] justify-start">
          <section className="flex gap-[.625rem] ml-[.625rem] font-normal">
            <button
              aria-pressed="true"
              className="bg-[#ee4d2d] text-white border-0 rounded-sm shadow-ssm h-[2.125rem] leading-[2.125rem]
                    items-center box-border cursor-pointer flex justify-center
                    min-w-[5.625rem] outline-0 overflow-visible py-0 px-[.9375rem] relative capitalize
                    select-none whitespace-nowrap m-0"
            >
              <span aria-hidden="true">relevance</span>
            </button>
            <button
              aria-pressed="false"
              className="border-0 rounded-sm shadow-ssm h-[2.125rem] leading-[2.125rem]
                    items-center bg-white box-border cursor-pointer flex justify-center
                    min-w-[5.625rem] outline-0 overflow-visible py-0 px-[.9375rem] relative capitalize
                    select-none whitespace-nowrap m-0"
            >
              <span aria-hidden="true">Latest</span>
            </button>
            <button
              aria-pressed="false"
              className="border-0 rounded-sm shadow-ssm h-[2.125rem] leading-[2.125rem]
                    items-center bg-white box-border cursor-pointer flex justify-center
                    min-w-[5.625rem] outline-0 overflow-visible py-0 px-[.9375rem] relative capitalize
                    select-none whitespace-nowrap m-0"
            >
              <span aria-hidden="true">Top Sales</span>
            </button>
          </section>
        </div>
      </fieldset>
    </div>
  );
}
