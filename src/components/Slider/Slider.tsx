import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { TimeSegment } from "@/lib/types";
import { useEffect, useRef, useState } from "react";
import SwiperCore from "swiper";
import {
  SliderText,
  SliderTitle,
  SliderWrapper,
  SwiperContainer,
  SliderNavigationButton,
  StyledSwiperSlide,
  SlideContent,
  TitleWrapper,
} from "./Slider.styles";
import prevIcon from "@/assets/SliderButtonIcon.svg";
import nextIcon from "@/assets/SliderButtonIcon.svg";

interface SliderProps {
  segments: TimeSegment[];
  activeSegment: number;
}

const Slider: React.FC<SliderProps> = ({ segments, activeSegment }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState(
    segments[activeSegment].events
  );
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<SwiperCore | null>(null);

  useEffect(() => {
    setIsVisible(false); // Плавное исчезновение текста и слайдов
    setTimeout(() => {
      setCurrentEvents(segments[activeSegment].events); // Обновляем слайды
      setIsVisible(true); // Плавное появление текста и слайдов
    }, 300);
  }, [activeSegment]);

  // Обновляем состояние кнопок
  const updateButtons = () => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
    }
  };

  return (
    <SliderWrapper>
      <SliderNavigationButton
        onClick={() => swiperRef.current?.slidePrev()}
        disabled={isBeginning}
        flipped>
        <img src={prevIcon} alt="Prev" />
      </SliderNavigationButton>

      <SwiperContainer $isVisible={isVisible}>
        <Swiper
          spaceBetween={8}
          allowTouchMove={true}
          slidesOffsetBefore={20} // Отступ перед первым слайдом
          slidesOffsetAfter={20} // Отступ после последнего слайда
          breakpoints={{
            0: {
              spaceBetween: 20,
              slidesPerView: "auto", // изменено на auto для мобильных устройств
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 8,
            },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            updateButtons();
          }}
          onSlideChange={updateButtons}>
          {currentEvents.map((event, idx) => (
            <StyledSwiperSlide key={idx}>
              {({ isActive }) => (
                <SlideContent $isActive={isActive}>
                  <TitleWrapper>
                    <SliderTitle>{event.title}</SliderTitle>
                  </TitleWrapper>
                  <SliderText>{event.description}</SliderText>
                </SlideContent>
              )}
            </StyledSwiperSlide>
          ))}
        </Swiper>
      </SwiperContainer>

      <SliderNavigationButton
        onClick={() => swiperRef.current?.slideNext()}
        disabled={isEnd}>
        <img src={nextIcon} alt="Next" />
      </SliderNavigationButton>
    </SliderWrapper>
  );
};

export default Slider;
