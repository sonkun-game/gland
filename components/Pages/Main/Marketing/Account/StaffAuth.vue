
<template>
  <div>

    <div class="flex mb-4">
      <p>Danh sách các tài khoản trong công ty</p>

      <div class="grow"></div>

      <!-- Search Input -->
      <div>
        <input type="search" id="first_name"
          class="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 justify-self-end"
          placeholder="Tìm kiếm bằng tên - tài khoản">
      </div>
    </div>

    <CrudTable style-class="w-full text-sm text-left text-gray-500">
      <Thead>
        <Row styleClass="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <Cell v-for="(item, index) in staffAuth.table.head" :key="index" styleClass="px-6 py-3 text-left"
            cellType="title">
            {{ item.name }}
          </Cell>
        </Row>
      </Thead>
      <Tbody>
        <Row styleClass="bg-white border-b" v-for="(item, index) in staffAuth.table.body" :key="index">
          <Cell styleClass="px-6 py-4">{{ index }}</Cell>
          <Cell styleClass="px-6 py-4">{{ item.username }}</Cell>
          <Cell styleClass="px-6 py-4">{{ item.name }}</Cell>
          <Cell styleClass="px-6 py-4">{{ item.position }}</Cell>
          <Cell styleClass="px-6 py-4">{{ item.job }}</Cell>
          <Cell styleClass="px-6 py-4 ">
            <div class="m-auto flex justify-center">
              <ShowModal modalId="editMarketingStaffTableId" iconClass="fa-regular fa-pen-to-square">
                <EditStaffAuthModal modalId="editMarketingStaffTableId" :modal="staffAuth.editModal"></EditStaffAuthModal>
              </ShowModal>
            </div>
          </Cell>
        </Row>
      </tbody>
    </CrudTable>

  </div>
</template>

<script>
import EditStaffAuthModal from '../../../../Custom/Marketing/EditStaffAuthModal.vue';

export default {
  name: "MarketingStaffAuthComponent",
  components: {
    EditStaffAuthModal
  },
  props: {
    staffAuth: {}
  },
  methods: {
    onSaveData() {
      console.log("create Marketing Staff !!");
    }
  }
}
</script>

<style scoped></style>
