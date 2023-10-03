<template>
  <div class="container">
    <div class="flex justify-between">
      <span class="text-xl font-bold">Cấu hình thông tin</span>
      <ShowModal modalId="createConfigInfo" type="custom" customClass="bg-blue-500 rounded-lg px-4 py-1 text-lg font-bold"
        title="Tạo loại thông tin">
        <ModalContainer modalId="createConfigInfo" size="xl" :isDark="theme === 'dark'">
          <ModalHeader :isDark="theme === 'dark'" head="Tạo loại thông tin" modalId="createConfigInfo">
          </ModalHeader>
          <InputField :isDark="theme === 'dark'" styleClass="p-2" id="infoTypeName" label=""
            placeholder="Tên thông tin" />
          <InputField :isDark="theme === 'dark'" styleClass="p-2" id="infoConfigType" label="" type-input="select" :select-option="selectOption"
            placeholder="Kiểu dữ liệu" />
          <div class="flex items-center p-6 space-x-2 justify-end border-gray-200 rounded-b dark:border-gray-600">
            <button @click="Common.toggleModal('createConfigInfo')"
              class="text-gray-500 bg-tranparent hover:bg-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">
              Hủy bỏ</button>
            <button type="button" @click="createConfigInfo()"
              class="btn btn-info text-white bg-blue-700 hover:bg-blue-400 border-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Lưu</button>
          </div>
        </ModalContainer>
      </ShowModal>
    </div>
    <div class="p-4">
      <InputField id="info_selectJob" typeInput="select" label="Công việc" :selectOption="jobSelectOption" :isDark="theme==='dark'" @select-change="handleChangeJobValue"/>
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
          <Cell styleClass="px-6 py-3" style="width: 30vw;">{{ item.name }}</Cell>
          <Cell styleClass="px-6 py-3" style="width: 30vw;">{{ item.dataType }}</Cell>
          <Cell styleClass="px-6 py-3 flex">
            <ShowModal type="custom-with-icon" :modalId="getUpInfoActionId(index,item.id)" iconClass="fa-solid fa-up-long"
              customClass="block w-8 mr-2 text-blue-700 font-sm rounded-lg text-xs px-2 py-1.5 text-center">
              <ModalContainer :modalId="getUpInfoActionId(index,item.id)" size="2xl" :hasBackDrop="true"
                :isDark="theme === 'dark'">
                <ModalHeader :isDark="theme === 'dark'" :modalId="getUpInfoActionId(index,item.id)" head="Cấu hình thông tin">
                </ModalHeader>
                <div>
                </div>
              </ModalContainer>
            </ShowModal>
            <ShowModal type="custom-with-icon" :modalId="getDownInfoActionId(index,item.id)" iconClass="fa-solid fa-down-long"
              customClass="block w-8 mr-2 text-blue-700 font-sm rounded-lg text-xs px-2 py-1.5 text-center">
              <ModalContainer :modalId="getDownInfoActionId(index,item.id)" size="2xl" :hasBackDrop="true"
                :isDark="theme === 'dark'">
                <ModalHeader :isDark="theme === 'dark'" :modalId="getDownInfoActionId(index,item.id)" head="Cấu hình thông tin">
                </ModalHeader>
                <div>
                </div>
              </ModalContainer>
            </ShowModal>
            <ShowModal type="custom-with-icon" :modalId="getEditInfoActionId(index,item.id)" iconClass="fa-solid fa-pen"
              customClass="block w-8 mr-2 text-blue-700 bg-blue-100 font-sm rounded-lg text-xs px-2 py-1.5 text-center">
              <ModalContainer :modalId="getEditInfoActionId(index,item.id)" size="2xl" :hasBackDrop="true"
                :isDark="theme === 'dark'">
                <ModalHeader :isDark="theme === 'dark'" :modalId="getEditInfoActionId(index,item.id)" head="Cấu hình thông tin">
                </ModalHeader>
                <div>
                </div>
              </ModalContainer>
            </ShowModal>
            <ShowModal type="custom-with-icon" :modalId="getDeleteInfoActionId(index,item.id)" iconClass="fa-solid fa-trash"
              customClass="block w-8 mr-2 text-red-700 bg-red-100 font-sm rounded-lg text-xs px-2 py-1.5 text-center">
              <ModalContainer :modalId="getDeleteInfoActionId(index,item.id)" size="2xl" :hasBackDrop="true" :isDark="theme === 'dark'">
                <ModalHeader :isDark="theme === 'dark'" :modalId="getDeleteInfoActionId(index,item.id)" head="Cấu hình thông tin">
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
import {createTypeJob, getAllTypeJobs} from "../../../static/job/api";
import {createConfigInfo, getAllConfigInfo} from "../../../static/configurationv2/api";
import { v4 as uuidv4 } from 'uuid';

export default {
  name: "ConfigInfoComponent",
  async fetch() {
    try {
      var response = await getAllTypeJobs(-1, this.id);
      this.jobSelectOption = response.value;

      var responseInfo = await getAllConfigInfo(this.pageNum,this.taskType, 2);
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
      selectOption:[
        {
          name:"Chuỗi kí tự",
          value:"text"
        },
        {
          name:"Thời gian",
          value:"date"
        },
        {
          name:"Số",
          value:"number"
        }
      ],
      table: {
        head: [
          { name: "Trường" },
          { name: "Kiểu" },
          { name: "Thao tác" },
        ],
        body: [],
      },
      jobSelectOption: []
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
    async createConfigInfo() {
      var response = await createConfigInfo(this.id);
      this.table.body = response.data.value;
      this.totalPage = response.data.totalPage;
    },
    getUpInfoActionId(index, id) {
      return 'upInfoConfigAction_' + id + index;
    },
    getDownInfoActionId(index, id) {
      return 'downInfoConfigAction_' + id + index;
    },
    getEditInfoActionId(index, id) {
      return 'editInfoConfigAction_' + id + index;
    },
    getDeleteInfoActionId(index, id) {
      return 'deleteInfoConfigAction_' + id + index;
    },
    async handleChangeJobValue(value) {
      if(value) {
        this.taskType = value;
        var responseInfo = await getAllConfigInfo(this.pageNum,this.taskType, 2);
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
