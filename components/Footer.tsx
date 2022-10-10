export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <h3>IndoNusa Spices & Coco</h3>
                <p>
                  Jl. Karet Jaya I Utara No. 7 A-C Zona Industri Karet,
                  <br />
                  Cadas - Sepatan Tangerang <br />
                  Banten - INDONESIA 15520
                  <br />
                  <br />
                  <strong>Phone:</strong> +62 878-7256-1311
                  <br />
                  <strong>Email:</strong> andrisyah484@gmail.com
                  <br />
                </p>
                <div className="social-links mt-3">
                  <a href="/#" className="twitter">
                    <i className="bx bxl-twitter" />
                  </a>
                  <a href="/#" className="facebook">
                    <i className="bx bxl-facebook" />
                  </a>
                  <a href="/#" className="instagram">
                    <i className="bx bxl-instagram" />
                  </a>
                  {/* <a href="/#" className="google-plus">
                    <i className="bx bxl-skype" />
                  </a> */}
                  <a href="/#" className="linkedin">
                    <i className="bx bxl-linkedin" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#hero">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#about">About us</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#products">Products</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#partner">Partners</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#faq">Frequently Asked Questions</a>
                </li>
              </ul>
            </div>

            {/* <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="/#">Web Design</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="/#">Web Development</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="/#">Product Management</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="/#">Marketing</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="/#">Graphic Design</a>
                </li>
              </ul>
            </div> */}

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>find out the latest news and product in Rempah IndoNusa.</p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright{' '}
          <strong>
            <span>Rempah IndoNusa</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          {/* <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/Rempahly-restaurant-template/ --> */}
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
  );
}
