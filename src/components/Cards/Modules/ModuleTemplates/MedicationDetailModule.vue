<template>
  <module-card-base
    :moduleInfo="moduleInfo"
    :primaryButton="primaryButton"
    :secondaryButton="secondaryButton"
    :tertiaryButton="tertiaryButton"
    class="h-144"
  >
    <template #content>
      <div class="w-full">
        <div class="w-full flex flex-row items-center justify-between mb-6">
          <t-tag variant="medication"
            >{{ medicationItem.doseAmount }}{{ medicationItem.doseUnit }} {{ medicationItem.deliveryMethod }}</t-tag
          >
          <div class="flex flex-row text-xs gap-x-2">
            <span>{{ patient.age }} yo</span>
            <span>{{ patient.sex }}</span>
            <span>{{ patient.pronouns }}</span>
          </div>
        </div>
        <div class="flex flex-col gap-y">
          <span class="font-semibold text-slate-800">{{ medicationItem.name }}</span>
          <span class="text-slate-500">{{ medicationItem.frequency }}</span>
        </div>
      </div>
    </template>
  </module-card-base>
</template>

<script>
import ModuleCardBase from "../ModuleBase/ModuleCardBase.vue";
export default {
  name: "MedicationListModule",
  components: {
    ModuleCardBase,
  },
  data() {
    return {};
  },
  props: {
    patient: Object,
    medicationItem: Object,
    encounter: Object,
    moduleInfo: Object,
    primaryButton: Object,
    secondaryButton: Object,
    tertiaryButton: Object,
  },
};
</script>

<style></style>
