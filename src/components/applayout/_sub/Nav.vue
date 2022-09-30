<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <router-link :to="{ name: 'Home' }" class="navbar-brand" tag="a">
     CREW MANAGEMENT
    </router-link>

    <button class="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">

          <li class="nav-item">
            <router-link class="nav-link"
                         :to="{name:'Home'}"
                         :class="{ 'active' : isActiveRoute('Home')}">
              <font-awesome-icon icon="house" class="ml-2 mr-1" />
              Home
            </router-link>
          </li>

          <!-- crewing  -->
          <li class="nav-item dropdown no-arrow">
            <a class="nav-link dropdown-toggle"
               href="#" id="navbarDropdownCrewChange"
               data-toggle="dropdown"
               aria-haspopup="true"
               aria-expanded="false"
               :class="{'active' : isActiveRoute('Masterlist')}">
              <font-awesome-icon icon="list" class="ml-2 mr-1" />
              MasterList
            </a>
            <div class="dropdown-menu dropdown-menu-left p-0" aria-labelledby="navbarDropdownSetup">
              <router-link class="dropdown-item"
                           :to="{name :'CrewList'}"
                           :class="{'active' : isActiveRoute('CrewMasterList')}">
                Crew list
              </router-link>

              <router-link class="dropdown-item"
                           :to="{name :''}"
                           :class="{'active' : isActiveRoute('')}">
                Vessel list
              </router-link>
            </div>

          </li>

      </ul>

      <div class="navbar-nav ml-auto ml-md-0">
        <div class="nav-item mr-2">
          <a class="nav-link text-white p-0" id="fullName" style="font-size:14px;" href="#">
            <font-awesome-icon icon="user" class="ml-2 mr-1" />
            {{ user.user_id }}
          </a>
        </div>
      </div>


<!--      <ul class="navbar-nav ml-auto ml-md-0">-->
<!--        <li class="nav-item dropdown">-->
<!--          <a class="nav-link dropdown-toggle " id="userDropdown" href="#" role="button" data-toggle="dropdown"-->
<!--             aria-haspopup="true" aria-expanded="false">-->
<!--            <font-awesome-icon icon="user-shield" class="ml-2 mr-1" />-->
<!--            <span style="font-size:14px;">Administrator</span>-->
<!--          </a>-->

<!--          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">-->

<!--            <div class="dropdown-divider"></div>-->
<!--            <router-link :to="{name : ''}" class="dropdown-item"-->
<!--                         href="#">-->
<!--              <font-awesome-icon icon="chart-column" class="ml-2 mr-1" />-->
<!--              Report #1-->
<!--            </router-link>-->

<!--            <router-link :to="{name : ''}" class="dropdown-item"-->
<!--                         href="#">-->
<!--              <font-awesome-icon icon="chart-column" class="ml-2 mr-1" />-->
<!--              Report #2-->
<!--            </router-link>-->

<!--            <router-link :to="{name : ''}" class="dropdown-item"-->
<!--                         href="#">-->
<!--              <font-awesome-icon icon="chart-column" class="ml-2 mr-1" />-->
<!--              Report #3-->
<!--            </router-link>-->

<!--          </div>-->
<!--        </li>-->
<!--      </ul>-->


      <ul class="navbar-nav ml-auto ml-md-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown"
             aria-haspopup="true" aria-expanded="false">
            <font-awesome-icon icon="gear" class="ml-2 mr-1" />
            <span style="font-size:14px;">
              {{ user.name }}  {{ user.last_name }}
            </span>
          </a>

          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
            <a class="dropdown-item" href="#"
               data-toggle="modal" data-target="#change-user-password">
              <font-awesome-icon icon="shield-halved" class="ml-2 mr-1" />
              Change Password
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item">
              <font-awesome-icon icon="arrow-right-from-bracket" class="ml-2 mr-1" />
              Logout
            </a>
          </div>


        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import {vueAppMixin} from "@/mixins/vueAppMixin";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Nav",

  /** mixins **/
  mixins: [vueAppMixin,],

  methods: {
    ...mapActions([
        'pullUserDetails',
    ])
  },

  computed: {
    ...mapGetters([
      'user',
    ]),
  },

  created() {
    this.pullUserDetails();
  },


}
</script>

<style scoped>

</style>