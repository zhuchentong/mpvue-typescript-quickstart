<template>
  <div>
    <p class="card">
      {{text}}
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Card extends Vue {
  @Prop({ default: "1" })
  text: string;

  onShow() {}

  onHide() {}

  mounted() {
    // vue hook
  }
}
</script>

<style>
.card {
  padding: 10px;
}
</style>
