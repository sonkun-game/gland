<template>
    <div :id="id" class="px-2" :class="{'text-white':theme==='dark'}">
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
      },
      theme: {
        type: String,
        default: 'light',
      }
    }
  }
  </script>

  <style scoped>

  </style>
