import Navbar from "@/app/components/ui/Navbar";
import { ReactNode } from "react";

type BaseLayoutProps = {
  children: ReactNode;
};

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-dvh">
      <Navbar />
      <main className={"mx-auto max-w-[1320px]"}>{children}</main>
    </div>
  );
};

export default BaseLayout;
