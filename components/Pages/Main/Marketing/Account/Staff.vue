
<template>
    <div>
        <!-- Button tạo nhân viên -->
        <ShowModal modalId="CreateNewStaffButton" title="Tạo nhân viên" type="primary">
            <createStaffMarketingButton modalId="CreateNewStaffButton" :modal="staff.modal" :onSave="onSaveData">
            </createStaffMarketingButton>
        </ShowModal>

        <!-- List filter -->
        <div class="flex mb-4">
            <select v-for="(item, index) in staff.filter" :key="index" :id="item.id"
                class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg py-1.5 px-2.5 dark:bg-gray-700 dark:border-gray-600 mr-2">
                <option class="text-ellipsis" v-for="(optionItem, optionIndex) in item.selectOption" :key="optionIndex">
                    {{ optionItem.name }}
                </option>
            </select>

            <!-- datepicker -->
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <i class="fa-solid fa-calendar text-gray-500"></i>
                </div>
                <input datepicker type="text"
                    class="h-8 w-32 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date">
            </div>

            <div class="grow"></div>

            <!-- Search Input -->
            <div>
                <input type="search" id="first_name"
                    class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 justify-self-end"
                    placeholder="Tìm kiếm bằng tên - tài khoản">
            </div>
        </div>
        <p class="py-3.5">
            Thành viên đang hoạt động và ngừng hoạt động
        </p>

        <CrudTable style-class="w-full text-sm text-left text-gray-500">
            <Thead>
                <Row styleClass="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <Cell v-for="(item, index) in staff.table.head" :key="index" styleClass="px-6 py-3 text-left"
                        cellType="title">
                        {{ item.name }}
                    </Cell>
                </Row>
            </Thead>
            <Tbody>
                <Row styleClass="bg-white border-b" v-for="(item, index) in staff.table.body" :key="index">
                    <Cell styleClass="px-6 py-4">{{ index +1 }}</Cell>
                    <Cell styleClass="px-6 py-4">{{ item.fullName }}</Cell>
                    <Cell styleClass="px-6 py-4">{{ item.username }}</Cell>
                    <Cell styleClass="px-6 py-4">{{ item.email }}</Cell>
                    <Cell styleClass="px-6 py-4">{{ item.departmentId }}</Cell>
                    <Cell styleClass="px-6 py-4">{{ item.positionId }}</Cell>
                    <Cell styleClass="px-6 py-4">{{item.createdAt}}</Cell>
                    <Cell styleClass="px-6 py-4" cellType="status" :status="item.status"></Cell>
                    <Cell styleClass="px-6 py-4 ">
                        <div class="m-auto flex justify-center">
                            <ShowModal modalId="editStaffTableId" iconClass="fa-regular fa-pen-to-square">
                                <EditStaffModal modalId="editStaffTableId" :modal="staff.editModal" :onSave="onSaveData"></EditStaffModal>
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
import createStaffMarketingButton from '../../../../Custom/Marketing/CreateMarketingStaffModal.vue';
import EditStaffModal from '../../../../Custom/Marketing/EditStaffModal.vue';
import {getAccountsFromApi} from "static/account/api";
import moment from "moment";
import {createAccountApi} from "static/staff/api";
export default {
    name: "StaffMarketingComponent",
    components: {
        createStaffMarketingButton,
        EditStaffModal
    },
    props: {
        staff: {}
    },
    methods: {
        onSaveData() {
          console.log("TESTEEEE ");
          var data = this.staff.modal.body;
          createAccountApi();

        }
    },
  data(){
      return {
        status: '',
        name:'',
        fullName:'',
        officeId:0,
        positionId:0,
        createdAt: null,
        pageNum:0,
        storeId:1
      }
  },
  async mounted() {
    var staffs = await getAccountsFromApi(this.status, this.name, this.officeId, this.positionId, this.createdAt, this.pageNum, this.storeId, this.staff.table.body);
    this.staff.table.body = staffs;
  }
}
</script>

<style scoped></style>
