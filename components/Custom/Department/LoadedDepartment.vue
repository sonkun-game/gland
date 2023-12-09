<template>
  <div :class="{ 'text-white': theme === 'dark', 'text-gray-900': theme === 'light' }">
    <div data-accordion="collapse" v-for="(item, index) in loadedDepartment" :key="index">
      <h3>
        <button type="button" class="flex items-center justify-between w-full p-2 font-medium text-left border"
          @click="openCollapse(toId('accordion-collapse-body', index))">
          <span>{{ item.name }}</span>
        </button>
      </h3>
      <div :id="toId('accordion-collapse-body', index)" class="hidden">
        <div v-if="item.subList !== undefined && item.subList !== null">
          <div v-for="(subItem, subIndex) in item.subList" :key="subItem.id + index">

            <InputField @click-checkbox="handleCheckBoxTick(subItem.roleTask, subItem)" :inputIndex="subItem.id"
              :label="subItem.name" :id="subItem.id" :isCheck="getChecked(subItem.roleTask)" styleClass="px-5 py-2"
              typeInput="checkbox" :isDark="theme === 'dark'" />

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Common } from '../../../plugins/common';
import { v4 as uuidv4 } from 'uuid';

export default {
  name: "",
  data() {
    return {
      id: "accordionTemp",
      key: "",
    }
  },
  props: {
    loadedDepartment: [],
    typeJob: {
      type: String,
      required: true
    },
    theme: {
      type: String,
      default: "dark",
    },
  },
  mounted() {
    this.key = uuidv4();
  },
  methods: {
    toId(id, index) {
      return id + this.key + '-' + index;
    },
    openCollapse(id) {
      Common.toggleModal(id);
    },
    handleCheckBoxTick(roleTask, subItem) {
      var data = {
        scriptId: subItem.id
      };
      // đã có RoleTask
      if (roleTask) {
        if (this.typeJob === "byMe") {
          roleTask.myJob = data.myJob = !roleTask.myJob;
        } else if (this.typeJob === "byOther") {
          roleTask.assignedJob = data.assignedJob = !roleTask.assignedJob;
        }
      }
      // chưa có roleTask
      else {
        subItem.roleTask = {};
        if (this.typeJob === "byMe") {
          subItem.roleTask.myJob = data.myJob = true;
        } else if (this.typeJob === "byOther") {
          subItem.roleTask.assignedJob = data.assignedJob = true;
        }
      }
      this.$emit("click-checkbox", data);
    },
    getChecked(roleTask) {
      if (Common.isNullOrEmpty(roleTask)) return false;
      if (this.typeJob === "byMe") {
        return !Common.isNullOrEmpty(roleTask.myJob) ? roleTask.myJob : false;
      } else if (this.typeJob === "byOther") {
        return !Common.isNullOrEmpty(roleTask.assignedJob) ? roleTask.assignedJob : false;
      }
      return false;
    }
  }
}
</script>