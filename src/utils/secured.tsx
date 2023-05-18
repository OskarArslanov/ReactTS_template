import { FC } from "react";
import { Navigate } from "react-router-dom";
import { getAuth } from "./hooks";

interface SecuredRouteProps {
  page: any;
}

const SecuredRoute: FC<SecuredRouteProps> = (props) => {
  const auth = getAuth();
  if (!auth.accessToken) return <Navigate to="/login" replace />;
  return props.page;
};

export default SecuredRoute;
