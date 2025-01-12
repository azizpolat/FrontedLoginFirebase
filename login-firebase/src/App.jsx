import { Toaster } from "react-hot-toast";
import Register from "./pages/Register";
function App() {
  return (
    <div className="App">
      <Toaster position="top-right" />
      <Register />
    </div>
  );
}

export default App;
