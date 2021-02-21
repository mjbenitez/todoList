<template>
  <div class="todo">
    <div>
      <input
        data-test="checkbox"
        type="checkbox"
        :checked="done"
        @change="change"
      />
    </div>
    <div class="text-input">
      <span
        id="text-span"
        data-test="span"
        contenteditable="true"
        :style="styleObject"
      >
        {{ text }}
      </span>
      <button v-if="done" @click="remove">
        Remove
        <i class="fas fa-trash-alt"></i>
      </button>
      <button v-else @click="edit">
        Edit
        <i class="fas fa-pen"></i>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    text: String,
    done: Boolean
  },
  emits: ["todoDone", "remove", "edit"],
  computed: {
    styleObject() {
      const styleObject = {
        textDecoration: "none"
      };
      if (this.done) {
        styleObject.textDecoration = "line-through";
      }
      return styleObject;
    }
  },
  methods: {
    change(event) {
      this.$emit("todoDone", event.target.checked);
      const editableField = document.getElementById("text-span");
      event.target.checked
        ? editableField.setAttribute("contenteditable", false)
        : editableField.setAttribute("contenteditable", true);
    },
    remove() {
      this.$emit("remove");
    },
    edit() {
      this.$emit("edit");
    }
  }
};
</script>
<style lang="scss" scoped>
.todo {
  display: flex;
  align-items: center;
  div:first-child {
    margin-right: 1rem;
  }
  div:nth-child(2) {
    text-align: left;
    padding: 0.5rem;
    min-width: 100px;
  }
}
</style>
