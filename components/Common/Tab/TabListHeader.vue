<template>
    <div class="border-b border-gray-200 dark:border-gray-700">
        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" :id="data.id" :data-tabs-toggle="toId(data.dataTabsToggle)"
            role="tablist">
            <li class="mr-2" role="presentation" v-for="(item, index) in data.list" :key="index">
                <button class="inline-block p-3 border-b-2 rounded-t-lg" :id="toTab(item.id)" type="button" role="tab"
                    :data-tabs-target="toId(item.id)" :aria-controls="item.id" aria-selected="false">
                    {{ item.name }}</button>
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
        }
    }
}
</script>
