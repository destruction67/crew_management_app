<template>
  <div class="container-fluid bg-white">
    <div class="row py-2">
      <div class="col-md-12 text-left">
        <button class="btn btn-success btn-sm" @click="save">
          <font-awesome-icon icon="save"/>
          Save
        </button>

        <button class="btn btn-secondary btn-sm ml-3">
          <font-awesome-icon icon="undo"/>
          Go Back
        </button>
      </div>
    </div>

    <div class="row py-1">
      <div class="col-md-12 text-left">
        <div class="card">
          <div class="card-header">
            <h6>General Information</h6>
          </div>

          <div class="card-body">
            <div class="row">
              <div class="col-2 border-right">
                <div class="form-group row text-center">
                  <div class="crew-img-container">
                    <img id="crew-img" :src="thisCrewImageBlob" alt="crewImage" class="img-fluid crew-img">
                  </div>
                </div>
                <div class="col-md-8 text-left mt-4">
                  <input type="file" id="input-crew-img" refs="crewInputImage" style="display: none;">
                  <div>
                    <label for="input-crew-img" class="btn btn-sm small btn-warning">
                      <font-awesome-icon icon="paperclip"/>
                      <small class="font-weight-bold">Attach Image</small>
                    </label>
                  </div>

                  <div v-if="crewImageBlob">
                    <button class="btn btn-sm btn-danger">
                      <font-awesome-icon icon="times"/>
                    </button>
                  </div>

                </div>
              </div>

              <div class="col-5 border-right">
                <div class="form-group row mt-1">
                  <label for="first-name"
                         class="col-sm-4 col-form-label">
                    *First Name
                  </label>
                  <span>:</span>
                  <div class="col-sm-7">
                    <input type="text"
                           class="form-control form-control-sm"
                           id="first-name"
                           name="FirstName"
                           placeholder="--"
                           v-model="newCrew.first_name"
                    >
                  </div>
                </div>

                <div class="form-group row mt-1">
                  <label for="middle-name"
                         class="col-sm-4 col-form-label">
                    *Middle Name
                  </label>
                  <span>:</span>
                  <div class="col-sm-7">
                    <input type="text"
                           class="form-control form-control-sm"
                           id="middle-name"
                           name="MiddleName"
                           placeholder="--"
                           v-model="newCrew.middle_name"
                    >
                  </div>
                </div>

                <div class="form-group row mt-1">
                  <label for="last-name"
                         class="col-sm-4 col-form-label">
                    *Last Name
                  </label>
                  <span>:</span>
                  <div class="col-sm-7">
                    <input type="text"
                           class="form-control form-control-sm"
                           id="last-name"
                           name="lastName"
                           placeholder="--"
                           v-model="newCrew.last_name"
                    >
                  </div>
                </div>

                <div class="form-group row mt-1">
                  <label for="suffix-name" class="col-sm-4 col-form-label">Suffix Name</label>
                  <span>:</span>
                  <div class="col-sm-7">
                    <input type="text"
                           class="form-control form-control-sm"
                           id="suffix-name"
                           name="SuffixName"
                           placeholder="--">
                  </div>
                </div>


                <div class="form-group row mt-1">
                  <label for="birth-place" class="col-sm-4 col-form-label">Birthd Place</label>
                  <span>:</span>
                  <div class="col-sm-7">
                    <input type="text"
                           class="form-control form-control-sm"
                           id="birth-place"
                           name="BirthPlace"
                           placeholder="--">
                  </div>
                </div>


                <hr>

                <div class="form-group row mt-1">
                  <label for="first-name" class="col-sm-4 col-form-label">SSS</label>
                  <span>:</span>
                  <div class="col-sm-7">
                    <input type="text"
                           class="form-control form-control-sm"
                           id="sss"
                           name="SSS"
                           placeholder="--">
                  </div>
                </div>

                <div class="form-group row mt-1">
                  <label for="tin" class="col-sm-4 col-form-label">TIN</label>
                  <span>:</span>
                  <div class="col-sm-7">
                    <input type="text"
                           class="form-control form-control-sm"
                           id="tin"
                           name="TIN"
                           placeholder="--">
                  </div>
                </div>

                <div class="form-group row mt-1">
                  <label for="philhealth" class="col-sm-4 col-form-label">PHIL-HEALTH</label>
                  <span>:</span>
                  <div class="col-sm-7">
                    <input type="text"
                           class="form-control form-control-sm"
                           id="philhealth"
                           name="PhilHealth"
                           placeholder="--">
                  </div>
                </div>

                <div class="form-group row mt-1">
                  <label for="gender" class="col-sm-4 col-form-label">PAG-IBIG</label>
                  <span>:</span>
                  <div class="col-sm-7">
                    <input type="text"
                           class="form-control form-control-sm"
                           id="pagibig"
                           name="PagIbig"
                           placeholder="--">
                  </div>
                </div>
              </div>

              <div class="col-5">
                <div class="form-group row mt-1">
                  <label class="col-sm-4 col-form-label">Nationality</label>
                  <span>:</span>
                  <div class="col-sm-7">
                    <!--                    <multi-select-->
                    <!--                        v-model="newCrew.generalInfo.nationality"-->
                    <!--                        :options="objNationalities"-->
                    <!--                        :custom-label="nationalityNameLang"-->
                    <!--                        :select-label="'Select Nationality'"-->
                    <!--                        placeholder="Select Nationality"-->
                    <!--                        label="Nationality"-->
                    <!--                        track-by="id">-->
                    <!--                    </multi-select>-->
                  </div>
                </div>

                <div class="form-group row mt-1">
                  <label for="religion" class="col-sm-4 col-form-label">Religion</label>
                  <span>:</span>
                  <div class="col-sm-7">
                    <select name="Religion" id="religion" class="form-control form-control-sm">
                      <option value="" disabled>-- select --</option>
                    </select>
                  </div>
                </div>


                <div class="form-group row mt-1">
                  <label for="birthdate"
                         class="col-sm-4 col-form-label">
                    *Birthdate
                  </label>
                  <span>:</span>
                  <div class="col-sm-6">
                    <input type="date"
                           class="form-control form-control-sm"
                           id="birthdate"
                           name="Birthdate"
                           onkeydown="event.preventDefault()"
                           placeholder="--">
                  </div>
                  <button
                      class="btn btn-xs">
                    <font-awesome-icon icon="times"/>
                  </button>
                </div>

                <div class="form-group row mt-1">
                  <label for="civil-status" class="col-sm-4 col-form-label">Civil Status</label>
                  <span>:</span>
                  <div class="col-sm-6">
                    <select name="CivilStatus" id="civil-status" class="form-control form-control-sm">
                      <option value="" disabled>-- select --</option>
                    </select>
                  </div>
                  <button
                      class="btn btn-xs">
                    <font-awesome-icon icon="times"/>
                  </button>
                </div>

                <div class="form-group row mt-1">
                  <label for="gender" class="col-sm-4 col-form-label">Gender</label>
                  <span>:</span>
                  <div class="col-sm-6">
                    <select class="form-control form-control-sm" name="Gender" id="gender">
                      <option value="" disabled>-- select --</option>
                    </select>
                  </div>
                  <button
                      class="btn btn-xs">
                    <font-awesome-icon icon="times"/>
                  </button>
                </div>

                <div class="form-group row mt-1">
                  <label for="height" class="col-sm-4 col-form-label">Height</label>
                  <span>:</span>
                  <div class="col-sm-4">
                    <input type="text"
                           class="form-control form-control-sm"
                           id="height"
                           name="Height"
                           placeholder="Centimeters">
                  </div>
                </div>

                <div class="form-group row mt-1">
                  <label for="weight" class="col-sm-4 col-form-label">Weight</label>
                  <span>:</span>
                  <div class="col-sm-4">
                    <input type="text"
                           class="form-control form-control-sm"
                           id="weight"
                           name="Weight"
                           placeholder="Kilogram">
                  </div>
                </div>

                <div class="form-group row mt-1">
                  <label for="weight" class="col-sm-4 col-form-label">Hair Color</label>
                  <span>:</span>
                  <div class="col-sm-4">
                    <input type="text"
                           class="form-control form-control-sm"
                           id="hair-color"
                           name="CrewRank"
                           placeholder="--">
                  </div>
                </div>

                <div class="form-group row mt-1">
                  <label for="weight" class="col-sm-4 col-form-label">Eye Color</label>
                  <span>:</span>
                  <div class="col-sm-4">
                    <input type="text"
                           class="form-control form-control-sm"
                           id="eye-color"
                           name="CrewRank"
                           placeholder="--">
                  </div>
                </div>

                <div class="form-group row mt-1">
                  <label for="weight" class="col-sm-4 col-form-label">Blood Type</label>
                  <span>:</span>
                  <div class="col-sm-4">
                    <select
                        class="form-control form-control-sm"
                        name="BloodType"
                        id="blood-type">
                      <option value="" disabled>-- select --</option>
                    </select>
                  </div>
                  <button
                      class="btn btn-xs">
                    <font-awesome-icon icon="times"/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- address and contacts   -->
    <div class="row py-1">
      <div class="col-md-12 text-left">
        <div class="card">
          <div class="card-header">
            <h6 class="font-weight-bold">Address & Contacts</h6>
          </div>

          <div class="card-body">
            <div class="row">

              <!-- PERMANENT -->
              <div class="col-4 border-right">
                <div class="form-group row">
                  <label for="first-name" class="col-sm-5 font-weight-bold pb-3">Permanent Address</label>
                </div>

                <div class="form-group row mt-1">
                  <label for="first-name" class="col-sm-4 col-form-label">*Region</label>
                  <span>:</span>
                  <div class="col-sm-7">
                    <!--                    <multi-select-->
                    <!--                        :options="permanentRegions"-->
                    <!--                        v-model="newCrew.addressAndContact.permanent.region"-->
                    <!--                        :custom-label="regionNameLang"-->
                    <!--                        :select-label="'Select Region'"-->
                    <!--                        placeholder="Select Region"-->
                    <!--                        label="Region"-->
                    <!--                        track-by="regDesc">-->
                    <!--                    </multi-select>-->
                  </div>
                </div>

                <div class="form-group row mt-1">
                  <label for="first-name" class="col-sm-4 col-form-label">*City / Province</label>
                  <span>:</span>
                  <div class="col-sm-7">
                    <!--                    <multi-select-->
                    <!--                        :options="permanentProvinces"-->
                    <!--                        v-model="newCrew.addressAndContact.permanent.province"-->
                    <!--                        :custom-label="provinceNameLang"-->
                    <!--                        :select-label="'Select Province'"-->
                    <!--                        placeholder="Select Province"-->
                    <!--                        label="Province"-->
                    <!--                        track-by="provCode">-->
                    <!--                    </multi-select>-->
                  </div>
                </div>

                <div class="form-group row mt-1">
                  <label for="first-name" class="col-sm-4 col-form-label">*City / Municipality</label>
                  <span>:</span>
                  <div class="col-sm-7">
                    <!--                    <multi-select-->
                    <!--                        :options="permanentCities"-->
                    <!--                        v-model="newCrew.addressAndContact.permanent.city"-->
                    <!--                        :custom-label="cityNameLang"-->
                    <!--                        :select-label="'Select City'"-->
                    <!--                        placeholder="Select City"-->
                    <!--                        label="City"-->
                    <!--                        track-by="cityCode">-->
                    <!--                    </multi-select>-->
                  </div>
                </div>

                <div class="form-group row mt-1">
                  <label for="first-name" class="col-sm-4 col-form-label">Barangay</label>
                  <span>:</span>
                  <div class="col-sm-7">
                    <!--                    <multi-select-->
                    <!--                        :options="permanentBarangays"-->
                    <!--                        v-model="newCrew.addressAndContact.permanent.barangay"-->
                    <!--                        :custom-label="brgyNameLang"-->
                    <!--                        :select-label="'Select Barangay'"-->
                    <!--                        placeholder="Select Barangay"-->
                    <!--                        label="Barangay"-->
                    <!--                        track-by="brgyCode">-->
                    <!--                    </multi-select>-->
                  </div>
                </div>

                <div class="form-group row mt-1">
                  <label for="first-name" class="col-sm-4 col-form-label">Description</label>
                  <span>:</span>
                  <div class="col-sm-7">
                    <input
                        type="text"
                        class="form-control form-control-sm"
                        id="permanent-description"
                        name="CrewRank"
                        placeholder="--"
                        disabled>
                  </div>
                </div>

                <hr>

                <!-- Contacts -->
                <div class="form-group row">
                  <label class="col-sm-5 font-weight-bold pb-2">Contacts</label>
                </div>

                <div class="form-group row mt-1">
                  <label for="email" class="col-sm-4 col-form-label">Email Address</label>
                  <span>:</span>
                  <div class="col-sm-7">
                    <input
                        type="text"
                        class="form-control form-control-sm"
                        id="email"
                        name="Email"
                        placeholder="--">
                  </div>
                </div>

                <!-- telephone number -->
                <div class="form-group row mt-1">
                  <label for="tel-number" class="col-sm-4 col-form-label">#No. Telephone</label>
                  <span>:</span>
                  <div class="col-sm-7">
                    <input
                        type="text"
                        class="form-control form-control-sm"
                        id="tel-number"
                        name="TelephoneNumber"
                        placeholder="--">
                  </div>
                </div>

                <!-- work number -->
                <div class="form-group row mt-1">
                  <label for="work-number" class="col-sm-4 col-form-label">#No. Work</label>
                  <span>:</span>
                  <div class="col-sm-7">
                    <input
                        type="text"
                        class="form-control form-control-sm"
                        id="work-number"
                        name="WorkNumber"
                        placeholder="--">
                  </div>
                </div>

                <!-- personal number -->
                <div class="form-group row mt-1">
                  <label for="personal-number" class="col-sm-4 col-form-label">#No. Personal</label>
                  <span>:</span>
                  <div class="col-sm-7">
                    <input
                        type="text"
                        class="form-control form-control-sm"
                        id="personal-number"
                        name="PersonalNumber"
                        placeholder="--">
                  </div>
                </div>
              </div>

              <!-- TEMPORARY -->
              <div class="col-4 border-right">
                <label for="first-name" class="col-sm-5 font-weight-bold pb-3">Temporary Address</label>
                <div class="form-group row mt-1">
                  <label for="first-name" class="col-sm-4 col-form-label">*Region</label>
                  <span>:</span>
                  <div class="col-sm-7">
                    <!--                    <multi-select-->
                    <!--                        :options="temporaryRegions"-->
                    <!--                        v-model="newCrew.addressAndContact.temporary.region"-->
                    <!--                        :custom-label="regionNameLang"-->
                    <!--                        :select-label="'Select Region'"-->
                    <!--                        placeholder="Select Region"-->
                    <!--                        label="Region"-->
                    <!--                        track-by="regCode">-->
                    <!--                    </multi-select>-->
                  </div>
                </div>

                <div class="form-group row mt-1">
                  <label for="first-name" class="col-sm-4 col-form-label">*City / Province</label>
                  <span>:</span>
                  <div class="col-sm-7">
                    <!--                    <multi-select-->
                    <!--                        :options="temporaryProvinces"-->
                    <!--                        v-model="newCrew.addressAndContact.temporary.province"-->
                    <!--                        :custom-label="provinceNameLang"-->
                    <!--                        :select-label="'Select Province'"-->
                    <!--                        placeholder="Select Province"-->
                    <!--                        label="Province"-->
                    <!--                        track-by="provCode">-->
                    <!--                    </multi-select>-->
                  </div>
                </div>

                <div class="form-group row mt-1">
                  <label for="first-name" class="col-sm-4 col-form-label">*City / Municipality</label>
                  <span>:</span>
                  <div class="col-sm-7">
                    <!--                    <multi-select-->
                    <!--                        :options="temporaryCities"-->
                    <!--                        v-model="newCrew.addressAndContact.temporary.city"-->
                    <!--                        :custom-label="cityNameLang"-->
                    <!--                        :select-label="'Select City'"-->
                    <!--                        placeholder="Select City"-->
                    <!--                        label="City"-->
                    <!--                        track-by="cityCode">-->
                    <!--                    </multi-select>-->
                  </div>
                </div>

                <div class="form-group row mt-1">
                  <label for="first-name" class="col-sm-4 col-form-label">Barangay</label>
                  <span>:</span>
                  <div class="col-sm-7">
                    <!--                    <multi-select-->
                    <!--                        :options="temporaryBarangays"-->
                    <!--                        v-model="newCrew.addressAndContact.temporary.barangay"-->
                    <!--                        :custom-label="brgyNameLang"-->
                    <!--                        :select-label="'Select Barangay'"-->
                    <!--                        placeholder="Select Barangay"-->
                    <!--                        label="Barangay"-->
                    <!--                        track-by="brgyCode">-->
                    <!--                    </multi-select>-->
                  </div>
                </div>

                <div class="form-group row mt-1">
                  <label for="first-name" class="col-sm-4 col-form-label">Description</label>
                  <span>:</span>
                  <div class="col-sm-7">
                    <input
                        type="text"
                        class="form-control form-control-sm"
                        id="temporary-description"
                        name="CrewRank"
                        placeholder="--"
                        disabled
                    >
                  </div>
                </div>
              </div>

              <!-- PROVINCIAL -->
              <div class="col-4">
                <label for="first-name" class="col-sm-5 font-weight-bold pb-3">Provincial Address</label>
                <div class="form-group row mt-1">
                  <label for="first-name" class="col-sm-4 col-form-label">Region</label>
                  <span>:</span>
                  <div class="col-sm-7">
                    <!--                    <multi-select-->
                    <!--                        :options="provRegions"-->
                    <!--                        v-model="newCrew.addressAndContact.province.region"-->
                    <!--                        :custom-label="regionNameLang"-->
                    <!--                        :select-label="'Select Regions'"-->
                    <!--                        placeholder="Select Regions"-->
                    <!--                        label="Regions"-->
                    <!--                        track-by="regDesc">-->
                    <!--                    </multi-select>-->
                  </div>
                </div>

                <div class="form-group row mt-1">
                  <label for="first-name" class="col-sm-4 col-form-label">City / Province</label>
                  <span>:</span>
                  <div class="col-sm-7">
                    <!--                    <multi-select-->
                    <!--                        :options="provProvinces"-->
                    <!--                        v-model="newCrew.addressAndContact.province.province"-->
                    <!--                        :custom-label="provinceNameLang"-->
                    <!--                        :select-label="'Select Province'"-->
                    <!--                        placeholder="Select Province"-->
                    <!--                        label="Province"-->
                    <!--                        track-by="provDesc">-->
                    <!--                    </multi-select>-->
                  </div>
                </div>

                <div class="form-group row mt-1">
                  <label for="first-name" class="col-sm-4 col-form-label">City / Municipality</label>
                  <span>:</span>
                  <div class="col-sm-7">
                    <!--                    <multi-select-->
                    <!--                        :options="provCities"-->
                    <!--                        v-model="newCrew.addressAndContact.province.city"-->
                    <!--                        :custom-label="cityNameLang"-->
                    <!--                        :select-label="'Select City'"-->
                    <!--                        placeholder="Select City"-->
                    <!--                        label="City"-->
                    <!--                        track-by="cityDesc">-->
                    <!--                    </multi-select>-->
                  </div>
                </div>

                <div class="form-group row mt-1">
                  <label for="first-name" class="col-sm-4 col-form-label">Barangay</label>
                  <span>:</span>
                  <div class="col-sm-7">
                    <!--                    <multi-select-->
                    <!--                        :options="provBarangays"-->
                    <!--                        v-model="newCrew.addressAndContact.province.barangay"-->
                    <!--                        :custom-label="brgyNameLang"-->
                    <!--                        :select-label="'Select Barangay'"-->
                    <!--                        placeholder="Select Barangay"-->
                    <!--                        label="Barangay"-->
                    <!--                        track-by="brgyCode">-->
                    <!--                    </multi-select>-->
                  </div>
                </div>

                <div class="form-group row mt-1">
                  <label for="first-name" class="col-sm-4 col-form-label">Description</label>
                  <span>:</span>
                  <div class="col-sm-7">
                    <input
                        type="text"
                        class="form-control form-control-sm"
                        id="provincial-description"
                        name="CrewRank"
                        placeholder="--"
                        disabled
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--   Crew information -->
    <div class="row py-1">
      <div class="col-md-12 text-left">
        <div class="card">
          <div class="card-header">
            <h6 class="font-weight-bold">Crew Information</h6>
          </div>

          <div class="card-body">
            <div class="row">
              <div class="col-4 text-left border-right">

                <!-- change code -->
                <div class="form-group row mt-1">
                  <label for="bridging-batch" class="col-sm-4 col-form-label">Change Code</label>
                  <span>:</span>
                  <div class="col-sm-7">
                    <select name="ChangeCode"
                            id="change-code"
                            class="custom-select custom-select-sm"
                            style="font-size: 12px!important;"
                            disabled
                    >
                      <option value="" disabled>--select changecode --</option>
                    </select>
                    <!--                    <div :class="{'invalid-feedback':newCrew.tracking.applicantStatus != 4,'valid-feedback':newCrew.tracking.applicantStatus == 4}">-->
                    <!--                      &lt;!&ndash;                      Cant change code until applicant was accepted.&ndash;&gt;-->
                    <!--                      <span style="font-size: 10px;">{{newCrew.tracking.applicantStatus != 4 ? 'Cant change code until applicant was accepted.' : 'Looks good.'}}</span>-->
                    <!--                    </div>-->
                  </div>

                  <button type="button" class="btn btn-xs">
                    <font-awesome-icon icon="times"/>
                  </button>
                </div>

                <!-- crew type -->
                <div class="form-group row mt-1">
                  <label for="crew-type" class="col-sm-4 col-form-label">Crew Type</label>
                  <span>:</span>
                  <div class="col-sm-7">
                    <select
                        name="CrewType"
                        id="crew-type"
                        class="form-control form-control-sm"
                        disabled
                    >
                      <option value="" disabled>-- select --</option>
                    </select>
                  </div>
                  <button
                      class="btn btn-xs">
                    <font-awesome-icon icon="times"/>
                  </button>
                </div>

                <!-- crew scholar type -->
                <div class="form-group row mt-1">
                  <label for="scholar-type" class="col-sm-4 col-form-label">Scholar Type</label>
                  <span>:</span>
                  <div class="col-sm-7">
                    <select
                        name="ScholarType"
                        class="form-control form-control-sm"
                        id="scholar-type"
                        disabled
                    >
                      <option value="" disabled>-- select --</option>
                    </select>
                  </div>
                  <button
                      class="btn btn-xs">
                    <font-awesome-icon icon="times"/>
                  </button>
                </div>

                <!-- crew scholar prop -->
                <div class="form-group row mt-1">
                  <label for="scholar-prop" class="col-sm-4 col-form-label">Scholar Prop</label>
                  <span>:</span>
                  <div class="col-sm-7">
                    <select
                        name="ScholarProp"
                        class="form-control form-control-sm"
                        id="scholar-prop"
                        disabled
                    >
                      <option value="" disabled>-- select --</option>
                    </select>
                  </div>
                  <button
                      class="btn btn-xs">
                    <font-awesome-icon icon="times"/>
                  </button>
                </div>

                <!-- bridging batch -->
                <div class="form-group row mt-1">
                  <label for="bridging-batch" class="col-sm-4 col-form-label">Bridging Batch</label>
                  <span>:</span>
                  <div class="col-sm-7">
                    <input type="text"
                           class="form-control form-control-sm"
                           id="bridging-batch"
                           name="ScholarType"
                           placeholder="--"
                           disabled
                    >
                  </div>
                </div>

              </div>

              <div class="col-4 text-left border-right">
                <!-- rank -->
                <div class="form-group row mt-1">
                  <label for="rank"
                         class="col-sm-4 col-form-label text-danger">
                    *Rank <sup>tracking</sup>
                  </label>
                  <span>:</span>
                  <div class="col-sm-7">
                    <select
                        class="form-control form-control-sm"
                        name="Rank" id="rank"
                        disabled
                    >
                      <option value="" disabled>-- select --</option>
                    </select>
                  </div>

                  <button
                      class="btn btn-xs">
                    <font-awesome-icon icon="times"/>
                  </button>
                </div>

                <!-- status -->
                <div class="form-group row mt-4">
                  <label for="rank" class="col-sm-4 col-form-label">Status</label>
                  <span>:</span>
                  <div class="col-sm-6">
                    <input type="checkbox" class="form-check-inline ml-2" disabled>
                    <!--                    <label>{{ newCrew.crewInfo.status ? 'Active' : 'Inactive' }}</label>-->
                  </div>
                </div>
              </div>

              <div class="col-4 text-left">
                <!-- cover all -->
                <div class="form-group row mt-1">
                  <label for="rank" class="col-sm-4 col-form-label">Cover All</label>
                  <span>:</span>
                  <div class="col-sm-6">
                    <input
                        type="text"
                        class="form-control form-control-sm"
                        id="cover-all"
                        name="CrewType"
                        placeholder="S/M/L"
                        disabled
                    >
                  </div>
                </div>

                <!-- jacket -->
                <div class="form-group row mt-1">
                  <label for="jacket" class="col-sm-4 col-form-label">Jacket</label>
                  <span>:</span>
                  <div class="col-sm-6">
                    <input
                        type="text"
                        class="form-control form-control-sm"
                        id="jacket"
                        name="jacket"
                        placeholder="S/M/L"
                        disabled
                    >
                  </div>
                </div>

                <!-- shoes -->
                <div class="form-group row mt-1">
                  <label for="shoes" class="col-sm-4 col-form-label">Shoes</label>
                  <span>:</span>
                  <div class="col-sm-6">
                    <input
                        type="text"
                        class="form-control form-control-sm"
                        id="shoes"
                        name="Shoes"
                        placeholder="6/7/8/ETCH"
                        disabled
                    >
                  </div>
                </div>

                <!-- long sleeves -->
                <div class="form-group row mt-1">
                  <label for="long-sleeves" class="col-sm-4 col-form-label">Long Sleeves</label>
                  <span>:</span>
                  <div class="col-sm-6">
                    <input
                        type="text"
                        class="form-control form-control-sm"
                        id="long-sleeves"
                        name="LongSleeves"
                        placeholder="S/M/L"
                        disabled
                    >
                  </div>
                </div>

                <!-- short sleeves -->
                <div class="form-group row mt-1">
                  <label for="short-sleeves" class="col-sm-4 col-form-label">Short Sleeves</label>
                  <span>:</span>
                  <div class="col-sm-6">
                    <input
                        type="text"
                        class="form-control form-control-sm"
                        id="short-sleeves"
                        name="ShortSleeves"
                        placeholder="S/M/L"
                        disabled
                    >
                  </div>
                </div>

                <!-- pants -->
                <div class="form-group row mt-1">
                  <label for="pants" class="col-sm-4 col-form-label">Pants</label>
                  <span>:</span>
                  <div class="col-sm-6">
                    <input
                        type="text"
                        class="form-control form-control-sm"
                        id="pants"
                        name="Pants"
                        placeholder="S/M/L"
                        disabled
                    >
                  </div>
                </div>

                <!-- uniform -->
                <div class="form-group row mt-1">
                  <label for="uniform" class="col-sm-4 col-form-label">Uniform</label>
                  <span>:</span>
                  <div class="col-sm-6">
                    <input
                        type="text"
                        class="form-control form-control-sm"
                        id="uniform"
                        name="Uniform"
                        placeholder="S/M/L"
                        disabled
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row py-1">
      <div class="col-md-12 text-left">
        <div class="card">
          <div class="card-header">
            <h6 class="font-weight-bold">Tracking</h6>
          </div>

          <div class="card-body">
            <div class="row">

              <!-- date appliied -->
              <div class="col-6 text-left border-right">
                <div class="form-group row mt-1">
                  <label for="date-applied"
                         class="col-sm-4 col-form-label">
                    *Date Applied
                  </label>
                  <span>:</span>
                  <div class="col-sm-5">
                    <input type="date"
                           id="date-applied"
                           name="DateApplied"
                           class="form-control form-control-sm"
                           disabled
                    >
                  </div>

                  <button class="btn btn-xs">
                    <font-awesome-icon icon="times"/>
                  </button>
                </div>

                <!-- applicant type -->
                <div class="form-group row mt-1">
                  <label for="crew-type"
                         class="col-sm-4 col-form-label">
                    *Applicant Type
                  </label>
                  <span>:</span>
                  <div class="col-sm-5">
                    <select
                        name="ApplicantType"
                        id="applicant-type"
                        class="form-control form-control-sm"
                        disabled
                    >
                      <option value="" disabled>-- select --</option>
                    </select>
                  </div>
                  <button class="btn btn-xs">
                    <font-awesome-icon icon="times"/>
                  </button>
                </div>

                <!-- endorsement type -->
                <div class="form-group row mt-1">
                  <label for="endorsement-type"
                         class="col-sm-4 col-form-label">
                    *Endorsement Type
                  </label>
                  <span>:</span>
                  <div class="col-sm-5">
                    <select
                        name="EndorsementType"
                        id="endorsement-type"
                        class="form-control form-control-sm"
                        disabled
                    >
                      <option value="" disabled>-- select --</option>
                    </select>
                  </div>

                  <button class="btn btn-xs">
                    <font-awesome-icon icon="times"/>
                  </button>
                </div>

                <!-- endorsed by  -->
                <div class="form-group row mt-1">
                  <label
                      class="col-sm-4 col-form-label">
                    *Endorse By
                  </label>
                  <span>:</span>
                  <div class="col-sm-7">
                    <input type="text" class="form-control form-control-sm" readonly>
                  </div>

                  <button class="btn btn-xs">
                    <font-awesome-icon icon="times"/>
                  </button>
                </div>

                <!-- endorsed by others  -->
                <div class="form-group row mt-1">
                  <label for="endorse-by-others"
                         class="col-sm-4 col-form-label">
                    *Endorse By Others
                  </label>
                  <span>:</span>
                  <div class="col-sm-7">
                    <input type="text"
                           id="endorse-by-others"
                           name="EndorseByOthers"
                           class="form-control form-control-sm"
                           disabled
                    />
                  </div>
                  <button class="btn btn-xs">
                    <font-awesome-icon icon="times"/>
                  </button>
                </div>


              </div>

              <div class="col-6 text-left">
                <!--  date available -->
                <div class="form-group row mt-1">
                  <label for="date-available" class="col-sm-4 col-form-label">Date Available</label>
                  <span>:</span>
                  <div class="col-sm-5">
                    <input
                        type="date"
                        id="date-available"
                        name="DateAvailable" class="form-control form-control-sm"
                        disabled
                    >
                  </div>
                  <button class="btn btn-xs">
                    <font-awesome-icon icon="times"/>
                  </button>
                </div>


                <!--  applicant status -->
                <div class="form-group row mt-1">
                  <label for="applicant-status"
                         class="col-sm-4 col-form-label">
                    *Applicant Status
                  </label>
                  <span>:</span>
                  <div class="col-sm-5">
                    <select
                        name="PmcOffice"
                        id="applicant-status"
                        class="form-control form-control-sm"
                        disabled
                    >
                      <option value="" disabled>-- select --</option>
                    </select>
                  </div>
                  <button class="btn btn-xs">
                    <font-awesome-icon icon="times"/>
                  </button>
                </div>

                <!--  applicant remarks -->
                <div class="form-group row mt-1">
                  <label for="applicant-status" class="col-sm-4 col-form-label">Applicant Remarks</label>
                  <span>:</span>
                  <div class="col-sm-7">
                    <textarea
                        placeholder="Remarks here.."
                        class="form-control form-control"
                        rows="4"
                        style="resize: none;"
                        disabled
                    >
                    </textarea>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {vueAppMixin} from "@/mixins/vueAppMixin";
