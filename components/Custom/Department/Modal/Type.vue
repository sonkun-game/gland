
<template>
  <div>
    <ModalContainer :modalId="modalId" size="8xl">
      <ModalHeader :modalId="modalId" head="Cấu hình hình thức"></ModalHeader>
      <ShowModal modalId="createTypeMission" type="custom"
        customClass="btn btn-info btn-normal rounded-lg bg-blue-700 hover:bg-blue-800 border-none text-white m-4"
        title="Tạo mới">
        <ModalContainer modalId="createTypeMission" size="lg">
          <ModalHeader head="Cấu hình hình thức" modalId="createTypeMission"></ModalHeader>
          <InputField styleClass="p-4" id="editValue" label="" placeholder="Tên hình thức">
          </InputField>
          <div class="flex items-center p-6 space-x-2 justify-end border-gray-200 rounded-b dark:border-gray-600">
            <button data-modal-hide="createTypeMission"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">
              Hủy bỏ</button>
            <button data-modal-hide="createTypeMission" type="button" @click="createConfig()"
              class="btn btn-info text-white bg-blue-700 hover:bg-blue-800 border-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Lưu</button>
          </div>
        </ModalContainer>
      </ShowModal>
      <CrudTable style-class="w-full text-sm text-center mx-2 text-gray-500" :totalPage="table.totalPage"
        :currentPage="1">
        <thead>
          <Row styleClass="text-sm text-gray-900 bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
            <Cell v-for="(item, index) in table.head" :key="index" styleClass="px-6 py-3 text-center" cellType="title">
              {{ item.name }}
            </Cell>
          </Row>
        </thead>
        <tbody :key="typeTableKey">
          <Row styleClass="bg-white border-b" v-for="(item, index) in table.body" :key="index"
            :id="'editTypeConfigRow' + index">
            <Cell styleClass="px-6 py-4">{{ index + 1 }}</Cell>
            <Cell styleClass="px-6 py-4">{{ item.createdAt }}</Cell>
            <Cell styleClass="px-6 py-4">{{ item.createdBy }}</Cell>
            <Cell styleClass="px-6 py-4" :id="'editTypeConfig' + index">{{ item.name }}</Cell>
            <Cell styleClass="px-6 py-4 text-green-500" cellType="status" :status="item.status ? '1' : '0'"></Cell>
            <Cell styleClass="px-6 py-4 ">
              <div class="m-auto flex justify-center">
                <ShowModal :modalId="'editTypeMission' + item.id" iconClass="fa-regular fa-pen-to-square">
                  <ModalContainer :modalId="'editTypeMission' + item.id" size="lg">
                    <ModalHeader head="Cấu hình hình thức" :modalId="'editTypeMission' + item.id">
                    </ModalHeader>
                    <InputField styleClass="p-4" :id="'MF-' + item.id" :value="item.name" label="">
                    </InputField>
                    <div
                      class="flex items-center p-6 space-x-2 justify-end border-gray-200 rounded-b dark:border-gray-600">
                      <button :data-modal-hide="modalId"
                        class="text-gray-500 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">
                        Hủy bỏ</button>
                      <button :data-modal-hide="modalId" type="button"
                        class="btn btn-info text-white bg-blue-700 hover:bg-blue-800 border-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center">Lưu</button>
                    </div>
                  </ModalContainer>
                </ShowModal>
                <ShowModal modalId="deleteType" iconClass="fa-solid fa-trash text-red-500">
                  <ConfirmModal modalId="deleteType" title="" type="red" message="Xóa hình thức này"
                    messageClass="text-lg text-rose-600">
                  </ConfirmModal>
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
  name: "MarketingTypePage",
  async fetch() {
    try {
      var response = await getAllConfigPagingForDepart(this.$route.query.id, 0, 4)
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
        head: [
          { name: "STT" },
          { name: "Ngày tạo" },
          { name: "Người tạo" },
          { name: "Đối tượng" },
          { name: "Trạng thái" },
          { name: "Thao tác" },
        ],
        body: [

        ]
      },
      typeTableKey: 499,
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
      var data = await createConfigForDepartment(4, this.$route.query.id).then((res) => {
        const response = getAllConfigPagingForDepart(this.$route.query.id, 0, 4).then((config) => {
          this.table.body = config.value;
          this.table.totalPage = config.totalPage;
          this.typeTableKey++;
        });
      });
    }
  }
}
</script>

<style scoped></style>
