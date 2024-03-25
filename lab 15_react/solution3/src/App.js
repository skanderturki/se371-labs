import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";


const banner = "Lab 15 | React";

function App() {
  return (
    <div className="App">
      <Header bannerMessage={banner} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
