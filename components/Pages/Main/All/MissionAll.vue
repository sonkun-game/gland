<template>
  <div>
    <!-- Add account btn -->
    <div class="flex">
      <div class="mr-2 pb-3">
        <ShowModal :modalId="createMission.id" type="html"
          customClass="block text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-3 py-2 text-center"
          :title="createMission.showModalTemplate">
          <ModalContainer :modalId="createMission.id" size="2xl">
            <ModalHeader head="Quản lý nhiệm vụ" :modalId="createMission.id"></ModalHeader>
            <!-- Modal body -->
            <div>
              <InputField id="all_mission_txtName" label="Tên nhiệm vụ" styleClass="px-4"></InputField>
              <InputField id="all_mission_txtDes" styleClass="px-4" label="Mô tả" typeInput="textarea"></InputField>
            </div>
            <!-- Modal footer -->
            <div class="flex justify-end items-center p-6 space-x-2 border-gray-200 rounded-b dark:border-gray-600">
              <button :data-modal-hide="createMission.id"
                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900">
                Hủy bỏ</button>
              <button :data-modal-hide="createMission.id" @click="createMissionFunct(storeId)"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Lưu</button>
            </div>
          </ModalContainer>
        </ShowModal>
      </div>
      <div>
        <!-- Modal toggle -->
        <ShowModal :modalId="authenMission.id" type="custom" :title="authenMission.showModalTemplate"
          @modal-toggle="loadMissionAuthenModal()"
          customClass="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center">
          <ModalContainer :modalId="authenMission.id" size="2xl">
            <ModalHeader head="Phân quyền nhiệm vụ" :modalId="authenMission.id"></ModalHeader>
            <div class="px-6 pt-2 space-y-6 flex justify-between">
              <div class="w-50 mb-8">
                <details class="" open>
                  <summary class="">
                    <InputField typeInput="checkbox" label="Tổng" id="mission-all"></InputField>
                  </summary>
                  <InputField label="Tài khoản" id="mission-account" styleClass="px-5 py-2" typeInput="checkbox">
                  </InputField>
                  <InputField label="Nhiệm vụ" id="mission-mission" styleClass="px-5 py-2" typeInput="checkbox">
                  </InputField>
                  <InputField label="Phòng ban" id="mission-department" styleClass="px-5 py-2" typeInput="checkbox">
                  </InputField>
                </details>
                <details v-for="(item, index) in authenMission.loadedDepartment"
                  :key="'loadedDepartmentMission-' + index">
                  <summary>
                    <InputField typeInput="checkbox" :label="item.name" :id="'missionModalDepartment' + index" />
                  </summary>
                  <InputField label="Tài khoản" :id="'missionModalAccount' + index" styleClass="px-5 py-2" typeInput="checkbox" />
                  <InputField label="Nhiệm vụ" :id="'missionModalMission' + index" styleClass="px-5 py-2" typeInput="checkbox" />
                </details>
              </div>
              <div class="w-50 h-full">
                <label for="chooseDepartment" class="block text-sm font-semibold text-gray-900 dark:text-white">Chọn
                  nhiệm vụ</label>
                <div class="pt-2" :key="authenMission.authenMissionKey">
                  <select id="chooseDepartment"
                    class="block w-52 p-2 mb-6 text-xs text-gray-900 border border-white rounded-lg bg-gray-50 dark:text-white">
                    <option class="text-xs" v-for="(item, index) in authenMission.missionAllList" :key="index"
                      :value="item.id">
                      <p class="p-2"> {{ item.name }} </p>
                    </option>
                  </select>
                </div>
                <!-- Modal footer -->
                <div class="absolute bottom-0 flex items-center justify-end p-2 space-x-2 rounded-b dark:border-gray-600">
                  <button type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center">Đồng
                    ý</button>
                  <button type="button"
                    class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2 hover:text-gray-900 focus:z-10">Hủy
                    bỏ</button>
                </div>
              </div>
            </div>
          </ModalContainer>
        </ShowModal>
      </div>
    </div>
    <div class="flex justify-between items-center">
      <h3 class="text-lg font-semibold">Tất cả nhiệm vụ</h3>
    </div>
    <!-- Table -->
    <div>
      <CrudTable style-class="w-full text-sm dark:text-gray-400" :totalPage="missionList.totalPage" :currentPage="1">
        <thead>
          <Row styleClass="text-sm text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <Cell v-for="(item, index) in missionList.table.head" :key="index" styleClass="px-6 py-3 text-left"
              cellType="title">
              {{ item.name }}
            </Cell>
          </Row>
        </thead>
        <tbody :key="missionAllKey">
          <Row styleClass="bg-white border-b" v-for="(item, index) in missionList.table.body" :key="index">
            <Cell styleClass="px-4 py-3">{{ index + 1 }}</Cell>
            <Cell styleClass="px-2 py-3">{{ item.missionName }}</Cell>
            <Cell styleClass="px-2 py-3">{{ item.departName }}</Cell>
            <Cell styleClass="px-2 py-3">{{ formatDate(item.missionCreatedDate) }}</Cell>
            <Cell styleClass="px-2 py-3">{{ item.missionCreatedBy }}</Cell>
            <Cell styleClass="px-2 py-3 flex">
              <div>
                <button data-modal-target="editModalMission" data-modal-toggle="editModalMission"
                  class="block w-8 mr-2 text-blue-700 bg-blue-100 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-sm rounded-lg text-xs px-2 py-1.5 text-center"
                  type="button">
                  <i class="fa-solid fa-pen"></i>
                </button>
                <!-- Main modal -->
                <div id="editModalMission" tabindex="-1" aria-hidden="true"
                  class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                  <div class="relative w-full max-w-3xl max-h-full">
                    <!-- Modal content -->
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      <!-- Modal header -->
                      <div class="flex items-start justify-between p-4 rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                          Quản lý tài khoản
                        </h3>
                        <button type="button"
                          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                          data-modal-hide="editModalMission">
                          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                          </svg>
                          <span class="sr-only">Close modal</span>
                        </button>
                      </div>
                      <!-- Modal body -->
                      <div class="p-6 space-y-6">
                        <div class="grid grid-cols-2 gap-4">
                          <div>
                            <label for="user-name"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên đăng nhập *
                            </label>
                            <input type="text" id="user-name"
                              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          </div>
                          <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mật
                              khẩu *</label>
                            <input type="text" id="password"
                              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          </div>
                          <div>
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Họ và
                              tên *</label>
                            <input type="text" id="name"
                              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          </div>
                          <div>
                            <label for="phonenummber"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Số điện thoại *</label>
                            <input type="text" id="phonenummber"
                              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          </div>
                          <div>
                            <label for="mail"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="text" id="mail"
                              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          </div>
                          <div>
                            <label for="department"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phòng ban</label>
                            <select id="department"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                              <option selected></option>
                              <option>demo</option>
                            </select>
                          </div>
                          <div>
                            <label for="localtion" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Vị
                              trí</label>
                            <select id="localtion"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                              <option selected></option>
                              <option>demo</option>
                            </select>
                          </div>
                          <div>
                            <label for="position"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Chức vụ</label>
                            <select id="position"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                              <option selected></option>
                              <option>demo</option>
                            </select>
                          </div>
                          <div>
                            <label for="status" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Trạng
                              thái</label>
                            <select id="status"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                              <option selected></option>
                              <option>demo</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <!-- Modal footer -->
                      <div class="flex items-center justify-end p-6 space-x-2 rounded-b dark:border-gray-600">
                        <button data-modal-hide="editModalMission" type="button"
                          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tiếp
                          tục</button>
                        <button data-modal-hide="editModalMission" type="button"
                          class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Hủy
                          bỏ</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button data-modal-target="deleteMissModal" data-modal-toggle="deleteMissModal"
                  class="block w-8 mr-2 text-red-700 bg-red-100 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-sm rounded-lg text-xs px-2 py-1.5 text-center"
                  type="button">
                  <i class="fa-solid fa-trash"></i>
                </button>
                <!-- Main modal -->
                <div id="deleteMissModal" tabindex="-1" aria-hidden="true"
                  class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                  <div class="relative w-full max-w-3xl max-h-full">
                    <!-- Modal content -->
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      <!-- Modal header -->
                      <div class="flex items-start justify-between p-4 rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                          Xóa nhiệm vụ này ?
                        </h3>
                        <button type="button"
                          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                          data-modal-hide="deleteMissModal">
                          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                          </svg>
                          <span class="sr-only">Close modal</span>
                        </button>
                      </div>
                      <!-- Modal body -->
                      <div class="p-6 space-y-6">
                      </div>
                      <!-- Modal footer -->
                      <div class="flex items-center justify-end p-6 space-x-2 rounded-b dark:border-gray-600">
                        <button data-modal-hide="deleteMissModal" type="button"
                          class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Tiếp
                          tục</button>
                        <button data-modal-hide="deleteMissModal" type="button"
                          class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Hủy
                          bỏ</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Cell>
          </Row>
        </tbody>
      </CrudTable>
    </div>
  </div>
