<template>
<div>
  <top-nav>
    <template slot="nav">
      {{ isIdle }}
      <top-nav-sub></top-nav-sub>
    </template>

    <template slot="content">
      <top-nav-content></top-nav-content>
    </template>

  </top-nav>
</div>
</template>

<script>
import {vueAppMixin} from "@/mixins/vueAppMixin";
import {mapActions, mapGetters} from 'vuex';

import TopNav from "@/components/applayout/TopNav";
import Nav from "@/components/applayout/_sub/Nav";
import Content from "@/components/applayout/_sub/Content";

export default {
  name: "Main",

  components: {
    'top-nav': TopNav,
    'top-nav-sub': Nav,
    'top-nav-content': Content,
  },

  mixins: [vueAppMixin],

  data() {
    return {};
  },

  methods: {
    ...mapActions(
        [
        ],
    ),


  },

  computed: {
    isIdle() {
      if (this.$store.state.idleVue.isIdle === true) {
        // AlertService.sessionExpireAlert();
      }

    },
  },

}
</script>

<style scoped>

</style>