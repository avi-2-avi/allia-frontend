import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const generateContent = async (
  prompt: string,
  tone: string,
  contentType: string
): Promise<
  | { status: "success"; message: string; payload: any }
  | { status: "error"; message: string }
> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/v1/content/generate`, {
      prompt,
      tone,
      contentType,
    });

    return {
      status: "success",
      message: "Content generated successfully.",
      payload: response.data,
    };
  } catch (error) {
    return {
      status: "error",
      message: "Failed to generate content. Please try again.",
    };
  }
};
