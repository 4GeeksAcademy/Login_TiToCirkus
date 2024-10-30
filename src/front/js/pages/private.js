import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSession } from "../component/sessionContext";

const Private = () => {
    const navigate = useNavigate();
    const { setUserEmail } = useSession();

    useEffect(() => {
        const token = sessionStorage.getItem("token");

        if (!token) {
            navigate("/login");
        } else {
            const email = sessionStorage.getItem("userEmail");
            setUserEmail(email);
        }
    }, [navigate, setUserEmail]);

    return (
        <div className="container mt-5 text-center">
            <h2>Página Privada</h2>
            <p>Este contenido solo es visible para usuarios autenticados.</p>
        </div>
    );
};

export default Private;