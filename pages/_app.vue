<template>
  <nuxt-container>
    <nuxt/>
  </nuxt-container>
</template>
<style>
html, body {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 1rem;
  background-color: #171F26;
  color: #fff;
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  text-shadow: 1px 1px #000;
}
*, *::before, *::after {
  box-sizing: border-box;
}
section {
  text-align: center;
  display: inline-block;
  padding: 30px;
}
h1, h2 {
  margin: 0;
  font-weight: 300;
  letter-spacing: 1px;
  overflow: hidden;
}
h1 {
  font-size: 3.6em;
  padding: 0;
}
h2 {
  color: #ccc;
  font-size: 2em;
  padding: 20px 0;
}
.page-enter-active, .page-leave-active
{
  transition: display .5s
}
.page-enter, .page-leave-active
{
  display: none
}
</style>
