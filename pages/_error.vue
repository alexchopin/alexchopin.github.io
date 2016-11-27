<template>
  <section>
    <h1>{{ error.statusCode }}</h1>
    <h2>{{ error.message }}</h2>
    <router-link v-if="error.statusCode === 404" to="/">
      Website
    </router-link>
  </section>
</template>

<script>
export default {
  props: ['error'],
  data () {
    return { displayEmail: false }
  }
}
</script>

<style>
h1 {
  font-size: 7em;
}
h2 {
  padding: 0;
  padding-bottom: 30px;
}
a, a:visited, a:active {
  display: inline-block;
  text-decoration: none;
  color: #ddd;
  font-weight: 300;
  text-transform: uppercase;
  border: 1px solid #ccc;
  padding: 0.75em 2em;
  border-radius: 5px;
  letter-spacing: 1px;
  transition: 0.25s;
}
a:hover, a:focus {
  background-color: rgba(255, 255, 255, 0.05);
}
</style>
