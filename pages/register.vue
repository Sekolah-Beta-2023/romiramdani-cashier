<template>
    <div class="container-fluid h-custom vh-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="img-fluid" alt="Sample image">
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form>
                    <p class="lead fw-normal mx-3">Sign up your account</p>
                <!-- Email input -->
                    <div class="row">
                        <div class="col-md-6 mb-3 form-outline">
                            <input type="text" class="form-control form-control-lg" placeholder="First name"/>
                        </div>
                        <div class="col-md-6 mb-3 form-outline">
                            <input type="text"  class="form-control form-control-lg" placeholder="Last name" />
                        </div>
                    </div>
                    <input type="email" class="form-control form-control-lg mb-3"
                    placeholder="Username" />
                    <input type="password" class="form-control form-control-lg mb-3"
                    placeholder="Password" />
                    <input type="password" class="form-control form-control-lg mb-3"
                    placeholder="Repeat password" />

                    <div class="text-center text-lg-start mt-4 pt-2">
                        <button type="button" class="btn btn-primary btn-lg"
                        style="padding-left: 2.5rem; padding-right: 2.5rem;">Sign Up</button>
                        <p class="small fw-bold mt-2 pt-1 mb-0">Have an account? <nuxt-link to="/"
                            class="link-danger">Login</nuxt-link></p>
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