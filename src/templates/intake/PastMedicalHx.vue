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
      <div>
        <table-section
          :section="{
            showTable: conditions,
            title: 'Active Conditions',
            action: 'Condition',
            type: 'Condition',
            data: $page.encounter.patient.problemsList,
            headers: ['Condition', 'Body Site', 'Diagnosed'],
            tableLink: $page.encounter.path + 'intake/past-medical-hx/',
          }"
        />
        <table-section
          :section="{
            showTable: true,
            title: 'Medications',
            action: 'Medication',
            type: 'Medication',
            data: $page.encounter.patient.medicationsList,
            headers: ['Condition', 'Name', 'Prescriber', 'Prescribed On'],
            tableLink: $page.encounter.path + 'intake/past-medical-hx/',
          }"
        />
      </div>
    </template>
  </flow-detail>
</template>
<script>
import Layout from "~/layouts/Default.vue";
import TableSection from "../../components/TableSection.vue";
import FlowDetail from "../../layouts/FlowDetail.vue";

export default {
  components: {
    Layout,
    FlowDetail,
    TableSection,
  },
  data() {
    return {
      flow: {
        title: "Now",
        context: "Intake",
      },
      showCard: false,
    };
  },
  computed: {
    conditions() {
      const problemList = this.$page.encounter.patient.problemsList;
      if (problemList.length == 0) {
        return false;
      } else {
        return true;
      }
    },
    /*    medications() {
      const medicationList = this.$page.encounter.patient.medicationsList;
      if ((medicationList.length = 0)) {
        return false;
      } else {
        return true;
      }
    },*/
  },
  methods: {},
};
</script>

<page-query>
  query ($id: ID!) {
      encounter (id: $id) {
          id
          apptTime
          path
          patient {
            id
            name
            birthDate
            mrn
            pronouns
            age
            sex
            gender
            problemsList {
              id
              name
              bodySite
              diagnosed
              medications {
                name
              }
            }
            medicationsList {
              id
              name
              prescriber
              linkedCondition {
                name
              }
            }
          }

          vitals {
              weight
          }
      }
  }
  </page-query>

<style></style>
