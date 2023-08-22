<template>
  <ModalContainer :modalId="modalId" size="lg">
    <ModalHeader :head="modal.head.title" :modalId="modalId"></ModalHeader>
    <!-- Modal body -->
    <div class="px-4 pb-2">
      <div class="relative z-0 w-full mb-4 flex flex-wrap">
        <!-- Item -->
        <div v-for="(item, index) in modal.body" :key="index">
          <CheckBox :label="item.name" :value="item.value" :id="item.id"></CheckBox>
          <!-- List Item -->
          <div class="pl-8" v-for="(litem, lindex) in item.list" :key="lindex">
            <CheckBox :label="litem.name" :value="litem.value" :id="litem.id"></CheckBox>
            <!-- SubList Item -->
            <template v-if="litem.sublist != null">
              <div class="pl-8" v-for="(subItem, subIndex) in litem.sublist" :key="subIndex">
                <CheckBox :label="subItem.name" :value="subItem.value" :id="subItem.id"></CheckBox>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal footer -->
    <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
      <button :data-modal-hide="modalId" type="button"
        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Hủy
        bỏ</button>
      <button :data-modal-hide="modalId" type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Lưu</button>
    </div>
  </ModalContainer>
</template>

<script>

export default {
  name: "EditMarketingStaffAuthModal",
  props: {
    modalId: "",
    modal: {}
  }
}
</script>
