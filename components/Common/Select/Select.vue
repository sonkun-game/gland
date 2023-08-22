<template>
  <select :id="item.id" class="h-8 bg-white w-full border border-gray-300 text-gray-900 text-sm rounded-lg py-1.5 px-2.5">
    <option class="text-ellipsis" v-for="(optionItem, optionIndex) in item.selectOption" :key="optionIndex"
      :value="optionItem.value">
      {{ optionItem.name }}
    </option>
  </select>
</template>

<script>

export default {
  name: "SelectComp",
  props: {
    item: {
      id: "",
      selectOption: [
        {
          name: "",
          value: ""
        }
      ]
    }
  }
}
</script>
