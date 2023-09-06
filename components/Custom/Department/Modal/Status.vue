
<template>
  <div>
    <ModalContainer :modalId="modalId" size="8xl">
      <ModalHeader :modalId="modalId" head="Cấu hình trạng thái"></ModalHeader>

      <!-- Nút tạo mới -->
      <ShowModal modalId="createStatusMission" type="custom"
        customClass="btn btn-info btn-normal rounded-lg text-white bg-blue-700 hover:bg-blue-800 border-none m-4"
        title="Tạo mới">
        <ModalContainer modalId="createStatusMission" size="lg">
          <ModalHeader head="Cấu hình trạng thái" modalId="createStatusMission"></ModalHeader>
          <InputField styleClass="p-4" id="editValue" label="" placeholder="Tên trạng thái">
          </InputField>
          <!-- sửa như tương tự nhé 1:48 05/09/2023 -->
          <div class="flex items-center p-6 space-x-2 justify-end border-gray-200 rounded-b dark:border-gray-600">
            <button data-modal-hide="createStatusMission"
              class="text-gray-500 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">
              Hủy bỏ</button>
            <button data-modal-hide="createStatusMission" type="button" @click="createConfig()"
              class="btn btn-info text-white bg-blue-700 hover:bg-blue-800 border-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Lưu</button>
          </div>
        </ModalContainer>
      </ShowModal>

      <!-- Phần hiển thị dữ liệu bảng -->
      <CrudTable style-class="w-full text-sm text-center text-gray-500" :totalPage="table.totalPage" :currentPage="1">
        <thead>
          <Row styleClass="text-sm text-gray-900 bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
            <Cell v-for="(item, index) in table.head" :key="index" styleClass="px-6 py-3 text-center" cellType="title">
              {{ item.name }}
            </Cell>
          </Row>
        </thead>
        <tbody :key="statusTableKey">
          <Row styleClass="bg-white border-b" v-for="(item, index) in table.body" :key="index"
            :id="'editStatusConfigRow' + index">
            <Cell styleClass="px-6 py-4">{{ index + 1 }}</Cell>
            <Cell styleClass="px-6 py-4">{{ item.createdAt }}</Cell>
            <Cell styleClass="px-6 py-4">{{ item.createdBy }}</Cell>
            <Cell styleClass="px-6 py-4" :id="'editStatusConfig' + index">{{ item.name }}</Cell>
            <Cell styleClass="px-6 py-4 text-green-500" cellType="status" :status="item.status ? '1' : '0'"></Cell>
            <Cell styleClass="px-6 py-4 ">
              <div class="m-auto flex justify-center">
                <!-- edit Modal -->
                <ShowModal modalId="editStatusMission" iconClass="fa-regular fa-pen-to-square">
                  <ModalContainer modalId="editStatusMission" size="lg">
                    <ModalHeader head="Cấu hình trạng thái" modalId="editStatusMission">
                    </ModalHeader>
                    <InputField styleClass="p-4" :id="'MS-' + item.id" :value="item.name" label="">
                    </InputField>
                    <div
                      class="flex items-center p-6 space-x-2 justify-end border-gray-200 rounded-b dark:border-gray-600">
                      <button data-modal-hide="editStatusMission"
                        class="text-gray-500 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">
                        Hủy bỏ</button>
                      <button data-modal-hide="editStatusMission" type="button"
                        class="btn btn-info text-white bg-blue-700 hover:bg-blue-800 border-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Lưu</button>
                    </div>
                  </ModalContainer>
                </ShowModal>
                <!-- Delete modal -->
                <ShowModal modalId="deleteStatus" iconClass="fa-solid fa-trash text-red-500">
                  <ModalContainer modalId="deleteStatus">
                    <ModalHeader head="" modalId="deleteStatus"></ModalHeader>
                    <div class="relative z-0 w-full flex pl-5 font-semibold">
                      <span class="text-lg text-rose-600"><i class="fa-solid fa-circle-exclamation mr-2"></i>Xóa trạng
                        thái
                        này</span>
                    </div>
                    <CloseOrSave modalId="deleteStatus" type="red">
                    </CloseOrSave>
                  </ModalContainer>
                </ShowModal>
              </div>
            </Cell>
          </Row>
        </tbody>
      </CrudTable>
    </ModalContainer>
  </div>
</template>

<script>
import { createConfigForDepartment, getAllConfigPagingForDepart } from "../../../../static/configuration/api";

export default {
  name: "MissionStatus",
  async fetch() {
    try {
      var response = await getAllConfigPagingForDepart(this.$route.query.id, 0, 1)
      this.table.body = response.value;
      this.table.totalPage = response.totalPage;
    } catch (error) {
      this.table.body = []
    }
  },
  data() {
    return {
      table: {
        totalPage: 0,
        // Ngày tạo	Người tạo	Tên	Trạng thái	Thao tác
        head: [
          { name: "STT" },
          { name: "Ngày tạo" },
          { name: "Người tạo" },
          { name: "Tên" },
          { name: "Trạng thái" },
          { name: "Thao tác" },
        ],
        body: []
      },
      statusTableKey: 199,
      storeId: 1,
      pageNum: 0,
      createdBy: ''
    }
  },
  props: {
    modalId: ""
  },
  methods: {
    async createConfig() {
      var data = await createConfigForDepartment(1, this.$route.query.id).then((res) => {
        const response = getAllConfigPagingForDepart(this.$route.query.id, 0, 1).then((config) => {
          this.table.body = config.value;
          this.table.totalPage = config.totalPage;
          this.statusTableKey++;
        });
      });
    }
  }
}
</script>

<style scoped></style>
