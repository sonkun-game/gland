
<template>
    <div>
        <h2 :id="'collapse-' + collapseKey" @click="toggleCollapse()">
            <button class="flex items-center w-full p-3 transition duration-100 rounded-lg justify-between text-white">
                <span>{{ name }}</span>
                <i class="fa-solid fa-chevron-down w-4 h-4 focus:ring-4 focus:outline-none focus:ring-blue-300"></i>
            </button>
        </h2>
        <div :id="'collapse-body' + collapseKey" :class="{'hidden':!isHidden}">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
    name: "CollasapeComp",
    computed: {
        collapseKey() {
            return uuidv4();
        }
    },
    props: {
        name: "",
        list: [],
        isHidden: {
            type: Boolean,
            default: true,
        }
    },
    methods: {
        toggleCollapse() {
            var modal = document.getElementById(`${'collapse-body' + this.collapseKey}`);
            if (modal.classList.contains('hidden')) {
                modal.classList.remove("hidden");
                // this.isShowing = true;
                // this.$emit("modal-toggle", this.isShowing);
            } else {
                modal.classList.add("hidden");
                // this.isShowing = false;
                // this.$emit("modal-toggle", this.isShowing);
            }
        }
    }
}
</script>

<style scoped></style>





