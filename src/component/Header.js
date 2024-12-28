import React from "react";

function Header() {
  const handleNavClick = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").split("#")[1];
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, null, `#${targetId}`);
    }
  };

  return (
    <React.StrictMode>
      <div className="menubar">
        <div className="menubar-content">
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-3">
                  <div className="site-title">
                    <a href="/vilal-ali/#home" style={{ textDecoration: "none" }} onClick={handleNavClick}>
                      <h3>Vilal Ali</h3>
                    </a>
                  </div>
                </div>
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className="col-md-9 col-sm-9 navbar-style">
                  <div
                    className="collapse navbar-collapse"
                    id="bs-example-navbar-collapse-1"
                  >
                    <ul className="nav navbar-nav">
                      <li>
                        <a href="/vilal-ali/#home" className="active" onClick={handleNavClick}>
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="/vilal-ali/#about" onClick={handleNavClick}>About</a>
                      </li>
                      <li>
                        <a href="/vilal-ali/#skill" onClick={handleNavClick}>Skill</a>
                      </li>
                      <li>
                        <a href="/vilal-ali/#work" onClick={handleNavClick}>Work Experience</a>
                      </li>
                      <li>
                        <a href="/vilal-ali/#resume" onClick={handleNavClick}>Education</a>
                      </li>
                      <li>
                        <a href="/vilal-ali/#service" onClick={handleNavClick}>Service</a>
                      </li>
                      <li>
                        <a href="/vilal-ali/#blog" onClick={handleNavClick}>Blog</a>
                      </li>
                      <li>
                        <a href="/vilal-ali/#contact" onClick={handleNavClick}>Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default Header;