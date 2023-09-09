
<template>
    <div>
        <div id="accordion-collapse" data-accordion="collapse">
            <h2 :id="'collapse-' + collapseKey">
                <button aria-expanded="true" :data-accordion-target="'#collapse-body' + collapseKey"
                    :aria-controls="'#collapse-body' + collapseKey"
                    class="flex items-center w-full p-3 transition duration-100 rounded-lg justify-between" type="button"> 
                    {{ name }}
                    <i class="fa-solid fa-chevron-down w-4 h-4 focus:ring-4 focus:outline-none focus:ring-blue-300"></i>
                </button>
            </h2>
            <div :id="'collapse-body' + collapseKey" class="hidden" :aria-labelledby="'collapse-' + collapseKey">
                <slot></slot>
            </div>
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
        name: ""
    }
}
</script>

<style scoped></style>





