// Lessons
import Lesson_02 from "./lessons/Lesson_02/Lesson_02";
import Lesson_03 from "./lessons/Lesson_03/Lesson_03";
// Homeworks
import Homework02 from "./homeworks/Homework02/Homework02";
import Homework_03 from "./homeworks/Homework_03/Homework_03";

import "./App.css";

function App() {
  
  return (
    <div className="app">
    {/* ============  Lessons ============= */}
      {/* <Lesson_02 /> */}
      <Lesson_03 />


      {/* ============  Homeworks ============= */}
      {/* <Homework02 /> */}
      <Homework_03 />
    </div>
  );
}

export default App;
