<template>
  <div class="container-fluid">
    <div class="row py-4">
      <div class="col-md-12">

        <div class="row">
          <div class="col-md-4">
            <div class="row">

              <div class="form-inline mb-3">
                <div class="form-group mb-2 mr-5 mt-2">
                  <span class="ml-4 font-weight-bold lead" style="font-size: 22px;">Crew Masterlist</span>

                </div>
                <div class="form-group ">
                  <button type="button" class="btn btn-primary btn-xs"
                         @click="add_crew_route"
                  >
                    <font-awesome-icon icon="plus"/>
                    Add Crew
                  </button>

                </div>
              </div>

            </div>
          </div>

          <div class="col-sm-4">
            <div class="input-group mb-2 mr-sm-2">
              <input
                  type="text"
                  class="form-control form-control-sm"
                  id="formdata-searchvalue"
                  placeholder="Search crew name">

              <button class="btn btn-primary btn-sm">
                <font-awesome-icon icon="search"/>
                Search
              </button>
            </div>
          </div>

          <!-- status -->
          <div class="col-sm-2">
            <div class="form-group row">
              <label for="list-stat" class="col-sm-3 col-form-label">Status</label>
              <span class="col-form-label">:</span>
              <div class="col-sm-7 text-left">
                <select name="listCount" id="list-stat" class="form-control custom-select-sm">
                  <option :value="null">--select--</option>
                </select>
              </div>
            </div>
          </div>

          <!-- count -->
          <div class="col-sm-2">
            <div class="form-group row">
              <label for="list-count" class="col-sm-3 col-form-label">Count</label>
              <span class="col-form-label">:</span>
              <div class="col-sm-7 text-left">
                <select name="listCount" id="list-count" class="form-control custom-select-sm"
                >
                </select>
              </div>
            </div>
          </div>
        </div>


        <!--  pagination      -->
        <div class="row py-1">
          <div class="col-md-9">
            <div class="row">
              <div class="col-5">
              </div>
            </div>
          </div>
        </div>

        <!-- table  -->
        <div id="table-section" class="py-3">
          <base-table :max-height="550" :loader-colspan="14">
            <template v-slot:table-header>
              <tr>
                <th scope="row" class="align-middle">#</th>
                <th scope="row" class="text-center align-middle">CODE</th>
                <th scope="row" class="align-middle">NAME</th>
                <th scope="row" class="align-middle">ADDRESS</th>
                <th scope="row" class="align-middle">CREATED<br>BY</th>
                <th scope="row" class="align-middle">UPDATED<br>BY</th>
                <th scope="row" class="align-middle">CREATED<br>AT</th>
                <th scope="row" class="align-middle">UPDATED<br>AT</th>
                <th scope="row" class="align-middle">STATUS</th>
                <th scope="row" class="text-center align-middle">ACTION</th>
              </tr>
            </template>
            <template v-slot:table-body>
              <tr v-for="(crew, index) in crews" :key="crew.id">
                <td>{{ index + 1 }}</td>
                <td scope="col">{{ crew.crew_code }}</td>
                <td scope="col">{{ crew.full_name }}</td>
                <td scope="col"> - </td>
                <td scope="col">{{ crew.created_by }} </td>
                <td scope="col"> {{ crew.updated_by }} </td>
                <td scope="col">
                  {{ crew.created_at }}
                </td>
                <td scope="col">
                  {{ crew.updated_at }}
                </td>
                <td scope="col">
                  {{ crew.status == 1 ? 'ACTIVE' : 'INACTIVE' }}
                </td>
                <td>
                  <button
                      class="btn btn-warning btn-xs mr-2"
                      data-toggle="modal"
                      data-target="#viewCrewModal"
                      data-backdrop="static"
                      data-keyboard="false">
                    <font-awesome-icon icon="bars"/>
                    View
                  </button>
                  <button
                      class="btn btn-danger btn-xs">
                    <font-awesome-icon icon="trash"/>
                    Delete
                  </button>
                </td>
              </tr>
            </template>
          </base-table>
        </div>
      </div>
    </div>


    <!-- modal view crew   -->
    <div class="modal fade" id="viewCrewModal" tabindex="-1" role="dialog" aria-labelledby="viewCrewModalLabel"
         aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="viewCrewModalLabel">CREW</h5>
          </div>

          <div class="modal-body">
            <div class="row">
              <div class="col-md-12 text-left ml-2">
                <!-- code -->
                <div class="form-group row">
                  <label class="col-sm-3 col-form-label">CODE</label>
                  <span class="col-form-label">:</span>
                  <div class="col-sm-5">
                    <input type="text"
                           class="form-control form-control-sm"
                           placeholder="---"
                    />
                  </div>
                </div>

                <!-- name -->
                <div class="form-group row mt-2">
                  <label class="col-sm-3 col-form-label">NAME</label>
                  <span class="col-form-label">:</span>
                  <div class="col-sm-8">
                    <input type="text"
                           class="form-control form-control-sm"
                           placeholder="---"
                    />
                  </div>
                </div>

                <!-- alias -->
                <div class="form-group row mt-2">
                  <label class="col-sm-3 col-form-label">ADDRESS</label>
                  <span class="col-form-label">:</span>
                  <div class="col-sm-8">
                    <input type="text"
                           class="form-control form-control-sm"
                           placeholder="---"
                    />
                  </div>
                </div>

                <!-- status -->
                <div class="form-group row mt-2">
                  <label class="col-sm-3 col-form-label">STATUS</label>
                  <span class="col-form-label">:</span>
                  <div class="col-sm-5">
                    <input type="checkbox"
                           class="form-check form-check-inline ml-2 mt-2 "
                           placeholder="---"
                    />
                  </div>
                </div>


                <!-- created by -->
                <div class="form-group row mt-2">
                  <label class="col-sm-3 col-form-label">CREATED BY</label>
                  <span class="col-form-label">:</span>
                  <div class="col-sm-5">
                    <input type="text"
                           disabled
                           class="form-control form-control-plaintext"
                           placeholder="---"
                    />
                  </div>
                </div>

                <!-- created by -->
                <div class="form-group row mt-2">
                  <label class="col-sm-3 col-form-label">UPDATED BY</label>
                  <span class="col-form-label">:</span>
                  <div class="col-sm-5">
                    <input type="text"
                           disabled
                           class="form-control form-control-plaintext"
                           placeholder="---"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button"
                    class="btn btn-sm btn-warning">
              <font-awesome-icon icon="edit"/>
              EDIT
            </button>

            <button type="button"
                    class="btn btn-sm btn-secondary"
                    data-dismiss="modal">
              <font-awesome-icon icon="undo"/>
              CLOSE
            </button>

            <button type="button"
                    class="btn btn-sm btn-success"
            >
              <font-awesome-icon icon="save"/>
              SAVE
            </button>

            <button type="button" class="btn btn-sm btn-danger">
              <font-awesome-icon icon="times"/>
              CANCEL
            </button>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {vueAppMixin} from "@/mixins/vueAppMixin";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "List",

  /** mixins **/
  mixins: [vueAppMixin],

  /** props **/
  props: {},

  /** data **/
  data() {
    return {
      crewViewtoCrewData: {},
      crewData: {},
      newCrew: {},
      counts: [
        5, 10, 15, 20, 30, 40, 50, 100, 200,
      ],

      statuses: [
        {
          id: 1,
          key: '',
          placeholder: 'All',
        },
        {
          id: 2,
          key: 1,
          placeholder: 'Active',
        },
        {
          id: 3,
          key: 0,
          placeholder: 'Inactive',
        },
      ],

      isEditable: false,

    };
  },

  /** methods**/
  methods: {
    ...mapActions([
      'set_crews',
      'null_crews',
    ]),

    add_crew_route() {
      this.$router.push({name: 'CreateCrew'});
    },


  },

  /**  computed  **/
  computed: {
    ...mapGetters(
        [
          'isReloading',
          'crews',
          'crewPagination',
          'crewFormParam',
        ],
    ),
  },


  /** mounted **/
  mounted() {
  },

  /** created **/
  async created() {
    await this.set_crews()
  },

  /** destroyed **/
  destroyed() {
    this.null_crews();
  },


}
</script>

<style scoped>

</style>