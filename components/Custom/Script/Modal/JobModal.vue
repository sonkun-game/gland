<!-- List of modal -->
<template>
  <div>
    <ModalContainer modalId="authenJobConfigAction" size="2xl" :hasBackDrop="true" :isDark="theme === 'dark'">
      <ModalHeader :isDark="theme === 'dark'" modalId="authenJobConfigAction" head="Cấu hình công việc">
      </ModalHeader>
      <div class="mb-4" :class="{ 'text-white': theme === 'dark' }">
        <!-- Phần cấu hình phân quyền -->
        <div class="px-4 py-3 flex flex-col">
          <p class="text-normal font-semibold float-left text-white"> Quyền hạn </p>
          <div class="p-2 flex accordion-container no-scrollbar">
            <div class="w-full mb-8">
              <p class="text-lg font-bold">Công việc của tôi</p>
              <LoadedDepartment typeJob="byMe" :loadedDepartment="jobModal.loadedDepartmentByMe" :theme="theme"
                @click-checkbox="enrollTaskByMe">
              </LoadedDepartment>
            </div>
            <div class="w-full mb-8">
              <p class="text-lg font-bold">Công việc được giao</p>
              <LoadedDepartment typeJob="byOther" :loadedDepartment="jobModal.loadedDepartmentByOther" :theme="theme"
                @click-checkbox="enrollTaskByOther">
              </LoadedDepartment>
            </div>
          </div>
        </div>
      </div>
    </ModalContainer>

    <ModalContainer modalId="deleteJobConfigAction" size="2xl" :hasBackDrop="true" :isDark="theme === 'dark'">
      <ModalHeader :isDark="theme === 'dark'" modalId="deleteInfoConfigAction" head="Cấu hình thông tin">
      </ModalHeader>
      <div>
      </div>
    </ModalContainer>
  </div>
</template>

<style scoped>
.accordion-container {
  height: 300px;
  overflow-y: auto;
}
</style>

<script>
import { Common } from '../../../../plugins/common';
import LoadedDepartment from '../../Department/LoadedDepartment.vue';
import { sendGetApi, sendPostApi } from "../../../../plugins/api";
import { v4 as uuidv4 } from 'uuid';

export default {
  name: "",
  components: {
    LoadedDepartment
  },
  data() {
    return {
      storeId: 1,
      pageNum: 0,
      jobModal: {
        id: "jobModalNameID",
        // Đây là phần load depaments
        loadedDepartmentByMe: [],
        loadedDepartmentByOther: [],
      },
    }
  },
  computed: {
    Common() {
      return Common;
    }
  },
  props: {
    theme: {
      type: String,
      default: 'dark'
    },
    typeTaskId: {
      type: Number,
      required: false,
      default: 1
    }
  },
  mounted() {
    this.fetchDpt();
  },
  watch: {
    typeTaskId(newVal, oldVal) {
      this.fetchDpt();
    }
  },
  methods: {
    fetchDpt() {
      if (this.typeTaskId === 0) return;
      let url = "https://api.smshub.io.vn:8447/gland/api-department?storeId=" + this.storeId + "&typeTaskId=" + this.typeTaskId;

      // handle get data
      let resp = sendGetApi(url, null);
      let path = window.location.href;
      let convertFeArrByMe = [];
      let convertFeArrByOther = [];

      resp.then((resp) => {
        let data = resp.value;

        data.forEach((item, index) => {
          let checkPeople = path.includes("people?id=" + item.id);
          let checkScript = path.includes("script?id=" + item.id);

          // add data -------------------
          convertFeArrByMe.push({
            selected: checkPeople || checkScript,
            icon: "fa-solid fa-address-card",
            name: item.name,
            link: "/main/total/departments?id=" + item.id,
            id: "department" + item.id,
            subList: [],
          });

          convertFeArrByOther.push({
            selected: checkPeople || checkScript,
            icon: "fa-solid fa-address-card",
            name: item.name,
            link: "/main/total/departments?id=" + item.id,
            id: "department" + item.id,
            subList: [],
          });

          // add scripts data -----------
          if (item.scripts) {
            let i = 0;
            // item.scripts
            item.scripts.forEach(script => {
              convertFeArrByMe[index].subList.push({
                id: script.id,
                name: script.name,
                icon: "fa-solid fa-list-check",
                link: "/main/total/list-department/mission?id=" + script.id,
                departmentId: script.departmentId,
                department: script.department,
              });
              convertFeArrByOther[index].subList.push({
                id: script.id,
                name: script.name,
                icon: "fa-solid fa-list-check",
                link: "/main/total/list-department/mission?id=" + script.id,
                departmentId: script.departmentId,
                department: script.department
              });
              if (!Common.isNullOrEmpty(script.roleTask)) {
                convertFeArrByMe[index].subList[i].roleTask = {
                  id: Common.returnDefaultIfNull(script.roleTask.id),
                  scriptId: Common.returnDefaultIfNull(script.roleTask.scriptId),
                  typeTaskId: Common.returnDefaultIfNull(script.roleTask.typeTaskId),
                  myJob: Common.returnDefaultIfNull(script.roleTask.myJob, false)
                }
                convertFeArrByOther[index].subList[i].roleTask = {
                  id: Common.returnDefaultIfNull(script.roleTask.id),
                  scriptId: Common.returnDefaultIfNull(script.roleTask.scriptId),
                  typeTaskId: Common.returnDefaultIfNull(script.roleTask.typeTaskId),
                  assignedJob: Common.returnDefaultIfNull(script.roleTask.assignedJob, false)
                }
              } else {
                convertFeArrByMe[index].subList[i].roleTask = null;
                convertFeArrByOther[index].subList[i].roleTask = null;
              }
              i++;
            });

          }
        });
        // set data
        this.jobModal.loadedDepartmentByMe = convertFeArrByMe;
        this.jobModal.loadedDepartmentByOther = convertFeArrByOther;
      });
    },
    enrollTaskByMe(data) {
      if (data.myJob!==undefined || data.assignedJob!==undefined) {
        data.typeTaskId = this.typeTaskId;
        let url = "https://api.smshub.io.vn:8447/gland/role-task/update";
        const response = sendPostApi(url, null, data);
        response.then((resp) => {
          console.log(resp);
        });
        Common.showSuccess("Update nhiệm vụ thành công !");
      } else {
        Common.showError("Update nhiệm vụ thất bại !");
      }
    },
    enrollTaskByOther(data) {
      if (data.myJob!==undefined || data.assignedJob!==undefined) {
        data.typeTaskId = this.typeTaskId;
        let url = "https://api.smshub.io.vn:8447/gland/role-task/update";
        const response = sendPostApi(url, null, data);
        response.then((resp) => {
          console.log(resp);
        });
        Common.showSuccess("Update nhiệm vụ thành công !");
      } else {
        Common.showError("Update nhiệm vụ thất bại !");
      }
    }
  }
}
</script>
