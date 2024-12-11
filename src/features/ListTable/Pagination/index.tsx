"use client";

import IconArrow from "@/entites/icons/IconArrow";
import { ParamsType, useListTable } from "@/hooks/useListTable";
import { collapseTailwindClassName } from "@/utill/collapseTailwindClassName";
import React, { useState } from "react";

export default function Pagination({
  type = "number",
}: {
  type?: "fraction" | "number";
}) {
  const [page, setPage] = useState(1);
  const { setParams, currentPage, maxPage } = useListTable();
  if (type === "fraction")
    return (
      <div className="flex items-center justify-center gap-[10px] text-[14px] text-[#B0BAC9] pt-[30px] pb-[50px]">
        <button
          onClick={() =>
            setParams((prev: ParamsType) => ({ ...prev, page: page - 1 }))
          }
          className="w-[32px] h-[32px] border border-[#B0BAC9]"
          title="이전"
        >
          <IconArrow className="ml-[5px]" />
        </button>
        <input
          type="tel"
          value={page}
          onChange={(e) => {
            setPage(parseInt(e.target.value));
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setParams((prev: ParamsType) => ({ ...prev, page }));
            }
          }}
          onBlur={() => {
            if (page === 1) return;
            setParams((prev: ParamsType) => ({ ...prev, page }));
          }}
          className="w-[32px] h-[32px] border border-[#B0BAC9] text-[14px] text-[#2289FF] text-center"
        />
        / <span className="text-black">{maxPage}</span>
        <button
          onClick={() => {
            if (maxPage === page) return;
            setParams((prev: ParamsType) => ({ ...prev, page }));
          }}
          className="w-[32px] h-[32px] border border-[#B0BAC9]"
          title="다음"
        >
          <IconArrow className="mr-[5px] rotate-180" />
        </button>
      </div>
    );
  return (
    <div className="flex items-center justify-center gap-[10px] text-[14px] text-[#B0BAC9] pt-[30px] pb-[50px]">
      <button
        onClick={() => setParams((prev: ParamsType) => ({ ...prev, page: 1 }))}
        className="w-[32px] h-[32px] border border-[#B0BAC9] relative"
        title="처음"
      >
        <IconArrow className="ml-[3px]" />
        <IconArrow className="ml-[7px] absolute top-1/2 -translate-y-1/2 left-0" />
      </button>
      {Array.from({ length: maxPage > 4 ? 5 : maxPage }, (_, index) => (
        <button
          key={index}
          onClick={() =>
            setParams((prev: ParamsType) => ({
              ...prev,
              page: currentPage > 2 ? currentPage - 2 + index : index + 1,
            }))
          }
          className={collapseTailwindClassName([
            "w-[32px] h-[32px] border  relative",
            currentPage > 2
              ? (index === 2
                ? "border-[#2289FF]"
                : "border-[#B0BAC9]")
              : (currentPage === index + 1
              ? "border-[#2289FF]"
              : "border-[#B0BAC9]")
          ])}
        >
          {currentPage > 2 ? currentPage - 2 + index : index + 1}
        </button>
      ))}
      <button
        onClick={() =>
          setParams((prev: ParamsType) => ({ ...prev, page: maxPage }))
        }
        className="w-[32px] h-[32px] border border-[#B0BAC9] relative"
        title="마지막"
      >
        <IconArrow className="mr-[3px] rotate-180" />
        <IconArrow className="mr-[7px] absolute rotate-180 top-1/2 -translate-y-1/2 right-0" />
      </button>
    </div>
  );
}

Pagination.displayName = "Pagination";