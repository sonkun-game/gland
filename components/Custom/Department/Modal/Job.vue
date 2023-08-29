
<template>
  <div>
    <ModalContainer :modalId="modalId" size="8xl">
      <ModalHeader :modalId="modalId" head="Cấu hình công việc"></ModalHeader>
      <ShowModal modalId="configJobMission" type="custom"
        customClass="btn btn-info btn-normal bg-blue-700 hover:bg-blue-800 border-none text-white m-4" title="Tạo mới">
        <ModalContainer modalId="configJobMission" size="lg">
          <ModalHeader head="Cấu hình công việc" modalId="configJobMission"></ModalHeader>
          <InputField styleClass="px-4 py-3" id="editJobValue" label="Tên công việc" placeholder="Tên công việc">
          </InputField>
          <InputField styleClass="px-4 py-3" id="editJobDaysValue" label="Ngày" placeholder="">
          </InputField>
          <InputField styleClass="px-4 py-3" id="editJobHourValue" label="Giờ" placeholder="">
          </InputField>
          <!-- <SelectField styleClass="px-4 py-3" id="editValue" label="Giờ" placeholder="">
          </SelectField> -->
          <div>
            <label for="editJobStatusValue" class="block pl-5 text-sm font-normal text-gray-900 dark:text-white">Trạng
              thái</label>
            <div class="px-4 py-2">
              <select id="editJobStatusValue"
                class="block w-full p-2  mb-6 text-xs text-gray-900 border border-gray-300 rounded-lg bg-gray-50">
                <option v-for="(item, index) in statusList" :key="index" :value="item.id">
                  {{ item.name }}
                </option>
              </select>
            </div>
          </div>
          <!-- Phần dưới này là nút close and save-->
          <div class="flex items-center p-6 space-x-2 justify-end border-gray-200 rounded-b dark:border-gray-600">
            <button :data-modal-hide="modalId"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">
              Hủy bỏ</button>
            <button :data-modal-hide="modalId" type="button"
              class="btn btn-info text-white bg-blue-700 hover:bg-blue-800 border-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Lưu</button>
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
            <Cell styleClass="px-6 py-4">{{ item.creator }}</Cell>
            <Cell styleClass="px-6 py-4">{{ item.name }}</Cell>
            <Cell styleClass="px-6 py-4">{{ item.days }}</Cell>
            <Cell styleClass="px-6 py-4">{{ item.hour }}</Cell>
            <Cell styleClass="px-6 py-4" cellType="status" :status="item.status ? '1' : '0'"></Cell>
            <Cell styleClass="px-6 py-4 ">
              <div class="m-auto flex justify-center">
                <ShowModal modalId="createJobMission" iconClass="fa-regular fa-pen-to-square">
                  <ModalContainer modalId="createJobMission" size="lg">
                    <ModalHeader head="Cấu hình công việc" modalId="createJobMission"></ModalHeader>
                    <div
                      class="flex items-center p-6 space-x-2 justify-end border-gray-200 rounded-b dark:border-gray-600">
                      <button :data-modal-hide="modalId"
                        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">
                        Hủy bỏ</button>
                      <button :data-modal-hide="modalId" type="button"
                        class="btn btn-info text-white bg-blue-700 hover:bg-blue-800 border-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Lưu</button>
                    </div>
                  </ModalContainer>
                </ShowModal>
                <ShowModal modalId="deleteJob" iconClass="fa-solid fa-trash text-red-500">
                  <ConfirmModal modalId="deleteJob" title="" type="red" message="Xóa công việc này"
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
  name: "MissionJob",
  data() {
    return {
      statusList: [

      ],
      // Ngày tạo	Người tạo	Công việc	Ngày	Giờ	Trạng thái	Thao tác
      table: {
        head: [
          { name: "STT" },
          { name: "Ngày tạo" },
          { name: "Người tạo" },
          { name: "Công việc" },
          { name: "Ngày" },
          { name: "Giờ" },
          { name: "Trạng thái" },
          { name: "Thao tác" },
        ],
        body: [
          {

          }
        ]
      },
      pageNum: 0,
      storeId: 1
    }
  },
  props: {
    modalId: ""
  },
}
</script>

<style scoped></style>
