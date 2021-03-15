<template>
  <a-list-item>
    <router-link :to="editLink" slot="actions">Edit</router-link>
    <a-button
      slot="actions"
      type="danger"
      :loading="loading"
      icon="close"
      @click.prevent="deleteAlbum"
    >
      Delete
    </a-button>
    <a-list-item-meta>
      <a-avatar slot="avatar" shape="square" size="large">
        {{ index + 1 }}
      </a-avatar>
      <router-link slot="title" :to="viewLink">
        {{ album.title }}
      </router-link>
      <a href="https://www.antdv.com/">{{ album.title }}</a>
    </a-list-item-meta>
  </a-list-item>
</template>

<script>
import { Avatar, Button, List } from "ant-design-vue";
import message from "ant-design-vue/lib/message";

export default {
  name: "AlbumsListItem",
  data() {
    return {
      loading: false
    };
  },
  props: {
    album: {
      required: true,
      type: Object
    },
    index: {
      required: true,
      type: Number
    }
  },
  computed: {
    viewLink() {
      return `albums/${this.album.id}`;
    },
    editLink() {
      return `edit-album/${this.album.id}`;
    }
  },
  methods: {
    async deleteAlbum() {
      try {
        this.loading = true;
        await this.$store.dispatch("deleteAlbum", { id: this.album.id });
        message.success("Album was deleted");
        this.loading = false;
      } catch (error) {
        message.error("Can not delete album");
        this.loading = false;
      }
    }
  },
  components: {
    "a-list-item": List.Item,
    "a-list-item-meta": List.Item.Meta,
    "a-avatar": Avatar,
    "a-button": Button
  }
};
</script>
