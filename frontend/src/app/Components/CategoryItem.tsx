import Image from "next/image";
import Link from "next/link";

interface CategoryItemProps {
  src: string;
  alt: string;
  description: string;
}

export default function CategoryItem({
  src,
  alt,
  description,
}: CategoryItemProps) {
  return (
    <li className="float-none h-[151px] important-width touch-pan-y">
      <Link
        href={""}
        className="bg-white border-b-[1px] border-solid before:content-[''] before:block before:pt-[126%] 
        before:w-full border-[rgba(0,0,0,.05)] border-r-[1px] text-[rgba(0,0,0,.87] block relative text-center no-underline 
        [transition:transform_0.1s_cubic-bezier(0.4,0,0.6,1),box-shadow_0.1s_cubic-bezier(0.4,0,0.6,1)] hover:scale-105 hover:shadow-lg"
      >
        <div className="items-center bottom-0 flex flex-col justify-center left-0 absolute right-0 top-0">
          <div className="flex-shrink-[1] h-[70%] mt-[10%] w-[70%]">
            <Image
              width={83.44}
              height={83.44}
              src={src}
              alt={alt}
              className="text-center cursor-pointer list-none"
            />
          </div>
          <div className="h-[3.125rem] text-center w-[90%]">
            <div className="text-[rgba(0,0,0,.8)] text-sm">{description}</div>
          </div>
        </div>
      </Link>
    </li>
  );
}
