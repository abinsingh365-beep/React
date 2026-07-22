import { useState } from "react";
import { Form } from "./Form";
import DisplayComponent from "./DisplayComponent";

export default function ParentComponent() {

    const [displayData, setDisplayData] = useState({
        name: "",
        email: "",
        place: ""
    });

    const handleFormSubmit = (data) => {
        console.log("Received From Form :", data);

        setDisplayData(data);
    };

    return (
        <>
            <Form onSubmit={handleFormSubmit} />

            

            <DisplayComponent displayData={displayData} />
        </>
    );
}