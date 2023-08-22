<template>
  <th v-if="cellType === typeOfCell[1]" :class="styleClass">
    <slot></slot>
  </th>
  <td v-else-if="cellType === typeOfCell[2]" :class="styleClass">
    <template v-if="status == '1'">
      <Cell styleClass="px-6 text-lime-500">
        <i class="fa-solid fa-circle"></i>
        <span>{{ successMsg }}</span>
      </Cell>
    </template>
    <template v-else>
      <Cell styleClass="px-6 py-4 text-red-500">
        <i class="fa-solid fa-circle"></i>
        <span>{{ stopMsg }}</span>
      </Cell>
    </template>
  </td>
  <td v-else :class="styleClass">
    <slot></slot>
  </td>
</template>

<script>

export default {
  name: "CellComponent",
  data() {
    return {
      typeOfCell: [
        "data",
        "title",
        "status"
      ]
    }
  },
  props: {
    styleClass: String,
    cellType: {
      type: String,
      default: "data"
    },
    status: {
      type: String,
      default: "1",
    },
    stopMsg: {
      type: String,
      default: "Dừng hoạt động",
    },
    successMsg: {
      type: String,
      default: "Hoạt động"
    }
  }
}
</script>
