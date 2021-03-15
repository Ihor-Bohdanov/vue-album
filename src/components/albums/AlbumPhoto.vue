<template>
  <div class="album-photo">
    <img class="album-photo__image" :src="src" :alt="alt" />
  </div>
</template>

<script>
export default {
  name: "AlbumPhoto",
  props: ["src", "alt"]
};
</script>
