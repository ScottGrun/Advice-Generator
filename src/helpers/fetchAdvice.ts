import { AdviceApiResponse } from "types/customTypes";

export const fetchAdvice = async (): Promise<AdviceApiResponse> => {
  const url = "https://api.adviceslip.com/advice";
  return await fetch(url).then((response) => response.json());
};
