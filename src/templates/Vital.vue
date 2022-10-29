<template>
  <Layout>
    <intake-navigation />
    <h1>Vitals {{ $page.encounter.time | luxon }}</h1>
    {{ $page.encounter.vitals.weight }}
  </Layout>
</template>
<script>
import Layout from "~/layouts/Default.vue";
import IntakeNavigation from "../components/Navigation/IntakeNavigation.vue";

export default {
  components: {
    Layout,
    IntakeNavigation,
  },
};
</script>

<page-query>
query ($id: ID!) {
    encounter (id: $id) {
        id
        apptTime
        vitals {
            weight
        }
    }
}
</page-query>

<style></style>
