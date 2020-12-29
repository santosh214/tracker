<template>
  <div class="about">
    <div class="container-fluid pt-3 pb-1 border-bottom ">
      <div class="row ">
        <div class="col-4 col-sm-4 ">
          <h2 class="fontSize">CUBEDOTS TASK CRM</h2>
        </div>
        <div class="col-1 col-sm-1  linking">
          <a class="nav-link active font-weight-bold " @click="taskDashboard"
            >Tasks</a
          >
        </div>
        <div class="col-7  col-sm-6 text-right ">
          <div class="dropdown">
            <button
              class="btn btn-white btn-sm dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {{ loginUser }}
            </button>
            <div class="dropdown-menu " aria-labelledby="dropdownMenuButton">
              <button class="btn btn-sm">
                <a class="dropdown-item allfontSize" @click="taskDashboard"
                  >UNKNOWN</a
                ></button
              ><br />
              <button class="btn btn-sm ">
                <a class="dropdown-item allfontSize" @click="logOutUser"
                  >LogOut</a
                >
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid border shadow-lg pt-3 allfontSize mb-5 pb-5">
      <div class="row py-1">
        <div class="col-9 col-sm-10 text-left">
          <h3 class="allfontSize pl-4">View Tasks For "_____City"</h3>
        </div>
        <div class="col">
          <button class="btn btn-danger btn-sm " @click="taskDashboard">
            Back
          </button>
        </div>
      </div>
      <div class="row border-top py-3 ">
        <div class="col-4 col-sm-2 ">
          <button type="button" class="btn btn-white text-left allfontSize ">
            <span class="badge bg-secondary text-white">4</span><br />
            Total Task
          </button>
        </div>
        <div class="col-4 col-sm-2">
          <button type="button" class="btn btn-white text-left allfontSize">
            <span class="badge bg-info text-white">4</span><br />
            Assigned
          </button>
        </div>
        <div class="col-4 col-sm-2">
          <button type="button" class="btn btn-white text-left allfontSize">
            <span class="badge bg-primary text-white">4</span><br />Started
          </button>
        </div>
        <div class="col-4 col-sm-2">
          <button type="button" class="btn btn-white text-left allfontSize">
            <span class="badge bg-danger text-white">4</span><br />Rejected by
            TL
          </button>
        </div>
        <div class="col-4 col-sm-2">
          <button type="button" class="btn btn-white  text-left allfontSize">
            <span class="badge bg-warning text-dark ">4</span><br />Rejected by
            QA
          </button>
        </div>
        <div class="col-4 col-sm-2">
          <button type="button" class="btn btn-white text-left allfontSize">
            <span class="badge bg-success text-white">4</span> <br />Completed
          </button>
        </div>
      </div>
      <div class="row py-2 px-5">
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
              <button class="btn btn-danger btn-sm ml-2 my-sm-0" type="submit">
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
      <div class="row bg-color ">
        <div class="col table-responsive">
          <table
            class="table table-hover table-bordered "
            :data="user"
            @selectionChanged="selectedRows = $event"
          >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Task Id</th>
                <th scope="col">Name</th>
                <th scope="col">Department</th>
                <th scope="col">W. Started At</th>
                <th scope="col">W. Ended At</th>
                <th scope="col">Duration</th>
                <th scope="col">Status</th>
                <th scope="col">P.Status</th>
                <th scope="col">Start At</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody slot="body">
              <tr v-for="list in user" v-bind:key="list.name" class="trHover">
                <th scope="row">1</th>
                <td>{{ list.taskId }}</td>
                <td>{{ list.Name }}</td>
                <td>{{ list.Department }}</td>
                <td></td>
                <td></td>
                <td></td>

                <td>
                  <span class="badge rounded-pill bg-success text-white ">{{
                    list.status
                  }}</span>
                </td>
                <td>{{ list.pStatus }}</td>
                <td>{{ date }}</td>
                <td class="text-right">
                  <button
                    class="btn btn-info btn-sm "
                    :disabled="disabledButton"
                    @click="tracker(list)"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      fill="currentColor"
                      class="bi bi-caret-down-fill "
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
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
    <div
      class="footer w-full bg-white fixed-bottom mt-5 "
      v-show="show"
      v-bind:style="{ height: isActive ? '15vh' : '80vh' }"
    >
      <div class="container-fluid">
        <div class="row">
          <div class="col text-left">
            <button
              class="btn btn-sm btn-outline-dark shadow"
              id=""
              v-bind:class="isActive"
              @click="expand"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                fill="currentColor"
                class="bi bi-arrows-angle-expand"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <tracker v-bind:list="list" v-on:change="disableBtn($event)" />
    </div>
  </div>
