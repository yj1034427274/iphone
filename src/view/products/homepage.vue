<template>
    <div class="box">
        <!-- 轮播 -->
        <div class="swiper-container" id="banner">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="https://cdn.it120.cc/apifactory/2018/11/07/76d9a2c2bd56c4ac0497b5d360c6bc06.png" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="https://cdn.it120.cc/apifactory/2018/11/07/ad7e06f98e8910ff789b6e577b36c20b.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="https://cdn.it120.cc/apifactory/2018/11/06/1a6dc56d16dcec64639d9ea624ebdd46.jpg" alt="">
                </div>
            </div>
                <div class="swiper-pagination"></div>
        </div>
        <!-- 导航栏 -->
            <div class="nav">
                <ul>
                    <li>
                        <img src="../assets/nav01.png">
                        <router-link to='/signin'>签到</router-link>
                    </li>

                    <li>
                        <img src="../assets/nav04.png">
                        <router-link to='/voucher'>礼券</router-link>
                    </li>

                    <li>
                        <img src="../assets/nav03.png">
                        <router-link to='/bargain'>砍价</router-link>
                    </li>

                    <li>
                        <img src="../assets/nav02.png">
                        <router-link to='/specialcolumn'>专栏</router-link>
                    </li>
                </ul>
            </div>
            <div class="water"></div>

             <div class="header">
                 <p>
                     全民砍价
                     <i class="el-icon-d-arrow-right"></i>
                 </p>
             </div>
        <!-- 商品 -->
             <div class="content">
                 <div v-for="(item,index) in this.$store.state.list" :key='index' class="content-one" v-if='item.stores===100'>
                     <div class="content-left">
                        <img :src='item.pic'>
                        <div class="content-left-right">

                            <div class="content-letter">
                                {{ item.name }}
                            </div>

                            <div class="content-letters">
                                {{ item.characteristic}}
                            </div>

                            <div class="content-price">
                                <p style="color:#d00000">￥{{ item.minPrice }}.00</p>
                                <p>￥{{ item.originalPrice }}.00</p>
                                <p>{{ item.stores }}</p>
                                <p style="color:black">底价</p>
                                <p>原价</p>
                                <p>限量</p>
                            </div>

                        </div>
                     </div>
                 </div>
             </div>  
    
            <div class="waters"></div>
            <!-- 精选专题 -->
            <div class="content-jing">
                 <div class="content-head">
                     <p>
                         精选专题
                     <i class="el-icon-d-arrow-right"></i>
                     </p> 
                 </div>
                 <!-- 轮播 -->
                  <div class="content-banner">
                      <ul>
                          <li v-for="(item,index) in this.$store.state.list2" :key='index'>
                              <img :src="item.pic">
                              <p>{{item.title}}</p>
                              <div>{{item.descript}}</div>
                          </li>
                      </ul>
                  </div>
            </div>

            <div class="waters"></div>

            <div class="content-three">

                <div class="content-head">
                     <p>
                         人气推荐
                     <i class="el-icon-d-arrow-right"></i>
                     </p> 
                 </div>
                
                <div class="content-three-a">
                    <div class="three_a" v-for='(item,index) in this.$store.state.list' :key='index' v-if='item.kanjiaPrice>=50'>
                        <img :src="item.pic">
                        <p>￥{{item.minPrice}}.00</p>
                    </div>
                </div>
            </div>
            <div class="guo"></div>
            <router-view />

    </div>
</template>

<script>
    import Swiper from 'swiper';
    import '../assets/swiper-3.4.2.min.css'
    import axios from 'axios'
    export default {
        data() {
            return {
                
            }
        },
        created(){
            axios.get("https://api.it120.cc/small4/shop/goods/kanjia/list").then((res)=>{
                this.$store.state.list=res.data.data.goodsMap
                // console.log(res.data.data)
            }),
            axios.get("https://api.it120.cc/small4/cms/news/list").then((res)=>{
                this.$store.state.list2=res.data.data
                // console.log(res.data)
            })
        },
        mounted() {
            var mySwiper = new Swiper('.swiper-container',{
                autoplay:true,
                loop:true,
                pagination:'.swiper-pagination'
            })
        },
    }
</script>

<style scoped>
#banner{
    width:7.5rem;
    height:7.5rem;
}
.swiper-slide{
    width:7.5rem;
    height:7.5rem;
}
.swiper-slide img{
    width:100%;
    height:7.5rem;
    display: block;
}
.box{
    position:relative;
}
.nav{
    width:7.5rem;
    height:2.0rem;
    position: absolute;
    top: 5.51rem;
    z-index:10;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    background:white;
}
.nav ul{
    width:7.5rem;
    height:2.0rem;
    display: flex;
    list-style: none;
    justify-content: space-between;
    z-index:10;

}
.nav ul li{
    width:20%;
    height:2.0rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 10px;
}
.nav ul li img{
    width:1.0rem;
    height:1.0rem;
    margin: 0 auto;
}
.nav ul li a{
    font-size: 0.36rem;
    text-decoration:none;
    color:black;
}
.water{
    width:100%;
    height:0.2rem;
    background: #f5f5f5;
    margin-top:0.4rem;
    position: relative;
}
.header{
    width:100%;
    height:1.0rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom:1px solid #f5f5f5;
}
.header p{
    font-size: 0.4rem;
}
.content{
    width:100%;
    height:8.0rem;
    overflow: hidden;
}
.content-one{
    width:100%;
    height:2.66rem;
    border-bottom:1px solid #e9e9e9;
}
.content-left{
    width:7.3rem;
    height:2.5rem;
    padding:0.14rem;
    display: flex;
    justify-content: space-between;
}
.content-left img{
    width:2.0rem;
    height:2.3rem;
}
.content-left-right{
    width:5.0rem;
    height:2.3rem;
    position:relative;
}
.content-letter{
font-size:0.29rem;
}
.content-letters{
    font-size:0.22rem;
    margin-top:0.2rem;
    color:#b2b2b2;
}
.content-price{
    width:4rem;
    height:0.6rem;
    position: absolute;
    bottom:0px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
}
.content-price p{
    font-size: 0.2rem;
    width:1.3rem;
    text-align: center;
    font-weight: 700;
    color:#b2b2b2;
}
.waters{
    width:100%;
    height:0.2rem;
    background: #f5f5f5;
}
.content-jing{
    width:100%;
    height:6.4rem;
}
.content-head{
     width:100%;
    height:1.0rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.content-head p{
     font-size: 0.4rem;
}
.content-banner{
    width:7.5rem;
    height:5.4rem;
    /* overflow: hidden; */
}
.content-banner ul{
    width:7.5rem;
    height:5.4rem;
    display:flex;
    justify-content: space-between;
    overflow: auto;
}
.content-banner ul li{
    width:6rem;
    height:5.4rem;
    margin-left:20px;
}
.content-banner ul li img{
    width:6rem;
    height:4.0rem;
}
.content-banner ul li p{
    font-size: 0.24rem;
}
.content-banner ul li div{
    width:80%;
    font-size:0.2rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color:#b2b2b2;
    margin-top: 20px;
}
.content-three{
        width:100%;
        height:7rem;
}
.content-three-a{
    width:7.5rem;
    height:10rem;
    display:flex;
    justify-content: space-around;
    flex-wrap: wrap;
    position:relative;
}
.three_a{
width:3.5rem;
height:4.8rem;
}
.three_a img{
    width:3.5rem;
    height:4.2rem;
}
.three_a p{
    font-size: 0.3rem;
    font-weight: 700;
    color: #d00000;
}
.guo{
    width:100%;
    height:5.5rem;
}

</style>