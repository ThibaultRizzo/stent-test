<template>
  <div class="container-fluid" v-if="ws">
    <div class="row">
      <PageHeader
        logo="@/assets/img/avatars/teams/team-logo-1.jpg"
        title="Account"
        :pretitle="ws.name"
      />
    </div>

    <div class="col">
      <form id="workspace-form" @submit.prevent="checkForm" novalidate>
        <div class="row">
          <label for="name" class="col col-form-label font-weight-bold required"
            >Name</label
          >
          <input
            id="name"
            type="text"
            class="form-control form-control-flush"
            placeholder="Account name"
            required
            v-model="form.name"
          />
          <span
            v-if="!isNameValid()"
            class="icon fe fe-x bg-danger text-white"
          ></span>
          <span
            v-else-if="isNameValid() && hasSubmittedForm"
            class="icon fe fe-check bg-success text-white"
          ></span>

          <div v-if="errors.name" class="error">{{ errors.name }}</div>
        </div>

        <div class="row collapse-title">
          <h2>Advanced</h2>
        </div>
        <div class="row">
          <label for="host" class="col col-form-label font-weight-bold required"
            >Host</label
          >
          <input
            id="host"
            type="text"
            class="form-control form-control-flush"
            placeholder="Host URL"
            required
            v-model="form.url"
          />
          <span
            v-if="!isURLValid()"
            class="icon fe fe-x bg-danger text-white"
          ></span>
          <span
            v-else-if="isURLValid() && hasSubmittedForm"
            class="icon fe fe-check bg-success text-white"
          ></span>

          <div v-if="errors.url" class="error">{{ errors.url }}</div>
        </div>
        <div class="row">
          <label
            for="timezone"
            class="col col-form-label font-weight-bold required"
            >Timezone</label
          >
          <select
            id="timezone"
            class="custom-select"
            data-toggle="select"
            v-model="form.timezone"
          >
            <option v-for="(tz, i) in timezones" :key="i" :value="tz.name">
              {{ tz.name }}
            </option>
          </select>
          <span
            v-if="!isTimezoneValid()"
            class="icon fe fe-x bg-danger text-white"
          ></span>
          <span
            v-else-if="isTimezoneValid() && hasSubmittedForm"
            class="icon fe fe-check bg-success text-white"
          ></span>
          <div v-if="errors.timezone" class="error">{{ errors.timezone }}</div>
        </div>
        <div class="row">
          <label
            for="status"
            class="col col-form-label font-weight-bold required"
            >Status</label
          >
          <div class="custom-control custom-switch">
            <input
              type="checkbox"
              class="custom-control-input bg-secondary"
              id="status"
              v-model="form.status"
              true-value="active"
              false-value="suspended"
            />
            <label
              class="custom-control-label font-weight-bold text-capitalize"
              for="status"
              >{{ form.status }}</label
            >

            <div v-if="errors.status" class="error">{{ errors.status }}</div>
          </div>
          <span
            v-if="!isStatusValid()"
            class="icon fe fe-x bg-danger text-white"
          ></span>
          <span
            v-else-if="isStatusValid() && hasSubmittedForm"
            class="icon fe fe-check bg-success text-white"
          ></span>
        </div>
        <div class="col">
          <div class="row justify-content-center">
            <button type="submit" class="btn btn-primary">
              Save modifications
            </button>
          </div>
        </div>
      </form>
      <pre>{{ JSON.stringify({ ...errors, hasSubmittedForm }) }}</pre>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader/PageHeader";
import { mapState } from "vuex";
import { timezones } from "../../list";
import { isRequired, isValidURL } from "../../validation";

export default {
  components: { PageHeader },
  created() {
    this.$store.dispatch("workspace/getWorkspaceById", {
      id: this.$route.params.id
    });
  },
  data() {
    return {
      timezones,
      errors: {
        name: "",
        url: "",
        timezone: "",
        status: ""
      },
      form: {
        name: null,
        url: null,
        timezone: null,
        status: null
      },
      hasSubmittedForm: false
    };
  },
  computed: mapState({
    ws: state => state.workspace.selected
  }),
  watch: {
    ws(data) {
      this.form = { ...data };
    }
  },
  methods: {
    isFormValid: function() {
      return Object.values(this.errors).every(val => val === "");
    },
    isNameValid: function() {
      if (!isRequired(this.form.name)) {
        this.errors.name = "Name required";
      } else {
        this.errors.name = "";
      }
      return !this.errors.name;
    },
    isURLValid: function() {
      if (!isRequired(this.form.url)) {
        this.errors.url = "URL required";
      } else if (!isValidURL(this.form.url)) {
        this.errors.url = "Malformed URL";
      } else {
        this.errors.url = "";
      }
      return !this.errors.url;
    },
    isTimezoneValid: function() {
      if (!isRequired(this.form.timezone)) {
        this.errors.timezone = "Timezone required";
      } else {
        this.errors.timezone = "";
      }
      return !this.errors.timezone;
    },
    isStatusValid: function() {
      if (!isRequired(this.form.status)) {
        this.errors.status = "Status required";
      } else {
        this.errors.status = "";
      }
      return !this.errors.status;
    },
    checkForm: function() {
      this.hasSubmittedForm = true;
      this.isNameValid();
      this.isURLValid();
      this.isTimezoneValid();
      this.isStatusValid();
    }
  }
};
</script>
<style src="./workspace.scss" lang="scss" />
