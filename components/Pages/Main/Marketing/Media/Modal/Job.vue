
<template>
  <div>


    <ModalContainer :modalId="modalId" size="8xl">
      <ModalHeader :modalId="modalId" head="Cấu hình công việc"></ModalHeader>
      <ShowModal modalId="createMarketingJob" type="custom"
        customClass="btn btn-info btn-normal bg-blue-700 hover:bg-blue-800 border-none text-white m-4" title="Tạo mới">
        <ModalContainer modalId="createMarketingJob" size="lg">
          <ModalHeader head="Cấu hình công việc" modalId="createMarketingJob"></ModalHeader>
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
                class="block w-full p-2  mb-6 text-xs text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option v-for="(item, index) in statusList" :key="index" :value="item.id">
                  {{ item.name }}
                </option>
              </select>
            </div>
          </div>
          <!-- Phần dưới này là nút close and save-->
          <div class="flex items-center p-6 space-x-2 justify-end border-gray-200 rounded-b dark:border-gray-600">
            <button :data-modal-hide="modalId"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
              Hủy bỏ</button>
            <button :data-modal-hide="modalId" type="button" @click="createJobMediaConfig(storeId)"
              class="btn btn-info text-white bg-blue-700 hover:bg-blue-800 border-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Lưu</button>
          </div>
        </ModalContainer>
      </ShowModal>


      <CrudTable style-class="w-full text-sm text-center mx-2 text-gray-500">
        <Thead>
          <Row styleClass="text-sm text-gray-900 bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
            <Cell v-for="(item, index) in table.head" :key="index" styleClass="px-6 py-3 text-center" cellType="title">
              {{ item.name }}
            </Cell>
          </Row>
        </Thead>
        <Tbody>
          <Row styleClass="bg-white border-b" v-for="(item, index) in table.body" :key="index">
            <Cell styleClass="px-6 py-4">{{ index + 1 }}</Cell>
            <Cell styleClass="px-6 py-4">{{ formatDate(item.createdAt) }}</Cell>
            <Cell styleClass="px-6 py-4">{{ item.creator }}</Cell>
            <Cell styleClass="px-6 py-4">{{ item.name }}</Cell>
            <Cell styleClass="px-6 py-4">{{ item.days }}</Cell>
            <Cell styleClass="px-6 py-4">{{ item.hour }}</Cell>
            <Cell styleClass="px-6 py-4" cellType="status" :status="item.status ? '1' : '0'"></Cell>
            <Cell styleClass="px-6 py-4 ">
              <div class="m-auto flex justify-center">
                <ShowModal modalId="editMarketingJob" iconClass="fa-regular fa-pen-to-square">
                  <ModalContainer modalId="editMarketingJob" size="lg">
                    <ModalHeader head="Cấu hình công việc" modalId="editMarketingJob"></ModalHeader>
                    <div
                      class="flex items-center p-6 space-x-2 justify-end border-gray-200 rounded-b dark:border-gray-600">
                      <button :data-modal-hide="modalId"
                        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                        Hủy bỏ</button>
                      <button :data-modal-hide="modalId" type="button"
                        class="btn btn-info text-white bg-blue-700 hover:bg-blue-800 border-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Lưu</button>
                    </div>
                  </ModalContainer>
                </ShowModal>
                <ShowModal modalId="deleteMarketingJob" iconClass="fa-solid fa-trash text-red-500">
                  <ConfirmModal modalId="deleteMarketingJob" title="" type="red" message="Xóa công việc này"
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
import { getStatusList, getStatusMediaConfig } from '../../../../../../static/config/status/api';
import { createJobMediaConfig, getJobMediaConfig } from "static/marketing/media/config/job/api";
import moment from "moment";
export default {
  name: "MarketingJobPage",
  data() {
    return {
      statusList: [],
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
            id: "",
            date: "04/07/2023 21:50",
            creator: "Giang Nguyen",
            job: "Chaỵ ads",
            day: "",
            hour: "",
            status: "1"
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
  methods: {
    getAllStatus() {
      getStatusList(this.storeId)
    },
    formatDate(date) {
      return moment(date).format('DD/MM/YYYY HH:mm');
    },
    createJobMediaConfig(storeId) {
      createJobMediaConfig(storeId)
    }
  },
  // async created() {
  //   var listStatus = await getStatusMediaConfig(null, this.storeId);
  //   this.statusList = listStatus
  // },
  async created() {
    // var listForm = await getJobMediaConfig(this.pageNum, this.storeId);
    // this.table.body = listForm;
  }
}
</script>

<style scoped></style>
