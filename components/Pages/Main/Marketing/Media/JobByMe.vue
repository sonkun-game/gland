
<template>
  <div>
    <div class="flex mb-2 justify-between">
      <!-- <button class="btn btn-outline btn-sm">Bộ lọc</button> -->
      <ShowModal type="custom"
        customClass="btn text-white font-medium rounded-lg bg-blue-700 hover:bg-blue-800 btn-normal" modalId="filterTable"
        title="Bộ lọc">
        <FilterMediaModalVue modalId="filterTable" :filter="jobByMe.filter"></FilterMediaModalVue>
      </ShowModal>
      <div class="grow"></div>
      <ShowModal type="custom"
        customClass="btn btn-info btn-normal font-medium rounded-lg bg-blue-700 hover:bg-blue-800 border-none text-white"
        modalId="createJobByMe" title="Tạo công việc">
        <CreateJobByMe modalId="createJobByMe"></CreateJobByMe>
      </ShowModal>

    </div>

    <div class="flex mb-2 justify-between pt-2">
      <ShowModal type="button" customClass="pr-4 cursor-pointer" modalId="configStatus" title="Cấu hình trạng thái">
        <Status modalId="configStatus"></Status>
      </ShowModal>
      <ShowModal type="button" customClass="link link-info pr-4 cursor-pointer" modalId="configJob"
        title="Cấu hình công việc">
        <Job modalId="configJob"></Job>
      </ShowModal>
      <ShowModal type="button" customClass="link link-info pr-4 cursor-pointer" modalId="configService"
        title="Cấu hình dịch vụ">
        <Service modalId="configService"></Service>
      </ShowModal>
      <ShowModal type="button" customClass="link link-info pr-4 cursor-pointer" modalId="configType"
        title="Cấu hình hình thức">
        <Type modalId="configType"></Type>
      </ShowModal>
      <ShowModal type="button" customClass="link link-info pr-4 cursor-pointer" modalId="configTarget"
        title="Cấu hình đối tượng">
        <Target modalId="configTarget"></Target>
      </ShowModal>
      <div class="grow"></div>
      <input type="text" placeholder="Tìm kiếm theo mã nguồn"
        class="input text-sm rounded-lg border input-sm w-full max-w-xs" />
    </div>

    <div class="flex mb-2">
      <span
        class="cursor-pointer rounded-lg p-1 mr-4 hover:text-blue-700 hover:bg-gray-300 active:bg-blue-700 active:text-white">Tất
        cả 16</span>
      <span
        class="cursor-pointer rounded-lg p-1 mr-4 hover:text-blue-700 hover:bg-gray-300 active:bg-blue-700 active:text-white">Khởi
        tạo 9</span>
      <span
        class="cursor-pointer rounded-lg p-1 mr-4 hover:text-blue-700 hover:bg-gray-300 active:bg-blue-700 active:text-white">Hủy
        5</span>
    </div>


    <CrudTable style-class="w-full text-sm text-left text-gray-500">
      <Thead>
        <Row styleClass="text-xs text-gray-900 bg-gray-300">
          <Cell v-for="(item, index) in jobByMe.table.head" :key="index" styleClass="px-6 py-3 text-center"
            cellType="title">
            {{ item.name }}
          </Cell>
        </Row>
      </Thead>
      <Tbody>
        <Row styleClass="bg-white border-b" v-for="(item, index) in jobByMe.table.body" :key="index">
          <Cell styleClass="px-6 py-4">{{ index + 1 }}</Cell>
          <Cell styleClass="px-6 py-4">
            <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" class="link link-info">{{ item.code
            }}</button>
            <div id="defaultModal" tabindex="-1" aria-hidden="true"
              class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
              <div class="relative w-full max-w-6xl h-auto">

                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 overflow-y-auto">

                  <div class="flex items-start justify-between p-4 rounded-t dark:border-gray-600">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                      Marketing / Media / <span class="text-blue-700">MD37</span>
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
                      <button type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="defaultModal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                          viewBox="0 0 14 14">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                      </button>
                    </div>
                  </div>

                  <div class="p-3 space-y-3">
                    <div class="flex items-center">
                      <div class="flex mr-60">
                        <div class="w-80">
                          <input placeholder="Tên/Thông tin" type="text" id="default-input"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                      </div>
                      <div class="w-52">
                        <select
                          class="bg-white border-1 border-blue-700 text-blue-700 text-sm font-semibold rounded-lg block w-full p-2.5">
                          <option class="text-gray-700" selected>Trạng thái</option>
                          <option class="text-gray-700" value="">Demo</option>
                          <option class="text-gray-700" value="">Demo</option>
                          <option class="text-gray-700" value="">Demo</option>
                          <option class="text-gray-700" value="">Demo</option>
                        </select>
                      </div>
                    </div>
                    <div class="flex justify-between">
                      <div class="text-left ">
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
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Chọn ngày">
                          </div>
                        </div>
                        <div class="mb-3">
                          <label for="small-input"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Link</label>
                          <input type="text" id="small-input"
                            class="block w-full p-2.5 mb-6 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                        <div class="">
                          <label for="message"
                            class="block mb-2 text-base font-semibold text-gray-700 dark:text-white">Ghi
                            chú</label>
                          <textarea id="message" rows="4"
                            class="block p-2.5 w-full max-h-28 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Ghi chú..."></textarea>
                        </div>
                      </div>
                      <div class="w-50 h-auto max-h-[420px] overflow-y-auto">
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
                                class="block w-full p-2.5 mb-6 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            </div>
                            <div>
                              <label for="give" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Giao cho</label>
                              <select id="give"
                                class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected></option>
                                <option value="">demo</option>
                                <option value="">demo</option>
                              </select>
                            </div>
                            <div>
                              <label for="entity" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Đối tượng</label>
                              <select id="entity"
                                class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected></option>
                                <option value="">demo</option>
                                <option value="">demo</option>
                              </select>
                            </div>
                            <div>
                              <label for="type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Dịch vụ</label>
                              <select id="type"
                                class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected></option>
                                <option value="">demo</option>
                                <option value="">demo</option>
                              </select>
                            </div>
                            <div>
                              <label for="type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Loại công việc</label>
                              <select id="type"
                                class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected></option>
                                <option value="">demo</option>
                                <option value="">demo</option>
                              </select>
                            </div>
                            <div>
                              <label for="type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Nhân viên</label>
                              <select id="type"
                                class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected></option>
                                <option value="">demo</option>
                                <option value="">demo</option>
                              </select>
                            </div>
                            <div>
                              <label for="type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Hình thức</label>
                              <select id="type"
                                class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected></option>
                                <option value="">demo</option>
                                <option value="">demo</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="flex justify-end items-center p-6 space-x-2 border-gray-200 rounded-b dark:border-gray-600">
                    <button data-modal-hide="defaultModal" type="button"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Đồng
                      ý</button>
                    <button data-modal-hide="defaultModal" type="button"
                      class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Hủy
                      bỏ</button>
                  </div>
                </div>
              </div>
            </div>
          </Cell>
          <Cell styleClass="px-6 py-4">{{ item.info }}</Cell>
          <Cell styleClass="px-6 py-4">{{ item.target }}</Cell>
          <Cell styleClass="px-6 py-4">{{ item.jobType }}</Cell>
          <Cell styleClass="px-6 py-4">{{ item.serviceType }}</Cell>
          <Cell styleClass="px-6 py-4">{{ item.service }}</Cell>
          <Cell styleClass="px-6 py-4">{{ item.creator }}</Cell>
          <Cell styleClass="px-6 py-4">{{ item.deleveriedTo }}</Cell>
          <Cell styleClass="px-6 py-4">{{ item.result }}</Cell>
          <Cell styleClass="px-6 py-4">{{ item.deadline }}</Cell>
          <Cell styleClass="px-6 py-4 text-green-400">{{ item.in }}</Cell>
          <Cell styleClass="px-6 py-4 text-red-400">{{ item.out }}</Cell>
          <Cell styleClass="px-6 py-4">{{ item.status }}</Cell>
          <Cell styleClass="px-6 py-4 ">
            <div class="w-24 m-auto flex justify-center flex-wrap">
              <ShowModal modalId="" iconClass="fa-solid fa-clock-rotate-left">
              </ShowModal>
              <ShowModal modalId="" iconClass="fa-solid fa-dollar-sign">
              </ShowModal>
              <ShowModal modalId="" iconClass="fa-solid fa-rotate-right">
              </ShowModal>
              <ShowModal modalId="" iconClass="fa-solid fa-file">
              </ShowModal>
              <ShowModal modalId="deleteStaffTableId" iconClass="fa-solid fa-trash text-red-500">
                <ConfirmModal modalId="deleteStaffTableId" title="Xóa nhân viên" type="red"
                  message="Bạn có chắc xóa nhân viên này" messageClass="text-lg text-rose-600">
                </ConfirmModal>
              </ShowModal>
            </div>
          </Cell>
        </Row>
      </tbody>
    </CrudTable>


  </div>
