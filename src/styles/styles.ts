import styled from "styled-components";

const smallRadius = "35";

export const SpecialText = styled.p`
  font-family: "Bebas Neue", sans-serif;
`;

export const MainContainer = styled.main`
  position: relative;

  margin: auto 320px;
  padding-top: 110px;
  border-left: 1px solid rgba(66, 86, 122, 0.1);
  border-right: 1px solid rgba(66, 86, 122, 0.1);

  max-width: 1440px;
  min-height: 1080px;

  /* Вертикальная линия */
  &::after {
    content: "";
    position: absolute;
    left: calc(50% - 0.5px); /* Центрируем по X */
    top: 0;
    width: 1px;
    height: 100%; /* Линия во всю высоту */
    background-color: #42567a;
    opacity: 0.1;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-top: 59px;
    margin: 0 auto;
    &::after {
      opacity: 0;
    }
  }
`;

export const TimelineWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "centerX" && prop !== "centerY",
})<{ centerX?: number; centerY?: number }>`
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  min-height: clamp(600px, 80vh, 1000px);
  width: 100%;

  overflow: hidden;
  z-index: 3;

  /* Горизонтальная линия */
  &::before {
    content: "";
    position: absolute;
    top: calc(50% - 0.5px); /* Центрируем по Y */
    left: 0;
    width: 100%; /* Линия во всю ширину */
    height: 1px;
    background-color: #42567a;
    opacity: 0.1;
  }

  @media (max-width: 768px) {
    height: 568px;
    width: 90%;

    &::before {
      display: none;
    }

    &::after {
      display: none;
    }
  }
`;

export const CenteredSVG = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); /* Центрируем по обоим осям */
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 536px;
  height: 530px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SVGCircle = styled.svg`
  width: 536px;
  height: 530px;
`;

export const TimelinePointLabel = styled.div`
  position: absolute;
  left: calc(50% + 170px); /* Смещаем немного вправо от центра */
  top: calc(50% - 210px); /* Смещаем выше */
  transform: translateY(-50%);
  white-space: nowrap;
  font-family: PT Sans;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0%;
  opacity: 0;
  color: #42567a;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: auto; /* Пододвигаем вниз */
  padding-top: 50%; /* Подстраивай под макет */

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    padding: 0;
  }
`;

export const Title = styled.h2`
  position: absolute;
  width: 6.5em;
  z-index: 2;
  top: 60px; /* Отступ сверху 60 потому что 110 у MainContainer */
  left: 78px; /* Отступ слева */
  font-family: PT Sans;
  font-weight: 700;
  font-size: 56px;
  line-height: 120%;
  letter-spacing: 0%;
  color: #42567a;
  margin-bottom: 20px;

  &::before {
    content: "";
    position: absolute;
    left: -78px;
    top: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, #5a54f1, #f154a2);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    position: absolute;
    width: 123px;
    height: 48px;
    top: 59px;
    left: 20px;
    font-family: PT Sans;
    font-weight: 700;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: 0%;

    &::before {
      content: none;
    }
  }
`;

export const YearsContainer = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 49%;
  transform: translate(-50%, -50%); /* Центрирование по центру окружности */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 70px;
  font-family: PT Sans;
  font-weight: 700;
  font-size: 200px;
  line-height: 160px;
  letter-spacing: -2%;
  text-align: center;

  & span:first-child {
    color: #5a54f1;
  }

  & span:last-child {
    color: #f154a2;
  }

  @media (max-width: 768px) {
    margin: 200px 0 100px 0;
    position: static;
    transform: none;
    gap: 20px;
    width: 273px;
    height: 73px;
    top: 163px;
    left: 20px;
    font-size: 56px;
    line-height: 100%;
  }
`;

export const CounterContainer = styled.div`
  width: 88%;
  padding-bottom: 5vh;
  margin-top: 40px;

  @media (max-width: 768px) {
    position: absolute;
    padding-bottom: 0px;
    bottom: 0px;
    left: 20px;
    height: 49.66672134399414px;
  }
`;

export const CounterWrapper = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;

  margin-left: ${smallRadius}px;
  margin-bottom: 0px;

  width: 120px;
  height: 88px;

  font-family: PT Sans;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
  padding-bottom: 16px;

  color: #42567a;

  @media (max-width: 768px) {
    width: 58.33261489868164px;
    padding-bottom: 0px;
    gap: 10px;
    bottom: 0;
    left: 0;
    margin: 0;
  }
`;

export const Separator = styled.div`
  width: 90%;
  height: 1px;
  background-color: #ccc;
  margin: 10px 0;
  display: block;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const InvisibleLine = styled.div`
  display: none;
  @media (max-width: 768px) {
    position: absolute;
    bottom: 10px; /* Располагаем линию внизу */
    left: 50%;
    width: 90vw; /* Делаем её шире экрана */
    height: 2px;
    background-color: transparent; /* Невидимая линия */
    display: flex;
    justify-content: space-between; /* Распределяем точки */
  }
`;
