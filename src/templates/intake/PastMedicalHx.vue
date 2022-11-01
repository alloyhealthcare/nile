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
      <div class="flex flex-col gap-4 w-full relative">
        <!-- <div class="flex-1">
          <t-table :headers="['Condition', 'Body Site', 'Diagnosed']" :data="$page.encounter.patient.problemsList">
            <template slot="row" slot-scope="props">
              <tr :class="props.trClass" :to="'/'" @click="row = !row">
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
              </tr>
              <div class="flex flex-col w-2/5 absolute right-0">
                <div class="w-full">
                  <div class="p-4 bg-white rounded-xl shadow" v-if="row">{{ props.row.name }}</div>
                </div>
              </div>
            </template>
          </t-table>
        </div> -->
        <div
          class="flex flex-row gap-4"
          ref="itemCollection"
          v-for="problems in $page.encounter.patient.problemsList"
          :key="problems.id"
        >
          <div class="w-full">
            <a
              ref="itemRow"
              class="flex flex-row justify-between w-full p-4 hover:cursor-pointer"
              @click="showCard = !showCard"
              >{{ problems.name }} {{ problems.bodySite.bodySite }} {{ problems.diagnosed }}</a
            >
          </div>
          <div ref="itemCard" class="w-2/5" v-if="showCard == true">
            <div class="bg-white rounded-lg p-6">{{ problems.name }}</div>
          </div>
        </div>
      </div>
    </template>
  </flow-detail>
</template>
<script>
import { get } from "http";
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
  computed: {
    showCard() {
      if (
        this.itemRow.$page.encounter.patient.problemsList.id == this.itemCard.$page.encounter.patient.problemsList.id
      ) {
        return true;
      } else {
        return false;
      }
    },
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
            }
          }

          vitals {
              weight
          }
      }
  }
  </page-query>

<style></style>
