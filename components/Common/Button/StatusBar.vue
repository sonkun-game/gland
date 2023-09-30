
<template>
    <div v-if="theme==='dark'" class="w-fit bg-gray-900 text-white rounded-lg p-2">
        <button class="rounded-lg hover:bg-night hover:text-blue-300 py-4 px-6" v-for="(item, index) in listFilter"
            :key="item.id">
            {{ item.name }}
        </button>
    </div>
    <div v-else class="w-fit shadow text-gray-900 rounded-lg p-2">
        <button class="rounded-lg hover:shadow hover:text-blue-700 py-4 px-6" v-for="(item, index) in listFilter"
            :key="item.id">
            {{ item.name }}
        </button>
    </div>
</template>

<script>
export default {
    name: "StatusBarComponent",
    computed: {

    },
    data() {
        return {
            listFilter: [
                {
                    name: 'Mới',
                    id: 'filter-new'
                },
                {
                    name: 'Đang làm',
                    id: 'filter-on-working'
                },
                {
                    name: 'Quá hạn',
                    id: 'filter-due-date'
                },
                {
                    name: 'Done',
                    id: 'filter-done'
                },
                {
                    name: 'Fail',
                    id: 'filter-fail'
                },
                {
                    name: 'Tất cả',
                    id: 'filter-all'
                },
            ]
        }
    },
    props: {
        theme: {
            type: String,
            default: "dark"
        },

    },
    methods: {

    }
}
</script>

<style scoped>
.w-fit {
    width: fit-content;
}
</style>





