export default function DisplayComponent({ displayData }) {

    console.log("Display Component Rendering...", displayData);

    return (
        <>
            <h1>Display Component</h1>

            <h2>Name : {displayData.name}</h2>
            <h2>Email : {displayData.email}</h2>
            <h2>Place : {displayData.place}</h2>
        </>
    );
}