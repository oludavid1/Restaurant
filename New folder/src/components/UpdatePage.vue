<template>
  <HeaderPage />
  <h1>Hello User, Welcome on Update Resturants Page</h1>
  <form class="add">
    <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name"/>
    <input type="text" name="address" placeholder="Enter address" v-model="restaurant.address"/>
    <input type="text" name="contact" placeholder="Enter contact" v-model="restaurant.contact"/>
    <button type="button" @click="updateRestaurant">Update Restaurant</button>
  </form>
</template>
  
<script>
import HeaderPage from "./HeaderPage.vue";
import axios from "axios";
export default {
  name: "UpdatePage",
  components: {
    HeaderPage,
  },
  data() {
    return {
      restaurant: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  methods: {
    async updateRestaurant() {
      const result = await axios.put(
        "http://localhost:3000/restaurant/" + this.$route.params.id,
        {
          name: this.restaurant.name,
          address: this.restaurant.address,
          contact: this.restaurant.contact,
        }
      );
      if (result.status == 200) {
        this.$router.push({ name: "HomePage" });
      }
      console.warn(this.restaurant);
    },
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }

    const result = await axios.get(
      "http://localhost:3000/restaurant/" + this.$route.params.id
    );
    console.warn(result.data);
    this.restaurant = result.data;
  },
};
</script>
  
  <style>
</style>