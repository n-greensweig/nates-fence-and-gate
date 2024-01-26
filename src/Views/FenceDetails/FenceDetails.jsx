import { useEffect } from "react";

function FenceDetails() {

    useEffect(() => {
        document.title = 'Fence Details';
    }, []);

    return (
        <p>Details</p>
    )
}

export default FenceDetails;