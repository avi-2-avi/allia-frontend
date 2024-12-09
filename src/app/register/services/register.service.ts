import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const register = async ({
  fullname,
  email,
  password,
}: {
  fullname: string;
  email: string;
  password: string;
}): Promise<{ status: string; message: string }> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/register`, {
      fullname,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        status: "error",
        message: error.response?.data?.detail || "Failed to register user.",
      };
    }
    return {
      status: "error",
      message: "An unexpected error occurred.",
    };
  }
};