</template>
<script>
import Tracker from "./Tracker.vue";
export default {
  components: { Tracker },
  methods: {
    closeTracker() {
      this.show = false;
    },
    expand: function() {
      this.isActive = !this.isActive;
    },
    tracker(list) {
      console.log(list.taskId);
      this.list = list.taskId;

      this.show = true;
    },
    taskDashboard() {
      this.$router.push({ name: "dashboard" });
    },
    logOutUser() {
      this.$router.push({ name: "home" });
    },
    disableBtn(event) {
      this.disabledButton = event;
      console.log("butnnnnnnnnnnnnnnnnnnnnnnnnnn");
    }
  },
  data() {
    return {
      disabledButton: false,
      title: "props",
      list: null,
      listName: null,
      selectedRows: [],
      isActive: true,
      show: false,
      date: new Date().toLocaleString(),
      loginUser: "Santosh",
      user: [
        {
          taskId: 1,
          Name: "santosh",
          Department: "Elevation",
          status: "active",
          pStatus: "assigned"
        },
        {
          taskId: 2,
          Name: "sa",
          Department: "Elevation",
          status: "active",
          pStatus: "assigned"
        },
        {
          taskId: 3,
          Name: "san",
          Department: "Elevation",
          status: "active",
          pStatus: "assigned"
        },
        {
          taskId: 4,
          Name: "sant",
          Department: "Elevation",
          status: "active",
          pStatus: "assigned"
        },
        {
          taskId: 5,
          Name: "santo",
          Department: "Elevation",
          status: "active",
          pStatus: "assigned"
        },
        {
          taskId: 6,
          Name: "santos",
          Department: "Elevation",
          status: "active",
          pStatus: "assigned"
        },
        {
          taskId: 7,
          Name: "santoshhh",
          Department: "Elevation",
          status: "active",
          pStatus: "assigned"
        },
        {
          taskId: 18,
          Name: "santosh",
          Department: "Elevation",
          status: "active",
          pStatus: "assigned"
        },
        {
          taskId: 19,
          Name: "sam",
          Department: "Elevation",
          status: "active",
          pStatus: "assigned"
        },
        {
          taskId: 20,
          Name: "macintosh",
          Department: "Elevation",
          status: "active",
          pStatus: "assigned"
        },
        {
          taskId: 21,
          Name: "siddhu",
          Department: "Elevation",
          status: "active",
          pStatus: "assigned"
        },
        {
          taskId: 22,
          Name: "Pawan",
          Department: "Elevation",
          status: "active",
          pStatus: "assigned"
        },
        {
          taskId: 23,
          Name: "santosh",
          Department: "Elevation",
          status: "active",
          pStatus: "assigned"
        },
        {
          taskId: 15,
          Name: "santosh",
          Department: "Elevation",
          status: "active",
          pStatus: "assigned"
        }
      ]
    };
  }
};
</script>
<style>
/* .about{
  background-color: wheat;
} */

.about {
  font-size: 1.2vw;
  /* color: ; */
}
.allfontSize {
  /* font-size: 2.3vh; */
  font-size: 1.2vw;
}
.fontSize {
  font-size: 2vw;
}

.width {
  width: 100vw;
}
.linking:hover {
  cursor: pointer;
}
#expand {
  height: 180vh;
}
</style>
