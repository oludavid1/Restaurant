<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/addpage">Add Resturants</router-link>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  name: "HeaderPage",
  methods: {
    logout() {
      localStorage.clear();
      return this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.nav {
  /* background-color: #f2f2f2; */
  background: #333;
  overflow: hidden;
  /* box-shadow: 0.6em 0.6em 1.2em #d2dce9, -0.5em -0.5em 1em #f2f2f2; */
}
.nav button {
  float: left;
  padding: 14px 16px;
  font-size: 17px;
  margin-right: 5px;
  color: #ddd;
  text-align: center;
  background: transparent;
  border: none;
  text-decoration: none;
  cursor: pointer;
}
.nav button:hover {
  background: #ddd;
  color: #333;
}
.nav a {
  float: left;
  padding: 14px 16px;
  font-size: 17px;
  margin-right: 5px;
  color: #ddd;
  text-align: center;
  text-decoration: none;
}
.nav a:hover {
  background: #ddd;
  color: #333;
}
</style>