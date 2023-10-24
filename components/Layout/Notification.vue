<template>
  <div class="fixed z-50">
    <div id="global-notify-success" name="global-notify-success" class="w-fit px-2 py-1 text-white bg-gray-600 rounded-lg">
      <i class="fa-solid fa-check bg-lime-500 p-1 rounded-lg "></i>
      <span>Thao tác thành công</span>
    </div>

    <div id="global-notify-fail" name="global-notify-fail" class="w-fit px-2 py-1 text-white bg-gray-600 rounded-lg">
      <i class="fa-solid fa-xmark bg-red-500 p-1 rounded-lg "></i>
      <span>Thao tác thất bại</span>
    </div>
  </div>
</template>

<script>

export default {
  name: "NotificationLayoutComponent"
}



</script>

<style>

</style>

