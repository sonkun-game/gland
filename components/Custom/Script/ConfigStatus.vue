<template>
  <div class="container">
    <div class="flex justify-between">
      <span class="text-xl font-bold">Cấu hình trạng thái</span>
      <ShowModal modalId="createConfigStatusId" type="custom" customClass="bg-blue-500 rounded-lg px-4 py-1 text-lg font-bold"
        title="Tạo loại trạng thái">
        <ModalContainer modalId="createConfigStatusId" size="xl" :isDark="theme === 'dark'">
          <ModalHeader :isDark="theme === 'dark'" head="Tạo loại trạng thái" modalId="createConfigStatusId">
          </ModalHeader>
          <InputField :isDark="theme === 'dark'" styleClass="p-2" id="statusConfigName" label=""
            placeholder="Tên trạng thái" />
          <InputField :isDark="theme === 'dark'" styleClass="p-2" id="statusConfigColor" label="" typeInput="select" :selectOption="jobColorSelection"
          placeholder="Chọn màu" />
          <div class="flex items-center p-6 space-x-2 justify-end border-gray-200 rounded-b dark:border-gray-600">
            <button @click="Common.toggleModal('createConfigStatusId')"
              class="text-gray-500 bg-tranparent hover:bg-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">
              Hủy bỏ</button>
            <button type="button" @click="createConfigStatus()"
              class="btn btn-info text-white bg-blue-700 hover:bg-blue-400 border-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Lưu</button>
          </div>
        </ModalContainer>
      </ShowModal>
    </div>
    <div class="p-4">
      <InputField id="status_selectJob" typeInput="select" label="Công việc" :selectOption="jobSelectOption" :isDark="theme==='dark'" @select-change="handleChangeStatusValue"/>
    </div>
    <CrudTable :total-page="this.totalPage" :current-page="pageNum" style-class="w-full text-sm text-left" :theme="theme">
      <thead>
        <Row :class="{'bg-gray-900 text-white': theme==='dark', 'bg-gray-100 text-gray-900': theme==='light'}">
          <Cell styleClass="px-4"><InputField typeInput="checkbox" label="" id="selectAll" /></Cell>
          <Cell v-for="(item, index) in table.head" :key="index" styleClass="px-6 py-3" cellType="title">
            {{ item.name }}
          </Cell>
        </Row>
      </thead>
      <tbody :key="Tbodykey">
        <Row v-for="(item, index) in table.body" :key="index">
          <Cell styleClass="px-4"><InputField typeInput="checkbox" label="" :id="`selectItem-${index}`" /></Cell>
          <Cell styleClass="px-6 py-3">
            <div :class="getColorClass(item.colorCode)">
              {{ item.name }}
            </div>
          </Cell>
          <Cell styleClass="px-6 py-3"> Công việc </Cell>
          <Cell styleClass="px-6 py-3">{{ item.createdBy }}</Cell>
          <Cell styleClass="px-6 py-3 flex">
            <ShowModal type="custom-with-icon" :modalId="getEditStatusActionId(index,item.id)" iconClass="fa-solid fa-pen"
              customClass="block w-8 mr-2 text-blue-700 bg-blue-100 font-sm rounded-lg text-xs px-2 py-1.5 text-center">
              <ModalContainer :modalId="getEditStatusActionId(index,item.id)" size="2xl" :hasBackDrop="true"
                :isDark="theme === 'dark'">
                <ModalHeader :isDark="theme === 'dark'" :modalId="getEditStatusActionId(index,item.id)" head="Cấu hình trạng thái">
                </ModalHeader>
                <div>
                </div>
              </ModalContainer>
            </ShowModal>
            <ShowModal type="custom-with-icon" :modalId="getDeleteStatusActionId(index,item.id)" iconClass="fa-solid fa-trash"
              customClass="block w-8 mr-2 text-red-700 bg-red-100 font-sm rounded-lg text-xs px-2 py-1.5 text-center">
              <ModalContainer :modalId="getDeleteStatusActionId(index,item.id)" size="2xl" :hasBackDrop="true" :isDark="theme === 'dark'">
                <ModalHeader :isDark="theme === 'dark'" :modalId="getDeleteStatusActionId(index,item.id)" head="Cấu hình trạng thái">
                </ModalHeader>
                <div>
                </div>
              </ModalContainer>
            </ShowModal>
          </Cell>
        </Row>
      </tbody>
    </CrudTable>
  </div>
</template>

<script>
import { Common } from '../../../plugins/common';
import {getAllTypeJobs} from "../../../static/job/api";
import {createConfigInfo, createConfigStatus, getAllConfigInfo} from "../../../static/configurationv2/api";
import { v4 as uuidv4 } from 'uuid';

export default {
  name: "ConfigStatusComponent",
  async fetch() {
    try {
      var response = await getAllTypeJobs(-1, this.id);
      this.jobSelectOption = response.value;

      var responseInfo = await getAllConfigInfo(this.pageNum,this.taskType, 1);
      if(responseInfo) {
        this.table.body = responseInfo.value;
        this.totalPage = responseInfo.totalPage;
      }
    }
    catch (error) {
      console.error('Lỗi:', error);
    }
  },
  data() {
    return {
      pageNum: this.$route.query.pageNum ? this.$route.query.pageNum : 0,
      totalPage: 0,
      taskType: 1,
      Tbodykey: "key",
      table: {
        head: [
          { name: "Trạng thái" },
          { name: "công việc" },
          { name: "Người được thao tác" },
          { name: "Thao tác" },
        ],
        body: [],
      },
      jobSelectOption: [],
      jobColorSelection: [
        {
          name: "Màu Đỏ",
          value: "red",
          optionClass: "bg-red-300 text-red-700"
        },
        {
          name: "Màu Xanh Nước Biển",
          value: "blue",
          optionClass: "bg-blue-300 text-blue-700"
        }
      ]
    }
  },
  mounted() {
    this.Tbodykey = uuidv4();
  },
  computed: {
    Common() {
      return Common;
    }
  },
  props: {
    id: "",
    theme: {
      type: String,
      default: 'light'
    },
    dataIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    async createConfigStatus() {
      var response = await createConfigStatus();
      this.table.body = response.data.value;
      this.totalPage = response.data.totalPage;
    },
    getColorClass(color) {
      var prefix = "rounded-lg text-center p-1 border";
      if(Common.isNullOrEmpty(color)) {
        return `${prefix} border-gray-400 text-gray-200 bg-gray-900`;
      }
      return `${prefix} border-${color}-400 text-${color}-200 bg-${color}-900`
    },
    getUpStatusActionId(index, id) {
      return 'upStatusConfigAction_' + id + index;
    },
    getDownStatusActionId(index, id) {
      return 'downStatusConfigAction_' + id + index;
    },
    getEditStatusActionId(index, id) {
      return 'editStatusConfigAction_' + id + index;
    },
    getDeleteStatusActionId(index, id) {
      return 'deleteStatusConfigAction_' + id + index;
    },
    async handleChangeStatusValue(value) {
      if(value) {
        this.taskType = value;
        var responseInfo = await getAllConfigInfo(this.pageNum,this.taskType, 1);
        if(responseInfo) {
          console.log(responseInfo.data);
          this.table.body = responseInfo.value;
          if(responseInfo.data) this.totalPage = responseInfo.data.totalPage;
          this.Tbodykey = uuidv4();
        }
      }
    }
  },
}
</script>
<style scoped>
.bg-gland {
  background-color: #1d2432;
}
.container {
  height: 60vh;
  overflow-y: auto;
}
</style>
