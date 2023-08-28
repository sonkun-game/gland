<template lang="">
  <div>
    <h3 class="text-lg font-semibold pb-3">Nhiệm vụ được giao</h3>
    <div class="flex mb-2">
      <span
        class="cursor-pointer rounded-lg p-1 mr-4 hover:text-blue-700 hover:bg-gray-300 active:bg-blue-700 active:text-white">Tất
        cả 16</span>
      <span
        class="cursor-pointer rounded-lg p-1 mr-4 hover:text-blue-700 hover:bg-gray-300 active:bg-blue-700 active:text-white">Khởi
        tạo 9</span>
      <span
        class="cursor-pointer rounded-lg p-1 mr-4 hover:text-blue-700 hover:bg-gray-300 active:bg-blue-700 active:text-white">Hủy
        5</span>
    </div>
    <CrudTable style-class="w-full text-sm text-left text-gray-500">
      <Thead>
        <Row styleClass="text-xs text-gray-900 bg-gray-300">
          <Cell v-for="(item, index) in jobByOther.table.head" :key="index" styleClass="px-6 py-3 text-center"
            cellType="title">
            {{ item.name }}
          </Cell>
        </Row>
      </Thead>
      <Tbody>
        <Row styleClass="bg-white border-b" v-for="(item, index) in jobByOther.table.body" :key="index">
          <Cell styleClass="px-6 py-4">{{ index + 1 }}</Cell>
          <Cell styleClass="px-6 py-4">
            <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" class="link link-info">{{ item.code
            }}</button>
          </Cell>
          <Cell styleClass="px-6 py-4">{{ item.info }}</Cell>
          <Cell styleClass="px-6 py-4">{{ item.target }}</Cell>
          <Cell styleClass="px-6 py-4">{{ item.jobType }}</Cell>
          <Cell styleClass="px-6 py-4">{{ item.serviceType }}</Cell>
          <Cell styleClass="px-6 py-4">{{ item.service }}</Cell>
          <Cell styleClass="px-6 py-4">{{ item.creator }}</Cell>
          <Cell styleClass="px-6 py-4">{{ item.deleveriedTo }}</Cell>
          <Cell styleClass="px-6 py-4">{{ item.result }}</Cell>
          <Cell styleClass="px-6 py-4">{{ item.deadline }}</Cell>
          <Cell styleClass="px-6 py-4 text-green-400">{{ item.in }}</Cell>
          <Cell styleClass="px-6 py-4 text-red-400">{{ item.out }}</Cell>
          <Cell styleClass="px-6 py-4">{{ item.status }}</Cell>
          <Cell styleClass="px-6 py-4 "></Cell>
        </Row>
      </tbody>
    </CrudTable>
  </div>
</template>
<script>
export default {
  data() {
    return {
      jobByOther: {
        table: {
          head: [
            // STT	Mã nguồn	Tên/Thông tin	Đối tượng	Loại công việc	Loại hình dịch vụ	Hình thức dịch vụ	Người tạo	Giao cho	K/q công việc	Deadline	Thu	Chi	Trạng thái	Thao tác
            { name: "STT" },
            { name: "Mã nguồn" },
            { name: "Tên/Thông tin" },
            { name: "Đối tượng" },
            { name: "Loại công việc" },
            { name: "Loại hình dịch vụ" },
            { name: "Hình thức dịch vụ" },
            { name: "Người tạo" },
            { name: "Giao cho" },
            { name: "K/q công việc" },
            { name: "Deadline" },
            { name: "Thu" },
            { name: "Chi" },
            { name: "Trạng thái" },
            { name: "Thao tác" },
          ],
          body: [
            {

            },
          ],
        },
      }
    }
  }
}
</script>
<style lang="">

</style>