<template>
  <div id="admin">
    <admin-header/>
    <admin-center :user="user" :column="column" :comment="comment"/>
  </div>
</template>

<script>
  import AdminCenter from "./childComps/AdminCenter";
  import AdminHeader from "./childComps/AdminHeader";

  import {adminUser} from "../../network/admin";
  import {adminColumn} from "../../network/admin";
  import {adminComment} from "../../network/admin";

  export default {
    name: "Admin",
    components: {
      AdminHeader,
      AdminCenter
    },
    data() {
      return {
        user: [],
        column: [],
        comment: {}
      }
    },
    created() {
      if(!this.$store.state.guanli) {
        this.$router.push('/error')
      } else {

        adminUser().then(res => {
          this.user = res
        })

        adminColumn().then(res => {
          this.column = res.reverse()
        })

        adminComment().then(res => {
          this.comment = res
        })

      }
    }
  }
</script>

<style scoped>
#admin{
  width: 100%;
  height: 100vh;
  background: white;
  position: absolute;
  /*z-index: 1;*/
  color: black;
}
</style>