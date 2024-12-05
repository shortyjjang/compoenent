/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import InfiniteScroll from "@/features/InfiniteScroll";
import ListItem from "@/features/InfiniteScroll/Demo/ListItem.tsx";
import { getLists, ListItemType, ResponseType } from "@/utill/getLists";
import React, { useEffect, useRef, useState } from "react";

export default function InfiniteScrollPage() {
  const [lists, setLists] = useState<ListItemType[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [maxPage, setMaxPage] = useState(1);
  const isLoading = useRef(false);
  const onLoadData = async () => {
    if (isLoading.current) return;
    if (currentPage + 1 > maxPage) return;
    isLoading.current = true;
    const params = {
      page: currentPage + 1,
      size: 10,
      keyword: "폴드6",
      modelCode: "SM-F956NZSAKOD",
      keywordType: "user",
    };
    try {
      const data: ResponseType | null = await getLists(params);
      if (!data) return;
      setLists(currentPage === 0 ? data.content : [...lists, ...data.content]);
      setCurrentPage(data.page_number + 1);
      setMaxPage(data.total_pages);
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.current = false;
    }
  };
  useEffect(() => {
    onLoadData();
  }, []);

  return (
    <div className="flex flex-col gap-4 p-8">
      <InfiniteScroll
        onLoadData={onLoadData}
        scrollHeight={500}
        currentPage={currentPage}
        maxPage={maxPage}
      >
        <div className="flex flex-col gap-4">
          {lists.map((item) => (
            <ListItem key={item?.id} item={item} />
          ))}
        </div>
      </InfiniteScroll>
      <code className="whitespace-pre-wrap bg-gray-100 border border-gray-300 p-2 text-xs">
        {code}
      </code>
      <code className="whitespace-pre-wrap bg-gray-100 border border-gray-300 p-2 text-xs">
        {code2}
      </code>
    </div>
  );
}


const code = `<InfiniteScroll
    onLoadData={getLists}
    scrollHeight={500}
    currentPage={currentPage}
    maxPage={maxPage}
>
    {lists.map((item) => (
    <div key={item}>{item}</div>
    ))}
</InfiniteScroll>`;

const code2 = `'use client'
import React, { useEffect, useRef } from 'react'

export default function InfiniteScroll({
    onLoadData,
    children,
    scrollHeight,
    currentPage,
    maxPage
}: {
    onLoadData: () => void,
    children: React.ReactNode,
    scrollHeight: number,
    currentPage: number,
    maxPage: number
}) {
    const listScrollAreaRef = useRef<HTMLDivElement>(null);
    const isListScrollable = useRef(false);
    useEffect(() => {
      const scrollArea = listScrollAreaRef.current;
      const handleListScroll = () => {
        if (!isListScrollable.current) return;
        const sc = scrollArea?.scrollTop || 0;
        const lastPosition =
          (scrollArea?.scrollHeight || 0) -
          (scrollArea?.clientHeight || 0);
        if (sc >= lastPosition && currentPage < maxPage) {
          onLoadData();
        }
      };
      scrollArea?.addEventListener("scroll", handleListScroll);
      return () => {
        scrollArea?.removeEventListener("scroll", handleListScroll);
      };
    }, [listScrollAreaRef, onLoadData, currentPage, maxPage]);
  return (
    <div ref={listScrollAreaRef} style={{ height: scrollHeight }}>
        {children}
    </div>
  )
}
`;
