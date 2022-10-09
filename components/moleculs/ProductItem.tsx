import Image from 'next/image';
import { useEffect, useState } from 'react';

interface ProductItemProps {
  lbl: string;
  desc: string;
  imgSrc: string;
  data: Array;
}

export default function ProductItem(props: ProductItemProps) {
  const { data = [], lbl, desc = 'Rempah terbaik', imgSrc = '/img/products/asam-kandis.png' } = props;

  const [products, setProducts] = useState<[]>([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <div className="swiper-slide">
      <div className="row event-item">
        <div className="col-lg-6">
          <Image width="100%" height="75%" layout="responsive" src={imgSrc} className="img-fluid" alt={lbl} />
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0 content">
          <h3>{lbl}</h3>
          <div className="price">
            <p>
              <span>{desc}</span>
            </p>
          </div>
          <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <ul className="row row-cols-2">
            {products.map((product) => (
              <li className="col align-items-center">
                <i className="bi bi-check-circle" />
                {product}
              </li>
            ))}
          </ul>
          <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        </div>
      </div>
    </div>
  );
}
