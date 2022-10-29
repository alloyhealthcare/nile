<template>
  <div class="flex flex-col">
    <div
      class="flex flex-row items-center justify-between px-6 py-2 text-sm bg-white"
    >
      <div class="font-semibold">
        {{ title }}
      </div>
      <div
        class="flex flex-row items-center gap-x-2"
        v-if="context == 'Intake'"
      >
        <t-button :to="this.navigationPath + '/vitals'">Vital Signs</t-button>
        <t-button :to="this.navigationPath + '/social-hx'">Social Hx</t-button>
        <t-button :to="this.navigationPath + '/past-medical-hx'">PMHx</t-button>
        <t-button :to="this.navigationPath + '/chief-complaint'"
          >Chief Complaint</t-button
        >
        <t-button :to="this.navigationPath + '/review'">Complete</t-button>
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

<style></style>
