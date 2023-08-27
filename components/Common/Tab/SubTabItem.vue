<template>
    <div class="hidden p-4 rounded-lg" :id="id" role="tabpanel" :aria-labelledby="toTab(labelledby)">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: "SubTabItemComponent",
    props: {
      id: {
        type: String,
        default: "id"
      },
      labelledby: { // this is not really required
        type: String,
        default: "labelledby"
      }
    },
    methods: {
      toTab(id) {
        return id + "-tab";
      }
    }
  }
  </script>
  
  <style scoped></style>
  