
<template>
  <div class="mb-4 w-[1080px]">
    <a href="#"
      class="block max-w-full h-44 p-6 bg-white border border-gray-200 rounded-2xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div class="flex justify-between">
        <h5 class="mb-2 text-2xl font-bold tracking-tight dark:text-white" :class="getTextColor(color)">{{ title }}</h5>
        <slot></slot>
      </div>
      <div class="mt-2">
        <p v-for="(item, index) in body" :key="index" class="font-semibold text-xl text-gray-700 dark:text-gray-400">
          {{ item }}
        </p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "ProFileInfoComponent",
  props: {
    title: "",
    body: [],
    color: {
      type: String,
      default: "blue"
    }
  },
  methods: {
    getTextColor(inputColor) {
      return 'text-' + inputColor + '-700';
    }
  }
}
</script>

<style scoped></style>
