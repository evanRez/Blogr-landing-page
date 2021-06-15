import "./App.css";
import AppHeader from "./Components/AppHeader";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <body>
        <AppHeader />
        <Section1 />
        <Section2 />

        <Section3 />

        <Footer />
      </body>

      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://www.reznitek.com/">Evan Reznicek</a>.
      </div>
    </div>
  );
}

export default App;
