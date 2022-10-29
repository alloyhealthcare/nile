<template>
  <flow-detail
    flowHeaderTitle="Now"
    flowContext="Intake"
    :thisPatient="$page.encounter.patient"
    :flowPath="$page.encounter.path + 'intake'"
    :prevPath="$page.encounter.path + 'intake/vitals'"
    prevPageName="Vitals"
    :nextPath="$page.encounter.path + 'intake/past-medical-hx'"
    nextPageName="Past Medical Hx"
  >
    <template #content>
      <h1 class="text-2xl mb-6 font-semibold">Social History</h1>
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

<style></style>
