import "./App.css";
import AppHeader from "./Components/AppHeader";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <AppHeader />
        <Section1 />
        <Section2 />

        <Section3 />

        <Footer />

        <div className="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://www.reznitek.com/" rel="noreferrer">
            Evan Reznicek
          </a>
          .
        </div>
      </div>
    </>
  );
}

export default App;
