import "./header.css";

function Header() {
  return (
    <>
      <div className="header-backgroung">
        <div className="header-flex">
          <div className="logo">
            <h1>Eatly</h1>
          </div>
          <div className="navbar">
            <nav>
              <ul>
                <li>
                  <a href="programs">Programs</a>
                </li>
                <li>
                  <a href="services">Services</a>
                </li>
                <li>
                  <a href="news">News</a>
                </li>
                <li>
                  <a href="about us">About Us</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-btn">
            <button>Let's Talk</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
