import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Feedbackpage.scss";
import Slider from "react-slick";

const Feedbackpage = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <main className="main">
      <section className="section__feedback">
        <div className="container">
          <div className="slider-main">
            <h2 className="title">отзывы моих клиентов</h2>
            <Slider {...settings}>
              <div className="slider">
                <div className="slider__title d-fl">
                  <h3>Полина</h3>
                </div>
                <a
                  href="/img/photo/reviews/feedback-1.jpg"
                  target="_blank"
                  className="slider__card"
                >
                  <img src="/img/photo/reviews/feedback-1-1.jpg" alt="Отзыв" />
                </a>
              </div>
              <div className="slider">
                <div className="slider__title d-fl">
                  <h3>Марина</h3>
                </div>
                <a
                  href="/img/photo/reviews/feedback-2.jpg"
                  target="_blank"
                  className="slider__card"
                >
                  <img src="/img/photo/reviews/feedback-2-1.jpg" alt="Отзыв" />
                </a>
              </div>

              <div className="slider">
                <div className="slider__title d-fl">
                  <h3>Тамара</h3>
                </div>
                <a
                  href="/img/photo/reviews/feedback-3.jpg"
                  target="_blank"
                  className="slider__card"
                >
                  <img src="/img/photo/reviews/feedback-3-1.jpg" alt="Отзыв" />
                </a>
              </div>

              {/* <div className="slider">
                <div className="slider__title d-fl">
                  <h3>Юлия</h3>
                </div>
                <div className="slider__card">
                  <video controls preload="metadata">
                    <source type="video/webm" src={propsVideo.videoWebm} />
                    <source type="video/webm" src="/video/1.mp4" />
                  </video>
                </div>
              </div> */}

              <div className="slider">
                <div className="slider__title d-fl">
                  <h3>Кристина</h3>
                </div>
                <a
                  href="/img/photo/reviews/feedback-4.jpg"
                  target="_blank"
                  className="slider__card"
                >
                  <img src="/img/photo/reviews/feedback-4-1.jpg" alt="Отзыв" />
                </a>
              </div>

              {/* <div className="slider">
                <div className="slider__title d-fl">
                  <h3>Евгения</h3>
                </div>
                <div className="slider__card">
                  <video controls preload="metadata">
                    <source type="video/webm" src={propsVideo.videoWebm} />
                    <source type="video/webm" src="/video/22.mp4" />
                  </video>
                </div>
              </div> */}

              <div className="slider">
                <div className="slider__title d-fl">
                  <h3>Мария</h3>
                </div>
                <a
                  href="/img/photo/reviews/feedback-5.jpg"
                  target="_blank"
                  className="slider__card"
                >
                  <img src="/img/photo/reviews/feedback-5-1.jpg" alt="Отзыв" />
                </a>
              </div>

              {/* <div className="slider">
                <div className="slider__title d-fl">
                  <h3>Борис</h3>
                </div>
                <div className="slider__card">
                  <video controls preload="metadata">
                    <source type="video/webm" src={propsVideo.videoWebm} />
                    <source type="video/webm" src="/video/33.mp4" />
                  </video>
                </div>
              </div> */}

              <div className="slider">
                <div className="slider__title d-fl">
                  <h3>Алексей</h3>
                </div>
                <a
                  href="/img/photo/reviews/feedback-6.jpg"
                  target="_blank"
                  className="slider__card"
                >
                  <img src="/img/photo/reviews/feedback-6-1.jpg" alt="Отзыв" />
                </a>
              </div>

              <div className="slider">
                <div className="slider__title d-fl">
                  <h3>Светлана</h3>
                </div>
                <a
                  href="/img/photo/reviews/feedback-7.jpg"
                  target="_blank"
                  className="slider__card"
                >
                  <img src="/img/photo/reviews/feedback-7-1.jpg" alt="Отзыв" />
                </a>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </main>
  );
};

export { Feedbackpage };
