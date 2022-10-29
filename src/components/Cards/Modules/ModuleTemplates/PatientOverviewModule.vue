<template>
  <module-card-base
    :moduleTitle="encounter.apptTime | luxon"
    :moduleSubTitle="encounter.room"
    :footerButton1="encounter.path + 'note'"
    footerButton1_text="Begin"
    :footerButton2="patient.path"
    footerButton2_text="View Chart"
  >
    <template #moduleContent>
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
          <span class="font-bold text-slate-700 text-base leading-none">{{
            patient.name
          }}</span>
          <span class="text-sm">{{ encounter.chiefCompalint }}</span>
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
  props: {
    cardTitle: String,
    patient: Object,
    encounter: Object,
  },
};
</script>

<style></style>
