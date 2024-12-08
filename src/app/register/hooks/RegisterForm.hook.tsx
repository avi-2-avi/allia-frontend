"use client";
import { useRef, useState, FormEvent, RefObject } from "react";
import { toast } from "react-toastify";
import { areValidHtmlInputRefs } from "@/app/shared/services/ref-validation.service";
import { useRouter } from "next/navigation";
import { register } from "@/app/register/services/register.service";

export const useRegisterForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isRegistering, setIsRegistering] = useState(false);

  const router = useRouter();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !areValidHtmlInputRefs([
        nameRef as RefObject<HTMLInputElement>,
        emailRef as RefObject<HTMLInputElement>,
        passwordRef as RefObject<HTMLInputElement>,
      ])
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    const toastId = toast.loading("Registering...");
    setIsRegistering(true);

    try {
      const res = await register({
        name: nameRef.current!.value,
        email: emailRef.current!.value,
        password: passwordRef.current!.value,
      });

      toast.update(toastId, {
        type: res.status === "success" ? "success" : "error",
        render: res.message,
        isLoading: false,
        autoClose: 1500,
      });

      if (res.status === "success") {
        setTimeout(() => {
          router.push("/login");
        }, 1500);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsRegistering(false);
    }
  };

  return {
    nameRef,
    emailRef,
    passwordRef,
    isRegistering,
    onSubmit,
  };
};
