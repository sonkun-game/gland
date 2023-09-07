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
      <!-- Phân quyền nhiệm vụ -->
      <!-- <div>
        <ShowModal :modalId="authenMission.id" type="custom" :title="authenMission.showModalTemplate"
          @modal-toggle="loadMissionAuthenModal()"
          customClass="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center">
          <ModalContainer :modalId="authenMission.id" size="2xl">
            <ModalHeader head="Phân quyền nhiệm vụ" :modalId="authenMission.id"></ModalHeader>
            <div class="px-6 pt-2 space-y-6 flex justify-between">
              <div class="w-50 mb-8">
                <details open>
                  <summary>
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
                  <InputField label="Tài khoản" :id="'missionModalAccount' + index" styleClass="px-5 py-2"
                    typeInput="checkbox" />
                  <InputField label="Nhiệm vụ" :id="'missionModalMission' + index" styleClass="px-5 py-2"
                    typeInput="checkbox" />
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
      </div> -->
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
            <!-- Mã nhiệm vụ -->
            <Cell styleClass="px-4 py-3">
              <button type="button" @click="toggleModal('codeMission' + index)" class="link link-info">GL{{item.id}}
              </button>
              <div :id="'codeMission' + index" tabindex="-1"
                class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full hidden">
                <div class="relative w-full max-w-6xl h-auto m-auto">
                  <div class="relative bg-white rounded-lg shadow overflow-y-auto">
                    <div class="flex items-start justify-between p-4 rounded-t dark:border-gray-600">
                      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                        Nhiệm vụ/<span class="text-blue-700">MD34</span>
                      </h3>
                      <div class="flex item-center">
                        <div class="flex">
                          <button
                            class="block w-8 mr-2 text-blue-700 bg-blue-100 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-sm rounded-lg text-xs px-2 py-1.5 text-center"
                            type="button">
                            <i class="fa-solid fa-file"></i>
                          </button>
                          <button
                            class="block w-8 mr-2 text-blue-700 bg-blue-100 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-sm rounded-lg text-xs px-2 py-1.5 text-center"
                            type="button">
                            <i class="fa-solid fa-dollar-sign"></i>
                          </button>
                          <button
                            class="block w-8 mr-2 text-blue-700 bg-blue-100 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-sm rounded-lg text-xs px-2 py-1.5 text-center"
                            type="button">
                            <i class="fa-solid fa-rotate-left"></i>
                          </button>
                          <button
                            class="block w-8 mr-2 text-blue-700 bg-blue-100 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-sm rounded-lg text-xs px-2 py-1.5 text-center"
                            type="button">
                            <i class="fa-solid fa-clock-rotate-left"></i>
                          </button>
                          <button
                            class="block w-8 mr-2 text-red-700 bg-red-100 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-sm rounded-lg text-xs px-2 py-1.5 text-center"
                            type="button">
                            <i class="fa-solid fa-trash"></i>
                          </button>
                        </div>

                      </div>
                    </div>
                    <!-- Chi tiết -->
                    <div class="p-3 space-y-3">
                      <div class="flex justify-between">
                        <div class="text-left ">
                          <div>
                            <button type="button"
                              class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Tạo
                              nhiệm vụ</button>
                          </div>
                          <h3 class="text-base my-3 font-semibold text-gray-700 dark:text-white">Ngày bắt đầu: 14/8/2023
                          </h3>
                          <div class="flex items-center mb-3">
                            <h3 class="text-base mr-2 font-semibold text-gray-700 dark:text-white">Ngày kết thúc:</h3>
                            <div class="relative max-w-xs">
                              <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                  <path
                                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                              </div>
                              <input datepicker type="text"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
                                placeholder="Chọn ngày">
                            </div>
                          </div>
                          <div class="mb-3">
                            <label for="small-input"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Link</label>
                            <input type="text" id="small-input"
                              class="block w-full p-2.5 mb-6 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs">
                          </div>
                          <div class="mb-3">
                            <label for="message"
                              class="block mb-2 text-base font-semibold text-gray-700 dark:text-white">Ghi
                              chú</label>
                            <textarea id="message" rows="4"
                              class="block p-2.5 w-full max-h-28 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 "
                              placeholder="Ghi chú..."></textarea>
                          </div>
                        </div>
                        <div class="w-50 h-auto max-h-[420px] overflow-y-auto">
                          <div class="w-52 pb-4">
                            <select
                              class="bg-white border-1 border-blue-700 text-blue-700 text-sm font-semibold rounded-lg block w-full p-2.5">
                              <option class="text-gray-700" selected>Trạng thái</option>
                              <option class="text-gray-700" value="">Demo</option>
                            </select>
                          </div>
                          <div class="border-1 rounded-lg">

                            <div class="text-left border-b text-lg font-semibold text-gray-700">

                              <div class="ml-3 py-2">Chi tiết</div>
                            </div>
                            <div class="text-left mx-2 my-2 text-lg">
                              <div>
                                <label for="small-input"
                                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Người
                                  tạo</label>
                                <input type="text" id="small-input"
                                  class="block w-full p-2.5 mb-6 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs">
                              </div>
                              <div>
                                <label for="give" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                  Giao cho</label>
                                <select id="give"
                                  class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50">
                                  <option selected></option>
                                  <option value="">demo</option>
                                  <option value="">demo</option>
                                </select>
                              </div>
                              <div>
                                <label for="entity" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                  Đối tượng</label>
                                <select id="entity"
                                  class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50">
                                  <option selected></option>
                                  <option value="">demo</option>
                                  <option value="">demo</option>
                                </select>
                              </div>
                              <!-- <div>
                                <label for="type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                  Dịch vụ</label>
                                <select id="type"
                                  class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 ">
                                  <option selected></option>
                                  <option value="">demo</option>
                                  <option value="">demo</option>
                                </select>
                              </div> -->
                              <div>
                                <label for="type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                  Loại công việc</label>
                                <select id="type"
                                  class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 ">
                                  <option selected></option>
                                  <option value="">demo</option>
                                  <option value="">demo</option>
                                </select>
                              </div>
                              <!-- <div>
                                <label for="type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                  Hình thức</label>
                                <select id="type"
                                  class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 ">
                                  <option selected></option>
                                  <option value="">demo</option>
                                  <option value="">demo</option>
                                </select>
                              </div> -->
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Child issues: Nhiệm vụ con :V -->
                    <div class="px-3 max-w-xl w-auto">
                      <label for="progress" class="block mb-2 text-base font-semibold text-gray-700 dark:text-white">Tiến
                        độ công
                        việc</label>
                      <div id="progress" class="p-3 mb-2 text-sm text-blue-800 rounded-lg bg-blue-50 " role="alert">
                        <div class="flex justify-between">
                          <span class="font-medium">Demo task</span>
                          <div>
                            <i class="fa-solid fa-equals text-yellow-300 font-bold text-base mr-2"></i>
                            <span class="text-green-200 font-medium bg-green-500 rounded px-1.5">Hoàn thành</span>
                          </div>
                        </div>
                      </div>
                      <div id="progress" class="p-3 mb-2 text-sm text-blue-800 rounded-lg bg-blue-50 " role="alert">
                        <div class="flex justify-between">
                          <span class="font-medium">Demo task 1</span>
                          <div>
                            <i class="fa-solid fa-equals text-yellow-300 font-bold text-base mr-2"></i>
                            <span class="text-yellow-200 font-medium bg-yellow-500 rounded px-1.5">Đang tiến
                              hành</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="flex justify-end items-center p-6 space-x-2 border-gray-200 rounded-b dark:border-gray-600">
                      <button @click="toggleModal('codeMission' + index)" type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Đồng
                        ý</button>
                      <button @click="toggleModal('codeMission' + index)" type="button"
                        class="text-gray-500 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Hủy
                        bỏ</button>
                    </div>
                  </div>
                </div>
              </div>
            </Cell>
            <Cell styleClass="px-2 py-3">{{ item.name }}</Cell>
            <Cell styleClass="px-2 py-3">{{ item.assignee }}</Cell>
            <Cell styleClass="px-2 py-3">{{ item.priority }}</Cell>
            <Cell styleClass="px-2 py-3">{{ item.deadline }}</Cell>
            <!-- <Cell styleClass="px-2 py-3">{{ item.description }}</Cell>
            <Cell styleClass="px-2 py-3">{{ formatDate(item.missionCreatedDate) }}</Cell>
            <Cell styleClass="px-2 py-3">{{ item.missionCreatedBy }}</Cell> -->
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
                              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500">
                          </div>
                          <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mật
                              khẩu *</label>
                            <input type="text" id="password"
                              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500">
                          </div>
                          <div>
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Họ và
                              tên *</label>
                            <input type="text" id="name"
                              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500">
                          </div>
                          <div>
                            <label for="phonenummber"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Số điện thoại *</label>
                            <input type="text" id="phonenummber"
                              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500">
                          </div>
                          <div>
                            <label for="mail"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="text" id="mail"
                              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500">
                          </div>
                          <div>
                            <label for="department"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phòng ban</label>
                            <select id="department"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2">
                              <option selected></option>
                              <option>demo</option>
                            </select>
                          </div>
                          <div>
                            <label for="localtion" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Vị
                              trí</label>
                            <select id="localtion"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2">
                              <option selected></option>
                              <option>demo</option>
                            </select>
                          </div>
                          <div>
                            <label for="position"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Chức vụ</label>
                            <select id="position"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg block w-full p-2">
                              <option selected></option>
                              <option>demo</option>
                            </select>
                          </div>
                          <div>
                            <label for="status" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Trạng
                              thái</label>
                            <select id="status"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg block w-full p-2 dark:bg-gray-700 dark:border-gray-600">
                              <option selected></option>
                              <option>demo</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <!-- Modal footer -->
                      <div class="flex items-center justify-end p-6 space-x-2 rounded-b dark:border-gray-600">
                        <button data-modal-hide="editModalMission" type="button"
                          class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Tiếp
                          tục</button>
                        <button data-modal-hide="editModalMission" type="button"
                          class="text-gray-500 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Hủy
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
                          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
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
                          class="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Tiếp
                          tục</button>
                        <button data-modal-hide="deleteMissModal" type="button"
                          class="text-gray-500 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Hủy
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

