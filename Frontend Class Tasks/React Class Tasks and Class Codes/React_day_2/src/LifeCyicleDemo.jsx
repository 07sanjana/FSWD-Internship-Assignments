import React, { useEffect } from "react";

function LifeCycleDemo() {
    useEffect(() => {
        console.log("Component mounted");
    }, []);
    return (
        <div>
            <h2>Check Console</h2>
        </div>
    );
}

export default LifeCycleDemo;