<template>
  <label for="todo-input">Introduzca un texto</label>
  <input type="text" id="todo-input" @keyup.enter="onKeyup" v-model="text" />
</template>
<script>
export default {
  props: {
    todoInput: String
  },
  emits: ["add"],
  data() {
    return {
      text: ""
    };
  },
  methods: {
    change(event) {
      this.$emit("todoDone", event.target.checked);
      const editableField = document.getElementById("text-span");
      event.target.checked
        ? editableField.setAttribute("contenteditable", false)
        : editableField.setAttribute("contenteditable", true);
    }
  }
};
</script>
<style lang="scss" scoped>
.todo-input {
  margin-bottom: 1rem;
  input {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 20px;
    margin-left: 1rem;
  }
}
</style>
