<template>
  <div class="row justify-content-center">
    <div class="col col-md">
      <div class="table table-responsive cm-table border-top" :style="{height : maxHeight+'px',width : maxWidth+'%'}">
        <table class="table table-bordered table-sm text-center small sticky-header table-hover">
          <thead>
          <slot name="table-header"></slot>
          </thead>
          <tbody>
          <tr v-if="loading">
            <td :colspan="loaderColspan">
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              Loading...
            </td>
          </tr>
          <slot name="table-body" v-else></slot>
          </tbody>
          <tfoot>
          <slot name="table-footer"></slot>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseTable",

  props: {
    maxHeight: {
      type: Number,
      default: 500,
    },
    maxWidth: {
      type: Number,
      default: 100,
    },

    loading: {
      type: Boolean,
      default: false,
    },

    loaderColspan: {
      type: Number,
      default: 1,
    },

  },

  data() {
    return {};
  },

  methods: {},

  computed: {},

  mounted() {
    $('table tfoot').each(function() {
      $(this).insertAfter($(this).siblings('thead'));
    });
  },

  created() {
  },

  destroyed() {
  },

}
</script>

<style scoped>

</style>