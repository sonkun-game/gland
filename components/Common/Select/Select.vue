<template>
  <select :id="item.id" class="h-8 bg-white w-full border border-gray-300 text-gray-900 text-sm rounded-lg py-1.5 px-2.5">
    <option class="text-ellipsis" v-for="(optionItem, optionIndex) in item.selectOption" :key="optionIndex"
      :value="optionItem.value">
      <i class="fa-solid fa-lock mr-2"></i>
      <i class="w-3 h-3" :class="optionItem.iconClass"></i>
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
          value: "",
          iconClass: "",
        }
      ]
    }
  }
}
</script>
