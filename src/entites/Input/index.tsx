'use client'

import { collapseTailwindClassName } from "@/utill/collapseTailwindClassName";
import * as React from "react";
import IconClear from "../icons/IconClear";
import IconVisible from "../icons/IconVisible";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  type?: string;
  showClear?: boolean;
  controleVisible?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      showClear = true,
      controleVisible = false,
      type = "text",
      ...props
    },
    ref
  ) => {
    const [visible, setVisible] = React.useState(false);
    return (
      <div className="relative">
        <input
          type={visible ? "text" : type}
          className={collapseTailwindClassName([
            " appearance-none w-full bg-white border border-gray-300 rounded-[6px] py-[8px] px-[16px] text-[16px] outline-none",
            className,
          ])}
          ref={ref}
          {...props}
        />
        {((showClear && props.value) || controleVisible) && <div className="absolute top-1/2 right-[16px] -translate-y-1/2 gap-2 flex items-center">
        {showClear && props.value && (
          <button
            onClick={() => {
              if (props.onChange) {
                const event = {
                  target: { value: "" },
                } as React.ChangeEvent<HTMLInputElement>;
                props.onChange(event);
              }
            }}
          >
            <IconClear />
          </button>
        )}
        {controleVisible && (
          <button
            onClick={() => setVisible(!visible)}
          >
            <IconVisible visible={!visible} />
            </button>
          )}
        </div>}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
