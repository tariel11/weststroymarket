import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/AppRoutes";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import bg from './img/bg.jpg'

function App() {
  return (
    <BrowserRouter>
        <div className="app bg-gradient-to-r from-sky-500 to-indigo-500">
      <Header/>
          <AppRoutes/>
      <Footer/>
        </div>
    </BrowserRouter>
  );
}

export default App;
