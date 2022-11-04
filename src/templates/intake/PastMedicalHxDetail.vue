<template>
  <flow-detail :flow="flow" nextPage="Chief Complaint" prevPage="Social Hx" :thisPatient="$page.condition.patient">
    <template #content>
      <h1 class="text-2xl mb-6 font-semibold">Past Medical History DETAIL</h1>
      <div class="flex flex-row gap-4 items-center mb-4">
        <h1 class="font-semibold text-lg ">Active Conditions</h1>
        <t-button>Add Condition</t-button>
      </div>
      <div class="flex flex-row gap-4 w-full">
        <div class="flex-1">
          <t-table :headers="['Condition', 'Body Site', 'Diagnosed']" :data="$page.condition.patient.problemsList">
            <template slot="row" slot-scope="props">
              <tr :class="props.trClass">
                <g-link :to="'/appointment/' + $context.encounterId + '/intake/past-medical-hx/' + props.row.id">
                  <td :class="props.tdClass">{{ props.row.name }}</td>
                  <td :class="props.tdClass">
                    <div v-if="props.row.bodySite != ''">
                      <span v-for="bodySite in props.row.bodySite" :key="bodySite.id">{{ bodySite }}</span>
                    </div>
                    <span v-else class="text-slate-400">N/a</span>
                  </td>
                  <td :class="props.tdClass">
                    {{ props.row.diagnosed | luxon("date_med") }}
                  </td>
                </g-link>
              </tr>
            </template>
          </t-table>
        </div>
        <div class="flex flex-col w-2/5">
          <div class="w-full">
            <div class="p-4 bg-white rounded-xl shadow">
              {{ $page.condition.name }}
              <g-link :to="'/appointment/' + $context.encounterId + '/intake/past-medical-hx'">Back</g-link>
            </div>
          </div>
        </div>
      </div>
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
        condition (id: $id) {
            id
            name
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
        }
    }
    </page-query>

<style></style>
