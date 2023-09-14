<template>
    <tr class="border-b" :class="{'bg-gray-900 text-white':theme==='dark','bg-gray-50 text-gray-900':theme==='light'}">
      <slot></slot>
    </tr>
</template>

<script>
export default {
  name: "RowComponent",
  props: {
    styleClass: String,
    theme: String
  }
}
</script>
