import { Navigation, Scrollbar} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Slider.css";

const Sliderr = () => {
  return (
    <div>
      <section className="slider">
        <div className="slider__container">
          <div className="slider_inf">
            <h2 className="title">Past guests.</h2>
            <p className="text">Don't take our word for it! Have a look at what our previous guests say about their stay at the Guest House.</p>
          </div>
          <Swiper
            className={"swiperr"}
            modules={[Navigation, Scrollbar]}
            loop={true}
            spaceBetween={25}
            slidesPerView={1}
            navigation
            breakpoints={{
              // when window width is >= 640px
              470: {
                slidesPerView: 2,
              },
              // when window width is >= 768px
              
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className={'SwiperSlide'}>
              <div className="simple-rating">
                <div className="simple-rating__items">
                  <input id='simple-rating__5' className='simple-rating__item' name='simple-rating' type="radio" value="5"/>
                  <label htmlFor="simple-rating__5" className='simple-rating__label'></label>
                  <input id='simple-rating__4' className='simple-rating__item' name='simple-rating' type="radio" value="4"/>
                  <label htmlFor="simple-rating__4" className='simple-rating__label'></label>
                  <input id='simple-rating__3' className='simple-rating__item' name='simple-rating' type="radio" value="3"/>
                  <label htmlFor="simple-rating__3" className='simple-rating__label'></label>
                  <input id='simple-rating__2' className='simple-rating__item' name='simple-rating' type="radio" value="2"/>
                  <label htmlFor="simple-rating__2" className='simple-rating__label'></label>
                  <input id='simple-rating__1' className='simple-rating__item' name='simple-rating' type="radio" value="1"/>
                  <label htmlFor="simple-rating__1" className='simple-rating__label'></label>
                </div>
              </div>
              <h2 className="title">We had an amazing stay at the Guest House!</h2>
              <div className="SwiperSlide_inf">
                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                <span className="text">Nate Davidsson</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className={'SwiperSlide'}>
            <div className="simple-rating">
                <div className="simple-rating__items">
                  <input id='simple-rating__5' className='simple-rating__item' name='simple-rating' type="radio" value="5"/>
                  <label htmlFor="simple-rating__5" className='simple-rating__label'></label>
                  <input id='simple-rating__4' className='simple-rating__item' name='simple-rating' type="radio" value="4"/>
                  <label htmlFor="simple-rating__4" className='simple-rating__label'></label>
                  <input id='simple-rating__3' className='simple-rating__item' name='simple-rating' type="radio" value="3"/>
                  <label htmlFor="simple-rating__3" className='simple-rating__label'></label>
                  <input id='simple-rating__2' className='simple-rating__item' name='simple-rating' type="radio" value="2"/>
                  <label htmlFor="simple-rating__2" className='simple-rating__label'></label>
                  <input id='simple-rating__1' className='simple-rating__item' name='simple-rating' type="radio" value="1"/>
                  <label htmlFor="simple-rating__1" className='simple-rating__label'></label>
                </div>
              </div>
              <h2 className="title">Beautiful little hideaway.</h2>
              <div className="SwiperSlide_inf">
                <p className="text">Lorem ipsum dolor sit amet, consectetur  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                <span className="text">Laura Paulie</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className={'SwiperSlide'}>
            <div className="simple-rating">
                <div className="simple-rating__items">
                  <input id='simple-rating__5' className='simple-rating__item' name='simple-rating' type="radio" value="5"/>
                  <label htmlFor="simple-rating__5" className='simple-rating__label'></label>
                  <input id='simple-rating__4' className='simple-rating__item' name='simple-rating' type="radio" value="4"/>
                  <label htmlFor="simple-rating__4" className='simple-rating__label'></label>
                  <input id='simple-rating__3' className='simple-rating__item' name='simple-rating' type="radio" value="3"/>
                  <label htmlFor="simple-rating__3" className='simple-rating__label'></label>
                  <input id='simple-rating__2' className='simple-rating__item' name='simple-rating' type="radio" value="2"/>
                  <label htmlFor="simple-rating__2" className='simple-rating__label'></label>
                  <input id='simple-rating__1' className='simple-rating__item' name='simple-rating' type="radio" value="1"/>
                  <label htmlFor="simple-rating__1" className='simple-rating__label'></label>
                </div>
              </div>
              <h2 className="title">Best vacation ever!</h2>
              <div className="SwiperSlide_inf">
                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                <span className="text">Laura Paulie</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Sliderr;
