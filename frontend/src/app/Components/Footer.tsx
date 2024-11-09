import Link from "next/link";
import React from "react";
import Image from "next/image";
import {
  customerServiceItems,
  aboutShopeeItems,
  paymentLogos,
  logisticsLogos,
} from "./DataStructure/FooterData"; // Adjust the path as needed
export default function Footer() {
  return (
    <div>
      <footer
        style={{ color: "rgba(0,0,0,.54" }}
        className="border-t-[#ee4d2d] border-solid border-t-4 min-w-[75rem] bg-[#fbfbfb]"
      >
        <div className="m-auto w-[75rem]">
          <div className="flex mx-0 my-[-.3125rem] min-w-[1200px] p-[.3125rem] w-full items-start">
            {/* Customer Service Section */}
            <FooterSection
              title="CUSTOMER SERVICE"
              items={customerServiceItems}
            />

            {/* About Shopee Section */}
            <FooterSection title="ABOUT SHOPEE" items={aboutShopeeItems} />

            {/* Payment Logos Section */}
            <LogosSection title="PAYMENT" logos={paymentLogos} />

            {/* Logistics Logos Section */}
            <LogosSection title="LOGISTICS" logos={logisticsLogos} />
          </div>
          <div
            className="border-t-[1px] border-solid border-[rgba(0,0,0,.1)] justify-between py-10 px-0 flex flex-wrap items-start"
            style={{ color: "rgba(0,0,0,.54" }}
          >
            <div className="flex-shrink-0 mr-[25px] leading-[1.125rem]">
              Copyright 2024. DDAC Assignment - Group 1. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterSection({
  title,
  items,
}: {
  title: string;
  items: { text: string; href?: string }[];
}) {
  return (
    <div className="pagefooter">
      <div className="footertitle">{title}</div>
      <ul className="footerbox">
        {items.map((item, index) => (
          <li key={index} className="text-xs mb-3 flex items-center">
            {item.href ? <Link href={item.href}>{item.text}</Link> : item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

function LogosSection({ title, logos }: { title: string; logos: string[] }) {
  return (
    <div className="pagefooter">
      <div className="footertitle">{title}</div>
      <ul className="list-none mb-4 p-0 flex-wrap flex">
        {logos.map((logo, index) => (
          <li key={index} className="footerpayment">
            <Image
              className="box-border h-full text-center w-full justify-center flex items-center"
              src={logo}
              alt={`logo-${index}`}
              width={52}
              height={22}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
