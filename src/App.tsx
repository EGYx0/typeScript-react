import { useState } from "react";
import "./App.css";
import { Person } from "./components/Person";

function App() {
  const [isShowInfo, setIsShowInfo] = useState<boolean | null>(null);
  const toggleInfo = () => {
    setIsShowInfo((prev) => !prev);
  };
  return (
    <>
      {isShowInfo && <Person firstName="Ahmad" age={24} isMarried={true} />}
      <button onClick={toggleInfo}>Click to show info</button>
    </>
  );
}

export default App;
