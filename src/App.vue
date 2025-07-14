<template>
  <div>
    <nav>  
      <div><router-link class="route" to="/" >home</router-link></div>
      <div><router-link class="route" to="/contact">contact</router-link> </div>
      <div><router-link class="route" to="/cart">cart</router-link></div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup>
</script>



<style >
 body {
  margin : 0;
   padding: 0;
   background : linear-gradient(skyblue , rgb(223, 236, 240)) no-repeat fixed  

}
nav{
  display : flex;
  justify-content: space-between;
  margin: 0px 40px;
  background-color: rgb(124, 165, 156);
  border-radius: 20px;

}
nav div{
    cursor :pointer;
    margin : 10px;
    font-size: 1.5rem;

} 
.route{
text-decoration : none;
padding: 10px 15px;
color : #ffffff;
font-weight : bold;
}
</style>
