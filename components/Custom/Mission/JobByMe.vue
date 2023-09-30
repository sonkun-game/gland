<template>
  <div>
    <nav class="flex justify-between">
      <InputField id="selectJobByMe" typeInput="select" label="" :selectOption="data.selectOption"
        :isDark="theme === 'dark'" />
      <ShowModal modalId="createJobByMeId" type="custom" customClass="bg-blue-500 rounded-lg px-4 py-1 text-lg font-bold"
        title="Tạo Công việc">
        <ModalContainer modalId="createJobByMeId" size="xl" :isDark="theme === 'dark'">
          <ModalHeader :isDark="theme === 'dark'" head="Tạo Công việc" modalId="createJobByMeId">
          </ModalHeader>
          <!-- Content -->
          <InputField :isDark="theme === 'dark'" styleClass="p-2" id="title" label="Tiêu đề" placeholder="Nhập tiêu đề" />
          <InputField :isDark="theme === 'dark'" typeInput='date' styleClass="p-2" id="deadline" label="Deadline" />
          <InputField :isDark="theme === 'dark'" typeInput='textarea' styleClass="p-2" id="content" label="Nội dung" placeholder="Nhập nội dung" />
          <!-- Content -->
          <div class="flex items-center p-6 space-x-2 justify-end border-gray-200 rounded-b dark:border-gray-600">
            <button @click="Common.toggleModal('createJobByMeId')"
              class="text-gray-500 bg-tranparent hover:bg-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">
              Hủy bỏ</button>
            <button type="button" @click="createScript()"
              class="btn btn-info text-white bg-blue-700 hover:bg-blue-400 border-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Lưu</button>
          </div>
        </ModalContainer>
      </ShowModal>
    </nav>
  </div>
</template>

<script>
import { Common } from '../../../plugins/common';

export default {
  name: "JobByMeComp",
  data() {
    return {
      data: {
        selectOption: [
          {
            value: 1,
            name: 'Quay video'
          }
        ]
      }
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
