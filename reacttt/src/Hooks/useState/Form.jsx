import { useState } from "react";

export const Form = ({ onSubmit }) => {
    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        place: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("submitted");
        console.log("userData", inputData);

        onSubmit(inputData);
    };

    const handleChangeInput = (e) => {
        const { name, value } = e.target;

        setInputData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <>
            <h1>User Form</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChangeInput}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChangeInput}
                />

                <input
                    type="text"
                    name="place"
                    placeholder="Place"
                    onChange={handleChangeInput}
                />

                <input type="submit" value="Submit" />
                
            </form> 
        </>
    );
};