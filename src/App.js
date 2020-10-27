import './App.css';
import { useEffect } from 'react'
import Routes from './config/Routes';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Routes />
  );
}

export default App;
