import Image from 'next/image';

interface TabPaneProps {
  id: string;
  lbl: string;
  desc: string;
  details: string;
  classExt?: string;
  imgSrc?: string;
  imgAlt?: string;
  imgWidth?: number;
  imgHeight?: number;
}
export default function TabPane(props: TabPaneProps) {
  const { id = 'tab-pane', lbl = 'tab-pane', classExt = '', imgSrc = '/img/products/asam-kandis.png', imgWidth = 300, imgHeight = 300, desc = 'description', details = 'details' } = props;
  return (
    <div className={`tab-pane ${classExt}`} id={id}>
      <div className="row">
        <div className="col-lg-8 details order-2 order-lg-1">
          <h3>{lbl}</h3>
          <p className="fst-italic">{desc}</p>
          <p>{details}</p>
        </div>
        <div className="col-lg-4 text-center order-1 order-lg-2">
          <Image width={imgWidth} height={imgHeight} src={imgSrc} alt={lbl} className="img-fluid bg-light rounded shadow" />
        </div>
      </div>
    </div>
  );
}
