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
                        <li class="px-2 py-2 cursor-pointer hover:bg-blue-700 hover:text-white" v-for="(subItem,subIndex) in item.subList" :key="'subModal' + subIndex">
                            <button class="p-3" :id="toTab(subItem.id)" type="button" role="tab"
                                :data-tabs-target="toId(subItem.id)" :aria-controls="subItem.id" aria-selected="false">
                                {{ subItem.name }}
                            </button>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: "TabListHeaderComponent",
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
            ]
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
            if(el) {
                el.classList.remove("hidden");
            } else {
                console.error("ShowModal::showModal : element not found !")
            }
        },
        hideModal(id) {
            let el = document.getElementById(id);
            if(el) {
                el.classList.add("hidden");
            } else {
                console.error("hideModal::showModal : element not found !")
            }
        },
    }
}
</script>
