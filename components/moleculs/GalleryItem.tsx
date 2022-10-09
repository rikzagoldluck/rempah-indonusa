import Image from 'next/image';

interface galleryItemProps {
  imgSrc: string;
}
export default function GalleryItem(props: galleryItemProps) {
  const { imgSrc = '' } = props;
  return (
    <div className="col-lg-3 col-md-4">
      <div className="gallery-item">
        <a href={imgSrc} className="gallery-lightbox" data-gall="gallery-item">
          <Image width="100%" height="75%" layout="responsive" src={imgSrc} alt="gallery" className="img-fluid img-gallery" />
        </a>
      </div>
    </div>
  );
}
