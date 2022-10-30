<template>
  <div class="flex flex-col h-screen">
    <global-navigation />
    <flow-detail-navigation :title="flow.title" :context="flow.context" :navigationPath="flow.path" />
    <div class="flex flex-row h-full">
      <patient-sidebar :patient="thisPatient" />
      <div class="px-8 py-6 content flex-grow relative">
        <slot name="content" />
      </div>
    </div>
    <space-navigation v-if="flow.context == 'Intake'" class="m-6">
      <template #spaceNavigationButtons>
        <div class="flex flex-row justify-between w-full">
          <t-button variant="primaryBlue" :to="prevLink.path" v-if="prevLink.path"
            ><span class="">{{ prevLink.name }}</span
            ><span class="font-semibold pl-4"> Previous </span>
          </t-button>
          <t-button variant="primaryBlue" :to="nextLink.path"
            ><span class="font-semibold pr-4" v-if="nextLink.name != 'Complete'"> Next </span
            ><span class="">{{ nextLink.name }}</span></t-button
          >
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
      path: String,
    },
    thisPatient: Object,
    content: String,
    nextLink: {
      path: String,
      name: String,
    },
    prevLink: {
      path: String,
      name: String,
    },
  },
  data() {
    return {};
  },
};
</script>

<style></style>
