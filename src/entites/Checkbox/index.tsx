import { collapseTailwindClassName } from "@/utill/collapseTailwindClassName";
import { forwardRef, useId } from "react";
import IconCheck from "../icons/IconCheck";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  rounded?: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      children,
      label = "",
      checked = false,
      onChange,
      rounded = false,
      ...props
    }: CheckboxProps,
    ref
  ) => {
    const id = useId()
    return (
      <div className={collapseTailwindClassName(['inline-flex items-center gap-2'])}>
        <span className={collapseTailwindClassName(["relative w-[16px] h-[16px] text-white", rounded ? 'rounded-full' : 'rounded-sm', checked ? 'bg-primary' : 'bg-white border border-gray-300'])}>
          {checked && <IconCheck width={6} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90" />}
          <input
            type="checkbox"
            id={id}
            checked={checked}
            className="absolute top-0 left-0 w-full h-full opacity-0"
            ref={ref}
            {...props}
            onChange={(e) => {
              onChange?.(e.target.checked)
            }}
          />
        </span>
        {label && <label htmlFor={id} >{label}</label>}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
export default Checkbox;