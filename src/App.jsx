import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;