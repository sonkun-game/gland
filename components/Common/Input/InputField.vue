<template>
  <div :class="styleClass">
    <!-- Select Option -->
    <template v-if="typeInput == 'select'">
      <label :for="id" class="text-normal float-left">{{ label }}</label>
      <select :id="id" class="h-8 w-full border border-gray-300 text-normal rounded-lg py-1.5 px-2.5" :class="{'bg-gray-900 text-white':isDark}">
        <option class="text-ellipsis" v-for="(optionItem, optionIndex) in selectOption" :key="optionIndex"
          :value="optionItem.value">
          {{ optionItem.name }}
        </option>
      </select>
    </template>
    <template v-else-if="typeInput == 'textarea'">
      <label :for="id" class="text-normal font-semibold float-left">{{ label }}</label>
      <textarea class="bg-white border border-gray-300 text-gray-900 text-normal rounded-lg block w-full p-1.5" :id="id"
        :placeholder="placeholder" :value="value"></textarea>
    </template>
    <template v-else-if="typeInput == 'checkbox'">
      <input :id="id" type="checkbox" :checked="isChecked" @change="toggleCheckBoxInput()"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
      <label :for="id" class="ml-2 text-normal font-medium text-gray-900 dark:text-gray-300">{{ label }}</label>
    </template>
    <!-- Default Text Option -->
    <template v-else>
      <div v-if="isDark">
        <label :for="id" class="text-normal font-semibold float-left py-2 text-white">{{ label }}</label>
        <input class="bg-transparent text-gray-300 text-normal rounded-lg block w-full p-1.5 "
          :placeholder="placeholder" :value="value" type="text" :id="id" :required="required" />
      </div>
      <div v-else>
        <label :for="id" class="text-normal font-semibold float-left py-2">{{ label }}</label>
        <input class="bg-white border border-gray-300 text-gray-900 text-normal rounded-lg block w-full p-1.5 "
          :placeholder="placeholder" :value="value" type="text" :id="id" :required="required" />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "InputFieldComponent",
  data() {
    return {
      isChecked: false,
    }
  },
  computed: {
    isCheckBoxChecked: {
      get() {
        return this.isChecked;
      },
      set(value) {
        this.isChecked = Boolean(value);
      }
    },
  },
  mounted() {
    this.isCheckBoxChecked = this.isCheck;
  },
  props: {
    id: "",
    styleClass: "",
    isCheck: {
      type: Boolean,
      default: false
    },
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
    },
    inputIndex: {
      type: Number,
      default: 1
    },
    isDark: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    toggleCheckBoxInput() {
      this.isChecked = !this.isChecked;
      let data = {
        show: this.isChecked,
        index: this.inputIndex
      }
      this.$emit("click-checkbox", data);
    }
  }
}
</script>
