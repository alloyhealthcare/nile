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
      <div class="flex flex-row gap-4 items-center mb-4">
        <h1 class="font-semibold text-lg ">Active Conditions</h1>
        <t-button>Add Condition</t-button>
      </div>
      <div class="">
        <div v-for="problems in $page.encounter.patient.problemsList" :key="problems.id" class="flex flex-row gap-4">
          <div class="flex flex-row bg-white shadow w-full justify-between" @click="row = !row">
            <div class="p-4 text-sm">{{ problems.name }}</div>
            <div class="p-4 text-sm">{{ problems.bodySite }}</div>
            <div class="p-4 text-sm">{{ problems.diagnosed }}</div>
          </div>
          <div>
            <div class="w-2/5 p-4 bg-white shadow rounded-lg" v-if="row">{{ problems.name }} Card</div>
          </div>
        </div>
      </div>
      <!----
      <div class="flex flex-row gap-4 w-full">
        <div class="flex-1">
          <t-table :headers="['Condition', 'Body Site', 'Diagnosed']" :data="$page.encounter.patient.problemsList">
            <template slot="row" slot-scope="props">
              <tr :class="[props.trClass]" @click="row = !row">
                <td :class="props.tdClass">{{ props.row.name }}</td>
                <td :class="props.tdClass">
                  <span v-if="props.row.bodySite != ''">{{ props.row.bodySite }}</span
                  ><span v-else class="text-slate-400">N/a</span>
                </td>
                <td :class="props.tdClass">
                  {{ props.row.diagnosed | luxon("date_med") }}
                </td>
              </tr>
            </template>
          </t-table>
        </div>
        <div class="flex flex-col w-2/5" v-if="row">
          <div class="w-full" v-for="problems in $page.encounter.patient.problemsList" :key="problems.id">
            <div class="p-4 bg-white rounded-xl shadow">
              {{ problems.name }}
            </div>
          </div>
        </div>
      </div>
      -->
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
      row: false,
    };
  },
  computed: {},
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
              id
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
