import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/AppRoutes";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <BrowserRouter>
        <div className="app ">
      <Header/>
      <section className="pt-[142px] sm:pt-[185px] md:pt-[133px]" >
          <AppRoutes/>
      </section>
      <Footer/>
        </div>
    </BrowserRouter>
  );
}

export default App;
