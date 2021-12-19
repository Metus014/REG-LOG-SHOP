<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
.swal2-popup {
  font-family: 'Mitr', sans-serif !important;
}
.header{
  background-image: url("https://wallpaperaccess.com/full/4724215.jpg");
  display: flex;
  height: 92vh;
}

#navbarSupportedContent{
  margin-right: -100px;
}
.navbar-brand{
  margin-left: -100px;
}
#home,.login-page,.register-page{
  font-family: 'Mitr', sans-serif;
}
.login-box{
  width: 400px;
}

.register-box{
  width: 600px;
}

.shop-box{
  width: 1000px;
  
}

.login-page,.register-page{
  background-image: url("https://wallpaperaccess.com/full/5881254.jpg");
}

#app {
  font-family: 'Mitr', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("https://wallpaperaccess.com/full/5881254.jpg");
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>