</template>
<script>
import { createMissionAll, getAllMission, getAllMissionPaging } from '../../../../static/mission/api';
import { sendGetApi } from '../../../../plugins/api';
import moment from "moment";
import { getAllDepartPaging } from "../../../../static/department/api";
export default {
  async fetch() {
    try {
      var response = await getAllMissionPaging(this.storeId)
      this.missionList.table.body = response.value;
      this.missionList.totalPage = response.totalPage;
    } catch (error) {
      console.error('Lỗi:', error);
    }
  },
  data() {
    return {
      missionAllKey: 1178,
      storeId: 1,
      missionList: {
        totalPage: 0,
        table: {
          head: [
            { name: "STT" },
            { name: "Nhiệm vụ" },
            { name: "Phòng ban" },
            { name: "Ngày tạo" },
            { name: "Người tạo" },
            { name: "Thao tác" },
          ],
          body: [
            {
              name: "edit gland",
              account: "editgland",
              mail: "user@gmail.com",
              department: "Marketing",
              local: "Media",
              byDay: "14/08/2023 08:56",
              byUser: "dang",
              status: "Làm việc",
            },
          ],
        },

      },
      createMission: {
        id: "createMissionNameID",
        nameID: "createMissionNameID",
        showModalTemplate: "Tạo nhiệm vụ",
      },
      authenMission: {
        id: "authenMissionNameID",
        showModalTemplate: "Phân quyền nhiệm vụ",
        authenMissionKey: 11649,
        missionAllList: [
          {
            name: "Nhiệm vụ Media",
          }
        ],
        // Đây là phần load depaments
        loadedDepartment: [
          {
            selected: false,
            icon: "fa-solid fa-address-card",
            name: "Phòng ban",
            link: "/main/total/departments",
            id: "department-1",
            storeId: 1,
          },
        ],
      }
    };
  },
  methods: {
    formatDate(date) {
      return moment(date).format('DD/MM/YYYY HH:mm');
    },
    async createMissionFunct(storeId) {
      const data = await createMissionAll(storeId, this.missionList.table.body);
    },
    async loadMissionAuthenModal() {
      // get mission list
      var missionList = await getAllMission(this.storeId);
      this.authenMission.missionAllList = missionList.value;

      // get Department
      let url = process.env.API_URL + "api-department?storeId=" + this.storeId;
      let resp = sendGetApi(url, null);
      resp.then((resp) => {
        let data = resp.value;
        let convertFeArr = [];
        data.forEach(item => {
            convertFeArr.push({
              icon: "fa-solid fa-address-card",
              name: item.name,
              link: "/main/total/departments/" + item.keyUUID,
              id: "department" + item.keyUUID,
              storeId: this.storeId,
              selected: false,
            });
        });
        // set dât
        this.authenMission.loadedDepartment = convertFeArr;
      });
      this.authenMission.authenMissionKey++;
    }
  },
  async created() {
    var listForm = await getAllMission(this.storeId);
    this.missionList.table.body = listForm.value;
  }
}
</script>
