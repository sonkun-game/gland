<template>
  <div class="p-8">

    <button class="text-white p-4">Click</button>
    <br>

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
    }
  }
}
</script>

<style scoped></style>