<template>
  <div>
    <div class="flex justify-between">
      <span class="text-xl font-bold">Cấu hình trạng thái</span>
      <ShowModal modalId="createConfigStatusId" type="custom" customClass="bg-blue-500 rounded-lg px-4 py-1 text-lg font-bold"
        title="Tạo loại trạng thái">
        <ModalContainer modalId="createConfigStatusId" size="xl" :isDark="theme === 'dark'">
          <ModalHeader :isDark="theme === 'dark'" head="Tạo loại trạng thái" modalId="createConfigStatusId">
          </ModalHeader>
          <InputField :isDark="theme === 'dark'" styleClass="p-2" id="jobTypeName" label=""
            placeholder="Tên trạng thái" />
          <div class="flex items-center p-6 space-x-2 justify-end border-gray-200 rounded-b dark:border-gray-600">
            <button @click="Common.toggleModal('createConfigStatusId')"
              class="text-gray-500 bg-tranparent hover:bg-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">
              Hủy bỏ</button>
            <button type="button"
              class="btn btn-info text-white bg-blue-700 hover:bg-blue-400 border-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Lưu</button>
          </div>
        </ModalContainer>
      </ShowModal>
    </div>
    <div class="p-4">
      <InputField id="selectJob" typeInput="select" label="Công việc" :selectOption="jobSelectOption" :isDark="theme==='dark'"/>
    </div>
    <CrudTable style-class="w-full text-sm text-left" :theme="theme">
      <thead>
        <Row class="bg-gray-900">
          <Cell styleClass="px-4"><InputField typeInput="checkbox" label="" id="selectAll" /></Cell>
          <Cell v-for="(item, index) in table.head" :key="index" styleClass="px-6 py-3" cellType="title">
            {{ item.name }}
          </Cell>
        </Row>
      </thead>
      <tbody>
        <Row v-for="(item, index) in table.body" :key="index">
          <Cell styleClass="px-4"><InputField typeInput="checkbox" label="" :id="`selectItem-${index}`" /></Cell>
          <Cell styleClass="px-6 py-3">
            <div :class="getColorClass(item.color)">
              {{ item.status }}
            </div>
          </Cell>
          <Cell styleClass="px-6 py-3">{{ item.job }}</Cell>
          <Cell styleClass="px-6 py-3">{{ item.person }}</Cell>
          <Cell styleClass="px-6 py-3 flex">
            <ShowModal type="custom-with-icon" :modalId="getUpStatusActionId(index,item.id)" iconClass="fa-solid fa-up-long"
              customClass="block w-8 mr-2 text-blue-700 hover:text-white  font-sm rounded-lg text-xs px-2 py-1.5 text-center">
              <ModalContainer :modalId="getUpStatusActionId(index,item.id)" size="2xl" :hasBackDrop="true"
                :isDark="theme === 'dark'">
                <ModalHeader :isDark="theme === 'dark'" :modalId="getUpStatusActionId(index,item.id)" head="Cấu hình trạng thái">
                </ModalHeader>
                <div>
                </div>
              </ModalContainer>
            </ShowModal>
            <ShowModal type="custom-with-icon" :modalId="getDownStatusActionId(index,item.id)" iconClass="fa-solid fa-down-long"
              customClass="block w-8 mr-2 text-blue-700 hover:text-white  font-sm rounded-lg text-xs px-2 py-1.5 text-center">
              <ModalContainer :modalId="getDownStatusActionId(index,item.id)" size="2xl" :hasBackDrop="true"
                :isDark="theme === 'dark'">
                <ModalHeader :isDark="theme === 'dark'" :modalId="getDownStatusActionId(index,item.id)" head="Cấu hình trạng thái">
                </ModalHeader>
                <div>
                </div>
              </ModalContainer>
            </ShowModal>
            <ShowModal type="custom-with-icon" :modalId="getEditStatusActionId(index,item.id)" iconClass="fa-solid fa-pen"
              customClass="block w-8 mr-2 text-blue-700 bg-blue-100 hover:bg-blue-700 hover:text-white  font-sm rounded-lg text-xs px-2 py-1.5 text-center">
              <ModalContainer :modalId="getEditStatusActionId(index,item.id)" size="2xl" :hasBackDrop="true"
                :isDark="theme === 'dark'">
                <ModalHeader :isDark="theme === 'dark'" :modalId="getEditStatusActionId(index,item.id)" head="Cấu hình trạng thái">
                </ModalHeader>
                <div>
                </div>
              </ModalContainer>
            </ShowModal>
            <ShowModal type="custom-with-icon" :modalId="getDeleteStatusActionId(index,item.id)" iconClass="fa-solid fa-trash"
              customClass="block w-8 mr-2 text-red-700 bg-red-100 hover:bg-red-700 hover:text-white font-sm rounded-lg text-xs px-2 py-1.5 text-center">
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
import DropMenu from '../../Common/Button/DropMenu.vue';

export default {
  name: "ConfigStatusComponent",
  components: {
    DropMenu
  },
  data() {
    return {
      table: {
        head: [
          { name: "Trạng thái" },
          { name: "công việc" },
          { name: "Người được thao tác" },
          { name: "Thao tác" },
        ],
        body: [
          {
            id: 'media',
            job: 'Quay video',
            status: "Mới",
            person: "",
            color: "gray",
          },
          {
            id: 'media',
            job: 'Quay video',
            status: "Đang làm",
            person: "",
            color: "blue"
          },
          {
            id: 'media',
            job: 'Quay video',
            status: "Quá hạn",
            person: "",
            color: "orange"
          },
          {
            id: 'media',
            job: 'Quay video',
            status: "Done",
            person: "",
            color: "green"
          },
          {
            id: 'media',
            job: 'Quay video',
            status: "Fail",
            person: "",
            color: "red"
          },
        ],
      },
      jobSelectOption: [
        {
          name: "Sản xuất video",
          value: "sxv",
          iconClass: "",
        }
      ]
    }
  },
  computed: {
    Common() {
      return Common;
    }
  },
  props: {
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
  },
}
</script>
<style scoped>
.bg-gland {
  background-color: #1d2432;
}
</style>
