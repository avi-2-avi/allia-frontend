"use client";
import { useRef, useState, FormEvent } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { login } from "../services/login.service";

export const useLoginForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isLogging, setIsLogging] = useState(false);

  const router = useRouter();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!emailRef.current?.value || !passwordRef.current?.value) {
      toast.error("Please enter your email and password.");
      return;
    }

    setIsLogging(true);

    try {
      const res = await login(
        emailRef.current.value,
        passwordRef.current.value
      );

      if (res.status === "success") {
        localStorage.setItem("token", res.payload.token);

        router.push("/content");
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsLogging(false);
    }
  };

  return {
    emailRef,
    passwordRef,
    isLogging,
    onSubmit,
  };
};
