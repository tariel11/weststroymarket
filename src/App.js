import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/AppRoutes";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <AppRoutes/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
