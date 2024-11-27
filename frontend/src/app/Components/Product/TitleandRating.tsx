import React from "react";
import StarRating from "../StarRating";

export default function TitleandRating({
  title,
  rating,
}: {
  title: string;
  rating: number;
}) {
  return (
    <div>
      <div className="text-ellipsis overflow-hidden text-[20px] font-medium leading-6 m-0 max-h-[48px] max-w-[665px] break-words align-sub custom-clamp">
        <span className="text-xl leading-6 font-medium">{title}</span>
      </div>
      <div className="mt-[.625rem] min-h-[1.55rem] relative flex">
        <button className="pl-0 bg-transparent border-0 cursor-pointer items-center py-0 px-[15px] flex normal-case m-0">
          <div className="border-b-[#555] text-base mr-[5px] pb-[1px]">
            {rating}
          </div>
          <div className="inline-flex relative cursor-pointer">
            <StarRating rating={rating} />
          </div>
        </button>
        <button className="bg-transparent border-0 border-l overflow-visible cursor-pointer items-center py-0 px-[15px] flex normal-case m-0 border-l-[rgba(0,0,0,0.14)]">
          <div className="border-b-[#555] text-[#222] text-base mr-[5px] pb-[1px] border-b cursor-pointer">
            4.4k
          </div>
          <div className="mr-[5px] py-1 px-0 capitalize text-[#767676]">
            ratings
          </div>
        </button>
        <div className="items-center py-0 px-[15px] flex border-l border-l-[rgba(0,0,0,0.14)]">
          <div className="mr-[5px] text-[#222] text-base pb-[1px]">9.3k</div>
          <div className="mr-[5px] capitalize text-[#767676] text-sm pt-1 pb-1">
            Sold
          </div>
        </div>
        <button className="bg-none cursor-pointer overflow-visible m-0 normal-case text-sm ml-auto">
          Report
        </button>
      </div>
    </div>
  );
}
