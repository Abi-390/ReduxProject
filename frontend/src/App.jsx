import Mainroutes from "./routes/Mainroutes";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="w-screen h-screen bg-gray-800 text-white font-thin p-5">
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
