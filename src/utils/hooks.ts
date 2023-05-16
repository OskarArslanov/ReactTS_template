import { useMemo } from "react";
import { useLocation } from "react-router-dom";

const getAuth = () => {
  const accessToken = localStorage.getItem("access_token") || undefined;
  const result = { accessToken };
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
  if (!auth.accessToken) {
    return true;
  }
  return false;
};
