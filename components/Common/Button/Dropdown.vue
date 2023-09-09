
<template>
    <div>
        <button :id="'dropdown' + dropKey" :data-dropdown-toggle="'dropdownToggle' + dropKey"
            class="menu-button flex items-center w-full p-3 transition duration-100 rounded-lg"
            type="button">{{ label }} <i class="fa-solid fa-chevron-down"></i></button>
        <!-- Dropdown menu -->
        <div :id="'dropdownToggle' + dropKey" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" :aria-labelledby="'dropdown' + dropKey">
                <li v-for="(item, index) in list" :key="dropKey + index">
                    <a :href="item.link"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        {{ item.name }}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
    name: "DropdownComp",
    computed: {
        dropKey() {
            return uuidv4();
        }
    },
    props: {
        label: "",
        list: [
            {
                link: "",
                name: ""
            }
        ]
    }
}
</script>

<style scoped></style>





