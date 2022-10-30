<template>
  <flow-detail
    :flow="flow"
    :currentPath="$page.encounter.path + 'intake'"
    nextPage="Complete"
    :nextPath="$page.encounter.path + '/note'"
    prevPage="Chief Complaint"
    :prevPath="$page.encounter.path + 'intake/chief-complaint'"
    :thisPatient="$page.encounter.patient"
  >
    <template #content>
      <h1 class="text-2xl mb-6 font-semibold">Review</h1>
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
        }
          vitals {
              weight
          }
      }
  }
  </page-query>

<style></style>
