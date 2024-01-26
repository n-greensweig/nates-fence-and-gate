import { useEffect } from "react";

function FenceTypes() {

    useEffect(() => {
        document.title = "Fence Types";
    }, []);

    return (
        <p>Types</p>
    )
}

export default FenceTypes;