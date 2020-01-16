<template>
  <div class="todo-item" v-bind:class="{'is-complete': tod.completed}">
    <p>
      <input type="checkbox" v-on:change="markComplete" />
      {{ tod.title }}
      <button v-on:click="$emit('del-todo', tod.id)" class="del">x</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["tod"],
  methods: {
    markComplete() {
      this.tod.completed = !this.tod.completed;
    }
  }
};
</script>

<style scoped>
.todo-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}
.is-complete {
  text-decoration: line-through;
}
.del {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}
</style>