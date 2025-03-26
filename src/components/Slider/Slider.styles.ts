import { styled } from "styled-components";
import { SwiperSlide } from "swiper/react";

export const SliderWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    height: 114px;
  }
`;

export const SwiperContainer = styled.div<{ $isVisible: boolean }>`
  width: 90%;
  margin: 0 auto;
  padding: 0 20px;

  transition: opacity 0.3s;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};

  height: auto;

  @media (max-width: 768px) {
    width: 100%;
    overflow: visible;
  }
`;

export const SliderNavigationButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "flipped",
})<{
  disabled?: boolean;
  flipped?: boolean;
}>`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 50%;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0 : 1)};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  transition: opacity 0.3s ease;
  fill: #ffffff;

  img {
    width: 10px;
    height: 20px;
    transform: ${(props) => (props.flipped ? "scaleX(-1)" : "none")};
  }

  /* рассеянная тень */
  box-shadow: 0px 0px 15px 0px #3877ee1a;

  /* тень чуть сильнее при наведении */
  &:hover {
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.35);
  }

  /* Для активной кнопки делаем тень мягче */
  &:active {
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  width: auto;
  min-width: 320px;
  max-width: 400px;
  min-height: 150px;
  flex-shrink: 0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: auto !important;
    min-width: 150px;
    max-width: none;
    height: 90px !important;
    flex-shrink: 0;
    box-sizing: border-box;
    padding: 0;
    overflow: visible;
    width: calc(100% - 40px) !important;
    min-height: 150px;
    flex-shrink: 0;
    box-sizing: border-box;
    /* Отступ для следующего слайда */
    margin-left: -20px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-end; /* Выравнивание заголовка по нижней границе */

  height: auto;

  @media (max-width: 768px) {
    min-height: 25px; /* Фиксированная высота для выравнивания */
    margin-bottom: 4px; /* Отступ между заголовком и текстом */
  }
`;

export const SliderTitle = styled.h4`
  font-family: Bebas Neue;
  font-weight: 400;
  font-size: 25px;
  line-height: 120%;
  letter-spacing: 0%;
  text-transform: uppercase;
  color: #3877ee;

  max-width: 100%; /* Ограничиваем ширину */
  white-space: nowrap; /* Запрещаем перенос */
  overflow: hidden; /* Обрезаем длинный текст */
  text-overflow: ellipsis; /* Добавляем "..." */
`;

export const SliderText = styled.p`
  font-family: PT Sans;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0%;
  color: #42567a;

  width: 100%; /* Ограничиваем ширину */

  overflow: visible; /* Убираем ограничение, чтобы текст не обрезался */
  display: flex;

  word-wrap: break-word; /* Добавляем перенос слов */

  height: auto; /* Текст занимает столько места, сколько нужно */
  overflow: visible; /* Текст не обрезается */
  display: block; /* Убираем ограничения на строки */
  -webkit-line-clamp: unset;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const SlideContent = styled.div<{ $isActive: boolean }>`
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.4)};
  transition: opacity 0.3s ease;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px;
  height: auto;

  @media (min-width: 769px) {
    opacity: 1;
    height: auto;
  }
`;
