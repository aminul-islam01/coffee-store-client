import { Outlet } from 'react-router-dom';
import './App.css'
import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';

function App() {

  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App
