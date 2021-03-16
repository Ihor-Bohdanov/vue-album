<template>
  <div>
    <a-menu theme="dark" mode="inline" :selectedKeys="selectdItem">
      <a-menu-item key="/">
        <router-link to="/">Home</router-link>
      </a-menu-item>
      <a-menu-item key="/albums">
        <router-link to="/albums">Albums</router-link>
      </a-menu-item>
      <a-menu-item key="/create-album">
        <router-link to="/create-album">
          New album <a-icon type="plus-square" />
        </router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
import { Icon, Menu } from "ant-design-vue";
export default {
  name: "Menu",
  data() {
    return {};
  },
  components: {
    "a-menu": Menu,
    "a-menu-item": Menu.Item,
    "a-icon": Icon
  },
  props: {
    path: {
      required: true,
      type: String
    }
  },
  computed: {
    selectdItem() {
      return Array(this.path);
    }
  }
};
</script>
