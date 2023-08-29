<template>
  <div>
    <!-- edit button, click to show modal -->
    <template v-if="type == 'icon' && !isModalIdNullOrEmpty">
      <button :data-modal-target="modalId" :data-modal-toggle="modalId" class="w-6 h-6 bg-white border rounded"
        @click="toggleModal()">
        <i :class="iconClass"></i>
        <span :style="titleStyle">{{ title }}</span>
      </button>
    </template>
    <template v-else-if="type == 'link' && !isModalIdNullOrEmpty">
      <a :data-modal-target="modalId" :data-modal-toggle="modalId" :class="customClass">
        <span :style="titleStyle">{{ title }}</span>
      </a>
    </template>
    <template v-else-if="type == 'custom' && !isModalIdNullOrEmpty">
      <button :data-modal-target="modalId" :data-modal-toggle="modalId" :class="customClass" @click="toggleModal()">
        <span :style="titleStyle">{{ title }}</span>
      </button>
    </template>
    <template v-else-if="type == 'custom-with-icon' && !isModalIdNullOrEmpty">
      <button :data-modal-target="modalId" :data-modal-toggle="modalId" :class="customClass">
        <i :class="iconClass"></i>
        <span :style="titleStyle">{{ title }}</span>
      </button>
    </template>
    <template v-else-if="type == 'html' && !isModalIdNullOrEmpty">
      <button :data-modal-target="modalId" :data-modal-toggle="modalId" :class="customClass">
        <div v-html="title"></div>
      </button>
    </template>
    <template v-else-if="!isModalIdNullOrEmpty">
      <div class="w-100 flex justify-end mb-3.5">
        <button type="button" :data-modal-target="modalId" :data-modal-toggle="modalId"
          class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center mr-2">
          {{ title }}
        </button>
      </div>
    </template>
    <template v-else>
      <p class="text-red-500">
        <i class="fa-solid fa-bomb"></i>
        ShowModal
      </p>
    </template>

    <!-- Edit modal -->
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "ShowModal",
  data() {
    return {
      isModalIdNullOrEmpty: false,
      isShowing: false,
    }
  },
  mounted() {
    this.isModalIdNullOrEmpty = (this.modalId == "" || this.modalId == null)
  },
  props: {
    modalId: "",
    type: {
      type: String,
      default: "icon"
    },
    iconClass: {
      type: String,
      default: "fa-regular fa-pen-to-square "
    },
    customClass: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    titleStyle: {
      type: String,
      default: ""
    },
    setData: {
      type: Function,
      default: () => { }
    }

  },
  methods: {
    toggleModal() {
      var modal = document.getElementById(`${this.modalId}`);
      if (modal.classList.contains('hidden')) {
        modal.classList.remove("hidden");
        this.isShowing = true;
        this.$emit("modal-toggle", this.isShowing);
      } else {
        modal.classList.add("hidden");
        this.isShowing = false;
        this.$emit("modal-toggle", this.isShowing);
      }
      console.log("ShowModal:" + this.modalId + " is Showing : " + this.isShowing);
    }
  }
}
</script>
