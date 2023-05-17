import { FC, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { delay } from "./dates";
import { getAuth } from "./hooks";

interface SecuredRouteProps {
  page: any;
}

const SecuredRoute: FC<SecuredRouteProps> = (props) => {
  const auth = getAuth();
  const [hasAuth, setHasAuth] = useState<boolean>();
  useEffect(() => {
    if (!auth.accessToken && !!auth.refreshToken) {
      delay(5000).then(() => {
        const newToken = getAuth().accessToken;
        console.log("token has been updated");
        setHasAuth(!!newToken);
      });
    }
  }, []);

  if (hasAuth === false) return <Navigate to="/login" replace />;
  return props.page;
};

export default SecuredRoute;
