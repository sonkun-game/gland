
<template>
    <div class="flex items-start justify-between p-4 rounded" :class="{ 'bg-gray-900': isDark, 'bg-white': !isDark }">
        <div class="text-xl font-semibold text-white" v-if="isDark">
            {{ head }}
        </div>
        <div class="text-xl font-semibold text-gray-900" v-else>
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
        isDark: false,
    },
    methods: {
        closeModal() {
            this.$emit('modal-header-close');
            var modal = document.getElementById(`${this.modalId}`);
            if (!modal.classList.contains('hidden')) {
                modal.classList.add("hidden");
            }
        },
    }
}
</script>

<style scoped></style>
