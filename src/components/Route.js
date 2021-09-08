import { useEffect, useState } from "react";
const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLoactionChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", onLoactionChange);
    return () => {
      window.removeEventListener("popstate", onLoactionChange);
    };
  }, []);
  return currentPath === path ? children : null;
};
export default Route;
