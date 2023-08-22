<template>
  <ModalContainer :modalId="modalId">
    <ModalHeader :head="modal.head.title" :modalId="modalId"></ModalHeader>
    <!-- Modal body -->
    <div class="px-4 pb-2">
      <div class="relative z-0 w-full mb-4 flex flex-wrap">
        <div class="w-50 p-1" v-for="(item, index) in modal.body" :key="index">
          <template v-if="item.type == 'select'">
            <InputField styleClass="" :id="item.id" :label="item.name" typeInput="select" :selectOption="item.selectOption" >
            </InputField>
          </template>
          <template v-else>
            <InputField styleClass="" :id="item.id" :label="item.name" :placeholder="item.placeholder">
            </InputField>
          </template>

        </div>
      </div>
    </div>
    <!-- Modal footer -->
    <CloseOrSave :modalId="modalId" :onSave="onSave"></CloseOrSave>
  </ModalContainer>
</template>

<script>
export default {
  name: "createStaffMarketingButton",
  props: {
    modalId: "",
    modal: {
      head: {
        title: ""
      },
      body: [
        {
          id: "",
          name: "",
          placeholder: ""
        },
      ]
    },
    onSave: {
      type: Function,
      default: () => { }
    }
  },
}
</script>
