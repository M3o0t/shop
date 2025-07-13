<template>
  <div class="container">
    <nav><ul>  
      <h2><router-link to="/" >home</router-link></h2>
      <h2><router-link to="/contact">contact</router-link> </h2>
      <h2><router-link to="/cart">cart</router-link></h2></ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup>
</script>



<style scoped>
body{
  margin : 0;
   padding: 0
}
nav{
  margin: 0px 40px;
  background-color: rgb(124, 165, 156);
  border-radius: 20px;

} ul {
  display : flex;
  justify-content: space-between;
  margin : 0px 20px;
}
ul h2{
    cursor :pointer

}
</style>
