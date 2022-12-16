import Homepage from './pages/Homepage'
import Navbar from './components/Navbar';
import Header from './components/ui/header/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="app_container">
      <Header />
      <BrowserRouter>
			  <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage/>} />
        </Routes>
		  </BrowserRouter>
    </div>
  );
}

export default App;
