<template>
  <div class="columns">
    <div class="column is-half">
      <router-view/>
    </div>

    <div class="column">
      <article class="message is-info" v-if="this.$options.docs">
        <div class="message-body">
          <span v-html="this.$options.__docs"></span>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  docs: true,
  name: 'App',
  data () {
    return {
      docs: this.$options.__docs
    }
  },
}
</script>

<style scoped>

</style>

<docs>
  This example shows how to integrate with a REST endpoint. Study
  <code>components/App.vue</code> <code>components/Tasks.vue</code> on the client side, i.e. within
  <code>client/</code> directory.

  <br/>
  <br/>

  It connects to Huncwot's REST endpoint defined
  in the backend via controllers. It uses Axios library.

  <br/>
  <br/>

  Each controller is a separate directory (a module) defined on the server side (i.e.
  within <code>server/</code> directory). Each module contains actions as separate files.
  There is a convention that defines five names as special:

  <br/>
  <br/>

  <ul>
    <li><code>browse</code> in <code>browse.js</code> to return a list of resources,</li>
    <li><code>read</code> in <code>read.js</code> to return a single resource,</li>
    <li><code>edit</code> in <code>edit.js</code> to update a single resource,</li>
    <li><code>add</code> in <code>add.js</code> to create a new resource,</li>
    <li><code>destroy</code> in <code>destroy.js</code> to delete a resource</li>
  </ul>

  <br/>

  Those names form a <a href="http://paul-m-jones.com/archives/291" target="_blank">BREAD</a> acronym.
</docs>
