<template>
    <div :id="id" class="px-2">
      <slot></slot>
    </div>
  </template>

  <script>
  export default {
    name:"TabContainerComponent",
    props: {
      id: {
        type: String,
        default: "TabContainerId"
      }
    }
  }
  </script>

  <style scoped>

  </style>
