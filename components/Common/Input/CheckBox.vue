<template>
  <div>
    <!-- item -->
    <div class="flex items-center mb-2">
      <input :id="id" type="checkbox" :value="value" class="w-4 h-4 bg-gray-100 border-gray-300 shadow-none">
      <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          {{ label }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckBoxComponent",
  props: {
    id: "",
    label : "",
    value: ""
  }
}
</script>
