<template>
  <div>
    <Header></Header>
    <h1>This is the options page</h1>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";

export default {
  name: "Options",
  components: { Header, Footer },
  data() {
    return {
      title: "",
    };
  },
};
</script>