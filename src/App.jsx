import { Outlet } from "react-router-dom";
import MainLayOut from "./components/layout/MainLayOut";

function App() {
  return (
    <>
      <MainLayOut>
        <Outlet></Outlet>
      </MainLayOut>
    </>
  );
}

export default App;
