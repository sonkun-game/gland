
<template>
    <div class="p-8 text-white">
        <nav class="flex justify-between">
            <h1 class="font-bold text-4xl">Nhân sự</h1>
            <ShowModal modalId="createStaffBtnId" type="custom"
                customClass="bg-blue-500 rounded-lg px-4 py-1 text-lg font-bold"
                title="Tạo nhân sự">
                <ModalContainer modalId="createStaffBtnId" size="xl" :isDark="true">
                    <ModalHeader :isDark="true" class="bg-gray-900" head="Tạo nhân sự" modalId="createStaffBtnId"></ModalHeader>
                    <div class="flex flex-wrap">
                        <InputField :isDark="true" styleClass="p-2 w-50" id="staffName" label="Tên tài khoản"  placeholder="Tên nhân viên" />
                        <InputField :isDark="true" styleClass="p-2 w-50" id="staffEmail" label="Email" placeholder="Email nhân viên" />
                        <InputField :isDark="true" styleClass="p-2 w-50" id="staffScript" label="Kịch bản" placeholder="Kịch bản" />
                        <InputField :isDark="true" styleClass="p-2 w-50" id="staffPassword" label="Mật khẩu"  placeholder="Password" />
                    </div>

                <div class="flex items-center p-6 space-x-2 justify-end border-gray-200 rounded-b dark:border-gray-600">
                    <button data-modal-hide="createStaffBtnId"
                    class="text-gray-500 bg-tranparent hover:bg-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">
                    Hủy bỏ</button>
                    <button data-modal-hide="createStaffBtnId" type="button" @click="createStaff()"
                    class="btn btn-info text-white bg-blue-700 hover:bg-blue-400 border-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Lưu</button>
                </div>
                </ModalContainer>
            </ShowModal>
        </nav>

        <CrudTable style-class="w-full text-sm text-left text-gray-500">
            <thead>
                <Row styleClass="text-sm text-gray-900 text-white" style="background-color: #1d2432;">
                    <Cell v-for="(item, index) in table.head" :key="index" styleClass="px-6 py-3"
                        :class="{ 'hidden': !item.show }" cellType="title">
                        {{ item.name }}
                    </Cell>
                </Row>
            </thead>
            <tbody>
                <Row styleClass="bg-gray-900 border-b text-white" v-for="(item, index) in table.body" :key="index">
                    <Cell styleClass="px-6 py-4">{{ index + 1 }}</Cell>
                    <Cell styleClass="px-6 py-4">{{ item.username }}</Cell>
                    <Cell styleClass="px-6 py-4">{{ item.createdBy }}</Cell>
                    <Cell styleClass="px-6 py-4">{{ item.createdAt }}</Cell>
                    <Cell styleClass="px-2 py-3 flex">
                        <div>
                            <button data-popover-target="popover-edit" data-modal-target="editModal"
                                data-modal-toggle="editModal"
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
                            </div>
                        </div>
                    </Cell>
                </Row>
            </tbody>
        </CrudTable>

    </div>
</template>

<script>
import {createStaffsAll, getAllStaffsPaging} from "../../../../../static/account/staff";

export default {
    name: "ListDepartmentPeoplePageV2",
    layout: "main_v2",
  async fetch() {
    try {
      var response = await getAllStaffsPaging(this.storeId, this.pageNum, this.id);
      this.table.body = response.value;
      this.totalPage = response.totalPage;
    } catch (error) {
      console.error('Lỗi:', error);
    }
  },
    data() {
        return {
            id: this.$route.query.id,
            storeId: 1,
            pageNum: 0,
            totalPage:0,
            table: {
                head: [
                    {
                        name: "STT",
                        show: true,
                    },
                    {
                        name: "Tên nhân sự",
                        show: true,
                    },
                    {
                        name: "Người tạo",
                        show: true,
                    },
                    {
                        name: "Ngày tạo",
                        show: true,
                    },
                    {
                        name: "Thao tác",
                        show: true,
                    },
                ],
                body: [],
            },
        }
    },
    methods: {
      async createStaff() {
        var response = await createStaffsAll(this.storeId, this.id);
        this.table.body = response.data.value;
        this.totalPage = response.data.totalPage;
      }
    }
}
</script>

<style scoped></style>





