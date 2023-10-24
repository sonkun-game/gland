<template>
  <div>

    <div id="global-notify-success" class="fixed w-fit left-1/2" style="top: -50px; transition: 2s;">
      <div name="global-notify-success"
        class="w-fit px-3 py-1.5 text-white bg-gray-600 rounded-lg">
        <i class="fa-solid fa-check bg-lime-500 p-1 rounded-lg "></i>
        <span>Thao tác thành công</span>
      </div>
    </div>

    <div id="global-notify-fail" class="fixed w-fit left-1/2" style="top: -50px; transition: 2s;">
      <div  name="global-notify-fail"
        class="w-fit px-3 py-1.5 text-white bg-gray-600 rounded-lg">
        <i class="fa-solid fa-xmark bg-red-500 p-1 rounded-lg "></i>
        <span>Thao tác thất bại</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "NotificationLayoutComponent"
}
</script>

<style scoped>
.notify {
  top: 10px;
}
</style>

