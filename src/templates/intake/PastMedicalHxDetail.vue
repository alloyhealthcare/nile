<template>
  <flow-detail
    :flow="flow"
    nextPage="Chief Complaint"
    :nextPath="$context.encounterPath + 'intake/chief-complaint'"
    prevPage="Social Hx"
    :prevPath="$context.encounterPath + 'intake/social-hx'"
    :thisPatient="$page.condition.patient"
  >
    <template #content>
      <h1 class="text-2xl mb-6 font-semibold">Past Medical History</h1>
      <div class="flex flex-row w-full gap-4">
        <div class="flex-1">
          <table-section
            :section="{
              showTable: true,
              title: 'Active Conditions',
              action: 'Condition',
              type: 'Condition',
              data: $page.condition.patient.problemsList,
              headers: ['Condition', 'Body Site', 'Diagnosed'],
              tableLink: $context.encounterPath + 'intake/past-medical-hx/',
            }"
          />
          <table-section
            :section="{
              showtable: true,
              title: 'Medications',
              action: 'Medication',
              type: 'Medication',
              data: $page.condition.patient.medicationsList,
              headers: ['Condition', 'Name', 'Prescriber', 'Prescribed On'],
              tableLink: $context.encounterPath + 'intake/past-medical-hx/',
            }"
          />
        </div>
        <transition name="fade" appear>
          <div class="w-2/5">
            <div class="bg-white rounded-lg p-4">
              {{ $page.condition.name }}
              <g-link :to="$context.encounterPath + '/intake/past-medical-hx'">Close</g-link>
            </div>
          </div>
        </transition>
      </div>
    </template>
  </flow-detail>
</template>
<script>
import Layout from "~/layouts/Default.vue";
import FlowDetail from "../../layouts/FlowDetail.vue";
import TableSection from "../../components/TableSection.vue";

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
      row: false,
    };
  },
  computed: {
    /*conditions() {
      const problemList = this.$page.condition.patient.problemsList;
      if (problemList.length == 0) {
        return false;
      } else {
        return true;
      }
    },*/
  },
  methods: {
    showDetailCard(item, index) {
      this.row = index;
      this.card = item;
    },
  },
};
</script>

<page-query>
    query ($id: ID!) {
        condition (id: $id) {
            id
            name
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
              }
              medicationsList {
                name
                prescriber
                linkedCondition {
                  name
                }
              }
            }
        }
        medication (id: $id) {
          id
          name
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
              }
          }
        }
    }
    </page-query>

<style>
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
</style>
