import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

function PrivateRoute({ component }) {

    const navigate = useNavigate();

    const auth = localStorage.getItem("auth")

    useEffect(() => {

        if (!auth) {
            navigate("/");
        }
    }, []);

    return auth ? component : navigate("/login");
}

export default PrivateRoute;