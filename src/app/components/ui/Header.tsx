"use client";
import React, { useEffect, useState } from "react";
import { BiChevronDown, BiMenu, BiX } from "react-icons/bi";
import { useAuthStore } from "@/app/shared/stores/useAuthStore";

interface HeaderProps {
  setSidebarVisible: (visible: boolean) => void;
  sidebarVisible: boolean;
}

const Header: React.FC<HeaderProps> = ({ setSidebarVisible, sidebarVisible }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const userName = useAuthStore((state) => state.user?.fullName);

  // Detect screen size on load and window resize
  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.innerWidth < 1024; // Small screen if width < 1024px
      setIsSmallScreen(isSmall);
      setSidebarVisible(!isSmall); // Auto-open sidebar on large screens
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setSidebarVisible]);

  const toggleSidebar = () => {
    if (isSmallScreen) {
      setSidebarVisible(!sidebarVisible); // Toggle sidebar visibility
    }
  };

  return (
    <div className="flex justify-between items-center text-white lg:ml-64">
      <div className="flex-shrink-0">
        <img src="/icons/BrandingLogo.svg" alt="Logo" width={80} height={80} />
      </div>

      <div className="flex gap-2 items-center">
        <div className="flex items-center gap-2">
          <div className="bg-accent p-1 rounded-full flex items-center justify-center text-white text-lg font-bold w-10 h-10">
            {userName?.charAt(0).toUpperCase()}
          </div>
          <div className="hidden md:block">{userName}</div>
          <BiChevronDown size={24} />
        </div>

        {/* Menu toggle for small screens */}
        {isSmallScreen && (
          <div onClick={toggleSidebar} className="block lg:hidden">
            {sidebarVisible ? <BiX size={30} /> : <BiMenu size={30} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
