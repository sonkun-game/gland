<template>
  <div>
    <div class="p-4 rounded-lg" :class="{'hidden':isHidden}" :id="id" role="tabpanel">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabItemComponent",
  props: {
    id: {
      type: String,
      default: "id"
    },
    labelledby: { // this is not really required
      type: String,
      default: "labelledby"
    },
    isHidden: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    toTab(id) {
      return id + "-tab";
    }
  }
}
</script>

<style scoped></style>
