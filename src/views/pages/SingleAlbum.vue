<template>
  <div class="page">
    <a-spin size="large" v-if="loading" />
    <template v-else-if="!loading && album && albumData">
      <h1 class="page__title">{{ albumData.title }}</h1>
      <a-row :gutter="[16, 16]">
        <a-col :span="6" v-for="photo of album" :key="photo.id">
          <AlbumPhoto :src="photo.thumbnailUrl" :alt="photo.title" />
        </a-col>
      </a-row>
    </template>
    <a-empty v-else />
  </div>
</template>

<script>
import AlbumPhoto from "@/components/albums/AlbumPhoto";
import message from "ant-design-vue/lib/message";

import { Col, Row, Spin, Empty } from "ant-design-vue";
export default {
  data() {
    return {
      loading: true
    };
  },
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
    "a-empty": Empty,
    AlbumPhoto
  },
  async mounted() {
    try {
      await this.$store.dispatch("fetchAlbumData", { id: this.id });
      await this.$store.dispatch("fetchAlbumPhotos", { id: this.id });
    } catch (error) {
      message.error("Can not fetch album");
    }
    this.loading = false;
  },
  beforeDestroy() {
    this.$store.dispatch("clearAlbum");
    this.$store.dispatch("clearAlbumData");
  }
};
</script>
