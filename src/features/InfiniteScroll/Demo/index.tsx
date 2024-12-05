'use client'
import React, { useEffect, useRef, useState } from 'react'
import InfiniteScroll from '@/features/InfiniteScroll';

export default function InfiniteScrollDemo() {
  const [lists, setLists] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(10);
  const isLoading = useRef(false);
  const getLists = async() => {
      if (isLoading.current) return;
      isLoading.current = true;
      const newLists = Array.from({ length: 10 }, (_, index) => index + 1);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLists([...lists, ...newLists]);
      setCurrentPage(currentPage + 1);
      setMaxPage(10);
      isLoading.current = false;
  }
  useEffect(() => {
      getLists();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
return (
  <InfiniteScroll
    onLoadData={getLists}
    scrollHeight={500}
    currentPage={currentPage}
    maxPage={maxPage}
  >
      {lists.map((item) => (
          <div key={item}>{item}</div>
      ))}
  </InfiniteScroll>
  )
}
