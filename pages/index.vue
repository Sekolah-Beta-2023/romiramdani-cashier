<template>
  <div class="container-fluid h-custom vh-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-9 col-lg-6 col-xl-5">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="img-fluid" alt="Sample image">
          </div>
          <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                  <p class="lead fw-normal mx-3">Sign into your account</p>
                  <input type="email" class="form-control form-control-lg mb-3"
                  placeholder="Username" />
                  <input type="password" class="form-control form-control-lg mb-3"
                  placeholder="Password" />

                  <div class="text-center text-lg-start mt-4 pt-2">
                      <button type="button" class="btn btn-primary btn-lg"
                      style="padding-left: 2.5rem; padding-right: 2.5rem;">Login</button>
                      <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <nuxt-link to="/app"
                          class="link-danger">Register</nuxt-link></p>
                  </div>

              </form>
          </div>
      </div>
  </div>
</template>
<style scoped>
  .h-custom {
      height: calc(100% - 73px);
  }
  @media (max-width: 450px) {
      .h-custom {
          height: 100%;
      }
  }

</style>