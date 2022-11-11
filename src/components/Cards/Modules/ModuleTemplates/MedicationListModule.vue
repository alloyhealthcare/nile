<template>
  <transition name="fade" appear>
    <module-card-base
      :moduleInfo="moduleInfo"
      :primaryButton="primaryButton"
      :secondaryButton="secondaryButton"
      :tertiaryButton="tertiaryButton"
      class="h-144"
    >
      <template #content>
        <div class="w-full">
          <div class="grid grid-cols-2 gap-2.5 w-full">
            <t-button
              v-for="medication in medicationList"
              :key="medication.id"
              v-on:click="$emit('add-medication-detail', medication.id)"
              class="bg-white border border-slate-200 p-2 rounded-lg flex flex-col gap-5 text-slate-500"
            >
              <div class="flex flex-col place-items-start gap-2">
                <span class="font-semibold text-sm leading-none">{{ medication.name }}</span>
                <t-tag variant="medication"
                  >{{ medication.doseAmount }}{{ medication.doseUnit }} {{ medication.deliveryMethod }}</t-tag
                >
              </div>
              <span class="text-sm font-medium font-slate-500">{{ medication.frequency }}</span>
            </t-button>
          </div>
        </div>
      </template>
    </module-card-base>
  </transition>
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
    medicationList: Array,
    encounter: Object,
    moduleInfo: Object,
    primaryButton: Object,
    secondaryButton: Object,
    tertiaryButton: Object,
  },
  emits: ["add-medication-detail"],
  methods: {},
  computed: {},
};
</script>

<style>
.fade-enter-active {
  transition: all 0.2s;
}

.fade-enter {
  opacity: 0;
  transform: translateY(10px);
}
</style>
