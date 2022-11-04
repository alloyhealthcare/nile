<template>
  <div>
    <div class="flex flex-row gap-4 items-center mb-4">
      <h1 class="font-semibold text-lg ">{{ section.title }}</h1>
      <t-button>Add {{ section.action }}</t-button>
    </div>
    <div class="flex flex-col gap-4 w-full relative">
      <div class="flex-1">
        <t-table :headers="section.headers" :data="section.data">
          <template slot="row" slot-scope="props">
            <tr :class="props.trClass">
              <td :class="props.tdClass">
                <span v-if="section.type == 'Condition'"
                  ><g-link :to="section.tableLink + props.row.id">{{ props.row.name }}</g-link></span
                >
                <span v-if="section.type == 'Medication'"
                  ><g-link :to="section.tableLink + props.row.id">{{ props.row.linkedCondition.name }}</g-link></span
                >
              </td>
              <td :class="props.tdClass">
                <div v-if="section.type == 'Condition'">
                  <div v-if="props.row.bodySite != ''">
                    <span v-for="bodySite in props.row.bodySite" :key="bodySite.id">{{ bodySite }}</span>
                  </div>
                  <span v-else class="text-slate-400">N/a</span>
                </div>
                <div v-if="section.type == 'Medication'">
                  <span>{{ props.row.name }}</span>
                </div>
              </td>
              <td :class="props.tdClass">
                <span v-if="section.type == 'Condition'">{{ props.row.diagnosed | luxon("date_med") }}</span>
                <span>{{ props.row.prescriber }}</span>
              </td>
              <td :class="props.tdClass">
                <span v-if="section.type == 'Medication'">{{ props.row.prescribedOn | luxon("date_med") }}</span>
              </td>
            </tr>
          </template>
        </t-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TableSection",
  components: {},
  props: {
    section: [
      {
        title: String,
        type: String,
        action: String,
        data: Object,
        headers: Object,
        tableLink: String,
      },
    ],
  },
  computed: {},
};
</script>

<style></style>
