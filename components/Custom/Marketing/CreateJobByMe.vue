
<template>
  <div>
    <ModalContainer :modalId="modalId" size="xl">
      <ModalHeader head="Bộ lọc" :modalId="modalId"></ModalHeader>
      <div class="px-4 pb-4 w-full" v-for="(item, index) in modal" :key="index">
        <InputField styleClass="" :id="item.id" :label="item.name" :typeInput="item.type"
          :selectOption="item.selectOption" :placeholder="item.placeholder">
        </InputField>
      </div>

      <!-- Close and save -->
      <div class="flex items-center p-6 space-x-2 border-gray-200 justify-end dark:border-gray-600">
        <button :data-modal-hide="modalId"
          class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
          Hủy bỏ</button>
        <button :data-modal-hide="modalId" type="button"
          class="btn btn-info text-white bg-blue-700 hover:bg-blue-800 border-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Lưu</button>
      </div>
    </ModalContainer>
  </div>
</template>

<script>
export default {
  name: "CreateByMeComponent",
  data() {
    return {
      modal: [
        {
          id: "name",
          name: "Tên/Thông Tin",
          placeholder: "Mã nguồn media",
          type: "text",
          selectOption: [],
        },
        {
          id: "target",
          name: "Đối tượng",
          placeholder: "Đối tượng",
          type: "select",
          selectOption: [
            {
              name: "Khách hàng"
            },
            {
              name: "Chủ nhà"
            },
          ],
        },
        {
          id: "service",
          name: "Dịch vụ",
          placeholder: "Loại hình dịch vụ",
          type: "select",
          selectOption: [
            {
              value: '1',
              name: "Văn phòng"
            },
            {
              value: '2',
              name: "Nhà phố"
            },
            {
              value: '3',
              name: "Mặt bằng"
            },
            {
              value: '4',
              name: "Chung cư"
            },
            {
              value: '5',
              name: "Nhà trọ"
            },
          ],
        },
        {
          id: "type",
          name: "Hình thức",
          placeholder: "Hình thức dịch vụ",
          type: "select",
          selectOption: [
            {
              value: '1',
              name: "Cho thuê"
            },
            {
              value: '2',
              name: "Thuê"
            },
            {
              value: '3',
              name: "Bán"
            },
            {
              value: '4',
              name: "Mua"
            },
          ],
        },
        {
          id: "jobType",
          name: "Loại công việc",
          placeholder: "Loại công việc",
          type: "select",
          selectOption: [
            {
              value: '1',
              name: "Chạy ads"
            },
            {
              value: '2',
              name: "Chạy ads fb"
            },
          ],
        },
        {
          id: "staff",
          name: "Nhân viên",
          placeholder: "Nhân viên",
          type: "select",
          selectOption: [
            {
              value: '1',
              name: "Hoàng Sơn"
            },
            {
              value: '2',
              name: "Chu Đạt"
            },
          ],
        },
        {
          id: "link",
          name: "Link",
          placeholder: "Link",
          type: "text",
          selectOption: [],
        },
        {
          id: "note",
          name: "Ghi chú",
          placeholder: "Ghi chú",
          type: "textarea",
          selectOption: [],
        },
      ]
    }
  },
  props: {
    modalId: ""
  }
}
</script>

<style scoped></style>
