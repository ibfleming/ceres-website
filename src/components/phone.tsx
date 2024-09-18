"use client";

import { useState, useEffect } from "react";

function Toast({
  isVisible,
  onHide,
}: {
  isVisible: boolean;
  onHide: () => void;
}) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onHide();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onHide]);

  return (
    <div className="fixed left-4 top-4 z-50">
      <div
        className={`transform font-outfit text-lg text-white underline transition-all duration-300 ease-in-out ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"} `}
      >
        Copied
      </div>
    </div>
  );
}

export default function PhoneNumber() {
  const [toastVisible, setToastVisible] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText("18002581490");
      setToastVisible(true);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <>
      <h1
        onClick={handleClick}
        className="cursor-pointer font-outfit text-2xl text-ceres sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
      >
        1-800-258-1490
      </h1>
      <Toast isVisible={toastVisible} onHide={() => setToastVisible(false)} />
    </>
  );
}
