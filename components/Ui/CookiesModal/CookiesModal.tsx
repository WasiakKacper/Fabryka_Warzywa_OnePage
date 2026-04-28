"use client";
import { useState, useEffect } from "react";

const CookiesModal = () => {
  const [isVisible, setIsVisible] = useState<boolean | null>(null);

  useEffect(() => {
    const hasAccepted = localStorage.getItem("cookiesAccepted");
    if (hasAccepted !== "true") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      {/* Modal - biała karta */}
      <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-sm w-full text-center">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Pliki cookie</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Ta strona używa plików cookie tylko w celu zapamiętania Twojego wyboru
          języka. Żadne inne dane nie są śledzone.
        </p>

        <button
          onClick={handleAccept}
          className="w-full bg-[#00C950] hover:bg-[#03a343] text-white font-bold py-3 px-6 rounded-xl transition duration-300 cursor-pointer"
        >
          Rozumiem
        </button>
      </div>
    </div>
  );
};
export default CookiesModal;
