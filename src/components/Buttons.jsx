import React from "react";
import { useNavigate } from "react-router-dom";
function Buttons() {
        const navigate = useNavigate();
    return (
        <>
            <button onClick={() => navigate('/')} aria-label="Home">
                Home
            </button>
            <button onClick={() => navigate(-1)} aria-label="Back">
                Back 
            </button>
        </>
    );
}

export default Buttons;