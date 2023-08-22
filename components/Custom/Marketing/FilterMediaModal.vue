<template>
  <ModalContainer :modalId="modalId" size="4xl">
    <ModalHeader head="Bộ lọc" :modalId="modalId"></ModalHeader>
    <div class="px-4 pb-2">
      <div class="relative z-0 w-full mb-4 flex flex-wrap">
        <ListFilter :filter="filter"></ListFilter>
        <div class="relative w-44 mr-2 mt-2">
          <!-- From Date -->
          <div class="absolute inset-y-0 right-0 flex items-center pr-2.5 pointer-events-none text-gray-500">
            <i class="fa-solid fa-calendar"></i>
          </div>
          <input datepicker type="text"
            class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Từ ngày">
        </div>
        <div class="relative w-44 mt-2">
          <!-- To Date -->
          <div class="absolute inset-y-0 right-0 flex items-center pr-2.5 pointer-events-none text-gray-500">
            <i class="fa-solid fa-calendar"></i>
          </div>
          <input datepicker type="text"
            class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Đến ngày">
        </div>
      </div>
    </div>
    <!-- Close and save -->
    <div class="flex items-center p-6 space-x-2 justify-end border-gray-200 rounded-b dark:border-gray-600">
      <button :data-modal-hide="modalId"
        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
        Hủy bỏ</button>
      <button :data-modal-hide="modalId" type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Lưu</button>
    </div>
  </ModalContainer>
</template>

<script>
import ListFilter from '../../Common/ListFilter.vue';

export default {
  name: "FilterMediaModalComponent",
  components: {
    ListFilter
  },
  props: {
    modalId: "",
    filter: []
  }
}
</script>

<style scoped></style>
