<template>
    <tr :class="styleClass">
      <slot></slot>
    </tr>
</template>

<script>
export default {
  name: "RowComponent",
  props: {
    styleClass: String
  }
}
</script>
