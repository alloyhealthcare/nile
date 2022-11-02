<template>
  <div>
    <div class="flex flex-row gap-4" ref="itemCollection" v-for="item in data" :key="item.id">
      <div class="w-full">
        <a
          ref="itemRow"
          class="flex flex-row justify-between w-full p-4 hover:cursor-pointer"
          @click="showCard = !showCard"
          >{{ item[n].col1 }} {{ itemRow.col2 }} {{ itemRow.col3 }}</a
        >
      </div>
      <div ref="itemCard" class="w-2/5" v-if="showCard == true">
        <div class="bg-white rounded-lg p-6">{{ itemObject.title }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { object } from "prop-types";

export default {
  components: {
    HTable,
  },
  props: {
    data: Object,
  },
};
</script>

<style></style>
