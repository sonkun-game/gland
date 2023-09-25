<template>
  <div>
    <div class="flex justify-between pb-2">
      <span class="text-xl font-bold">Cấu hình thông tin</span>
      <ShowModal modalId="createConfigInfo" type="custom" customClass="bg-blue-500 rounded-lg px-4 py-1 text-lg font-bold"
        title="Tạo loại thông tin">
        <ModalContainer modalId="createConfigInfo" size="xl" :isDark="theme === 'dark'">
          <ModalHeader :isDark="theme === 'dark'" head="Tạo loại thông tin" modalId="createConfigInfo">
          </ModalHeader>
          <InputField :isDark="theme === 'dark'" styleClass="p-2" id="jobTypeName" label=""
            placeholder="Tên thông tin" />
          <div class="flex items-center p-6 space-x-2 justify-end border-gray-200 rounded-b dark:border-gray-600">
            <button @click="Common.toggleModal('createConfigInfo')"
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
          <Cell styleClass="px-6 py-3" style="width: 30vw;">{{ item.name }}</Cell>
          <Cell styleClass="px-6 py-3" style="width: 30vw;">{{ item.type }}</Cell>
          <Cell styleClass="px-6 py-3 flex">
            <ShowModal type="custom-with-icon" :modalId="'upInfo_' + item.id + index" iconClass="fa-solid fa-up-long"
              customClass="block w-8 mr-2 text-blue-700 hover:text-white  font-sm rounded-lg text-xs px-2 py-1.5 text-center">
              <ModalContainer :modalId="'upInfo_' + item.id + index" size="2xl" :hasBackDrop="true"
                :isDark="theme === 'dark'">
                <ModalHeader :isDark="theme === 'dark'" :modalId="item.id + index" head="Cấu hình thông tin">
                </ModalHeader>
                <div>
                </div>
              </ModalContainer>
            </ShowModal>
            <ShowModal type="custom-with-icon" :modalId="'downInfo_' + item.id + index" iconClass="fa-solid fa-down-long"
              customClass="block w-8 mr-2 text-blue-700 hover:text-white  font-sm rounded-lg text-xs px-2 py-1.5 text-center">
              <ModalContainer :modalId="'downInfo_' + item.id + index" size="2xl" :hasBackDrop="true"
                :isDark="theme === 'dark'">
                <ModalHeader :isDark="theme === 'dark'" :modalId="item.id + index" head="Cấu hình thông tin">
                </ModalHeader>
                <div>
                </div>
              </ModalContainer>
            </ShowModal>
            <ShowModal type="custom-with-icon" :modalId="'editInfo_' + item.id + index" iconClass="fa-solid fa-pen"
              customClass="block w-8 mr-2 text-blue-700 bg-blue-100 hover:bg-blue-700 hover:text-white  font-sm rounded-lg text-xs px-2 py-1.5 text-center">
              <ModalContainer :modalId="'editInfo_' + item.id + index" size="2xl" :hasBackDrop="true"
                :isDark="theme === 'dark'">
                <ModalHeader :isDark="theme === 'dark'" :modalId="item.id + index" head="Cấu hình thông tin">
                </ModalHeader>
                <div>
                </div>
              </ModalContainer>
            </ShowModal>
            <ShowModal type="custom-with-icon" :modalId="'deleteInfo_' + item.id + index" iconClass="fa-solid fa-trash"
              customClass="block w-8 mr-2 text-red-700 bg-red-100 hover:bg-red-700 hover:text-white font-sm rounded-lg text-xs px-2 py-1.5 text-center">
              <ModalContainer :modalId="'deleteInfo_' + item.id + index" size="2xl" :hasBackDrop="true" :isDark="theme === 'dark'">
                <ModalHeader :isDark="theme === 'dark'" :modalId="item.id + index" head="Cấu hình thông tin">
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
  name: "ConfigInfoComponent",
  components: {
    DropMenu
  },
  data() {
    return {
      table: {
        head: [
          { name: "Trường" },
          { name: "Kiểu" },
          { name: "Thao tác" },
        ],
        body: [
          {
            id: 'title',
            name: 'Tiêu đề',
            type: "Chữ",
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
  },
}
</script>
<style scoped>
.bg-gland {
  background-color: #1d2432;
}
</style>
