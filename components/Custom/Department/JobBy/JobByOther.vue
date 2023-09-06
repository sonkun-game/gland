<template lang="">
  <div>
    <h3 class="text-lg font-semibold pb-3">Công việc được giao</h3>
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
    <CrudTable style-class="w-full text-sm text-left text-gray-500"
              :table="jobByOther.table"
              :cookiesName="cookiesName"
              @show-or-hide-column="handleShowOrHideColumn">
      <thead>
        <Row styleClass="text-sm text-gray-900 bg-gray-100">
          <Cell v-for="(item, index) in jobByOther.table.head" :key="index" styleClass="px-6 py-3 text-center"
          :class="{ 'hidden': !item.show }" cellType="title">
            {{ item.name }}
          </Cell>
        </Row>
      </thead>
      <tbody>
        <Row styleClass="bg-white border-b" v-for="(item, index) in jobByOther.table.body" :key="index">
          <Cell styleClass="px-6 py-4" v-if="jobByOther.table.head[0].show">{{ index + 1 }}</Cell>
          <Cell styleClass="px-6 py-4" v-if="jobByOther.table.head[1].show">
            <button data-modal-target="codeDetailModal" data-modal-toggle="codeDetailModal" class="link link-info">
              {{ item.code }}
            </button>
            <ModalContainer modalId="codeDetailModal">
            </ModalContainer>
          </Cell>
          <Cell styleClass="px-6 py-4" v-if="jobByOther.table.head[2].show">{{ item.info }}</Cell>
          <Cell styleClass="px-6 py-4" v-if="jobByOther.table.head[3].show">{{ item.target }}</Cell>
          <Cell styleClass="px-6 py-4" v-if="jobByOther.table.head[4].show">{{ item.jobType }}</Cell>
          <Cell styleClass="px-6 py-4" v-if="jobByOther.table.head[5].show">{{ item.serviceType }}</Cell>
          <Cell styleClass="px-6 py-4" v-if="jobByOther.table.head[6].show">{{ item.service }}</Cell>
          <Cell styleClass="px-6 py-4" v-if="jobByOther.table.head[7].show">{{ item.creator }}</Cell>
          <Cell styleClass="px-6 py-4" v-if="jobByOther.table.head[8].show">{{ item.deleveriedTo }}</Cell>
          <Cell styleClass="px-6 py-4" v-if="jobByOther.table.head[9].show">{{ item.result }}</Cell>
          <Cell styleClass="px-6 py-4" v-if="jobByOther.table.head[10].show">{{ item.deadline }}</Cell>
          <Cell styleClass="px-6 py-4 text-green-400" v-if="jobByOther.table.head[11].show">{{ item.in }}</Cell>
          <Cell styleClass="px-6 py-4 text-red-400" v-if="jobByOther.table.head[12].show">{{ item.out }}</Cell>
          <Cell styleClass="px-6 py-4" v-if="jobByOther.table.head[13].show">{{ item.status }}</Cell>
          <Cell styleClass="px-6 py-4 " v-if="jobByOther.table.head[14].show"></Cell>
        </Row>
      </tbody>
    </CrudTable>
  </div>
</template>
<script>
import { Common } from '../../../../plugins/common';

export default {
  computed: {
    cookiesName() {
      return "JBO" + this.missionId;
    }
  },
  data() {
    return {
      jobByOther: {
        table: {
          head: [
            { name: "STT", show: true, },
            { name: "Mã nguồn", show: true, },
            { name: "Tên/Thông tin", show: true, },
            { name: "Đối tượng", show: true, },
            { name: "Loại công việc", show: true, },
            { name: "Loại hình dịch vụ", show: true, },
            { name: "Hình thức dịch vụ", show: true, },
            { name: "Người tạo", show: true, },
            { name: "Giao cho", show: true, },
            { name: "K/q công việc", show: true, },
            { name: "Deadline", show: true, },
            { name: "Thu", show: true, },
            { name: "Chi", show: true, },
            { name: "Trạng thái", show: true, },
            { name: "Thao tác", show: true, },
          ],
          body: [
            {

            },
          ],
        },
      }
    }
  },
  props: {
    missionId: {
      type: String,
      default: ""
    }
  },
  methods: {
    handleShowOrHideColumn(data) {
      this.jobByOther.table.head[data.index].show = data.show;
      let value = Common.getTableShowColumn(this.jobByOther.table.head);
      Common.setCookie(this.cookiesName, value, { expires: 365, path: "/main/total/departments/" })
    },
  },
  mounted() {
    let cookie = Common.getCookie(this.cookiesName);
    if (cookie == undefined) {
      let value = Common.getTableShowColumn(this.jobByOther.table.head);
      Common.setCookie(this.cookiesName, value, { expires: 365, path: "/main/total/departments/" })
    } else {
      var arr = cookie.split("").map(Number);
      arr.forEach((element, index) => {
        if (element === 1) {
          this.jobByOther.table.head[index].show = true;
        } else {
          this.jobByOther.table.head[index].show = false;
        }
      });
    }
  }
}
</script>
<style lang="">

</style>
