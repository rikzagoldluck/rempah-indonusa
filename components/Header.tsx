export default function Header() {
  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
        <h1 className="logo me-auto me-lg-0">
          <a href="/#hero">Rempah IndoNusa</a>
        </h1>
        {/* <!-- Uncomment below if you prefer to use an image logo --> */}
        <a href="/#hero" className="logo me-auto me-lg-0">
          {/* <img  /> */}
          {/* <Image src="/img1/logo-min.png" alt="" width={64} height={64} className="img-fluid" /> */}
        </a>

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#specials">
                Specials
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#products">
                Products
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#partner">
                Partners
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#gallery">
                Gallery
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#faq">
                FAQ
              </a>
            </li>
            {/* <li className="dropdown">
              <a href="/#">
                <span>Drop Down</span> <i className="bi bi-chevron-down" />
              </a>
              <ul>
                <li>
                  <a href="/#">Drop Down 1</a>
                </li>
                <li className="dropdown">
                  <a href="/#">
                    <span>Deep Drop Down</span> <i className="bi bi-chevron-right" />
                  </a>
                  <ul>
                    <li>
                      <a href="/#">Deep Drop Down 1</a>
                    </li>
                    <li>
                      <a href="/#">Deep Drop Down 2</a>
                    </li>
                    <li>
                      <a href="/#">Deep Drop Down 3</a>
                    </li>
                    <li>
                      <a href="/#">Deep Drop Down 4</a>
                    </li>
                    <li>
                      <a href="/#">Deep Drop Down 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/#">Drop Down 2</a>
                </li>
                <li>
                  <a href="/#">Drop Down 3</a>
                </li>
                <li>
                  <a href="/#">Drop Down 4</a>
                </li>
              </ul>
            </li> */}
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
        {/* <!-- .navbar --> */}
        <a href="https://wa.me/+6287872561311" className="book-a-table-btn d-none d-lg-flex">
          Order
        </a>
      </div>
    </header>
  );
}
