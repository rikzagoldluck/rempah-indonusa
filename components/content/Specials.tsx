import Tab from '../moleculs/Tab';
import TabPane from '../moleculs/TabPane';

export default function Specials() {
  return (
    <section id="specials" className="specials">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Specials</h2>
          <p>Check Our Specials</p>
        </div>
        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-3">
            <ul className="nav nav-tabs flex-column">
              <Tab lbl="Asam Kandis" to="#tab-1" classExt="active show" />
              <Tab lbl="Cardamom" to="#tab-2" />
              <Tab lbl="Clove" to="#tab-3" />
              <Tab lbl="Coriander" to="#tab-4" />
            </ul>
          </div>
          <div className="col-lg-9 mt-4 mt-lg-0">
            <div className="tab-content">
              <TabPane id="tab-1" lbl="Asam Kandis" classExt="active show" imgSrc="/img/products/asam-kandis.png" />
              <TabPane id="tab-2" lbl="Cardamom" imgSrc="/img/products/cardamom.png" />
              <TabPane id="tab-3" lbl="Clove" imgSrc="/img/products/clove.png" />
              <TabPane id="tab-4" lbl="Coriander" imgSrc="/img/products/coriander.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
