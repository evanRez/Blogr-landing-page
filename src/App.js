import "./App.css";
import AppHeader from "./Components/AppHeader";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";

function App() {
  return (
    <div className="App">
      <body>
        <AppHeader />
        <Section1 />
        <Section2 />

        <div style={{ marginTop: "200px" }}>
          <Section3 />
        </div>
        <div>
          Product Overview Pricing Marketplace Features Integrations Company
          About Team Blog Careers Connect Contact Newsletter LinkedIn
        </div>
      </body>

      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  );
}

export default App;
