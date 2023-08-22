<template>
    <div>
        <select v-for="(item, index) in filter" :key="index" :id="item.id"
            class=" p-2 w-44 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg py-1.5 px-2.5 dark:bg-gray-700 dark:border-gray-600 mr-2">
            <option class="text-ellipsis" v-for="(optionItem, optionIndex) in item.selectOption" :key="optionIndex"
                :value="optionItem.value">
                {{ optionItem.name }}
            </option>
        </select>
    </div>
</template>

<script>

export default {
    name: "ListFilterComp",
    props: {
        filter: []
    }
}
</script>
