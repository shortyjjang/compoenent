import { collapseTailwindClassName } from "@/utill/collapseTailwindClassName";
import { forwardRef, useId } from "react";

function Switch(
  {
    checked,
    onChange,
  }: { checked: boolean; onChange: (checked: boolean) => void },
  ref: React.Ref<HTMLInputElement>
) {
  const id = useId();
  return (
    <label
      className={collapseTailwindClassName([
        "relative w-[48px] h-[24px] shadow-sm rounded-[12px] bg-gray-300 p-[2px] inline-flex items-center justify-start",
        checked ? "bg-primary justify-end" : ""
      ])}
      htmlFor={id}
    >
      <input
        ref={ref}
        type="checkbox"
        checked={checked}
        className="hidden"
        onChange={(e) => onChange(e.target.checked)}
        id={id}
      />
      <span
        className={collapseTailwindClassName([
          "w-[20px] h-[20px] rounded-[10px] bg-white",
        ])}
      ></span>
    </label>
  );
}

export default forwardRef(Switch);
Switch.displayName = "Switch";
