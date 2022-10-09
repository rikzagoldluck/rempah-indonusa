import ProductItem from '../moleculs/ProductItem';

export default function Products() {
  const ginger = ['Indonesia', 'Smooth and Clean', 'Yellow', '100, 200, 300 grams up', 'One', 'Common', '25Kgs Mesh Bag', '300-500 mt/month'];

  const turmeric = [
    'Grade A',
    'Colour : Bright Clean',
    'Other material',
    'Content : Max 0..%',
    'Not moldy',
    'Water Content : max 12%',
    'Already sifted',
    'Grade B',
    'Colour : Dark',
    'Other material',
    'Content : Max 0..%',
    'Not moldy',
    'Water Content : max 12%',
    'Already sifted',
  ];

  const cloves = ['Foreign Matter : 0%', 'Stems : 2.09%', 'Inferior Clove:  2.25%', 'Admixture  :  <1%', 'Moisture : 6%-12%'];

  const cardamom = [
    'Origin :Indonesia',
    'Style : Dried',
    'Color : Natural Grey',
    'Shape  : whole',
    'Moisture : 20 % Max',
    'Size : 5 mm – 8 mm',
    'Live insects : negative',
    'Clean Cardamom : 96.40 %',
    'Damage cardamom  : 4.62 %',
    'Foreign Matter : Nil',
    'Packing : 25 kgs or 50 kgs PP bag with plastic inside',
    'Supply ability  : 100 mt / month',
  ];

  return (
    <section id="products" className="events">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Products</h2>
          <p>Filled your need with our products</p>
        </div>

        <div className="events-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper-wrapper">
            <ProductItem lbl="Asam Kandis" imgSrc="/img/products/asam-kandis.png" />
            <ProductItem data={cardamom} lbl="Cardamom" imgSrc="/img/products/cardamom.png" />
            <ProductItem data={cloves} lbl="Clove" imgSrc="/img/products/clove.png" />
            <ProductItem lbl="Coriander" imgSrc="/img/products/coriander.png" />
            <ProductItem lbl="Nutmeg" imgSrc="/img/products/nutmeg.png" />
            <ProductItem data={turmeric} lbl="Turmeric" imgSrc="/img/products/turmeric.png" />
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    </section>
  );
}
