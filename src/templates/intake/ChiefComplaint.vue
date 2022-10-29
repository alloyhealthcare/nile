<template>
  <flow-detail
    flowHeaderTitle="Now"
    flowContext="Intake"
    :patientName="$page.encounter.patient.name"
    :flowPath="$page.encounter.path + 'intake'"
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
            }
            vitals {
                weight
            }
        }
    }
    </page-query>

<style></style>
