import {mapGetters} from 'vuex';

export const UacMixins = {
  computed: {
    ...mapGetters([
      'authUser',
    ]),

    isStaff() {
      return this.authUser.scope == 'STAFF';
    },


    isSystemAdmin(){
      if(this.isStaff){
        return this.authUser.position.some(pos=>pos['id']===1);
      }
      return false
    },

    userPosition() {
      if(this.isStaff){
        return this.authUser.position.map((pos) => {
          return pos.short_name;
        }).join(' / ');
      }
      else{
        return this.authUser.position.short_name
      }
    },

    userFullName() {
      return this.authUser.full_name;
    },

  },

};
