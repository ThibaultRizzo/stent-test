<template>
  <div class="container-fluid" id="crm-list">
    <div class="row">
      <PageHeader title="All" pretitle="workspaces">
        <router-link to="workspaces/new" tag="button" class="btn btn-primary">New workspace</router-link>
      </PageHeader>
    </div>
    <div class="row">
      <div class="col">
        <table id="workspace-table" class="table table-sm table-sm table-nowrap">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Url</th>
              <th scope="col">Plan</th>
              <th scope="col">Users</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(ws, i) in workspaces" :key="ws.id">
              <td class="col">
                <span
                  :class="[isValid(ws) ? 'bg-primary' : 'bg-light']"
                  class="icon fe fe-star text-white"
                ></span>
                <img
                  class="ws-logo"
                  src="@/assets/img/avatars/teams/team-logo-1.jpg"
                  :alt="`Logo of ${ws.name}`"
                />
                <span class="font-weight-bold">{{ ws.name }}</span>
              </td>
              <td>
                <a :href="ws.url">{{ ws.url }}</a>
              </td>
              <td>
                <span class="font-weight-bold">{{ ws.plan }}</span>
              </td>
              <td>
                <img
                  v-for="user in ws.users"
                  :key="user.id"
                  v-image-fall-back
                  id="user-avatar"
                  :src="user.avatar"
                  class="avatar border-light rounded-circle"
                  :alt="user.displayName"
                />
              </td>
              <td>
                <div class="custom-control custom-switch">
                  <input
                    type="checkbox"
                    class="custom-control-input bg-secondary"
                    :id="`status-${i}`"
                    :checked="isValid(ws)"
                  />
                  <label
                    class="custom-control-label font-weight-bold text-capitalize"
                    :for="`status-${i}`"
                  >{{ ws.status }}</label>
                </div>
              </td>
              <td>
                <router-link
                  :to="{ name: 'Workspace', params: { id: ws.id } }"
                  tag="button"
                  class="btn btn-outline-primary"
                >Edit</router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader/PageHeader";
import { mapState } from "vuex";

export default {
  components: { PageHeader },
  computed: mapState({
    workspaces: state => state.workspace.all
  }),
  created() {
    this.$store.dispatch("workspace/getAllWorkspaces");
  },
  methods: {
    isValid: function(ws) {
      return ws.status === "active";
    }
  }
};
</script>
<style src="./workspace.scss" lang="scss" />
