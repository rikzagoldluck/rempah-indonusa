import Image from 'next/image';

interface ConsumerItemProps {
  imgSrc: string;
  name: string;
  subject: string;
  twitter: string;
  fb: string;
  ig: string;
  linkedin: string;
}
export default function ConsumerItem(props: ConsumerItemProps) {
  const { imgSrc = '', name = '', subject = '', twitter = '', fb = '', ig = '', linkedin = '' } = props;

  return (
    <div className="col-lg-4 col-md-6">
      <div className="member" data-aos="zoom-in" data-aos-delay="100">
        <Image width="100%" height="100%" layout="responsive" src={imgSrc} className="img-fluid" alt={name} />
        <div className="member-info">
          <div className="member-info-content">
            <h4>{name}</h4>
            <span>{subject}</span>
          </div>
          <div className="social">
            <a href={twitter}>
              <i className="bi bi-twitter" />
            </a>
            <a href={fb}>
              <i className="bi bi-facebook" />
            </a>
            <a href={ig}>
              <i className="bi bi-instagram" />
            </a>
            <a href={linkedin}>
              <i className="bi bi-linkedin" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
