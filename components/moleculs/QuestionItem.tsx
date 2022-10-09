interface questionItemProps {
  question: string;
  answer: string;
  imgSrc: string;
  topic: string;
}
export default function QuestionItem(props: questionItemProps) {
  const {
    question = 'question', answer = 'answer', imgSrc = '', topic = '',
  } = props;
  return (
    <div className="swiper-slide">
      <div className="testimonial-item">
        <p>{question}</p>

        <p>
          <i className="bx bxs-quote-alt-left quote-icon-left" />
          {answer}
          <i className="bx bxs-quote-alt-right quote-icon-right" />
        </p>
        <img src={imgSrc} alt="faq" className="testimonial-img" />
        <h3>{topic}</h3>
      </div>
    </div>
  );
}
