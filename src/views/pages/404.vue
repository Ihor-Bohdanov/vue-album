<template>
  <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
    <template #extra>
      <a-button type="primary">
        Back Home
      </a-button>
    </template>
  </a-result>
</template>

<script>
import { Button, Result } from 'ant-design-vue'
export default {
  name: "404",
  components: {
    "a-result": Result,
    "a-button": Button
  }
}
</script>

<style>

</style>