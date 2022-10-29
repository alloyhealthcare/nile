<template>
  <flow-detail
    flowHeaderTitle="Now"
    flowContext="Intake"
    :thisPatient="$page.encounter.patient"
    :flowPath="$page.encounter.path + 'intake'"
    :nextPath="$page.encounter.path + 'intake/social-hx'"
    nextPageName="Social Hx"
  >
    <template #content>
      <h1>Vitals {{ $page.encounter.time | luxon }}</h1>
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
