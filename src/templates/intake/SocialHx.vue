<template>
  <flow-detail
    :flow="flow"
    :currentPath="$page.encounter.path + 'intake'"
    nextPage="Past Medical Hx"
    :nextPath="$page.encounter.path + 'intake/past-medical-hx'"
    prevPage="Vital Signs"
    :prevPath="$page.encounter.path + 'intake/vitals'"
    :thisPatient="$page.encounter.patient"
  >
    <template #content>
      <h1 class="text-2xl mb-6 font-semibold">Social History</h1>
      <div class="flex flex-col gap-4">
        <div class="flex flex-row items-center py-3 px-4 justify-between bg-white border border-slate-200 rounded-xl">
          <span class="font-medium text-lg text-slate-500">Does {{ $page.encounter.patient.givenName }} smoke?</span>
          <div class="flex flex-row gap-4 items-center">
            <t-radio wrapped name="smoking-options" value="Yes" id="history-yes">Yes</t-radio>
            <t-radio wrapped name="smoking-options" value="No">No</t-radio>
          </div>
        </div>
        <div class="flex flex-row items-center py-3 px-4 justify-between bg-white border border-slate-200 rounded-xl">
          <span class="font-medium text-lg text-slate-500"
            >Does {{ $page.encounter.patient.givenName }} drink alcohol?</span
          >
          <div class="flex flex-row gap-4 items-center">
            <t-radio wrapped name="alcohol-options" value="Yes" id="history-yes">Yes</t-radio>
            <t-radio wrapped name="alcohol-options" value="No">No</t-radio>
          </div>
        </div>
        <div class="flex flex-row items-center py-3 px-4 justify-between bg-white border border-slate-200 rounded-xl">
          <span class="font-medium text-lg text-slate-500"
            >Does {{ $page.encounter.patient.givenName }} use drugs?</span
          >
          <div class="flex flex-row gap-4 items-center">
            <t-radio wrapped name="drugs-options" value="Yes" id="history-yes">Yes</t-radio>
            <t-radio wrapped name="drugs-options" value="No">No</t-radio>
          </div>
        </div>
        <div class="flex flex-row items-center py-3 px-4 justify-between bg-white border border-slate-200 rounded-xl">
          <span class="font-medium text-lg text-slate-500">Does {{ $page.encounter.patient.givenName }} exercise?</span>
          <div class="flex flex-row gap-4 items-center">
            <t-radio wrapped name="exercise-options" value="Yes" id="history-yes">Yes</t-radio>
            <t-radio wrapped name="exercise-options" value="No">No</t-radio>
          </div>
        </div>
      </div>
    </template>
  </flow-detail>
</template>
<script>
import Layout from "~/layouts/Default.vue";
import FlowDetail from "../../layouts/FlowDetail.vue";

export default {
  components: {
    Layout,
    FlowDetail,
  },
  data() {
    return {
      flow: {
        title: "Now",
        context: "Intake",
      },
    };
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
            givenName
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

<style></style>
