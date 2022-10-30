<template>
  <div class="flex flex-col">
    <div class="flex flex-row items-center justify-between px-6 py-1 text-sm bg-white">
      <div class="font-semibold">
        {{ title }}
      </div>
      <div class="flex flex-row items-center gap-x-2" v-if="context == 'Intake'">
        <g-link class="stepper-link" :to="this.navigationPath + '/vitals'">Vital Signs</g-link>
        <g-link class="stepper-link" :to="this.navigationPath + '/social-hx'">Social Hx</g-link>
        <g-link class="stepper-link" :to="this.navigationPath + '/past-medical-hx'">PMHx</g-link>
        <g-link class="stepper-link" :to="this.navigationPath + '/chief-complaint'">Chief Complaint</g-link>
        <g-link class="stepper-link" :to="this.navigationPath + '/review'">Review</g-link>
      </div>
      <div v-else class="text-base font-bold">
        <span>Progress Note</span>
      </div>
      <div>
        <t-button><font-awesome-icon :icon="['far', 'times']"/></t-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlowDetailNavigation",
  props: {
    title: String,
    context: String,
    navigationPath: String,
  },
  data() {
    return {};
  },
};
</script>

<style>
.stepper-link {
  @apply font-semibold text-sm text-slate-500 p-3 hover:bg-slate-100 hover:text-slate-700 rounded-lg active:bg-slate-100;
}
</style>
