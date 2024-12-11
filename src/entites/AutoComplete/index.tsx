"use client";
import React, { useEffect, useRef, useState } from "react";
import { Input } from "../Input";
import { collapseTailwindClassName } from "@/utill/collapseTailwindClassName";

export default function AutoComplete({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isTop, setIsTop] = useState(false);
  const clearTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  // 드롭다운이 열릴 때 스크롤 위치에 따라 드롭다운 방향 설정
  useEffect(() => {
    if (!isFocus || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom; // 화면 하단과의 거리 계산

    if (spaceBelow < 200) {
      // 하단에 200px 미만의 공간이 있으면
      setIsTop(false);
    } else {
      setIsTop(true);
    }
  }, [isFocus]);
  return (
    <div
      ref={containerRef}
      className={collapseTailwindClassName([
        "relative",
        isFocus ? "z-[+1]" : "",
      ])}
    >
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value as string)}
        onFocus={() => {
          setIsFocus(true);
          if (clearTimeoutRef.current) {
            clearTimeout(clearTimeoutRef.current);
          }
        }}
        onBlur={() => {
          clearTimeoutRef.current = setTimeout(() => {
            setIsFocus(false);
          }, 1000);
        }}
      />
      {isFocus &&
        options.filter((option) => option.includes(value)).length > 0 && (
          <div
            className="absolute left-0 w-full bg-white shadow-md rounded-md max-h-[200px] overflow-y-auto py-2"
            style={{
              top: isTop ? "100%" : "auto",
              bottom: isTop ? "auto" : "100%",
            }}
            onMouseOver={() => {
              if (clearTimeoutRef.current) {
                clearTimeout(clearTimeoutRef.current);
              }
            }}
          >
            {options
              .filter((option) => option.includes(value))
              .map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    onChange(option);
                    setIsFocus(false);
                  }}
                  className="px-3 py-1 focus:bg-gray-100 hover:bg-gray-100"
                >
                  {option}
                </div>
              ))}
          </div>
        )}
    </div>
  );
}

AutoComplete.displayName = "AutoComplete";