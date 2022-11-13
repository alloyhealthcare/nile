<template>
  <div class="module-footer flex flex-row w-full px-4 pb-4 pt-4 justify-between bg-white/20">
    <div class="flex flex-row gap-x-3">
      <t-button :to="primaryButton.path" variant="primaryGreen">{{ primaryButton.text }}</t-button>
      <t-button v-if="secondaryButton.path && secondaryButton.text" :to="secondaryButton.path" variant="secondary">{{
        secondaryButton.text
      }}</t-button>
    </div>
    <div v-if="tertiaryButton != null">
      <t-button :to="tertiaryButton.path" v-on:click="$emit('tertiary-button-action', tertiaryButton.value)">{{
        tertiaryButton.text
      }}</t-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModuleFooter",
  components: {},
  props: {
    primaryButton: {
      path: String,
      text: String,
    },
    secondaryButton: {
      path: String,
      text: String,
    },
    tertiaryButton: {
      path: String,
      text: String,
      value: Boolean,
    },
  },
  emits: ["tertiary-button-action"],
  data() {
    return {};
  },
};
</script>

<style>
.module-footer {
  backdrop-filter: blur(12px);
}
</style>
