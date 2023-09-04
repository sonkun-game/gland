<template>
    <div :id="modalId" tabindex="-1" aria-hidden="true"
        class="modal-container no-scrollbar fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] justify-center items-center flex">
        <div class="relative w-full max-h-full" :class="'max-w-' + size">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ModalContainerComponent",
    props: {
        modalId: "",
        // 2xl, xl, lg, sm
        size: {
          type: String,
          default: "2xl"
        }
    }
}
</script>

<style scoped>
.modal-container {
    max-height: 95vh;
    overflow-y: auto;
}
.no-scrollbar::-webkit-scrollbar {
    display: none;
}
.no-scrollbar {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}
</style>
