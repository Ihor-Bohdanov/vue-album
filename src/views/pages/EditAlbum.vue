<template>
  <div class="page">
    <h1 class="page__title">Edit Album</h1>
    <AlbumEditor @submit="updateAlbum" :albumData="album" />
  </div>
</template>

<script>
import AlbumEditor from "@/components/albums/AlbumEditor";
import message from "ant-design-vue/lib/message";

export default {
  name: "EditAlbum",
  components: {
    AlbumEditor
  },
  props: ["id"],
  computed: {
    album() {
      return this.$store.state.albumData;
    }
  },
  methods: {
    async updateAlbum(data) {
      try {
        await this.$store.dispatch("editAlbum", { ...data });
        message.success("Album was updated");
        this.$router.push("/albums");
      } catch (error) {
        message.error("Can not update album");
      }
    }
  },
  mounted() {
    this.$store.dispatch("fetchAlbumData", { id: this.id });
  },
  beforeDestroy() {
    this.$store.dispatch("clearAlbumData");
  }
};
</script>
