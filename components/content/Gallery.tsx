import GalleryItem from '../moleculs/GalleryItem';

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>Some photos from Our Team</p>
        </div>
      </div>

      <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-0">
          <GalleryItem imgSrc="/img/about.jpeg" />
          <GalleryItem imgSrc="/img/about.jpeg" />
          <GalleryItem imgSrc="/img/about.jpeg" />
          <GalleryItem imgSrc="/img/about.jpeg" />

          <GalleryItem imgSrc="/img/about.jpeg" />
          <GalleryItem imgSrc="/img/about.jpeg" />
          <GalleryItem imgSrc="/img/about.jpeg" />
          <GalleryItem imgSrc="/img/about.jpeg" />
        </div>
      </div>
    </section>
  );
}
