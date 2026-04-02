import { useLocation } from "react-router-dom";

const useActiveLink = () => {
  const { pathname } = useLocation();

  const isActive = (href) => pathname === href;

  return { activeLink: pathname, isActive };
};

export default useActiveLink;
