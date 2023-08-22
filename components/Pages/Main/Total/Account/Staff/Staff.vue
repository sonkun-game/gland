
<template>
  <div>
    <!-- Button tạo chức vụ-->
    <ShowModal modalId="CreateNewStaffButton" title="Tạo nhân viên" type="primary">
      <CreateStaffModal modalId="CreateNewStaffButton" :modal="staff.modal" :onSave="onSaveData"></CreateStaffModal>
    </ShowModal>

    <!-- List filter -->
    <div class="flex">
      <select v-for="(item, index) in staff.staffFilter" :key="index" :id="item.id"
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
          <Cell v-for="(item, index) in staff.table.head" :key="index" styleClass="px-6 py-3 text-left" cellType="title">
            {{ item.name }}
          </Cell>
        </Row>
      </Thead>
      <Tbody>
        <Row styleClass="bg-white border-b" v-for="(item, index) in staff.table.body" :key="index">
          <Cell styleClass="px-6 py-4">{{ index }}</Cell>
          <Cell styleClass="px-6 py-4">{{ item.name }}</Cell>
          <Cell styleClass="px-6 py-4">{{ item.username }}</Cell>
          <Cell styleClass="px-6 py-4">{{ item.email }}</Cell>
          <Cell styleClass="px-6 py-4">{{ item.department }}</Cell>
          <Cell styleClass="px-6 py-4">{{ item.position }}</Cell>
          <Cell styleClass="px-6 py-4">{{ item.updateTime }}</Cell>
          <Cell styleClass="px-6 py-4" cellType="status" :status="item.status"></Cell>
          <Cell styleClass="px-6 py-4 ">
            <div class="m-auto flex justify-center">
              <ShowModal modalId="editStaffTableId" iconClass="fa-regular fa-pen-to-square">
                <EditStaffModal modalId="editStaffTableId" :modal="staff.editModal"></EditStaffModal>
              </ShowModal>
              <ShowModal modalId="deleteStaffTableId" iconClass="fa-solid fa-trash text-red-500">
                <ConfirmModal  modalId="deleteStaffTableId" title="Xóa nhân viên" type="red"
                  message="Bạn có chắc xóa nhân viên này" messageClass="text-lg text-rose-600"></ConfirmModal>
              </ShowModal>
            </div>
          </Cell>
        </Row>
      </tbody>
    </CrudTable>
  </div>
</template>

<script>
import EditStaffModal from '../../../../../Custom/Staff/EditStaffModal.vue';
import CreateStaffModal from '../../../../../Custom/Staff/CreateStaffModal.vue';

export default {
  name: "StaffPage",
  components: {
    EditStaffModal,
    CreateStaffModal
  },
  methods: {
    onSaveData() {
      console.log("Create New Staff At Staff.vue");
    }
  },
  mounted() {
    // this.$store.dispatch('fetchStaffTableAPI');
  },
  props: {
    staff: {}
  },
}
</script>
