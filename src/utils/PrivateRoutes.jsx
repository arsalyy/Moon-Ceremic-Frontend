import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

const PrivateRoutes = ({ Component }) => {
  let user = useSelector((state) => state?.auth?.user?.token);
  if (!user) return <Navigate to={"/login"} />;

  return <Component />;
};

export default PrivateRoutes;
