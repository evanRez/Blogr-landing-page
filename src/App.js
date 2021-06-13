import "./App.css";
import DropdownMenu from "./Components/DropdownMenu";

function App() {
  return (
    <div className="App">
      <body>
        <div className="header">
          <div className="topLine">
            <h1 className="blogr">Blogr</h1>
            <div className="navbar-links">
              <DropdownMenu
                dropDownCat="Product"
                dropDownLinks={[
                  "Overview",
                  "Pricing",
                  "Marketplace",
                  "Features",
                  "Integrations",
                ]}
              />
              <DropdownMenu
                dropDownCat="Company"
                dropDownLinks={["About", "Team", "Blog", "Careers"]}
              />
              <DropdownMenu
                dropDownCat="Connect"
                dropDownLinks={["Contact", "Newsletter", "LinkedIn"]}
              />
              <div className="login-signup">
                <button className="btn no-border">Login</button>
                <button className="btn action signup">Sign Up</button>
              </div>
            </div>
          </div>
          <div className="div-to-center">
            <div className="intro-sentence-container">
              <h1 className="bigTitle">A modern publishing platform</h1>
              <h4 className="smallTitle">
                Grow your audience and build your online brand
              </h4>
            </div>
          </div>

          <div className="btn-callto-container">
            <button className="btn action">Start for Free</button>
            <button className="btn">Learn More</button>
          </div>
        </div>
        <div>
          <h2>Designed for the future </h2>
          <h4>Introducing an extensible editor</h4>
          Blogr features an exceedingly intuitive interface which lets you focus
          on one thing: creating content. The editor supports management of
          multiple blogs and allows easy manipulation of embeds such as images,
          videos, and Markdown. Extensibility with plugins and themes provide
          easy ways to add functionality or change the looks of a blog.
          <h4>Robust content management</h4>
          <p className="textGrad">
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you’re in full control.
          </p>
          <h3>State of the Art Infrastructure</h3>
          <p>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
          <h4>Free, open, simple</h4>
          <p>
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
          <h4>Powerful tooling</h4>
          <p>
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
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
