import QuestionItem from '../moleculs/QuestionItem';

export default function FAQ() {
  return (
    <section id="faq" className="testimonials section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>FAQ</h2>
          <p>Most popular questions</p>
        </div>

        <div className="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper-wrapper">
            <QuestionItem question="What is the preferred method of payment? " answer="We only accept L/C (Letter of Credit) and T/T (Telegraphic Transfer)." imgSrc="/img/faq/payment.png" topic="Payment" />
            <QuestionItem
              question="What is the standard packaging for the product?"
              answer="Our standard packaging is PP bag. Any request for special packaging such as Jute bag and Carton can be discussed"
              imgSrc="/img/faq/package.png"
              topic="Packaging"
            />
            <QuestionItem
              question="Do you provide samples? Is it free?"
              answer="Yes, we can provide some free sample, but the shipping cost should be on the customers’ account. You can either pay us the shipping cost or arrange a courier to collect the samples."
              imgSrc="/img/faq/sample.png"
              topic="Sample"
            />
            <QuestionItem
              question="How to place order and make payment?"
              answer="You can send your Official Purchase Order and we will send you the Proforma Invoice with our bank details to be reviewed and confirmed. After that, you can then make payment accordingly."
              imgSrc="/img/faq/order.png"
              topic="Order"
            />
            <QuestionItem
              question="How do you treat quality complaint?"
              answer="All of our products are strictly tested by our Quality Control team. Any unqualified material will not be send to our customer. In case of any quality problem arisen which is investigated and confirmed to be caused by us, we will replace the goods or refund your payment immediately."
              imgSrc="/img/faq/complaint.png"
              topic="Complaint"
            />
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    </section>
  );
}
