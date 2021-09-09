<template>
  <v-app>

    <appNavbar
            :menuItems="menuItems"></appNavbar>

    <appSidemenu
            :menuItems="menuItems"></appSidemenu>

    <v-container>
      <router-view></router-view>
    </v-container>

    <appFooter></appFooter>

  </v-app>
</template>

<script>

  import Footer from "./components/footer/Footer";
  import Navbar from "./components/navbar/Navbar";
  import SideMenu from "./components/sideMenu/SideMenu";

  export default {
    data () {
      return {
        sideBar: false,
        menuItems: [
          {title: `Characters`, icon: `mdi-face`, url: `/characters`},
          {title: `Episodes`, icon: `mdi-movie-roll`, url: `/episodes`},
          {title: `Quotes`, icon: `mdi-format-quote-open-outline`, url: `/quotes`},
          {title: `Deaths`, icon: `mdi-skull-outline`, url: `/deaths`},
        ]
      }
    },
    components: {
      appNavbar: Navbar,
      appSidemenu: SideMenu,
      appFooter: Footer,
    },
  }

</script>