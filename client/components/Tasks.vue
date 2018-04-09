<docs>

</docs>

<template>
  <div class="content">
    <h2>Tasks</h2>

    <input
      class="input is-medium"
      autofocus
      autocomplete="off"
      placeholder="Enter task's name"
      v-model="taskName"
      @keyup.enter="add"
    >


    <div class="notification is-danger" v-show="error">
      <button class="delete" @click="clear('error')"></button>
      {{ error }}
    </div>

    <ul>
      <li v-for="task in tasks" :key="task.id">
        <label class="checkbox">
          <input type="checkbox" v-model="task.completed">
          {{ task.name }}
        </label>
        <a class="delete" @click="destroy(task.id)"></a>
      </li>
    </ul>

    <div class="is-loading">Loading? {{ loading }}</div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

const filters = {
  all: tasks => tasks,
  active: tasks => tasks.filter(_ => !_.done),
  completed: tasks => tasks.filter(_ => _.done)
}

export default {
  docs: true,
  name: 'Tasks',
  async created() {
    this.browse();
  },
  computed: {
    ...mapState('tasks', [
      'tasks',
      'name',
      'loading',
      'error'
    ]),
    ...mapGetters('tasks', [
    ]),
    taskName: {
      get() {
        return this.name;
      },
      set(name) {
        this.setName(name);
      }
    }
  },
  methods: {
    ...mapMutations('tasks', [
      'setName',
      'clear'
    ]),
    ...mapActions('tasks', [
      'browse',
      'add',
      'destroy'
    ]),
  }
}

</script>

<style scoped>
ul {
  list-style: none;
  margin-left: 0;
}

</style>
