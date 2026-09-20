import "./styles.css";

function Greeter() {
    return <h1>HELLO!</h1>;
}

function Dog() {
    return <p>WOOF!!!</p>;
}

export default function App() {
    return (
        <div className="App">
            <Greeter />
            <Dog />
            <Dog />
            <Dog />
            <Greeter />
            <Greeter />
        </div>
    );
}