<template>
  <router-view />
</template>

<script>


export default {
  name: 'App',
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#tutorials {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#tutorials td, #tutorials th {
  border: 1px solid #ddd;
  padding: 8px;
}

#tutorials tr:nth-child(even){background-color: #f2f2f2;}

#tutorials tr:hover {background-color: #ddd;}

#tutorials th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}

.button {
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.test{
  padding-left: 50%;
}

.button1 {background-color: #4CAF50;} /* Green */
.button2 {background-color: #f46e45;} /* Blue */
</style>
