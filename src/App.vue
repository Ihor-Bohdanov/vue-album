<template>
  <div id="app">
    <component :is="layout" :path="path">
      <router-view />
    </component>
  </div>
</template>

<script>
import MainLayout from "@/views/layouts/MainLayout";
import UndefinedLayout from "@/views/layouts/UndefinedLayout";
export default {
  name: "App",
  computed: {
    layout() {
      return (this.$route.meta.layout || "main") + "-layout";
    },
    path() {
      return this.$route.path;
    }
  },
  components: {
    MainLayout,
    UndefinedLayout
  },
  async beforeMount() {
    try {
      await this.$store.dispatch("fetchAlbums");
    } catch (e) {
      console.log(e);
    }
  }
};
</script>

<style lang="scss">
#app {
  height: 100%;
}
</style>
