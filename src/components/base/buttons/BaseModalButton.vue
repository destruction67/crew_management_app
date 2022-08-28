<template>
  <button
      type="button"
      data-toggle="modal"
      :data-target="'#'+targetModalId"
      @click="buttonEvent"
      :class="`btn ${btnClass} ${btnSize} ${otherClass}`"
      data-backdrop="static"
      data-keyboard="false">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',

  /** mixins **/
  mixins: [],

  /** props **/
  props: {
    otherClass : {
      type : String,
      default : '',
    },

    targetModalId : {
      type: String,
      default: 'example',
    },

    btnSize: {
      type: String,
      default: 'md',
    },

    isBtnPrimary : {
      type: Boolean,
      default: false,
    },

    isBtnDanger: {
      type: Boolean,
      default: false,
    },

    isBtnSuccess: {
      type: Boolean,
      default: false,
    },

    isBtnSecondary: {
      type: Boolean,
      default: false,
    },

    isBtnInfo: {
      type: Boolean,
      default: false,
    },

    isBtnWarning: {
      type: Boolean,
      default: false,
    },

    isBtnOutlinePrimary : {
      type: Boolean,
      default: false,
    },

    isBtnOutlineDanger : {
      type: Boolean,
      default: false,
    },


    isBtnOutlineSuccess : {
      type: Boolean,
      default: false,
    },


    isBtnOutlineSecondary : {
      type: Boolean,
      default: false,
    },

    isBtnOutlineInfo : {
      type: Boolean,
      default: false,
    },

    isBtnOutlineWarning : {
      type: Boolean,
      default: false,
    }

  },

  /** data **/
  data() {
    return {};
  },

  /** methods**/
  methods: {
    buttonEvent(id){
      this.$emit('thisButtonEvent', id)
    }
  },


  /**  computed  **/
  computed: {
    btnClass() {
      if(this.isBtnPrimary){
        return 'btn-primary'
      }

      if (this.isBtnDanger) {
        return 'btn-danger';
      }

      if (this.isBtnSuccess) {
        return 'btn-success';
      }

      if (this.isBtnSecondary) {
        return 'btn-secondary';
      }

      if (this.isBtnInfo) {
        return 'btn-info';
      }

      if (this.isBtnWarning) {
        return 'btn-warning';
      }

      if(this.isBtnOutlinePrimary){
        return 'btn-outline-primary'
      }

      if(this.isBtnOutlineDanger){
        return 'btn-outline-danger';
      }

      if(this.isBtnOutlineSuccess){
        return 'btn-outline-success'
      }

      if(this.isBtnOutlineSecondary){
        return 'btn-outline-success'
      }

      if(this.isBtnOutlineInfo){
        return 'btn-outline-info'
      }

      if(this.isBtnOutlineWarning){
        return 'btn-outline-warning'
      }
      return 'bg-white text-dark';
    },
  },

  /** mounted **/
  mounted() {
  },

  /** created **/
  created() {
  },

  /** watch
   searchText : {
			handler : 'fetchUserList',
			immediate : true,
		}
   **/
  watch: {},

  /** destroyed **/
  destroyed() {
  },

};
</script>


<style scoped lang="scss">
.sm {
  padding: 3px 6px;
  font-size: .75em;
  border-radius: 2px;
}

.md {
  padding: 4px 8px;
  font-size: .85em;
  border-radius: 3px;
}

.lg {
  padding: 6px 12px;
  font-size: 1em;
  border-radius: 4px;
}

.xl {
  padding: 8px 16px;
  font-size: 1.25em;
  border-radius: 6px;
}
</style>
