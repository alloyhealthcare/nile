<template>
  <div class="bg-white w-moduleCard flex flex-col rounded-xl shadow shadow-slate-900/10 h-144">
    <module-header :headerTitle="moduleInfo.title" :headerSubTitle="moduleInfo.subTitle" />
    <div class="px-4 py-4 flex-grow overflow-scroll">
      <slot name="content" />
    </div>
    <module-footer :primaryButton="primaryButton" :secondaryButton="secondaryButton" :tertiaryButton="tertiaryButton" />
  </div>
</template>

<script>
import ModuleFooter from "./ModuleFooter.vue";
import ModuleHeader from "./ModuleHeader.vue";

export default {
  name: "ModuleCardBase",
  props: {
    moduleInfo: {
      title: String,
      subTitle: String,
    },
    primaryButton: Object,
    secondaryButton: Object,
    tertiaryButton: Object,
  },
  components: {
    ModuleHeader,
    ModuleFooter,
  },
};
</script>

<style></style>
