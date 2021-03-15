<template>
  <div class="page">
    <h1 class="page__title">Home</h1>
    <ol>
      <li>
        Реализовать небольшое CRUD Web приложение используя фреймворк на выбор
        (React/Angular/Vue)
      </li>
      <li>
        В качестве бэкэнда использовать сервис
        http://jsonplaceholder.typicode.com/
      </li>
      <li>
        Вывести список альбомов используя API GET
        http://jsonplaceholder.typicode.com/albums
      </li>
      <li>
        Вывести список фото для каждого альбома, используя роутинг и API GET
        http://jsonplaceholder.typicode.com/albums/1/photos где 1 - id альбома
      </li>
      <li>
        Реазизовать добавление/изменение/удаление альбомов, используя API
        POST/PUT/DELETE http://jsonplaceholder.typicode.com/albums/1
      </li>
      <li>Стилизация приложения будет плюсом</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
