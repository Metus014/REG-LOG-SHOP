<template>
     <main class="flex-shrink-0" id="home">
            <!-- Navigation-->
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container px-5">
                    <a class="navbar-brand" >AW Project</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item"><router-link class="nav-link" to="/">หน้าแรก</router-link></li>
                            <li class="nav-item mr-3"><router-link class="btn btn-primary btn-index" to="/login">เข้าสู่ระบบ</router-link></li>
                            <li class="nav-item mr-3"><router-link class="btn btn-primary" to="/reg">สมัครสมาชิก</router-link></li>
                            <li class="nav-item"><router-link class="btn btn-primary" to="/shop">สินค้า</router-link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <!-- Header-->
            <header class="header py-5 ">
                <div class="container px-5 ">
                    <div class="row gx-5 align-items-center justify-content-center ">
                        <div class="col-lg-8 col-xl-7 col-xxl-6">
                            <div class="my-5 text-center text-xl-start">
                                <h1 class="display-5 fw-bolder text-white mb-2">Web Alienware Master</h1>
                                <p class="lead fw-normal text-white-50 mb-4">Login is a default feature that allows workspace access for users that have been invited to the workspace by and admin. </p>
                                <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                    <a class="btn btn-secondary btn-lg px-4 me-sm-3" href="https://deals.dell.com/en-us/category/gamingpcs">Get Started</a>
                                    <a class="btn btn-secondary btn-lg px-8" href="https://www.dell.com/en-us/gaming/alienware">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img class="img-fluid rounded-3" src="https://www.pngkey.com/png/full/142-1421339_alienware-png-pic-alienware.png" alt="..." /></div>
                    </div>
                </div>
                
            </header>
        </main>
        
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    
  },
}

</script>
