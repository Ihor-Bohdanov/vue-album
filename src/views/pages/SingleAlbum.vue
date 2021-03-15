<template>
  <div class="page">
    <a-spin size="large" v-if="!album || !albumData" />
    <template v-else>
      <h1 class="page__title">{{ albumData.title }}</h1>
      <a-row :gutter="[16, 16]">
        <a-col :span="6" v-for="photo of album" :key="photo.id">
          <AlbumPhoto :src="photo.thumbnailUrl" :alt="photo.title" />
        </a-col>
      </a-row>
    </template>
  </div>
</template>

<script>
import AlbumPhoto from "@/components/albums/AlbumPhoto";

import { Col, Row, Spin } from "ant-design-vue";
export default {
  name: "SingleAlbum",
  props: ["id"],
  computed: {
    album() {
      return this.$store.state.album;
    },
    albumData() {
      return this.$store.state.albumData;
    }
  },
  components: {
    "a-row": Row,
    "a-col": Col,
    "a-spin": Spin,
    AlbumPhoto
  },
  async mounted() {
    try {
      await this.$store.dispatch("fetchAlbumData", { id: this.id });
      await this.$store.dispatch("fetchAlbumPhotos", { id: this.id });
    } catch (error) {
      console.log("Error on single album", error)
    }
  },
  beforeDestroy() {
    this.$store.dispatch("clearAlbum");
    this.$store.dispatch("clearAlbumData");
  }
};
</script>
