import "./index.css";
import Timeline from "./components/TimeLine";
import { timelineData } from "./data/TimeLineData"; // ✅ Import data

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#EFEBE7]">
      <Timeline items={timelineData} />
    </div>
  );
}

export default App;
