"use client";
import { useListTable } from "@/hooks/useListTable";
import { collapseTailwindClassName } from "@/utill/collapseTailwindClassName";
import React from "react";

export default function ListBody() {
  const { columns, lists, currentPage } = useListTable();
  return (
    <div className="whitespace-nowrap overflow-auto text-center text-gray-500">
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-xs px-2 py-3 bg-gray-50 border-y border-gray-200 w-[50px]">No.</th>
            {columns.map((column) => (
              <th
                key={column.key}
                className={collapseTailwindClassName(["text-xs px-2 py-3 bg-gray-50 border-y border-gray-200", column.headerClassName ? column.headerClassName : ""])}
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {lists.map((list, index) => (
            <tr key={list.id}>
              <td className="text-sm px-2 py-3 border-b border-gray-200 w-[50px]">
                {(currentPage - 1) * 10 + index + 1}
              </td>
              {columns.map((column) => (
                <td
                  key={column.key}
                  className={collapseTailwindClassName([
                    "text-sm px-2 py-3 border-b border-gray-200",
                    column.bodyClassName ? column.bodyClassName : "",
                  ])}
                >
                  {column.renderBody
                    ? column.renderBody(list[column.key] as string)
                    : list[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
