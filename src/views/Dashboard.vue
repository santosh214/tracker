<template>
  <div id="dashboard">
    <h2 class="text-left pl-5 pt-3 pb-3 shadow">
      CUBEDOTS TASK CRM
    </h2>

    <div class="container mt-5 border shadow ">
      <h3 class="text-left pt-3 about">Projects</h3>

      <div class="row py-2 px-5 border-top">
        <div class="col-1 col-sm-1 py-2 ">
          <h6 class="font-weight-bold mb-1">Filter</h6>
        </div>
        <div class="col">
          <form class="form-inline input-group-sm">
            <div class="dropdown">
              <select
                id="search"
                name="searchCategory"
                class=" btn btn-sm border btn-block pr-5 dropdownMenuButton"
              >
                <option value="" selected>Select</option>
                <option value="saab" class="dropdown-item">Name</option>
                <option value="fiat" class="dropdown-item">Status</option>
              </select>
            </div>
            <input
              class="form-control col-sm-5 ml-5"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div class="">
              <button class="btn btn-outline-success btn-sm ml-3" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                  />
                </svg>
                Search
              </button>
              <button class="btn btn-danger btn-sm ml-2 my-sm-0" type="reset">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <table
            v-if="users.length"
            class="table table-sm table-bordered table-hover"
          >
            <thead>
              <tr>
                <th scope="col" class="">#</th>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
                <th scope="col">Created At</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in users" v-bind:key="item.id">
                <td>1</td>

                <td class="text-left">{{ item.name }}</td>
                <td class="text-left">
                  <span class="badge rounded-pill bg-success text-white ">{{
                    item.Status
                  }}</span>
                </td>
                <td class="text-left" style="font-size:13px">
                  {{ date }} <br />
                  1 day ago
                </td>
                <td class="text-right">
                  <button
                    class="btn btn-primary btn-sm my-1"
                    @click="taskDashoard"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-eye-fill "
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                      <path
                        fill-rule="evenodd"
                        d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Dashboard",
  methods: {
    taskDashoard() {
      this.$router.push({ name: "about" });
    }
  },
  data() {
    return {
      searchQuery: "",
      users: [
        { name: "Santosh", Status: "Active" },
        { name: "Aman", Status: "Active" },
        { name: "Vikas", Status: "Active" },
        { name: "Naveen", Status: "Active" },
        { name: "Naveen", Status: "Active" },
        { name: "Naveen", Status: "Active" },
        { name: "Naveen", Status: "Active" },
        { name: "Naveen", Status: "Active" },
        { name: "Naveen", Status: "Active" },
        { name: "Naveen", Status: "Active" },
        { name: "Naveen", Status: "Active" },
        { name: "Naveen", Status: "Active" },
        { name: "Naveen", Status: "Active" },
        { name: "Naveen", Status: "Active" },
        { name: "Naveen", Status: "Active" }
      ],
      list: undefined,
      date: new Date().toLocaleString()
    };
  }
};
</script>
<style scoped>
.about {
  font-size: 2vw;
}
</style>
