<!-- List of modal -->
<template>
    <div>
        <ModalContainer modalId="editInfoConfigAction" size="2xl" :hasBackDrop="true" :isDark="theme === 'dark'">
            <ModalHeader :isDark="theme === 'dark'" modalId="editInfoConfigAction" head="Cấu hình thông tin">
            </ModalHeader>
            <div>
            </div>
        </ModalContainer>

        <ModalContainer modalId="deleteInfoConfigAction" size="2xl" :hasBackDrop="true" :isDark="theme === 'dark'">
            <ModalHeader :isDark="theme === 'dark'" modalId="deleteInfoConfigAction" head="Cấu hình thông tin">
            </ModalHeader>
            <div>
            </div>
        </ModalContainer>
    </div>
</template>

<script>
export default {
    name: "",
    computed: {

    },
    data() {
        return {

        }
    },
    props: {
        theme: {
            type: String,
            default: 'light'
        },
    },
    methods: {

    }
}
</script>