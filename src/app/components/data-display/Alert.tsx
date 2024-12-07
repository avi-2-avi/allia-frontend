import React from "react";
import Image from "next/image";
import { twJoin } from "tailwind-merge";

interface AlertProps {
  label: string;
  type: "warning" | "error";
}

const Alert: React.FC<AlertProps> = ({ label, type }) => {
  const colorStyles =
    type === "warning"
      ? "border border-warning bg-warning-muted"
      : "border border-danger bg-danger-muted";

  return (
    <div className={twJoin("flex p-3 rounded-xl", colorStyles)}>
      <Image src={"/icons/Logo.svg"} alt={"Logo icon"} height={16} width={16} />
      <span className={"ml-3 mr-2 flex-1"}>{label}</span>
      {type === "warning" ? (
        <Image
          src={"/icons/WarningCircle.svg"}
          alt={"Warning circle"}
          height={16}
          width={16}
        />
      ) : (
        <Image src={"/icons/Clock.svg"} alt={"Clock"} height={16} width={16} />
      )}
    </div>
  );
};
export default Alert;
