
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

import type{ ReactNode } from "react";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const isAuthenticated = useSelector(
        (state: RootState) => state.user.log
    );
    console.log(isAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;



