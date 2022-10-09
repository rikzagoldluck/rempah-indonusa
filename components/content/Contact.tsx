export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </div>
      </div>

      <div data-aos="fade-up">
        <iframe
          title="frame"
          style={{ border: '0', width: '100%', height: '350px' }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15867.70331406197!2d106.57055932694844!3d-6.14066602886239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ff7fa38c31a9%3A0x17c9614e79338deb!2sPt.%20Natura%20Indoland!5e0!3m2!1sid!2sid!4v1665234339100!5m2!1sid!2sid"
          frameBorder="0"
          allowFullScreen
        />
      </div>

      <div className="container" data-aos="fade-up">
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt" />
                <h4>Location:</h4>
                {/* eslint-disable-next-line max-len */}
                <p>Jl. Karet Jaya I Utara No. 7 A-C Zona Industri Karet, Cadas - Sepatan Tangerang 15520 Banten - INDONESIA</p>
              </div>

              <div className="open-hours">
                <i className="bi bi-clock" />
                <h4>Open Hours:</h4>
                <p>
                  Monday-Saturday:
                  <br />
                  11:00 AM - 23:00 PM
                </p>
              </div>

              <div className="email">
                <i className="bi bi-envelope" />
                <h4>Email:</h4>
                <p>andrisyah484@gmail.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone" />
                <h4>Call:</h4>
                <p>+62 878-7256-1311</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">
            {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows={8} placeholder="Message" required />
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
