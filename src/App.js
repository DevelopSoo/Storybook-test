import logo from "./logo.svg";
import "./App.css";
import { Button } from "./stories/Button";

function App() {
  return (
    <Button
      primary
      label="버튼"
      size="large"
      onClick={() => {
        console.log("h1");
      }}
    />
  );
}

export default App;
