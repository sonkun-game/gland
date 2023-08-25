<template>
  <div class="rounded-lg">
    <div class="flex justify-end items-end mr-2 my-2">
      <!-- Help text -->
      <Pagination :totalPage="totalPage" :currentPage="currentPage"></Pagination>
    </div>
    <!-- Table -->
    <div class="relative overflow-x-hidden overflow-y-hidden mx-2 shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-900 bg-gray-300 dark:text-gray-400 shadow-md">
        <slot></slot>
      </table>
    </div>

  </div>
</template>

<script>
import Cell from '../../Common/Table/Cell.vue';
import Row from '../../Common/Table/Row.vue';
import Pagination from '../../Common/PaginationComp.vue';

export default {
  name: "CrudTable",
  components: {
    Cell,
    Row,
    Pagination
  },
  props: {
    table: {},
    styleClass: {
      type: String,
      default: ""
    },
    totalPage: {
      type: Number,
      default: 8
    },
    currentPage: {
      type: Number,
      default: 1
    },
  }
}
</script>
