<template>
  <a-form-model
    layout="vertical"
    :wrapper-col="{ span: 14 }"
    @submit.prevent="onFormSubmit"
  >
    <a-form-model-item label="ID" v-if="form.id">
      <a-input-number v-model="form.id" disabled />
    </a-form-model-item>
    <a-form-model-item label="Title">
      <a-input v-model="form.title" />
    </a-form-model-item>
    <a-form-model-item label="User id">
      <a-input-number v-model.number="form.userId" :min="1" :max="10" />
    </a-form-model-item>
    <a-form-model-item :label-col="{ span: 3 }" :wrapper-col="{ span: 4 }">
      <a-button type="primary" html-type="submit" :disabled="disabled">
        Submit
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>

<script>
import { FormModel, Input, Button, InputNumber } from "ant-design-vue";
export default {
  name: "AlbumEditor",
  data() {
    return {
      form: {
        userId: null,
        title: null
      }
    };
  },
  props: {
    albumData: {
      type: Object
    }
  },
  watch: {
    albumData() {
      this.form = { ...this.albumData };
    }
  },
  components: {
    "a-form-model": FormModel,
    "a-form-model-item": FormModel.Item,
    "a-input": Input,
    "a-input-number": InputNumber,
    "a-button": Button
  },
  methods: {
    async onFormSubmit() {
      this.$emit("submit", this.form);
    }
  },
  computed: {
    disabled() {
      return !this.form.title || !this.form.userId;
    }
  }
};
</script>
