<template>
  <flow-detail
    :flow="flow"
    :currentPath="$page.encounter.path + 'intake'"
    nextPage="Chief Complaint"
    :nextPath="$page.encounter.path + 'intake/chief-complaint'"
    prevPage="Social Hx"
    :prevPath="$page.encounter.path + 'intake/social-hx'"
    :thisPatient="$page.encounter.patient"
  >
    <template #content>
      <h1 class="text-2xl mb-6 font-semibold">Past Medical History</h1>
      <t-table
        :headers="['Condition', 'Body Site', 'Diagnosed']"
        :data="$page.encounter.patient.problemsList"
      ></t-table>
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
            birthDate
            mrn
            pronouns
            age
            sex
            gender
            problemsList {
              name
              bodySite
              diagnosed
            }
          }

          vitals {
              weight
          }
      }
  }
  </page-query>

<style></style>
