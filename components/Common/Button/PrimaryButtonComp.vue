
<template>
  <div class="w-100 flex justify-end mb-3.5">
    <button type="button" :data-modal-target="dataModalTarget" :data-modal-toggle="dataModalToggle"
      class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center mr-2">
      {{ title }}
    </button>
  </div>
</template>

<script>
export default {
  name: "PrimaryButtonComp",
  props: {
    title: "",
    // for showing modal
    dataModalTarget: "",
    dataModalToggle: ""
  }
}
</script>

<style scoped></style>