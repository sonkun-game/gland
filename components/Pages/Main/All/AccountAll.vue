<template>
  <div>
    <!-- Add account btn -->
    <!-- <div>
      <ShowModal :modalId="createAccount.id" type="html"
        customClass="block text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-3 py-2 text-center"
        :title="createAccount.showModalTemplate">
        <ModalContainer :modalId="createAccount.id" size="4xl">
          <ModalHeader head="Quản lý tài khoản" :modalId="createAccount.id"></ModalHeader>
          <div class="grid grid-cols-2">
            <InputField id="editUsernameValue" label="Tên đăng nhập *" styleClass="px-4"></InputField>
            <InputField id="editPasswordValue" label="Mật khẩu *" styleClass="px-4"></InputField>
            <InputField id="editNameValue" label="Họ tên *" styleClass="px-4"></InputField>
            <InputField id="editPhoneValue" label="Số điện thoại" styleClass="px-4"></InputField>
            <InputField id="editEmailValue" label="Email" styleClass="px-4"></InputField>
            <div class="my-2 ">
              <label for="departmentAllAcc" class="block pl-7 text-sm font-semibold text-gray-900 dark:text-white">Phòng
                ban</label>
              <div class="px-4 pt-2">
                <select id="departmentAllAcc"
                  class="block w-full p-2 text-xs text-gray-900 border border-gray-300 rounded-lg">
                  <option v-for="(item, index) in departAllList" :key="index" :value="item.id">
                    {{ item.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="my-2">
              <label for="positionAllAcc" class="block pl-7 text-sm font-medium text-gray-900 dark:text-white">Vị
                trí</label>
              <div class="px-4 pt-2">
                <select id="positionAllAcc"
                  class="block w-full p-2 text-xs text-gray-900 border border-gray-300 rounded-lg">
                  <option v-for="(item, index) in positionAllList" :key="index" :value="item.id">
                    {{ item.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="my-2">
              <label for="rollAllAcc" class="block pl-7 text-sm font-medium text-gray-900 dark:text-white">Chức vụ</label>
              <div class="px-4 pt-2">
                <select id="rollAllAcc" class="block w-full p-2 text-xs text-gray-900 border border-gray-300 rounded-lg">
                  <option v-for="(item, index) in roleAllList" :key="index" :value="item.id">
                    {{ item.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="my-2">
              <label for="statusAllAcc" class="block pl-7 text-sm font-medium text-gray-900 dark:text-white">Trạng
                thái</label>
              <div class="px-4 pt-2">
                <select id="statusAllAcc"
                  class="block w-full p-2 text-xs text-gray-900 border border-gray-300 rounded-lg">
                  <option v-for="(item, index) in statusAllList" :key="index" :value="item.id">
                    {{ item.name }}
                  </option>
                </select>
              </div>
            </div>


          </div>

          <div class="flex justify-end items-center p-6 space-x-2 border-gray-200 rounded-b dark:border-gray-600">
            <button :data-modal-hide="createAccount.id"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900">
              Hủy bỏ</button>

            <button :data-modal-hide="createAccount.id" @click="createAccountsAll(storeId)"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Lưu</button>
          </div>
        </ModalContainer>
      </ShowModal>
    </div> -->

    <!-- Searchbar -->
    <div class="flex items-center justify-between">
      <div class="my-3 w-96">
        <input type="search" placeholder="Tìm kiếm bằng tên - tài khoản" id="default-input"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark: dark:focus:border-blue-500">
      </div>
    </div>
    <!-- Table -->
    <div>
      <div>
        <CrudTable style-class="w-full text-sm dark:text-gray-400" :totalPage="accountsList.totalPage" :currentPage="1">
          <thead>
            <Row styleClass="text-sm text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <Cell v-for="(item, index) in accountsList.table.head" :key="index" styleClass="px-6 py-3 text-left"
                :class="{ 'hidden': !item.show }" cellType="title">
                {{ item.name }}
              </Cell>
            </Row>
          </thead>
          <tbody v-if="accountsList.table.head.length >= 9">
            <Row styleClass="bg-white border-b" v-for="(item, index) in accountsList.table.body" :key="index">
              <Cell styleClass="px-4 py-3">{{ index + 1 }}</Cell>
              <Cell styleClass="px-2 py-3">{{ item.fullName }}</Cell>
              <Cell styleClass="px-2 py-3">{{ item.username }}</Cell>
              <Cell styleClass="px-2 py-3">{{ item.email }}</Cell>
              <Cell styleClass="px-2 py-3">{{ item.position }}</Cell>
              <Cell styleClass="px-2 py-3">{{ formatDate(item.createdAt) }}</Cell>
              <Cell styleClass="px-2 py-3">{{ item.createdBy }}</Cell>
              <Cell styleClass="px-2 py-3 text-green-500">{{ item.status }}</Cell>
              <Cell styleClass="px-2 py-3 flex">
                <div>
                  <button data-popover-target="popover-edit" data-modal-target="editModal" data-modal-toggle="editModal"
                    class="block w-8 mr-2 text-blue-700 bg-blue-100 hover:bg-blue-700 hover:text-white  font-sm rounded-lg text-xs px-2 py-1.5 text-center"
                    type="button">
                    <i class="fa-solid fa-pen"></i>
                  </button>
                  <div data-popover id="popover-edit" role="tooltip"
                    class="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400  dark:bg-gray-800">
                    <div class="px-3 py-2">
                      <p>Chỉnh sửa</p>
                    </div>
                    <div data-popper-arrow></div>
                  </div>
                  <!-- Main modal -->
                  <div id="editModal" tabindex="-1" aria-hidden="true"
                    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class="relative w-full max-w-3xl max-h-full">
                      <!-- Modal content -->
                      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <!-- Modal header -->
                        <div class="flex items-start justify-between p-4 rounded-t ">
                          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                            Quản lý tài khoản
                          </h3>
                          <button type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center  "
                            data-modal-hide="editModal">
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
                                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs  focus:border-blue-500 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark: dark:focus:border-blue-500">
                            </div>
                            <div>
                              <label for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mật khẩu *</label>
                              <input type="text" id="password"
                                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs  focus:border-blue-500 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark: dark:focus:border-blue-500">
                            </div>
                            <div>
                              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Họ và
                                tên *</label>
                              <input type="text" id="name"
                                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs  focus:border-blue-500 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark: dark:focus:border-blue-500">
                            </div>
                            <div>
                              <label for="phonenummber"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Số điện thoại
                                *</label>
                              <input type="text" id="phonenummber"
                                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs  focus:border-blue-500 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark: dark:focus:border-blue-500">
                            </div>
                            <div>
                              <label for="mail"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                              <input type="text" id="mail"
                                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs  focus:border-blue-500 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark: dark:focus:border-blue-500">
                            </div>
                            <div>
                              <label for="department"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phòng ban</label>
                              <select id="department"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg  focus:border-blue-500 block w-full p-2 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark: dark:focus:border-blue-500">
                                <option selected></option>
                                <option value="">demo</option>
                              </select>
                            </div>
                            <div>
                              <label for="localtion"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Vị trí</label>
                              <select id="localtion"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg  focus:border-blue-500 block w-full p-2 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark: dark:focus:border-blue-500">
                                <option selected></option>
                                <option value="">demo</option>
                              </select>
                            </div>
                            <div>
                              <label for="position"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Chức vụ</label>
                              <select id="position"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg  focus:border-blue-500 block w-full p-2 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark: dark:focus:border-blue-500">
                                <option selected></option>
                                <option value="">demo</option>
                              </select>
                            </div>
                            <div>
                              <label for="status"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Trạng thái</label>
                              <select id="status"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg  focus:border-blue-500 block w-full p-2 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark: dark:focus:border-blue-500">
                                <option selected></option>
                                <option value="">demo</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <!-- Modal footer -->
                        <div class="flex items-center justify-end p-6 space-x-2 rounded-b ">
                          <button data-modal-hide="editModal" type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Tiếp
                            tục</button>
                          <button data-modal-hide="editModal" type="button"
                            class="text-gray-500 bg-white hover:bg-gray-100  rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900  ">Hủy
                            bỏ</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button data-popover-target="popover-decent" data-modal-target="decentModal"
                    data-modal-toggle="decentModal"
                    class="block w-8 mr-2 text-green-700 bg-green-100 hover:bg-green-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-sm rounded-lg text-xs px-2 py-1.5 text-center"
                    type="button">
                    <i class="fa-solid fa-user"></i>
                  </button>
                  <div data-popover id="popover-decent" role="tooltip"
                    class="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400  dark:bg-gray-800">
                    <div class="px-3 py-2">
                      <p>Phân quyền</p>
                    </div>
                    <div data-popper-arrow></div>
                  </div>
                  <!-- Main modal -->
                  <div id="decentModal" tabindex="-1" aria-hidden="true"
                    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class="relative w-full max-w-xl max-h-full">
                      <!-- Modal content -->
                      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <!-- Modal header -->
                        <div class="flex items-start justify-between p-4 rounded-t ">
                          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                            Phân quyền
                          </h3>
                          <button type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                            data-modal-hide="decentModal">
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
                          <div>
                            <details open>
                              <summary>
                                <input id="checkbox-all" type="checkbox" value=""
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded   ">
                                <label for="checkbox-all"
                                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tổng</label>
                              </summary>
                              <p class="px-5 py-2">
                                <input id="checkbox-accounts" type="checkbox" value=""
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded   ">
                                <label for="checkbox-accounts"
                                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tài khoản</label>
                              </p>
                              <p class="px-5 py-2">
                                <input id="checkbox-mission" type="checkbox" value=""
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded">
                                <label for="checkbox-mission"
                                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nhiệm vụ</label>
                              </p>
                              <p class="px-5 py-2">
                                <input id="checkbox-decent" type="checkbox" value=""
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded">
                                <label for="checkbox-decent"
                                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phòng ban</label>
                              </p>
                            </details>
                          </div>
                        </div>
                        <!-- Modal footer -->
                        <div class="flex items-center justify-end p-6 space-x-2 rounded-b ">
                          <button data-modal-hide="decentModal" type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Tiếp
                            tục</button>
                          <button data-modal-hide="decentModal" type="button"
                            class="text-gray-500 bg-white hover:bg-gray-100  rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900  ">Hủy
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
  </div>
</template>
<script>
import { getAllAccounts, getAllAccountsPaging, createAccountsAll } from '../../../../static/all/api';
import moment from "moment";
export default {
  data() {
    return {
      storeId: 1,
      accountsList: {
        totalPage: 0,
        table: {
          head: [
            {
              name: "STT",
              show: true,
            },
            {
              name: "Tên nhân viên",
              show: true,
            },
            {
              name: "Tài khoản",
              show: true,
            },
            {
              name: "Email",
              show: true,
            },
            {
              name: "Vị trí",
              show: true,
            },
            {
              name: "Ngày tạo",
              show: true,
            },
            {
              name: "Người tạo",
              show: true,
            },
            {
              name: "Trạng thái",
              show: true,
            },
            {
              name: "Thao tác",
              show: true,
            },
          ],
          body: [
            {
              name: "edit gland",
              account: "editgland",
              mail: "user@gmail.com",
              department: "Marketing",
              local: "Media",
              byDay: "14/08/2023 08:56",
              createdBy: "dang",
              status: "Làm việc",
              edit: "btn here",
            },
          ],
        },
      },
      departAllList: [
        {
          name: "Hoạt động"
        }
      ],
      positionAllList: [
        {
          name: "Hoạt động"
        }
      ],
      roleAllList: [
        {
          name: "Hoạt động"
        }
      ],
      statusAllList: [
        {
          name: "Hoạt động"
        }
      ],
      createAccount: {
        id: "createAccountNameID",
        nameID: "createAccountNameID",
        showModalTemplate: "Tạo tài khoản",
      },
    }
  },
  methods: {
    formatDate(date) {
      return moment(date).format('DD/MM/YYYY HH:mm');
    },
    createAccountsAll(storeId) {
      createAccountsAll(storeId);
    },
  },
  async mounted() {
    let resp = await getAllAccountsPaging();
    this.accountsList.totalPage = resp.totalPage;
  },

  async created() {
    var listForm = await getAllAccounts(this.storeId, this.pageNum);
    this.accountsList.table.body = listForm.value;
  }
}
</script>