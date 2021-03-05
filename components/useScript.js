import { useEffect } from "react";
const useScript = (url) => {
  useEffect(() => {
    if(typeof window !== 'undefined') {
    const script = window.document.createElement("script");
    script.src = url;
    script.async = true;
    window.document.body.appendChild(script);
    return () => {
      window.document.body.removeChild(script);
    };
    }
  }, [url]);
};
export default useScript;