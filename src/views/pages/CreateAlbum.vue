<template>
  <div class="page">
    <h1 class="page__title">Create new album</h1>
    <AlbumEditor @submit="createAlbum" />
  </div>
</template>

<script>
import message from "ant-design-vue/lib/message";
import AlbumEditor from "@/components/albums/AlbumEditor";

export default {
  name: "CreateAlbum",
  components: {
    AlbumEditor
  },
  methods: {
    async createAlbum(data) {
      try {
        await this.$store.dispatch("createAlbum", { ...data });
        message.success("Album was created");
        this.$router.push("/albums");
      } catch (error) {
        message.error("Can not create album");
      }
    }
  }
};
</script>
