export default function Hero() {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container position-relative text-center text-lg-start" data-aos="zoom-in">
        <div className="row">
          <div className="col-lg-8">
            <h1>
              Welcome to <br />
              <span> IndoNusa Spices & Coco</span>
            </h1>
            {/* eslint-disable-next-line max-len */}
            <h2>The best choice for your business, let&apos;s supply our products to meet your needs</h2>

            <div className="btns">
              <a href="#products" className="btn-menu animated fadeInUp scrollto">
                Our Product
              </a>
              <a href="https://wa.me/+6287872561311" target="_blank" className="btn-book animated fadeInUp" rel="noreferrer">
                Order Now
              </a>
            </div>
          </div>
          <div className="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
            <a href="https://www.youtube.com/watch?v=GlrxcuEDyF8" className="glightbox play-btn">
              .
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
