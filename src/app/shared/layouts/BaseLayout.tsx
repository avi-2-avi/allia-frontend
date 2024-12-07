import Navbar from "@/app/components/ui/Navbar";
import { ReactNode } from "react";

type BaseLayoutProps = {
  children: ReactNode;
};

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className="grid grid-rows-[auto_1fr] min-h-dvh">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default BaseLayout;
