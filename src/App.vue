<template>
  <Logo></Logo>
  <ToDoInput :todoInput="todoInput" @add="handleAddTodo"></ToDoInput>
  <DisplayUndone @todoFiltered="handleFilter($event)"></DisplayUndone>
  <ToDo
    v-for="(todo, index) in todos"
    :key="index"
    :text="todo.text"
    :done="todo.checked"
    @todoDone="handleTodoChange($event, index)"
    @remove="handleTodoRemove(index)"
    @edit="handleTodoEdit(todo.text, index)"
  ></ToDo>
</template>

<script>
import Logo from "./components/Logo.vue";
import ToDoInput from "./components/ToDoInput.vue";
import ToDo from "./components/ToDo.vue";
import DisplayUndone from "./components/DisplayUndone.vue";

export default {
  name: "App",
  props: {
    text: String
  },
  components: {
    Logo,
    ToDoInput,
    ToDo,
    DisplayUndone
  },
  data() {
    return {
      todos: [],
      auxTodos: [],
      edited: false,
      oldTodoIndex: 0
    };
  },
  methods: {
    handleTodoChange(event, index) {
      this.todos[index].checked = event;
    },
    handleAddTodo(text) {
      if (this.edited) {
        this.handleTodoRemove(this.oldTodoIndex);
      }
      this.todos.push({
        checked: false,
        text
      });
      this.edited = false;
      this.auxTodos = this.todos;
    },
    handleTodoRemove(index) {
      this.todos.splice(index, 1);
    },
    handleTodoEdit(todo, index) {
      this.edited = true;
      document.getElementById("todo-input").value = todo;
      this.oldTodoIndex = index;
    },
    handleFilter(event) {
      console.log(this.auxTodos);
      if (event) {
        return (this.todos = this.todos.filter(todo => todo.checked === false));
      } else {
        return (this.todos = this.auxTodos);
      }
    }
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
}
</style>
