<template>
  <flow-detail :flow="flow" :nextLink="nextLink" :prevLink="prevLink" :thisPatient="$page.encounter.patient">
    <template #content>
      <h1 class="text-2xl mb-6 font-semibold">Vital Signs</h1>
      <div class="grid grid-cols-2 gap-x-6 gap-y-8 w-3/4">
        <div class="relative">
          <span class="big-input-label">Weight</span>
          <t-input variant="big"></t-input>
          <span class="vitals-input-unit">lbs</span>
          <div class="pt-1 text-sm text-slate-500 font-semibold">15lbs</div>
        </div>
        <div class="relative">
          <span class="big-input-label">Height</span>
          <t-input variant="big"></t-input>
          <span class="vitals-input-unit">in</span>
        </div>
        <div class="relative">
          <span class="big-input-label">BP</span>
          <t-input variant="big"></t-input>
          <span class="vitals-input-unit">mmHg</span>
          <div class="pt-1 text-sm text-slate-500 font-semibold">
            Lower than normal
          </div>
        </div>
        <div class="relative">
          <span class="big-input-label">Sp02</span>
          <t-input variant="big"></t-input>
          <span class="vitals-input-unit">%</span>
        </div>
        <div class="relative">
          <span class="big-input-label">Heart Rate</span>
          <t-input variant="big"></t-input>
          <span class="vitals-input-unit">bpm</span>
        </div>
        <div class="relative">
          <span class="big-input-label">Temperature</span>
          <t-input variant="big"></t-input>
          <span class="vitals-input-unit">F</span>
        </div>
        <div class="relative">
          <span class="big-input-label">Respiratory Rate</span>
          <t-input variant="big"></t-input>
          <span class="vitals-input-unit">breaths/min</span>
        </div>
      </div>
    </template>
  </flow-detail>
</template>
<script>
import Layout from "~/layouts/Default.vue";
import SpaceNavigation from "../../components/Navigation/SpaceNavigation.vue";
import FlowDetail from "../../layouts/FlowDetail.vue";

export default {
  components: {
    Layout,
    FlowDetail,
    SpaceNavigation,
  },
  data() {
    return {
      flow: {
        title: "Now",
        context: "Intake",
        path: this.thisPath,
      },
      prevLink: {
        name: "Back",
        path: this.prevPage,
      },
      nextLink: {
        name: "Social Hx",
        path: this.nextPage,
      },
    };
  },
  computed: {
    thisPath() {
      return this.$page.encounter.path;
    },
    prevPage() {
      return this.$page.encounter.path;
    },
    nextPage() {
      return this.$page.encounter.path + "intake/social-hx";
    },
  },
};
</script>

<page-query>
query ($id: ID!) {
    encounter (id: $id) {
        id
        apptTime
        path
        patient {
          name
          birthDate
          mrn
          pronouns
          age
          sex
          gender
        }
        vitals {
            weight
        }
    }
}
</page-query>

<style>
.big-input-label {
  @apply text-base font-semibold pb-2;
}
.vitals-input-unit {
  @apply text-base font-medium text-slate-400 absolute inset-y-0 right-8 top-11;
}
</style>
