<template>
  <flow-detail
    flowHeaderTitle="Now"
    flowContext="Intake"
    :thisPatient="$page.encounter.patient"
    :flowPath="$page.encounter.path + 'intake'"
    :prevPath="$page.encounter.path + 'intake/past-medical-hx'"
    prevPageName="Past Medical Hx"
    :nextPath="$page.encounter.path + 'intake/review'"
    nextPageName="Review"
  >
    <template #content>
      <h1>Chief Complaint {{ $page.encounter.time | luxon }}</h1>
      {{ $page.encounter.vitals.weight }}
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
