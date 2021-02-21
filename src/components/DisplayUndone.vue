<template>
  <div class="check-done">
    <input
      data-test="checkbox"
      type="checkbox"
      :checked="displayUndone"
      @change="change"
    />Mostar tareas sin realizar
  </div>
</template>

<script>
export default {
  props: {
    displayUndone: Boolean
  },
  emits: ["todoFiltered"],
  methods: {
    change(event) {
      this.$emit("todoFiltered", event.target.checked);
    }
  }
};
</script>

<style>
.check-done {
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  justify-items: flex-start;
}
</style>
