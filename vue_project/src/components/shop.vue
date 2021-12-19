<template>
<body class="hold-transition login-page">
<div class="shop-box">
  <div class="card card-outline">
    <div class="container">
      <div class="row">
    <div class="card-header text-center">
      <router-link class="h1" to="/"><b class="text-blue">AW</b> Product</router-link>
    </div>
      <div class="col-sm-2" v-for="item in shop_sin" :key="item.id">
          <img :src="item.image" class="card-img-top">
            <div class="card-body" align="center">
                <p class="card-text">ชื่อสินค้า : {{item.product_name}}</p>
                <p class="card-text">คำอธิบาย : {{item.product_detail}}</p>
                <p class="card-text">ราคา : {{item.product_price}}</p>
                <p class="card-text">จำนวน : {{item.product_count}}</p>
              <div class="social-auth-links text-center mt-2 mb-3">
                <button class="btn btn-block btn-primary" @click="Shop"><i class="fas fa-box-open mr-2"></i> สั่งซื้อสินค้า </button>
              </div>
          </div>
      </div>
    </div>

  </div>
</div>
</div>
</body>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
export default {
    name: "Shop",
    components: {},
    data() {
        return{
          shop_sin:[
            {
              id:1,
              product_name:"DELL Notebook ZERO",
              product_detail:"i am the bone of my sword.",
              product_price:"24,000",
              product_count:"54",
              image:"https://media-cdn.bnn.in.th/142702/Dell-Notebook-Alienware-M15-R6-W569212300THW10-1-square_medium.jpg",
              active:false
            },
            {
              id:2,
              product_name:"DELL Notebook ONE",
              product_detail:"i am the bone of my sword.",
              product_price:"36,00",
              product_count:"56",
              image:"https://media-cdn.bnn.in.th/142743/Dell-Notebook-Alienware-M15R5R-W569212800ATHW10-1-square_medium.jpg",
              active:false
            },
             {
              id:3,
              product_name:"DELL Notebook TWO",
              product_detail:"i am the bone of my sword.",
              product_price:"48,000",
              product_count:"59",
              image:"https://media-cdn.bnn.in.th/98357/Dell-Notebook-Inspiron-G5-W56656500THW10-Black-1-square_medium.jpg",
              active:false
            },
             {
              id:4,
              product_name:"DELL Notebook THREE",
              product_detail:"i am the bone of my sword.",
              product_price:"64,000",
              product_count:"86",
              image:"https://media-cdn.bnn.in.th/98730/Dell-Notebook-XPS15-9500-W5671700THW10-Silver-1-square_medium.jpg",
              active:false
            },
             {
              id:5,
              product_name:"DELL Notebook FOUR",
              product_detail:"i am the bone of my sword.",
              product_price:"88,000",
              product_count:"51",
              image:"https://media-cdn.bnn.in.th/110858/Dell-Notebook-XPS13-2-in-1-W5671900THAD-Silver-1-square_medium.jpg",
              active:false
            },
             {
              id:6,
              product_name:"DELL Notebook FIVE",
              product_detail:"i am the bone of my sword.",
              product_price:"96,000",
              product_count:"51",
              image:"https://media-cdn.bnn.in.th/116292/Dell-Notebook-XPS13-9310-W5673200PTHW10-Silver-1-square_medium.jpg",
              active:false
            }
          ]  
        };
    },
    methods: {
        Shop(){
            axios.get("http://localhost:7775/Datashop", {
                params:{
                    product_name: this.product_name,
                    product_detail: this.product_detail,
                    product_price: this.product_price,
                    product_count: this.product_count
                },
            headers: {
            "Content-Type": "application/json",
            }
        })
        .then((response) => {
            // this.datas = response.data
            console.log(response.data);
            if(response.data.data.length > 0){
                Swal.fire({
                    icon: 'success',
                    title: 'สำเร็จ',
                    text: 'เข้าสู่ระบบ สำเร็จ',
                    timer: 1500
                });
                this.$router.push('/');
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'คำเตือน...',
                    text: 'กรอกรหัสให้ถูกดิไอ้เวร!!!!',
                    timer: 1500
                });
            }
        })
       .catch(function (error) {
             console.log(error);
        });
        },
    },
};
</script>