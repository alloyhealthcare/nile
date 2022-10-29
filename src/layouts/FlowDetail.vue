<template>
  <div class="flex flex-col h-screen">
    <global-navigation />
    <flow-detail-navigation
      :title="flowHeaderTitle"
      :context="flowContext"
      :navigationPath="flowPath"
    />
    <div class="flex flex-row h-full">
      <patient-sidebar :patient="thisPatient" />
      <div class="px-8 py-6 content flex-grow relative">
        <slot name="content" />
      </div>
    </div>
    <space-navigation v-if="flowContext == 'Intake'" class="m-6">
      <template #spaceNavigationButtons>
        <div class="flex flex-row justify-between w-full">
          <t-button variant="primaryBlue" :to="prevPath" v-if="prevPath"
            ><span class="">{{ prevPageName }}</span
            ><span class="font-semibold pl-4"> Previous </span>
          </t-button>
          <t-button variant="primaryBlue" :to="nextPath"
            ><span class="font-semibold pr-4" v-if="nextPageName != 'Complete'">
              Next </span
            ><span class="">{{ nextPageName }}</span></t-button
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
  props: [
    "flowHeaderTitle",
    "flowContext",
    "thisPatient",
    "content",
    "flowPath",
    "prevPath",
    "nextPath",
    "nextPageName",
    "prevPageName",
  ],
  data() {
    return {};
  },
};
</script>

<style></style>
