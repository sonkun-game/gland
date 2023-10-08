<!-- List of modal -->
<template>
  <div>
    <ModalContainer modalId="authenJobConfigAction" size="2xl" :hasBackDrop="true" :isDark="theme === 'dark'">
      <ModalHeader :isDark="theme === 'dark'" modalId="authenJobConfigAction" head="Cấu hình thông tin">
      </ModalHeader>
      <div class="mb-4" :class="{ 'text-white': theme === 'dark' }">
        <InputField :isDark="theme === 'dark'" styleClass="px-4 py-3" id="editValue" label="Tên công việc"
          placeholder="Tên công việc">
        </InputField>
        <InputField :isDark="theme === 'dark'" typeInput="number" styleClass="px-4 py-3" id="editValue"
          label="Thời gian (giờ)" placeholder="">
        </InputField>
        <!-- Phần cấu hình phân quyền -->
        <div class="px-4 py-3 flex flex-col">
          <p class="text-normal font-semibold float-left text-white"> Quyền hạn </p>
          <div class="p-2 flex accordion-container no-scrollbar">
            <div class="w-full mb-8">
              <p class="text-lg font-bold">Công việc của tôi</p>
              <Accordion :loadedDepartment="jobModal.loadedDepartment" :theme="theme">
              </Accordion>
            </div>
            <div class="w-full mb-8">
              <p class="text-lg font-bold">Công việc được giao</p>
              <Accordion :loadedDepartment="jobModal.loadedDepartment" :theme="theme">
              </Accordion>
            </div>
          </div>
        </div>
        <!-- Nút save và close -->
        <div class="flex gap-2 px-4 py-2"> 
          <button class="bg-blue-500 text-white rounded-lg px-8 py-2">Lưu</button>
          <button class="bg-white border-blue-500 text-blue-500 rounded-lg px-8 py-2 shadow">Hủy</button>
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
import Accordion from '../../../Common/Button/Accordion.vue';
import { sendGetApi } from "../../../../plugins/api";
import { v4 as uuidv4 } from 'uuid';

export default {
  name: "",
  components: {
    Accordion
  },
  data() {
    return {
      storeId: 1,
      pageNum: 0,
      jobModal: {
        id: "jobModalNameID",
        // Đây là phần load depaments
        loadedDepartment: [
        {
            selected: false,
            icon: "fa-solid fa-address-card",
            name: "Phòng ban A",
            link: "/main/total/departments",
            id: "department-1",
            storeId: 1,
          },
          {
            selected: false,
            icon: "fa-solid fa-address-card",
            name: "Phòng ban B",
            link: "/main/total/departments",
            id: "department-1",
            storeId: 1,
          },
        ],
      }
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

      resp.then((resp) => {
        let data = resp.value;
        let convertFeArr = [];
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

          if(item.scripts) {
            // item.scripts
            item.scripts.forEach(script => {
              convertFeArr[index].subList.push({
                id: script.id,
                name: script.name,
                icon: "fa-solid fa-list-check",
                link: "/main/total/list-department/mission?id=" + script.id,
                departmentId: script.departmentId,
                department: script.department
              })
            })

          }
        });

        // set dât
        this.jobModal.loadedDepartment = convertFeArr;
      });
    },
  }
}
</script>
