<template>
  <div class="flex flex-col h-screen">
    <global-navigation />
    <flow-detail-navigation :title="flow.title" :context="flow.context" :navigationPath="currentPath" />
    <div class="flex flex-row h-full">
      <patient-sidebar :patient="thisPatient" />
      <div class="px-8 py-6 content flex-grow relative">
        <slot name="content" />
      </div>
    </div>
    <space-navigation v-if="flow.context == 'Intake'" class="m-10">
      <template #spaceNavigationButtons>
        <div class="flex flex-row justify-between w-full">
          <t-button variant="primaryBlue" :to="prevPath" v-if="prevPath"
            ><font-awesome-icon icon="fa-regular fa-arrow-left" /><span class="">{{ prevPage }}</span
            ><span class="font-semibold pl-4"> Previous </span>
          </t-button>
          <t-button variant="primaryBlue" :to="nextPath"
            ><span class="font-semibold pr-4" v-if="nextPage != 'Complete'"> Next </span
            ><span class="pr-4">{{ nextPage }}</span
            ><font-awesome-icon icon="fa-regular fa-arrow-right"
          /></t-button>
        </div>
      </template>
    </space-navigation>
  </div>
</template>

<script>
import FlowDetailNavigation from "../components/Navigation/FlowDetailNavigation.vue";
import GlobalNavigation from "../components/Navigation/GlobalNavigation.vue";
import SpaceNavigation from "../components/Navigation/SpaceNavigation.vue";
import PatientSidebar from "../components/Structural/PatientSidebar.vue";

export default {
  components: {
    GlobalNavigation,
    FlowDetailNavigation,
    PatientSidebar,
    SpaceNavigation,
  },
  props: {
    flow: {
      title: String,
      context: String,
    },
    currentPath: String,
    thisPatient: Object,
    content: String,
    nextPath: String,
    nextPage: String,
    prevPath: String,
    prevPage: String,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
