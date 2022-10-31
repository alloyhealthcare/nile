<template>
  <module-card-base
    :moduleInfo="moduleInfo"
    :primaryButton="primaryButton"
    :secondaryButton="secondaryButton"
    :tertiaryButton="tertiaryButton"
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
      <div class="w-full">
        <div class="flex flex-col gap-y-1">
          <span class="font-bold text-slate-700 text-base leading-none">{{ patient.name }}</span>
          <span class="text-sm">{{ encounter.chiefComplaint }}</span>
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
