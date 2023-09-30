<template>
  <div>
    <nav class="flex justify-between">
      <InputField id="selectJobByOther" typeInput="select" label="" :selectOption="data.selectOption"
        :isDark="theme === 'dark'" />
      <ShowModal modalId="createJobByOtherId" type="custom" customClass="bg-blue-500 rounded-lg px-4 py-1 text-lg font-bold"
        title="Tạo Công việc">
        <ModalContainer modalId="createJobByOtherId" size="xl" :isDark="theme === 'dark'">
          <ModalHeader :isDark="theme === 'dark'" head="Tạo Công việc" modalId="createJobByOtherId">
          </ModalHeader>
          <!-- Content -->
          <InputField :isDark="theme === 'dark'" styleClass="p-2" id="title" label="Tiêu đề" placeholder="Nhập tiêu đề" />
          <InputField :isDark="theme === 'dark'" typeInput='date' styleClass="p-2" id="deadline" label="Deadline" />
          <InputField :isDark="theme === 'dark'" typeInput='textarea' styleClass="p-2" id="content" label="Nội dung" placeholder="Nhập nội dung" />
          <!-- Content -->
          <div class="flex items-center p-6 space-x-2 justify-end border-gray-200 rounded-b dark:border-gray-600">
            <button @click="Common.toggleModal('createJobByOtherId')"
              class="text-gray-500 bg-tranparent hover:bg-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">
              Hủy bỏ</button>
            <button type="button" @click="createScript()"
              class="btn btn-info text-white bg-blue-700 hover:bg-blue-400 border-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Lưu</button>
          </div>
        </ModalContainer>
      </ShowModal>
    </nav>
    <div class="mt-4 justify-center flex">
        <StatusBar :theme="theme" />
    </div>

    <CrudTable tyle-class="w-full text-sm text-left text-gray-500" :theme="theme"> 
      <thead>
        <Row styleClass="text-sm text-gray-900 bg-gray-100">
          <Cell v-for="(item, index) in table.head" :key="index" styleClass="px-6 py-3" cellType="title">
            {{ item.name }}
          </Cell>
        </Row>
      </thead>
      <tbody>
        <Row styleClass=" border-b" v-for="(item, index) in table.body" :key="index">
          <Cell styleClass="px-6 py-4">{{ index + 1 }}</Cell>
          <Cell styleClass="px-6 py-4">{{ Common.getAvaiable(item.title) }}</Cell>
          <Cell styleClass="px-6 py-4">{{ Common.getAvaiable(item.deadline)  }}</Cell>
          <Cell styleClass="px-6 py-4">{{ Common.getAvaiable(item.videoSubject)  }}</Cell>
          <Cell styleClass="px-6 py-4">{{ Common.getAvaiable(item.length)  }}</Cell>
          <Cell styleClass="px-6 py-4">{{ Common.getAvaiable(item.job)  }}</Cell>
          <Cell styleClass="px-6 py-4">{{ Common.getAvaiable(item.createBy)  }}</Cell>
          <Cell styleClass="px-6 py-4">{{ Common.getAvaiable(item.giveTo)  }}</Cell>
          <Cell styleClass="px-6 py-4">{{ Common.getAvaiable(item.status)  }}</Cell>
          <Cell styleClass="px-6 py-4"></Cell>
        </Row>
      </tbody>

    </CrudTable>

  </div>
</template>

<script>
import { Common } from '../../../plugins/common';
import StatusBar from '../../Common/Button/StatusBar.vue';

export default {
  name: "JobByOtherComp",
  components: {
    StatusBar
  },
  data() {
    return {
      data: {
        selectOption: [
          {
            value: 1,
            name: 'Quay video'
          }
        ]
      },
      table: {
        head: [
          { name: "STT" },
          { name: "Tiêu đề" },
          { name: "Thời hạn" },
          { name: "Chủ đề video" },
          { name: "Độ dài" },
          { name: "Công việc" },
          { name: "Tạo bởi" },
          { name: "Giao cho" },
          { name: "Trạng thái" },
          { name: "Thao tác" },
        ],
        body: [
          {
            id: 'title',
            title: 'Giam beo',
            deadline: "2023-09-14 17:00:00",
            videoSubject: 'Abc',
            length: '12',
            job: 'Sản xuất video',
            createBy: 'GNguyen',
            giveTo: '',
            status: ''
          },
        ],
      },
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
    }
  },
  methods: {

  }
}

</script>



<style></style>
