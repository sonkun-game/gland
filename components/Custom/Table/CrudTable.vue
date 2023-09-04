<template>
  <div class="rounded-lg">
    <div class="flex justify-betweeen items-center mr-2 my-2">

      <!-- Show Button Table-->
      <FilterColumnButton :table="table" @show-or-hide-column="handleShowOrHideColumn" :cookiesName="cookiesName"></FilterColumnButton>

      <div class="grow"></div>
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
import FilterColumnButton from '../../Common/Table/FilterColumnButton.vue';
import Pagination from '../../Common/PaginationComp.vue';

export default {
  name: "CrudTable",
  components: {
    Cell,
    Row,
    FilterColumnButton,
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
    cookiesName: {
      type: String,
      default: ""
    }
  },
  methods: {
    handleShowOrHideColumn(data) {
      this.$emit("show-or-hide-column", data)
    }
  }
}
</script>
