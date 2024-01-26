import { useEffect } from "react";

function FenceTypes() {

    useEffect(() => {
        document.title = "Fence Types";
    }, []);

    return (
        <div className="container">
            <header style={{ fontSize: '2.5rem' }}>Fence Types</header>
            <p>Choosing the perfect fence is as unique as your needs and interests.
                Explore our wide range of fence types, tailored to match your individual 
                requirements and preferences.</p>
        </div>
    )
}

export default FenceTypes;