
import React from "react";
import { BiChevronDown, BiMenu } from "react-icons/bi";

interface HeaderProps {
  setSidebarVisible: (visible: boolean) => void;
  sidebarVisible: boolean;
  userName: string; 
}

const Header: React.FC<HeaderProps> = ({ setSidebarVisible, sidebarVisible, userName }) => {
  return (
    <div className="flex justify-between border-2 border-blue items-center text-white md:ml-64">
      <div className="flex-shrink-0">
        <img src="/icons/BrandingLogo.svg" alt="Logo" width={80} height={80} />
      </div>

      <div className="flex gap-2 items-center">
        <div className="flex items-center gap-2">
          <div className="bg-accent p-1 rounded-full flex items-center justify-center text-white text-lg font-bold w-10 h-10">
            {userName.charAt(0).toUpperCase()} {/* Primera letra del nombre en mayúscula */}
          </div>
          <BiChevronDown size={24} />
        </div>

        <div className="block md:hidden">
          <div onClick={() => setSidebarVisible(!sidebarVisible)}> {/* Toggle sidebar visibility */}
            <BiMenu size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
