
<template>
  <div>
    <ModalContainer :modalId="modalId" size="8xl">
      <ModalHeader :modalId="modalId" head="Cấu hình dịch vụ"></ModalHeader>
      <ShowModal modalId="createServiceMission" type="custom"
        customClass="btn btn-info btn-normal bg-blue-700 rounded-lg hover:bg-blue-800 border-none text-white m-4"
        title="Tạo mới">
        <ModalContainer modalId="createServiceMission" size="lg">
          <ModalHeader head="Cấu hình dịch vụ" modalId="createServiceMission"></ModalHeader>
          <InputField styleClass="p-4" id="editServiceValue" label="" placeholder="Tên dịch vụ">
          </InputField>
          <div class="flex items-center p-6 space-x-2 justify-end border-gray-200 rounded-b dark:border-gray-600">
            <button :data-modal-hide="modalId"
              class="text-gray-500 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">
              Hủy bỏ</button>
            <button :data-modal-hide="modalId" type="button"
              class="btn btn-info text-white bg-blue-700 border-none hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Lưu</button>
          </div>
        </ModalContainer>
      </ShowModal>
      <CrudTable style-class="w-full text-sm text-center mx-2 text-gray-500">
        <thead>
          <Row styleClass="text-sm text-gray-900 bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
            <Cell v-for="(item, index) in table.head" :key="index" styleClass="px-6 py-3 text-center" cellType="title">
              {{ item.name }}
            </Cell>
          </Row>
        </thead>
        <tbody>
          <Row styleClass="bg-white border-b" v-for="(item, index) in table.body" :key="index">
            <Cell styleClass="px-6 py-4">{{ index + 1 }}</Cell>
            <Cell styleClass="px-6 py-4">{{ item.createdAt }}</Cell>
            <Cell styleClass="px-6 py-4">{{ item.createdBy }}</Cell>
            <Cell styleClass="px-6 py-4">{{ item.name }}</Cell>
            <Cell styleClass="px-6 py-4" cellType="status" :status="item.status ? '1' : '0'"></Cell>
            <Cell styleClass="px-6 py-4 ">
              <div class="m-auto flex justify-center">
                <ShowModal :modalId="'editServiceMission' + item.id" iconClass="fa-regular fa-pen-to-square">
                  <ModalContainer :modalId="'editServiceMission' + item.id" size="lg">
                    <ModalHeader head="Cấu hình dịch vụ" :modalId="'editServiceMission' + item.id">
                    </ModalHeader>
                    <InputField styleClass="p-4" :id="'SV-' + item.id" :value="item.name" label="">
                    </InputField>
                    <div
                      class="flex items-center p-6 space-x-2 justify-end border-gray-200 rounded-b dark:border-gray-600">
                      <button :data-modal-hide="modalId"
                        class="text-gray-500 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">
                        Hủy bỏ</button>
                      <button :data-modal-hide="modalId" type="button"
                        class="btn btn-info text-white bg-blue-700 border-none hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Lưu</button>
                    </div>
                  </ModalContainer>
                </ShowModal>
                <ShowModal modalId="deleteServiceMission" iconClass="fa-solid fa-trash text-red-500">
                  <ConfirmModal modalId="deleteServiceMission" title="" type="red" message="Xóa dịch vụ này"
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

export default {
  name: "MarketingServicePage",
  data() {
    return {
      table: {
        head: [
          { name: "STT" },
          { name: "Ngày tạo" },
          { name: "Người tạo" },
          { name: "Tên dịch vụ" },
          { name: "Trạng thái" },
          { name: "Thao tác" },
        ],
        body: [
          {

          }
        ]
      },
      storeId: 1,
      pageNum: 0
    }
  },
  props: {
    modalId: ""
  },
}
</script>

<style scoped></style>
