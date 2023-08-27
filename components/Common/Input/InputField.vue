<template>
  <div :class="styleClass">
    <!-- Select Option -->
    <template v-if="typeInput == 'select'">
      <label :for="id" class="text-normal float-left">{{ label }}</label>
      <select :id="id" class="h-8 bg-white w-full border border-gray-300 text-gray-900 text-sm rounded-lg py-1.5 px-2.5">
        <option class="text-ellipsis" v-for="(optionItem, optionIndex) in selectOption" :key="optionIndex"
          :value="optionItem.value">
          {{ optionItem.name }}
        </option>
      </select>
    </template>
    <template v-else-if="typeInput == 'textarea'">
      <label :for="id" class="text-sm font-semibold float-left">{{ label }}</label>
      <textarea class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5" :id="id"
        :placeholder="placeholder" :value="value"></textarea>
    </template>
    <!-- Default Text Option -->
    <template v-else>
      <label :for="id" class="text-sm font-semibold float-left py-2">{{ label }}</label>
      <input class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5 "
        :placeholder="placeholder" :value="value" type="text" :id="id" :required="required" />
    </template>
  </div>
</template>

<script>
export default {
  name: "InputFieldComponent",
  props: {
    id: "",
    styleClass: "",
    label: {
      type: String,
      default: "defaultLabel"
    },
    placeholder: {
      type: String,
      default: ""
    },
    selectOption: [],
    value: {
      type: String,
      default: ""
    },
    typeInput: {
      type: String,
      default: "text"
    },
    required: {
      type: Boolean,
      default: false
    }
  }
}
</script>
