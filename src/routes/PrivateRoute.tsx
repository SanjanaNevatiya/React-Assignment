import { ReactNode, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);
  }, []);

  if (isAuthenticated === null) {
    return null; // Prevent rendering until authentication status is checked
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/" replace />;
};

export default PrivateRoute;
