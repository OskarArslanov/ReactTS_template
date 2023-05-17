import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export const getAuth = () => {
  const accessToken = localStorage.getItem("access_token") || undefined;
  const refreshToken = localStorage.getItem("refresh_token") || undefined;
  const result = { accessToken, refreshToken };
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
