<template>
  <div>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3 text-left" v-for="(item, index) in table.head" :key="index">
            {{ item.name }}
          </th>
        </tr>
      </thead>
      <tbody>

      </tbody>
      <tfoot>

      </tfoot>
    </table>
  </div>
</template>

<script>

export default {
  name: "TableComp",
  data() {
    return {
      tableType: {

      }
    }
  },
  props: {
    table: {
      head: [
        {
          name: ""
        }
      ],
      body: [
        {}
      ]
    }

  },
  methods: {

  }
}

</script>



<style></style>
