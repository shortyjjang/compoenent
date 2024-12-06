import React from "react";

export default function IconArrow({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        className="w-[18px] h-[18px]"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.1305 1.26947C13.4234 1.56237 13.4234 2.03724 13.1305 2.33013L6.46081 8.9998L13.1305 15.6695C13.4234 15.9624 13.4234 16.4372 13.1305 16.7301C12.8376 17.023 12.3627 17.023 12.0698 16.7301L4.86982 9.53013C4.72916 9.38948 4.65015 9.19872 4.65015 8.9998C4.65015 8.80089 4.72916 8.61013 4.86982 8.46947L12.0698 1.26947C12.3627 0.976581 12.8376 0.976581 13.1305 1.26947Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
