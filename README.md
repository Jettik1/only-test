Установка

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/Jettik1/only-test.git
   ```

2. Установите зависимости:
   npm install

3. Запуск
   Чтобы запустить проект:
   npm run start

[ссылка на копию макета](https://www.figma.com/design/DliD6gKZfJeybJjym9D1Pe/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BE%D1%82-Only?node-id=0-1&t=1LYzCNqRlBySNWZi-1)

Требования
Описание

Реализовать следующий блок в соответствии с макетом

Блок содержит информацию о временных отрезках, в каждом из которых существует несколько событий.
При переключении временных отрезков изменяются соответствующие числа и под ними показывается новый слайдер, который содержит подробную информацию по ключевым событиям на активном временном отрезке.

Возможно существование от 2 до 6 временных отрезков. Все интерактивные точки на окружности располагаются на одинаковом расстоянии друг от друга

Весь блок стоит сделать независимым от другой логики на странице.
Например, если добавить на страницу ещё один такой же блок, верстка и логика работы этих блоков не будет нарушена

[Демонстрация работы блока - пример с максимальным количеством временных отрезков](https://disk.yandex.ru/d/x4PW1nzH_qrIYQ)

Все существующие в макете линии — это не разметочная сетка, а часть верстки

Требования к реализации

Необходимо использовать Typescript
Можно использовать React.js или нативный JS на Ваш выбор
В случае использования нативного JS, можно воспользоваться любым удобным для Вас HTML-шаблонизатором или обычным HTML
Стилизация с использованием SASS/SCSS (В случае работы с React.js, возможно использование styled-components)
Сборка проекта с помощью Webpack
Для работы со слайдерами необходимо использовать библиотеку Swiper
Для реализации js-анимаций можно использовать библиотеку gsap

Не использовать JQuery
Не использовать Bootstrap, Tailwind и т.п.
Не использовать библиотеки с готовыми UI-компонентами такие, как MaterialUI, AntDesign и т.п.

Выполненное задание необходимо прислать в виде ссылки на git-репозиторий. Актуальная версия кода должна находится в основной ветке.
Файл README.md должен содержать инструкцию по запуску проекта

https://disk.yandex.ru/d/x4PW1nzH_qrIYQ
