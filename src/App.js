import './App.css';
import Router from './components/Router';
import { ScrollControls, Scroll } from '@react-three/drei';
import Spectacles from './components/Spectacles';

function App() {
  return (
    <>
      <ScrollControls pages={1}>
        <Spectacles />

        <Scroll></Scroll>

        <Scroll html style={{ width: '100%' }}>
          <div className="app">
            <Router />
          </div>
        </Scroll>
      </ScrollControls>
    </>
    
    // <div className="app">
    //   <Router />
    // </div>
  );
}

export default App;
