<template>
  <div :class="styleClass">
    <!-- Select Option -->
    <template v-if="typeInput == 'select'">
      <label :for="id" class="text-normal float-left">{{ label }}</label>
      <select :id="id" @change="selectValueChange"
      class="h-full w-full border border-gray-300 text-normal rounded-lg py-1.5 px-2.5" :class="{'bg-gray-900 text-white':isDark, 'bg-gray-50 text-gray-900': !isDark}" >
        <option class="text-ellipsis" v-for="(optionItem, optionIndex) in selectOption" :key="optionIndex"
          :value="optionItem.value ?optionItem.value: optionItem.id">
          <span :class="optionItem.optionClass?optionItem.optionClass:''">
            {{ optionItem.name }}
          </span>
        </option>
      </select>
    </template>
    <template v-else-if="typeInput == 'date'">
      <label :for="id" class="text-normal font-semibold float-left py-2 text-white">{{ label }}</label>
      <input :id="id" type="date" :checked="isChecked" @change="toggleCheckBoxInput()"
        class="bg-transparent text-gray-300 text-normal rounded-lg block w-full p-1.5 ">
    </template>
    <template v-else-if="typeInput == 'textarea'">
      <label :for="id" class="text-normal font-semibold float-left">{{ label }}</label>
      <textarea class="border border-gray-300 text-normal rounded-lg block w-full p-1.5" :id="id"
        :class="{'bg-white text-gray-900':!isDark,'bg-gray-900 text-white':isDark}"
        :placeholder="placeholder" :value="value"></textarea>
    </template>
    <template v-else-if="typeInput == 'checkbox'">
      <input :id="id" type="checkbox" :checked="isChecked" @change="toggleCheckBoxInput()"
        class="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
      <label :for="id" class="ml-2 text-normal font-medium">{{ label }}</label>
    </template>
    <!-- Default Text Option -->
    <template v-else>
      <div v-if="isDark">
        <label :for="id" class="text-normal font-semibold float-left py-2 text-white">{{ label }}</label>
        <input class="bg-transparent text-gray-300 text-normal rounded-lg block w-full p-1.5"
          :placeholder="placeholder" :value="value" :type="typeInput" :id="id" :required="required" />
      </div>
      <div v-else>
        <label :for="id" class="text-normal font-semibold float-left py-2">{{ label }}</label>
        <input class="bg-white border border-gray-300 text-gray-900 text-normal rounded-lg block w-full p-1.5"
          :placeholder="placeholder" :value="value" :type="typeInput" :id="id" :required="required" />
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
    // select
    selectOption: [],
    // value of input
    value: {
      type: String,
      default: ""
    },
    // type input
    typeInput: {
      type: String,
      default: "text"
    },
    // is input required
    required: {
      type: Boolean,
      default: false
    },
    // index the input
    inputIndex: {
      type: Number | String,
      default: 1
    },
    // input theme
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
    },
    selectValueChange(event) {
      this.$emit('select-change',event.target.value);
    }
  }
}
</script>
