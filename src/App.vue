<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">
html,body{
  width:100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
body,
h1,
h2,
h3,
h4,
p,
ul,
ol,
dl,
dd,
textarea,
button {
  margin: 0;
  padding: 0; }

li {
  list-style: none; }

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
li,
dl,
dt,
dd,
a,
textarea,
input,
button,
span,
em,
strong,
img,
div {
  -webkit-touch-callout: none;
  -moz-touch-callout: none;
  -ms-touch-callout: none;
  touch-callout: none;
  -webkit-tap-highlight-color: transparent;
  -moz-tap-highlight-color: transparent;
  -ms-tap-highlight-color: transparent;
  tap-highlight-color: transparent; }

em,
i {
  font-style: normal; }

input,
textarea,
button {
  outline: 0 none; }

textarea {
  resize: none; }

img {
  border: none; }

a {
  text-decoration: none; }

html {
  font-size: 625%;
  font-family: "Open Sans", Arial, "Hiragino Sans GB", "Microsoft YaHei", "STHeiti", "WenQuanYi Micro Hei", SimSun, sans-serif;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  text-size-adjust: 100%; }

body {
  font-size: 0.12rem;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: -webkit-flex;
  flex-direction: column; }

.clearfix:before, .clearfix:after {
  content: "";
  display: table;
  clear: both;
  zoom: 1; }
::-webkit-input-placeholder{
  color: #ccc !important;
}
</style>
