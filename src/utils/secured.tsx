import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./hooks";

interface SecuredRouteProps {
  page: any;
}

const SecuredRoute: FC<SecuredRouteProps> = (props) => {
  const auth = useAuth();
  if (!auth.token) return <Navigate to="/login" replace />;
  return props.page;
};

export default SecuredRoute;
