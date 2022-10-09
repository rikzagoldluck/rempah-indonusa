import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
            <div className="about-img">
              <Image style={{ border: '4px solid rgba(255, 255, 255, 0.2)' }} src="/img/about.jpeg" alt="Hasil Panen" width="100%" height="75%" layout="responsive" />
            </div>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>RempahIndonusa is an trading company under CV. RempahIndonusa</h3>
            <p className="fst-italic ">
              Established in the year of 2021 We are engaging in spices product. We are cooperate closely with local experienced farmers and factory to produce high quality products and a competitive prices to benefit our good customer.
            </p>

            <p>In order to continue to earn their valued trust, we are also strive to implement stringent quality controls and ideal sustainability.</p>
            <div className="row mt-5">
              <div className="col-lg-6 mb-3">
                <h4 className="fw-bold">Our Vision</h4>
                <p>To be one of the best spice companies in Indonesia with the best quality spices and exports.</p>
              </div>
              <div className="col-lg-6">
                <h4 className="fw-bold">Our Mission</h4>
                <p>Offers various types of spices with the best quality and at the best prices in its class so that people get products with good quality and affordable prices.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
