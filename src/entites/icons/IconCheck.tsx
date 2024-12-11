
export default function IconCheck({
    width = 8,
    className = "",
  }: IconProps) {
    return (
      <span
        className={`inline-block aspect-[8/14] ${className}`}
        style={{
          width: width + "px",
        }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 13L7 7L1 1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    );
  }
  
  interface IconProps {
    width?: number;
    strokeColor?: string;
    className?: string;
  }
  