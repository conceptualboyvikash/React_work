import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
   <>
   <Navbar  title="raviokok" about="mobile no" />
    {/* <Navbar /> */}
    <div className="container my-3">
      <Textform heading="by vikash kumar" />
    </div>
   </>
  );
}

export default App;
