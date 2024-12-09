import Navbar from "@/app/components/navigation/Navbar";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

type BaseLayoutProps = {
  children: ReactNode;
};

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-dvh">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Navbar />
      <main className={"mx-auto max-w-[1320px] scroll-smooth"}>{children}</main>
    </div>
  );
};

export default BaseLayout;
