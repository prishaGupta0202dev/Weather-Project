import Weather from "./weather";
import Message from "./message";
import Navbar from "./Navbar";
import "./forecast.css";
function App() {
  return (
    <div className="backgroundColor">
      <Message></Message>
      <Navbar></Navbar>
      <Weather></Weather>
    </div>
  );
}
export default App;
