<template>
  <module-card-base
    :moduleInfo="moduleInfo"
    :primaryButton="primaryButton"
    :secondaryButton="secondaryButton"
    :tertiaryButton="tertiaryButton"
    class="h-144"
  >
    <template #content>
      <div class="w-full flex flex-row items-center justify-between mb-6">
        <t-tag variant="apptType">{{ encounter.type }}</t-tag>
        <div class="flex flex-row text-xs gap-x-2">
          <span>{{ patient.age }} yo</span>
          <span>{{ patient.sex }}</span>
          <span>{{ patient.pronouns }}</span>
        </div>
      </div>
      <div class="w-full flex flex-col divide-y divide-solid divide-slate-200">
        <div class="flex flex-col gap-y-1 mb-9">
          <span class="font-bold text-slate-700 text-base leading-none">{{ patient.name }}</span>
          <span class="text-sm">{{ encounter.chiefComplaint }}</span>
        </div>
        <div class="flex flex-row gap-2.5 pt-4.5">
          <div class="w-1/2">
            <div class="text-sm font-semibold text-slate-500 mb-4">Active Conditions</div>
            <div>
              <div class="flex flex-col gap-y-2">
                <g-link
                  v-for="condition in patient.problemsList"
                  :key="condition.id"
                  class="p-2.5 border border-slate-200 rounded-md text-slate-700 text-xs font-medium"
                  >{{ condition.name }}</g-link
                >
              </div>
            </div>
          </div>
          <div class="w-1/2">
            <div class="text-sm font-semibold text-slate-500 mb-4">Last Appointment</div>
            <g-link class="p-2.5 rounded-md border border-slate-200 w-full block flex flex-col gap-y-0.5">
              <span class="font-semibold text-sm">12 Apr 2020</span>
              <span class="text-sm">Follow Up</span>
            </g-link>
          </div>
        </div>
      </div>
    </template>
  </module-card-base>
</template>

<script>
import ModuleCardBase from "../ModuleBase/ModuleCardBase.vue";
export default {
  name: "PatientOverviewModule",
  components: {
    ModuleCardBase,
  },
  data() {
    return {};
  },
  props: {
    patient: Object,
    encounter: Object,
    moduleInfo: Object,
    primaryButton: Object,
    secondaryButton: Object,
    tertiaryButton: Object,
  },
};
</script>

<style></style>
