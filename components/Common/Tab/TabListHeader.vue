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


                <div :id="'modal-' + item.id" v-if="item.type == 'dropdown'"
                    class="absolute bg-white rounded-lg shadow-xl hidden" style="width: 200px"
                    @mouseenter="showModal('modal-' + item.id)" @mouseleave="hideModal('modal-' + item.id)">
                    <ul>
                        <li class="px-2 py-3 cursor-pointer hover:bg-blue-700 hover:text-white rounded-lg border-b">Nhiệm vụ
                            giao bởi
                            tôi
                        </li>
                        <li class="px-2 py-3 cursor-pointer hover:bg-blue-700 hover:text-white rounded-lg">Nhiệm vụ được
                            giao
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
            document.getElementById(id).classList.remove("hidden");
        },
        hideModal(id) {
            document.getElementById(id).classList.add("hidden");
        },
    }
}
</script>
