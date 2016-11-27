<template>
  <section>
    <div class="box">
      <img src="~static/me.jpeg" alt="Alexandre_Chopin" />
      <h1>
        Alexandre Chopin
      </h1>
      <h2>
        Web Applications Architect
      </h2>
    </div>
    <ul>
      <li>
        <a href="https://twitter.com/ChopinAlexandre" target="_blank">
          Twitter
        </a>
      </li>
      <li>
        <a href="https://medium.com/@alexchopin" target="_blank">
          Medium
        </a>
      </li>
      <li>
        <a href="https://github.com/alexchopin" target="_blank">
          Github
        </a>
      </li>
      <li>
        <a href="mailto:alex@chopin.io" v-if="displayEmail">
          alex@chopin.io
        </a>
        <a href="#" @click.prevent="displayEmail = true" v-else>
          Email
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data () {
    return { displayEmail: false }
  }
}
</script>

<style scoped>
img {
  margin: 30px 0;
  display: inline-block;
  border-radius: 5px;
  box-shadow: 0 0 5px #000;
}
ul {
  width: auto;
  display: inline-block;
  list-style: none;
  padding: 0;
  padding-top: 30px;
  margin: 0;
}
li {
  display: inline-block;
  padding: 10px;
}
a, a:visited, a:active {
  width: 160px;
  display: block;
  text-decoration: none;
  color: #ddd;
  font-weight: 300;
  text-transform: uppercase;
  border: 1px solid #ccc;
  padding: 0.75em 0;
  border-radius: 5px;
  letter-spacing: 1px;
  transition: 0.25s;
}
a:hover, a:focus {
  background-color: rgba(255, 255, 255, 0.05);
}
h1, h2 {
  overflow: hidden;
}
h1 {
  font-size: 3.6em;
}
h2 {
  padding: 20px 0;
}
.box {
  width: auto;
  padding: 0 10px;
  text-align: center;
}
.box:before {
  content: " ";
  display: table;
}
.box:after {
  content: " ";
  display: table;
  clear: both;
}
@media (min-width: 560px) {
  ul {
    width: 400px;
  }
}
@media (min-width: 800px) {
  img {
    margin: 0;
    float: left;
  }
  ul {
    width: auto;
  }
}
</style>
