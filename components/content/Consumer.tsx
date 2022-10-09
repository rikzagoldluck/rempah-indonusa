import ConsumerItem from '../moleculs/ConsumerItem';

export default function Consumer() {
  return (
    <section id="partner" className="chefs">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Partners</h2>
          <p>Our Costumer</p>
        </div>

        <div className="row">
          <ConsumerItem imgSrc="/img/about.jpeg" subject="Restaurant" name="PT.Healthy Food" />
          <ConsumerItem imgSrc="/img/about.jpeg" subject="Restaurant" name="PT.Healthy Food" />
          <ConsumerItem imgSrc="/img/about.jpeg" subject="Restaurant" name="PT.Healthy Food" />
        </div>
      </div>
    </section>
  );
}
