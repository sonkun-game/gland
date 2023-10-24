<template>
  <div class="p-8">

    <button class="text-white bg-lime-700 p-2 rounded-lg" @click="showSuccess('fdf')">Click showSuccess</button>
    <br><br>
    <button class="text-white bg-red-700 p-2 rounded-lg" @click="showError('Hello World')">Click showError</button>

    <!-- <div name="global-notify" class="w-fit px-2 py-1 text-white bg-gray-600 rounded-lg">
      <i class="fa-solid fa-check bg-lime-500 p-1 rounded-lg "></i>
      <span>Thao tác thành công</span>
    </div>

    <div name="global-notify" class="w-fit px-2 py-1 text-white bg-gray-600 rounded-lg">
      <i class="fa-solid fa-xmark bg-red-500 p-1 rounded-lg "></i>
      <span>Thao tác thất bại</span>
    </div> -->


  </div>
</template>

<script>
import { Common } from '../../plugins/common';

export default {
  name: "",
  layout: "main_v2",
  computed: {
    Common() {
      return Common;
    }
  },
  data() {
    return {
      theme: 'dark',
    }
  },
  methods: {
    toId(id, index, isHash) {
      if(isHash) {
        return '#' + id + '-' + index
      }
      return id + '-' + index;
    },
    showSuccess(msg) {
      Common.showSuccess(msg);
    },
    showError(msg) {
      Common.showError(msg)
    }
  }
}
</script>

<style scoped></style>
