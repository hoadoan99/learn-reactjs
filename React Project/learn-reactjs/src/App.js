/** @format */
import "./App.css";
import TodoFeature from "./features/Todo";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="app"> 
      Home Page
      <TodoFeature />
      {/* <AlbumFeature /> */}
      {/* <Route path="/todos" component={TodoFeature}/> */}
      {/* <Route path="/todos" component={TodoFeature} /> */}
    </div>
  );
}

export default App;
