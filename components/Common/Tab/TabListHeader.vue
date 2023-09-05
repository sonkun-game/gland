<template>
    <div class="border-b border-gray-200 dark:border-gray-700">
        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" :id="data.id"
            :data-tabs-toggle="toId(data.dataTabsToggle)" role="tablist">
            <li class="mr-2" role="presentation" v-for="(item, index) in data.list" :key="index">

                <!-- Default type -->
                <button v-if="item.type == 'dropdown'" class="p-3 border-b-2 rounded-t-lg" :id="toTab(item.id)"
                    type="button" role="tab" :data-tabs-target="toId(item.id)" :aria-controls="item.id"
                    aria-selected="false" @mouseenter="showModal('modal-' + item.id)"
                    @mouseleave="hideModal('modal-' + item.id)">
                    {{ item.name }}
                    <i class="fa-solid fa-chevron-down"></i>
                </button>
                <button v-else class="p-3 border-b-2 rounded-t-lg" :id="toTab(item.id)" type="button" role="tab"
                    :data-tabs-target="toId(item.id)" :aria-controls="item.id" aria-selected="false">
                    {{ item.name }}
                </button>

                <!-- SubModal -->
                <div :id="'modal-' + item.id" v-if="item.type == 'dropdown' && item.subList !== undefined"
                    class="absolute bg-white rounded-lg shadow-xl hidden" style="width: 200px"
                    @mouseenter="showModal('modal-' + item.id)" @mouseleave="hideModal('modal-' + item.id)">

                    <ul v-if="item.subList !== null">
                        <li class="px-2 cursor-pointer hover:bg-blue-700 rounded-lg"
                            v-for="(subItem, subIndex) in item.subList" :key="'subModal' + subIndex">
                            <button class="p-3 hover:text-white" :id="toTab(subItem.id)" type="button" role="tab"
                                :data-tabs-target="toId(subItem.id)" :aria-controls="subItem.id" aria-selected="false">
                                {{ subItem.name }}
                            </button>
                        </li>
                    </ul>
                </div>
            </li>

            <!-- Setting button -->
            <li v-if="data.hasSetting">
                <button 
                    @click="toggleConfig()"
                    type="button"
                    class="p-3 rounded-lg config-btn" :class="{'active':isConfigClicked}">
                    <i class="fa-solid fa-wrench"></i>
                </button>
                <div
                    :class="{'hidden': !isConfigClicked}"
                    class="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
                        <li>
                            <a href="#"
                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                        </li>
                    </ul>
                </div>

            </li>
        </ul>
    </div>
</template>

<style scoped>
.config-btn.active {
    color: white;
    background-color: rgb(29 78 216);
}
</style>

<script>
export default {
    name: "TabListHeaderComponent",
    data() {
        return {
            isConfigClicked: false,
        }
    },
    props: {
        data: {
            id: {
                type: String,
                default: "tab"
            },
            dataTabsToggle: {
                type: String,
                default: "tab",
                required: true,
            },
            list: [
                {
                    id: "staff",
                    name: ""
                }
            ],
            hasSetting: {
                type: Boolean,
                default: false
            },
        }
    },
    methods: {
        toId(id) {
            return "#" + id;
        },
        toTab(id) {
            return id + "-tab";
        },
        showModal(id) {
            let el = document.getElementById(id);
            if (el) {
                el.classList.remove("hidden");
            } else {
                console.error("ShowModal::showModal : element not found !")
            }
        },
        hideModal(id) {
            let el = document.getElementById(id);
            if (el) {
                el.classList.add("hidden");
            } else {
                console.error("hideModal::showModal : element not found !")
            }
        },
        toggleConfig() {
            console.log("toggleConfig");
            this.isConfigClicked = !this.isConfigClicked;
        },
    }
}
</script>
