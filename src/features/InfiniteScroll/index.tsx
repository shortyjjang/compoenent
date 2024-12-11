'use client'
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
    const isListScrollable = useRef(true);
    useEffect(() => {
      isListScrollable.current = true;
    }, [children]);
    useEffect(() => {
      const scrollArea = listScrollAreaRef.current;
      const handleListScroll = () => {
        if (!isListScrollable.current) return;
        const sc = scrollArea?.scrollTop || 0;
        const lastPosition =
          (scrollArea?.scrollHeight || 0) -
          (scrollArea?.clientHeight || 0);
        if (sc >= lastPosition && currentPage < maxPage) {
            isListScrollable.current = false;
          onLoadData();
        }
      };
      scrollArea?.addEventListener("scroll", handleListScroll);
      return () => {
        scrollArea?.removeEventListener("scroll", handleListScroll);
      };
    }, [listScrollAreaRef, onLoadData, currentPage, maxPage]);
  return (
    <div ref={listScrollAreaRef} className="overflow-y-auto" style={{ height: scrollHeight }}>
        {children}
    </div>
  )
}

InfiniteScroll.displayName = "InfiniteScroll";