import { ListItemType } from "@/utill/getLists";
import React from "react";

export default function ListItem({ item }: { item: ListItemType }) {
  return (
    <div>
      <h2 className="text-lg font-bold">{item?.model_code}</h2>
      <p className="text-sm font-bold">{item?.product_name}</p>
      {(item?.recommended_target_keywords || []).length > 0 && (
        <>
          <h3 className="text-sm font-bold mt-2">🎯 추천 대상</h3>
          <div className="flex flex-wrap gap-2 mt-1">
            {(item?.recommended_target_keywords || []).map((keyword) => (
              <div
                key={keyword}
                className="text-xs bg-gray-100 py-1 px-2 rounded-md"
              >
                {keyword}
              </div>
            ))}
          </div>
        </>
      )}
      {(item?.related_keywords || []).length > 0 && (
        <>
          <h3 className="text-sm font-bold mt-2">🔗 관련 키워드</h3>
          <div className="flex flex-wrap gap-2 mt-1">
            {(item?.related_keywords || []).map((keyword) => (
              <div
                key={keyword}
                className="text-xs bg-gray-100 py-1 px-2 rounded-md"
              >
                {keyword}
              </div>
            ))}
          </div>
        </>
      )}
      {item?.review_content && (
        <div className="text-sm pt-4 pb-2">{item?.review_content}</div>
      )}
      {item?.positive_points && (
        <>
          <h3 className="text-sm font-bold mt-2">😀 장점</h3>
          <div className="flex flex-wrap gap-2 mt-1">
            {item?.positive_points.split(",").map((point) => (
              <div
                key={point}
                className="text-xs bg-gray-100 py-1 px-2 rounded-md"
              >
                {point}
              </div>
            ))}
          </div>
        </>
      )}
      {item?.negative_points && (
        <>
          <h3 className="text-sm font-bold mt-2">🥲 단점</h3>
          <div className="flex flex-wrap gap-2 mt-1">
            {item?.negative_points.split(",").map((point) => (
              <div
                key={point}
                className="text-xs bg-gray-100 py-1 px-2 rounded-md"
              >
                {point}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
