
<template>
  <div>
    <ModalContainer :modalId="modalId" size="8xl">
      <ModalHeader :modalId="modalId" head="Cấu hình trạng thái"></ModalHeader>
      <!-- Nút tạo mới -->
      <ShowModal :modalId="createId" type="custom"
        customClass="btn btn-info btn-normal rounded-lg text-white bg-blue-700 hover:bg-blue-800 border-none m-4"
        title="Tạo mới">
        <ModalContainer :modalId="createId" size="lg">
          <ModalHeader head="Cấu hình trạng thái" :modalId="createId"></ModalHeader>
          <InputField styleClass="p-4" id="editValue" label="" placeholder="Tên trạng thái">
          </InputField>
          <div class="flex items-center p-6 space-x-2 justify-end border-gray-200 rounded-b dark:border-gray-600">
            <button :data-modal-hide="createId"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
              Hủy bỏ</button>
            <button :data-modal-hide="createId" type="button" @click="createStatusMediaConfig(storeId)"
              class="btn btn-info text-white bg-blue-700 hover:bg-blue-800 border-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Lưu</button>
          </div>
        </ModalContainer>
      </ShowModal>

      <!-- Phần hiển thị dữ liệu bảng -->
      <CrudTable style-class="w-full text-sm text-center text-gray-500">
        <Thead>
          <Row styleClass="text-sm text-gray-900 bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
            <Cell v-for="(item, index) in table.head" :key="index" styleClass="px-6 py-3 text-center" cellType="title">
              {{ item.name }}
            </Cell>
          </Row>
        </Thead>
        <Tbody :key="statusKey">
          <Row styleClass="bg-white border-b" v-for="(item, index) in table.body" :key="index"
            :id="'editStatusConfigRow' + index">
            <Cell styleClass="px-6 py-4">{{ index + 1 }}</Cell>
            <Cell styleClass="px-6 py-4">{{ formatDate(item.createdAt) }}</Cell>
            <Cell styleClass="px-6 py-4">{{ item.createdBy }}</Cell>
            <Cell styleClass="px-6 py-4" :id="'editStatusConfig' + index">{{ item.name }}</Cell>
            <Cell styleClass="px-6 py-4" cellType="status" :status="item.status ? '1' : '0'"></Cell>
            <Cell styleClass="px-6 py-4">
              <div class="m-auto flex justify-center">
                <!-- edit Modal -->
                <ShowModal :modalId="getEditId(item.id)" iconClass="fa-regular fa-pen-to-square">
                  <ModalContainer :modalId="getEditId(item.id)" size="lg">
                    <ModalHeader head="Cấu hình trạng thái" :modalId="getEditId(item.id)" @modal-header-close="toggleEditModal(item.id)"
                      >
                    </ModalHeader>
                    <InputField styleClass="p-4" :id="'MS-' + item.id" :value="item.name" label="">
                    </InputField>
                    <div
                      class="flex items-center p-6 space-x-2 justify-end border-gray-200 rounded-b dark:border-gray-600">
                      <button :data-modal-hide="getEditId(item.id)" @click="toggleEditModal(item.id)"
                        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                        Hủy bỏ</button>
                      <button :data-modal-hide="getEditId(item.id)" type="button" @click="editStatus(item.id, index)"
                        class="btn btn-info text-white bg-blue-700 hover:bg-blue-800 border-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Lưu</button>
                    </div>
                  </ModalContainer>
                </ShowModal>
                <!-- Delete modal -->
                <ShowModal :modalId="getDeleteId(item.id)" iconClass="fa-solid fa-trash text-red-500">
                  <ModalContainer :modalId="getDeleteId(item.id)">
                    <ModalHeader head="" :modalId="getDeleteId(item.id)"></ModalHeader>
                    <div class="relative z-0 w-full flex pl-5 font-semibold">
                      <span class="text-lg text-rose-600"><i class="fa-solid fa-circle-exclamation mr-2"></i>Xóa
                        trạng
                        thái
                        này</span>
                    </div>
                    <CloseOrSave :modalId="getDeleteId(item.id)" type="red">
                    </CloseOrSave>
                  </ModalContainer>
                </ShowModal>
              </div>
            </Cell>
          </Row>
        </Tbody>
      </CrudTable>
    </ModalContainer>
  </div>
</template>

<script>
import { createStatusMediaConfig, deleteStatusMediaConfig, getStatusMediaConfig, editStatusMediaConfig } from "static/config/status/api";
import moment from "moment";

export default {
  name: "MarketingStatusPage",
  data() {
    return {
      createId: "createMarketingStatusId",
      tbodyId: "statusBodyId",
      storeId: 1,
      pageNum: 0,
      createdBy: '',
      statusKey: 1,
      table: {
        head: [
          { name: "STT" },
          { name: "Ngày tạo" },
          { name: "Người tạo" },
          { name: "Tên" },
          { name: "Trạng thái" },
          { name: "Thao tác" },
        ],
        body: [
          {
            id: "",
            date: "04/07/2023 21:50",
            creator: "Giang Nguyen",
            name: "Fail",
            status: "1"
          }
        ]
      },
    }
  },
  props: {
    modalId: ""
  },
  methods: {
    // crud
    createStatusMediaConfig(storeId) {
      let newName = document.getElementById("editValue").value;
      createStatusMediaConfig(storeId)
      var list = [];
      console.log(newName);
      list.push({
        id: "",
        date: moment(new Date()).format('DD/MM/YYYY HH:mm'),
        creator: "Son",
        name: newName,
        status: "1"
      });
      for (const index in this.table.body) {
        list.push(this.table.body[index])
      }
      console.log(list);
      this.table.body = list;
      this.statusKey += 1;
    },
    editStatus(id, index) {
      console.log("editStatus ------------------>");
      var newName = document.getElementById('MS-' + id).value
      const resp = editStatusMediaConfig(id, newName);
      if (resp.status !== "fail") {
        this.table.body[index].name = newName;
      }
      this.statusKey += 1;
    },
    deleteStatus(id, index) { },

    // open or show up event
    toggleEditModal(id) {
      id = this.getEditId(id);
      var modal = document.getElementById(id);
      if (modal) {
        if (modal.classList.contains('hidden')) {
          modal.classList.remove("hidden")
        } else {
          modal.classList.add("hidden")
        }
      }
    },
    formatDate(date) {
      return moment(date).format('DD/MM/YYYY HH:mm');
    },
    getEditId(id) {
      return "editMarketingStatus" + id;
    },
    getDeleteId(id) {
      return "deleteMarketingStatus" + id;
    },
  },
  async created() {
    var listStatus = await getStatusMediaConfig(this.pageNum, this.storeId);
    this.table.body = listStatus;
  }
}
</script>

<style scoped></style>
