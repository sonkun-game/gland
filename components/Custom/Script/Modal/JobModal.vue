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
              <LoadedDepartment :loadedDepartment="jobModal.loadedDepartmentByMe" :theme="theme" @click-checkbox="enrollTaskByMe">
              </LoadedDepartment>
            </div>
            <div class="w-full mb-8">
              <p class="text-lg font-bold">Công việc được giao</p>
              <LoadedDepartment :loadedDepartment="jobModal.loadedDepartmentByOther" :theme="theme" @click-checkbox="enrollTaskByOther">
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
import { sendGetApi } from "../../../../plugins/api";
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
  },
  mounted() {
    this.fetchDpt();
  },
  methods: {
    fetchDpt() {
      let url = "https://api.gland84.io.vn:8447/gland/api-department/all?storeId=" + this.storeId + "&pageNum=" + this.pageNum;
      let resp = sendGetApi(url, null);
      let path = window.location.href;
      let convertFeArr = [];
      let convertFeArrByMe = [];
      let convertFeArrByOther = [];

      resp.then((resp) => {
        let data = resp.value;
        data.forEach((item, index) => {
          let subkeyId = uuidv4();
          let checkPeople = path.includes("people?id=" + item.id);
          let checkScript = path.includes("script?id=" + item.id);

          // push array
          convertFeArr.push({
            selected: checkPeople || checkScript,
            icon: "fa-solid fa-address-card",
            name: item.name,
            link: "/main/total/departments?id=" + item.id,
            id: "department" + item.id,
            subList: [
              {
                id: "people" + subkeyId,
                name: "Nhân sự",
                icon: "fa-regular fa-user",
                link: "/main/total/list-department/people?id=" + item.id,
                selected: checkPeople,
              },
              {
                id: "script" + subkeyId,
                name: "Kịch bản",
                icon: "fa-solid fa-scroll",
                link: "/main/total/list-department/script?id=" + item.id,
                selected: checkScript,
              },
            ],
          });

          convertFeArrByMe = convertFeArr;
          convertFeArrByOther = convertFeArr;

          if(item.scripts) {
            // item.scripts
            item.scripts.forEach(script => {

              // convertFeArr[index].subList.push({
              //   id: script.id,
              //   name: script.name,
              //   icon: "fa-solid fa-list-check",
              //   link: "/main/total/list-department/mission?id=" + script.id,
              //   departmentId: script.departmentId,
              //   department: script.department
              // });

              convertFeArrByMe[index].subList.push({
                id: script.id,
                name: script.name,
                icon: "fa-solid fa-list-check",
                link: "/main/total/list-department/mission?id=" + script.id,
                departmentId: script.departmentId,
                department: script.department,
              });

              if(!Common.isNullOrEmpty(script.roleTask)) {
                convertFeArrByMe[index].subList.roleTask = {
                  id: Common.returnDefaultIfNull(script.roleTask.id) ,
                  scriptId: Common.returnDefaultIfNull(script.roleTask.scriptId),
                  typeTaskId: Common.returnDefaultIfNull(script.roleTask.typeTaskId),
                  myJob: Common.returnDefaultIfNull(script.roleTask.myJob, false)
                }
              }

              // convertFeArrByOther[index].subList.push({
              //   id: script.id,
              //   name: script.name,
              //   icon: "fa-solid fa-list-check",
              //   link: "/main/total/list-department/mission?id=" + script.id,
              //   departmentId: script.departmentId,
              //   department: script.department,
              //   roleTask: {
              //     id: Common.returnDefaultIfNull(script.roleTask.id) ,
              //     scriptId: Common.returnDefaultIfNull(script.roleTask.scriptId),
              //     typeTaskId: Common.returnDefaultIfNull(script.roleTask.typeTaskId),
              //     assignedJob:  Common.returnDefaultIfNull(script.roleTask.assignedJob, false)
              //   }
              // });

            })

          }
        });

        // set data
        this.jobModal.loadedDepartmentByMe = convertFeArrByMe;
        this.jobModal.loadedDepartmentByOther = convertFeArrByOther;
      });
    },
    enrollTaskByMe(data) {
      if(Common.isNullOrEmpty(data.myJob) || data.myJob === false) {
        data.myJob = true;
      } else {
        data.myJob = false;
      }
      console.log(data);
    },
    enrollTaskByOther(data) {
      console.log(data);
    }
  }
}
</script>
