/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect, useRef } from "react";
import { getLists } from "@/utill/getLists";
interface ContextType {
  lists: any[];
  setLists: (lists: any[]) => void;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  maxPage: number;
  setMaxPage: (maxPage: number) => void;
  params: any;
  setParams: (params: any) => void;
  isLoading: React.MutableRefObject<boolean>;
  columns: any[];
}

const Context = createContext<ContextType | undefined>(undefined);

/**
 *
 * @constructor
 */
export const useListTable = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("Context must be used within an provider.");
  }
  return context;
};

/**
 * Provider
 * @param children
 * @constructor
 */
export const ListTableProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [lists, setLists] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [params, setParams] = useState<ParamsType>({
    page: 1,
    size: 10,
    keyword: '폴드6',
    modelCode: 'SM-F956NZSAKOD',
    keywordType: 'user',
  });
  const isLoading = useRef(false);
  const fetchData = async () => {
    if (isLoading.current) return;
    isLoading.current = true;
    try {
      const data: any = await getLists(params);
      if (!data) return;
      setLists(data.content);
      setCurrentPage(data.page_number + 1);
      setMaxPage(data.total_pages);
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.current = false;
    }
  }
  useEffect(() => {
    fetchData();
  }, [params]);
  return (
    <Context.Provider
      value={{
        lists,
        setLists,
        currentPage,
        setCurrentPage,
        maxPage,
        setMaxPage,
        params,
        setParams,
        isLoading,
        columns,
      }}
    >
      {children}
    </Context.Provider>
  );
};
function fetchData() {
    throw new Error("Function not implemented.");
}

export interface ParamsType {
  page: number;
  size: number;
  keyword: string;
  modelCode: string;
  keywordType: string;
}

const columns = [
  {
    key: 'no',
    title: 'Review Id',
    headerClassName: 'w-[100px]',
  },
  {
    key: 'model_code',
    title: 'Model Code',
    headerClassName: 'w-[160px]',
  },
  {
    key: 'product_name',
    title: 'Product Name',
    headerClassName: 'w-[160px]',
  },
  // {
  //   key: 'user_keywords',
  //   title: 'User Keywords',
  // },
  // {
  //   key: 'recommended_target_keywords',
  //   title: 'Recommended Target Keywords',
  // },
  // {
  //   key: 'related_keywords',
  //   title: 'Related Keywords',
  // },
  {
    key: 'user_emotional_evaluation',
    title: '평가',
    renderBody: (value: string) => {
      return value === '매우만족' ? '⭐️⭐️⭐️⭐️⭐️' : value === '만족' ? '⭐️⭐️⭐️⭐️' : value === '보통' ? '⭐️⭐️⭐️' : value === '불만족' ? '⭐️⭐️' : '⭐️';
    },
    headerClassName: 'w-[100px]',
  },
  // {
  //   key: 'emotional_evaluation_by_aspect',
  //   title: '세부평가',
  //   renderBody: (value: string) => {
  //     const result = JSON.parse(value || "{}");
  //     return <div className="flex flex-wrap gap-2">{Object.entries(result).map(([key, value]) => (
  //       <div key={key} className="bg-gray-100 px-2 py-1 text-sm text-gray-500 rounded-md">
  //         {key}: {value as string}
  //       </div>
  //     ))}</div>
  //   }
  // },
  {
    key: 'recommendation_intention',
    title: '추천여부',
    renderBody: (value: string) => {
      return value === 'yes' ? '👍🏻' : '👎🏻';
    },
    headerClassName: 'w-[100px]',
  },
  {
    key: 'summary_keyword',
    title: '요약',
    bodyClassName: 'text-left',
  },
]