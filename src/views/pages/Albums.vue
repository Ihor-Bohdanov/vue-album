<template>
  <div class="page">
    <h1 class="page__title">Albums</h1>
    <AlbumsList :albums="albums" />
  </div>
</template>

<script>
import AlbumsList from "@/components/albums/AlbumsList";
export default {
  name: "Albums",
  computed: {
    albums() {
      return this.$store.state.albums;
    }
  },
  components: {
    AlbumsList
  }
};
</script>
