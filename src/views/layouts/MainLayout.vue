<template>
  <a-layout class="layout">
    <a-layout-header>
      <Logo />
    </a-layout-header>
    <a-layout>
      <a-layout-sider>
        <Menu :path="path" />
      </a-layout-sider>
      <a-layout-content class="layout__content">
        <router-view />
      </a-layout-content>
    </a-layout>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>

<script>
import { Layout } from "ant-design-vue";
import Menu from "@/components/global/Menu";
import Logo from "@/components/global/Logo";

export default {
  name: "MainLayout",
  components: {
    "a-layout": Layout,
    "a-layout-header": Layout.Header,
    "a-layout-sider": Layout.Sider,
    "a-layout-content": Layout.Content,
    "a-layout-footer": Layout.Footer,
    Menu,
    Logo
  },
  props: {
    path: {
      required: true,
      type: String
    }
  }
};
</script>
