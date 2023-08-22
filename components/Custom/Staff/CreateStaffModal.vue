<template>
    <ModalContainer :modalId="modalId">
        <ModalHeader :head="modal.head.title" :modalId="modalId"></ModalHeader>
        <!-- Modal body -->
        <div class="px-4 pb-2">
            <div class="relative z-0 w-full mb-4 flex flex-wrap">
                <InputField v-for="(item, index) in modal.body" :key="index" styleClass="w-50 p-1" :id="item.id"
                    :label="item.name" :placeholder="item.placeholder">
                </InputField>
            </div>
        </div>
        <!-- Modal footer -->
        <CloseOrSave :modalId="modalId" :onSave="onSave"></CloseOrSave>
    </ModalContainer>
</template>

<script>
export default {
    name: "createStaffButton",
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
            default: () => {}
        }
    },
}
</script>
