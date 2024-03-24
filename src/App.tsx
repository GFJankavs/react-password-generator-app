import "./App.css";
import PasswordGenerator from "./components/PasswordGenerator";

function App() {
    return (
        <main>
            <div className="container">
                <div className="content">
                    <h1 className="heading--m">Password generator</h1>
                    <PasswordGenerator />
                </div>
            </div>
        </main>
    );
}

export default App;
