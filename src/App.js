import logo from './logo.svg';
import Random from './component/Random'
import Taggif from './component/Taggif'
function App() {
  return (
    <div className="App py-4 bg-black min-h-screen">
        <h2 className=' text-white py-3 mx-14 rounded-2xl  bg-white bg-opacity-20 text-2xl font-extrabold text-center '>RANDOM GIF</h2>
        <Random />
        <Taggif />

    </div>
  );
}

export default App;
