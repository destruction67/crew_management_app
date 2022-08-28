<template>
  <button type="button" class="btn btn-primary" :class="btnSize">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BasePrimaryButton",
  /** mixins **/
  mixins: [],

  /** props **/
  props: {
    btnSize: {
      type: String,
      default: 'md'
    }
  },

  /** data **/
  data() {
    return {};
  },

  /** methods**/
  methods: {},

  /**  computed  **/
  computed: {},

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
}
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