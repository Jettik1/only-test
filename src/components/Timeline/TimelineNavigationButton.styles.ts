import { styled } from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center; /* Центрируем кнопки */
  width: 100%; /* Чтобы кнопки занимали всю ширину */

  @media (max-width: 768px) {
    position: static; /* Убираем абсолютное позиционирование */
  }
`;
