import { collapseTailwindClassName } from "@/utill/collapseTailwindClassName";


export default function IconClear({
  width = 15,
  className = "",
}: {
  width?: number;
  className?: string;
}) {
  return (
    <div
      className={collapseTailwindClassName(["block aspect-[15/16]", className])}
      style={{ width: width + "px" }}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 15 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="7.5" cy="7.5" r="5.5" fill="#808080" />
        <path
          d="M9 6L6 9"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 6L9 9"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
