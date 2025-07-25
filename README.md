# Fakun - Веб-приложение для ракеток

**О проекте:**

"Fakun" — это веб-приложение, посвященное ракеткам для падела. Его основная цель — предоставить полную информацию о ракетках, их характеристиках, а также, возможно, предложить функционал для продажи или демонстрации продукции. Проект ориентирован на любителей и профессионалов падела, желающих узнать больше о снаряжении или приобрести его.

Это веб-приложение "Fakun", разработанное с использованием:

- **Vue 3** для модульной структуры и реактивного интерфейса.
- **TypeScript** для строгой типизации и улучшения качества кода.
- **Vite** как быстрый инструмент сборки.
- **Tailwind CSS** для утилитарно-ориентированной стилизации.

## Прогресс разработки

Ниже приведен краткий обзор текущего плана реализации и статуса задач. Более подробную информацию и полный план можно найти в файле [ToDo.md](ToDo.md).

## Хронологический план задач для проекта "Fakun"

### 1. Базовая подготовка (Статус: выполнено)

- 1.1. Создать структуру проекта (папки src/components, src/views, src/assets, public/assets/images)
- 1.2. Настроить Tailwind CSS (цвета, шрифты, кастомные значения из Figma)
- 1.3. Создать базовые компоненты Header и Footer
- 1.4. Настроить Vue Router (если потребуется)
- 1.5. Создать файл HomePage.vue и подключить секционные компоненты

### 2. Реализация секций главной страницы

#### 2.1. Секция HeroSection (Статус: выполнено)

- 2.1.1. Реализовать структуру секции (разметка, логотип, заголовок, описание)
- 2.1.2. Добавить видеофон (webm/mp4) с fallback на изображение для мобильных
- 2.1.3. Стилизовать секцию по макету (Tailwind, цвета, шрифты, отступы)
- 2.1.4. Добавить затемнение и размытый фон
- 2.1.5. Оптимизировать производительность (размер видео, preload)
- 2.1.6. Добавить анимацию появления контента
- 2.1.7. Проверить кроссбраузерность и fallback

#### 2.2. Секция "О нас" (AboutSection.vue) (Статус: выполнено)

- 2.2.1. Реализовать структуру секции (заголовок, текст, фото/иллюстрация)
- 2.2.2. Стилизовать по макету (цвета, шрифты, отступы)
- 2.2.3. Добавить анимацию появления

#### 2.3. Секция продуктов (FackunRackets.vue) (Статус: выполнено)

- 2.3.1. Реализовать структуру секции (заголовок, список ProductCard)
- 2.3.2. Создать компонент ProductCard.vue
- 2.3.3. Стилизовать карточки и секцию по макету
- 2.3.4. Добавить анимацию появления

#### 2.4. Секция о процессе производства (Production.vue) (Статус: выполнено)

- 2.4.1. Реализовать структуру секции (заголовок, список отзывов)
- 2.4.2. Создать компонент TestimonialCard.vue
- 2.4.3. Стилизовать карточки и секцию по макету
- 2.4.4. Добавить анимацию появления

#### 2.5. Секция с отзывами (ClientsReviewsSection.vue) (Статус: выполнено)

- 2.5.1. Реализовать структуру секции (заголовок, список отзывов)
- 2.5.2. Создать компонент TestimonialCard.vue
- 2.5.3. Стилизовать карточки и секцию по макету
- 2.5.4. Добавить анимацию появления

#### 2.6. Секция контактов (Footer.vue) (Статус: выполнено)

- 2.6.1. Реализовать структуру секции (заголовок, контактная форма/FAQ)
- 2.6.2. Стилизовать по макету
- 2.6.3. Добавить анимацию появления

#### 2.7. Модальное окно для отображения подробной информации о товаре (Статус: в работе)

- 2.7.1. Реализовать структуру окна
- 2.7.2. Стилизовать по макету
- 2.7.3. Добавить анимацию появления

#### 2.7. Модальное окно с формой обратной связи (Статус: в работе)

- 2.7.1. Реализовать структуру окна (заголовок, контактная форма/FAQ)
- 2.7.2. Стилизовать по макету
- 2.7.3. Добавить анимацию появления

### 3. Реализация адаптивности компонентов

- 3.1. Добавить мобильное меню и обеспечить адаптивность для Header
- 3.2. Обеспечить адаптивность для HeroSection
- 3.3. Обеспечить адаптивность для AboutSection
- 3.4. Обеспечить адаптивность для FackunRackets
- 3.5. Обеспечить адаптивность для Production
- 3.6. Обеспечить адаптивность для ClientsReviewsSection
- 3.7. Обеспечить адаптивность для Footer
- 3.8. Обеспечить адаптивность для модальных окон

### 4. Интеграция и оптимизация

- 4.1. Интегрировать все секции в HomePage.vue
- 4.2. Проверить адаптивность и кроссбраузерность всего сайта
- 4.3. Оптимизировать изображения и видео
- 4.4. Добавить тесты (юнит/интеграционные)
- 4.5. Обновить документацию
