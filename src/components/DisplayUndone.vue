<template>
  <Logo></Logo>
  <ToDoInput :todoInput="todoInput" @add="handleAddTodo"></ToDoInput>
  <!-- <DisplayUndone @filterDone="handleFilterDone($event)"></DisplayUndone> -->
  <div class="check-done">
    <input
      data-test="checkbox"
      type="checkbox"
      v-model="selectedCategory"
      value="undone"
    />
    Display only Done
  </div>
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

export default {
  name: "App",
  components: {
    Logo,
    ToDoInput,
    ToDo
  },
  data() {
    return {
      todos: [],
      edited: false,
      oldTodoIndex: 0,
      selectedCategory: "All"
    };
  },
  computed: {
    filteredTodos() {
      const done = this.selectedCategory;
      if (done === "All") {
        return this.todos;
      } else {
        return this.todos.filter(function(todo) {
          return todo.checked;
        });
      }
    }
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
    },
    handleTodoRemove(index) {
      this.todos.splice(index, 1);
    },
    handleTodoEdit(todo, index) {
      this.edited = true;
      document.getElementById("todo-input").value = todo;
      this.oldTodoIndex = index;
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

.check-done {
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  justify-items: flex-start;
}
</style>