import noImg from '../../../../assets/noPhoto.jpg';
import {mapGetters, mapActions} from "vuex";
import {AlertService} from "@/service/AlertService";

export default {
  name: "CreateCrew",

  mixins: [vueAppMixin],

  /** data **/
  data() {
    return {
      crewNoImageBlob: noImg,
      crewImageBlob: null,
      newCrew: {},
      bloodTypes: [
        {
          id: 1,
          code: 'A+',
          name: 'A RhD positive',
        },
        {
          id: 2,
          code: 'A-',
          name: 'A RhD negative',
        },
        {
          id: 3,
          code: 'B+',
          name: 'B RhD positive',
        },
        {
          id: 4,
          code: 'B-',
          name: 'B RhD negative',
        },
        {
          id: 5,
          code: 'O+',
          name: 'O RhD positive',
        },
        {
          id: 6,
          code: 'O-',
          name: 'O RhD negative',
        },
        {
          id: 7,
          code: 'AB+',
          name: 'AB RhD positive',
        },
        {
          id: 8,
          code: 'AB-',
          name: 'AB RhD negative',
        },
      ],

      //for form data saving ,
      formDataAddress: {
        permanent: {
          region: '',
          province: '',
          city: '',
          barangay: '',
          description: '',
        },
        temporary: {
          region: '',
          province: '',
          city: '',
          barangay: '',
          description: '',
        },
        province: {
          region: '',
          province: '',
          city: '',
          barangay: '',
          description: '',
        },
      },

      formSearchParams: {
        searchValue: '',
        searchKey: '',
        sRank: '',
        page: 1,
        count: 10,
        isTrue: false,
      },
    }
  },

  methods: {

    ...mapActions([
      'create_crew',
    ]),

    async save() {
      let __create = AlertService.questionAlertService('Are you sure you want to add this record', 'New Crew', 'question')
      if (await __create) {

        let params = {
          last_name: this.newCrew.last_name ? this.newCrew.last_name : '',
          first_name: this.newCrew.first_name, // this is required
          middle_name: this.newCrew.middle_name,
        };

        let newCrew = await this.create_crew(params);
        if (newCrew) {
          await AlertService.successAlert('Create crew record successful', 'Create Crew');
          this.newCrew = {};
        }
      }
    },
  },

  computed: {
    ...mapGetters([]),

    thisCrewImageBlob() {
      return this.crewImageBlob ? this.crewImageBlob : this.crewNoImageBlob
    },

  },


}
</script>

<style scoped>

</style>