</template>

<script>
import FilterMediaModalVue from '../../../../Custom/Marketing/FilterMediaModal.vue';
import CreateJobByMe from '../../../../Custom/Marketing/CreateJobByMe.vue';
import Status from './Modal/Status.vue';
import Job from './Modal/Job.vue';
import Service from './Modal/Service.vue';
import Type from './Modal/Type.vue';
import Target from './Modal/Target.vue';

export default {
  name: "JobByMeComponent",
  components: {
    FilterMediaModalVue,
    CreateJobByMe,
    Status,
    Job,
    Service,
    Type,
    Target,
  },
  data() {
    return {
      jobByMe: {
        modal: {
          head: {
            title: "Quản lý nhân viên",
          },
          body: [
            {
              id: "email",
              name: "Email",
              placeholder: "Nhập email",
            },
            {
              id: "staff",
              name: "Vị trí",
              placeholder: "Nhập vị trí",
              type: "select",
              selectOption: [
                {
                  value: "1",
                  name: "Sale",
                },
                {
                  value: "2",
                  name: "Marketing",
                },
              ],
            },
          ],
        },
        filter: [
          {
            id: "target",
            placeholder: "Đối tượng",
            selectOption: [
              {
                value: '1',
                name: "Khách hàng"
              },
              {
                value: '2',
                name: "Chủ nhà"
              },
              {
                value: '3',
                name: "Nhân viên"
              }
            ]
          },
          {
            id: "service",
            placeholder: "Loại hình dịch vụ",
            selectOption: [
              {
                value: '1',
                name: "Văn phòng"
              },
              {
                value: '2',
                name: "Nhà phố"
              },
              {
                value: '3',
                name: "Mặt bằng"
              },
              {
                value: '4',
                name: "Chung cư"
              },
              {
                value: '5',
                name: "Nhà trọ"
              },
            ]
          },
          {
            id: "type",
            placeholder: "Hình thức dịch vụ",
            selectOption: [
              {
                value: '1',
                name: "Cho thuê"
              },
              {
                value: '2',
                name: "Thuê"
              },
              {
                value: '3',
                name: "Bán"
              },
              {
                value: '4',
                name: "Mua"
              },
            ]
          },
          {
            id: "jobType",
            placeholder: "Loại công việc",
            selectOption: [
              {
                value: '1',
                name: "Chạy ads"
              },
              {
                value: '2',
                name: "Chạy ads fb"
              },
            ]
          },
        ],
        table: {
          head: [
            // STT	Mã nguồn	Tên/Thông tin	Đối tượng	Loại công việc	Loại hình dịch vụ	Hình thức dịch vụ	Người tạo	Giao cho	K/q công việc	Deadline	Thu	Chi	Trạng thái	Thao tác
            { name: "STT" },
            { name: "Mã nguồn" },
            { name: "Tên/Thông tin" },
            { name: "Đối tượng" },
            { name: "Loại công việc" },
            { name: "Loại hình dịch vụ" },
            { name: "Hình thức dịch vụ" },
            { name: "Người tạo" },
            { name: "Giao cho" },
            { name: "K/q công việc" },
            { name: "Deadline" },
            { name: "Thu" },
            { name: "Chi" },
            { name: "Trạng thái" },
            { name: "Thao tác" },
          ],
          body: [
            {
              id: "1",
              code: "MD37",
              info: "MD11",
              target: "Khách hàng",
              jobType: "Chaỵ ads",
              serviceType: "Phòng trọ",
              service: "Thuê",
              creator: "Đức Hân",
              deleveriedTo: "Đức Hân",
              result: "15",
              deadline: "",
              in: "0",
              out: "0",
              status: "1"
            },
          ],
        },
        editModal: {
          head: {
            title: "",
          },
          body: [],
        },
      },
    }
  },
}
</script>

<style scoped></style>
