import React from "react";
import Image from "next/image";
import StarRating from "../StarRating";
import type { ProductCommenttype } from "@/app/lib/Interface/ProductCommenttype";

interface ProductCommentProps {
  comments: ProductCommenttype[];
}
export default function ProductComment({ comments }: ProductCommentProps) {
  const commentFilter = [
    { label: "all" },
    { label: "5 star (0)" },
    { label: "4 star (0)" },
    { label: "3 star (0)" },
    { label: "2 star (0)" },
    { label: "1 star (0)" },
    { label: "With Comments (0)" },
    { label: "With Media (0)" },
  ];
  return (
    <div className="bg-white rounded-sm shadow-ssm mt-[.9375rem] overflow-visible p-[1.5625rem]">
      <div className="items-center flex flex-nowrap flex-row mb-[1em]">
        <div className="text-[rgba(0,0,0,.87)] text-lg mr-[.2em] capitalize">
          Product Ratings
        </div>
      </div>
      <div className="items-center bg-[#fffbf8] border border-[#f9ede5] rounded-sm box-border flex mb-4 min-h-20 p-[1.875rem]">
        <div className="mr-[1.875rem] text-center">
          <div className="text-[#d0011b] text-[1.125rem]">
            <span className="text-center text-[1.875rem]">0</span>
            <span className="text-center"> out of 5 </span>
          </div>
          {/**can put a star here, will implement later*/}
        </div>
        <div className="flex-1 ml-[.9375rem]">
          {commentFilter.map((item, index) => (
            <div
              key={index}
              tabIndex={0}
              className="focus:outline-none focus:border-[#d1100b] focus:ring-3 focus:ring-[#d0011b] 
                    active:border-[#d0011b] focus:text-[#d0011b]
                    bg-white border-[1px] border-[rgba(0,0,0,.09)] rounded-sm box-border cursor-pointer inline-block h-8 leading-8
                    mb-[.3125rem] mr-[.5rem] mt-[.3125rem] min-w-[6.25rem] py-0 px-[.625rem] text-center no-underline capitalize select-none"
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
      <div style={{ opacity: "1" }}>
        {comments.map((comment, index) => (
          <div
            key={index}
            className="items-start border-b-[1px] border-[rgba(0,0,0,.09)] flex pt-4 pr-0 pb-4 pl-5"
          >
            {/**avatar */}
            <div className="mr-[.625rem] text-center w-10">
              <div className="border-0 h-10 w-10 rounded-[50%] box-border inline-block relative">
                <Image
                  className="rounded-[50%] block h-full left-0 absolute top-0 w-full"
                  src={comment.avatar}
                  height={40}
                  width={40}
                  alt=""
                />
              </div>
            </div>
            {/**content */}
            <div className="flex-1">
              <div className="text-black text-[.75rem] no-underline">
                {comment.userName}
              </div>
              <StarRating rating={comment.rating} />
              <div className="flex"></div>
              <div className="text-[rgba(0,0,0,.54)] text-[.75rem] mb-[.9375rem] mt-1">
                {comment.dateTime}
              </div>

              <div className="relative box-border my-[15px] mx-0 text-sm text-[rgba(0,0,0,.87)] break-words whitespace-pre-wrap">
                {/**Quality */}
                {comment.qualityFeedback && (
                  <div style={{ marginTop: "0px" }}>
                    <span style={{ color: "rgba(0,0,0,0.4)" }}>Quality: </span>
                    {comment.qualityFeedback}
                  </div>
                )}
                {/**Description */}
                {comment.commentDescription && (
                  <div style={{ marginTop: "0.75rem" }}>
                    {comment.commentDescription}
                  </div>
                )}
              </div>
              {/**product image */}
              {comment.commentPhoto && (
                <div className="mt-[.9375rem]">
                  <div className="flex flex-wrap w-full">
                    {/* {comment.productImage.map((image, i) => ( */}
                    <div
                      // key={i}
                      className="cursor-zoom-in h-[4.5rem] mt-0 mr-[.625rem] mb-[.625rem] ml-0 relative w-[4.5rem]"
                    >
                      <div className="h-full relative w-full">
                        <picture className="contents">
                          <Image
                            src={comment.commentPhoto}
                            height={72}
                            width={72}
                            alt={"Product Image"}
                            className="h-full left-0 object-cover absolute top-0 align-[initial] w-full border-0 overflow-clip"
                          />
                        </picture>
                      </div>
                    </div>
                    {/* ))} */}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
