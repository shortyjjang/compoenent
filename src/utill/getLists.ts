export const getLists = async (params: {
  page: number;
  size: number;
  keyword: string;
  modelCode: string;
  keywordType: string;
}) => {
  let body: string = "";
  Object.keys(params).forEach((key, index) => {
    body += `${index === 0 ? "?" : "&"}${key}=${
      params[key as keyof typeof params]
    }`;
  });
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/keywords/details${body}`
    );
    const data: ResponseType = await res.json();
    return data;
  } catch (error) {
    if (process.env.NODE_ENV === "development") console.log(error);
    return null;
  }
};

export interface ListItemType {
  id: string;
  no: string;
  model_code: string;
  product_name: string;
  review_content: string;
  user_keywords: string | null;
  recommended_target_keywords: string[];
  related_keywords: string[];
  emotional_evaluation_by_aspect: string;
  main_reason_for_emotional_evaluation: string;
  user_emotional_evaluation: string;
  negative_points: string;
  positive_points: string;
  recommendation_intention: string;
  summary_keyword: string;
}

export interface ResponseType {
  content: ListItemType[];
  page_number: number;
  page_size: number;
  total_elements: number;
  total_pages: number;
}