import moment from "moment";
import { getAllMissionPagingForDepart } from "../../../../static/department/api_mission";
import {createTaskForDepartment, getTaskListPaging} from "../../../../static/task/api";
export default {
  async fetch() {
    try {
      var response = await getTaskListPaging(this.$route.params.dpt, this.pageNum, null, null);
      this.missionList.table.body = response.value;
      this.missionList.totalPage = response.totalPage;
    } catch (error) {
      console.error('Lỗi:', error);
    }
  },
  data() {
    return {
      pageNum: 0,
      missionAllKey: 1178,
      storeId: 1,
      missionList: {
        totalPage: 0,
        table: {
          head: [
            { name: "STT" },
            { name: "Mã nhiệm vụ" },
            { name: "Nhiệm vụ" },
            { name: "Giao cho" },
            { name: "Độ ưu tiên" },
            { name: "Deadline" },
            // { name: "Mô tả" },
            // { name: "Ngày tạo" },
            // { name: "Người tạo" },
            { name: "Thao tác" },
          ],
          body: [],
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
    toggleModal(id) {
      var modal = document.getElementById(`${id}`);
      if (modal.classList.contains('hidden')) {
        modal.classList.remove("hidden");
      } else {
        modal.classList.add("hidden");
      }
    },
    async createMissionFunct() {
      var response = await createTaskForDepartment(this.$route.params.dpt)
      this.missionList.table.body = response.data.value;
      this.missionList.totalPage = response.data.totalPage;
    },
    async loadMissionAuthenModal() {

    }
  },
  async created() {

  }
}
</script>
