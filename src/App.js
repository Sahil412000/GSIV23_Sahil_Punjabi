import "./App.css";
import { Routes, Route } from "react-router-dom";
import List from "./pages/list/List";
import Details from "./pages/details/Details";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<List />}></Route>
        <Route path='/details/:movieId' element={<Details />}></Route>
      </Routes>
    </div>
  );
}

export default App;
