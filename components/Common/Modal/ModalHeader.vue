
<template>
    <div class="flex items-start justify-between p-4 rounded">
        <div class="text-xl font-semibold text-gray-900 dark:text-white">
            {{ head }}
        </div>
        <XButton :modalId="modalId" @close-modal="closeModal"></XButton>
    </div>
</template>

<script>
export default {
    name: "ModalHeaderComponent",
    props: {
        head: "",
        modalId: "",
    },
    methods: {
        closeModal() {
            this.$emit('modal-header-close')
        }
    }
}
</script>

<style scoped></style>
