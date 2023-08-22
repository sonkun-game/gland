<template>
    <thead :class="styleClass">
        <slot></slot>
    </thead>
</template>
  
<script>

export default {
    name: "TableHeadComponent",
    props: {
        styleClass: String,
    }
}
</script>
  