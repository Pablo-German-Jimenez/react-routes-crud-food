import { Navigate, Outlet } from "react-router";

const ProtectorAdmin = ({ usuarioLogueado }) => {
  if (!usuarioLogueado) {
    return <Navigate to={"/login"}></Navigate>;
  }
  return <Outlet />;
};

export default ProtectorAdmin;
