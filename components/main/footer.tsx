import Link from "next/link";

export const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <h3 className="font-bold text-[16px] mb-[10px]">Contact</h3>
            
            <Link
              href="mailto:mohammedsafil039@gmail.com"
              className="flex flex-row items-center my-[7px]"
            >
              <span className="text-[16px]">mohammedsafil039@gmail.com</span>
            </Link>
            
            <Link
              href="tel:+919789378657"
              className="flex flex-row items-center my-[18px]"
            >
              <span className="text-[15px] mb-[20px]">+91 9789378657</span>
            </Link>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Mohammed Safil {new Date().getFullYear()} Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};
