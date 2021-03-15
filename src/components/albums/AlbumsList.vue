<template>
  <a-list
    :loading="!albums"
    item-layout="horizontal"
    :data-source="albums || []"
  >
    <AlbumsListItem
      slot="renderItem"
      slot-scope="item, index"
      :album="item"
      :index="index"
    />
  </a-list>
</template>

<script>
import AlbumsListItem from "@/components/albums/AlbumsListItem";
import { List } from "ant-design-vue";
export default {
  name: "AlbumsList",
  props: {
    albums: {
      type: Array
    }
  },
  components: {
    "a-list": List,
    AlbumsListItem
  }
};
</script>
