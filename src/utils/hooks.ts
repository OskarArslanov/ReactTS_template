import { useMemo } from "react";
import { useLocation } from "react-router-dom";

const getAuth = () => {
  const token = localStorage.getItem("token") || undefined;
  const result = { token };
  return result;
};

export const useAuth = () => {
  const location = useLocation();
  const auth = useMemo(() => {
    return getAuth();
  }, [location]);

  return auth;
};

export const usePaths = () => {
  const location = useLocation();
  const paths = useMemo(() => {
    return location.pathname.split("/");
  }, [location]);

  return paths;
};

export const useSecuredRoute = () => {
  const auth = useAuth();
  if (!auth.token) {
    return true;
  }
  return false;
};
