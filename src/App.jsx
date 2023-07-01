
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
// import MyContainer from "./components/MyContainer/MyContainer"

const App = () => {
  return <>

    <div className="md:grid grid-cols-4">
      <div className="col-span-1">
        <Sidebar></Sidebar>
      </div>
      <div className="col-span-3 md:pl-16 pr-5">
        <Home />
      </div>
    </div>

  </>
};

export default App;