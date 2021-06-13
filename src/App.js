import "./App.css";
import AppHeader from "./Components/AppHeader";
import editor from "./images/illustration-editor-desktop.svg";

function App() {
  return (
    <div className="App">
      <body>
        <AppHeader />
        <div className="section1-bg">
          <h2 className="section1-title">Designed for the future </h2>
          <div className="grid-container">
            <div className="text-column">
              <h4 className="section1-subtitle">
                Introducing an extensible editor
              </h4>
              <div className="section1-para">
                Blogr features an exceedingly intuitive interface which lets you
                focus on one thing: creating content. The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images, videos, and Markdown. Extensibility with
                plugins and themes provide easy ways to add functionality or
                change the looks of a blog.
              </div>
              <h4 className="section1-subtitle">Robust content management</h4>
              <div className="section1-para">
                Flexible content management enables users to easily move through
                posts. Increase the usability of your blog by adding customized
                categories, sections, format, or flow. With this functionality,
                you’re in full control.
              </div>
            </div>
            <div className="editor-div">
              <img className="editor-img" src={editor} />
            </div>
          </div>

          <h3 style={{ marginTop: "200px" }}>
            State of the Art Infrastructure
          </h3>
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
