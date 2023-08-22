<template>
    <tbody :class="styleClass">
        <slot></slot>
    </tbody>
</template>
  
<script>

export default {
    name: "TableBodyComponent",
    props: {
        styleClass: String,
    }
}
</script>
  