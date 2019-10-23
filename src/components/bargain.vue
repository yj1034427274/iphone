<template>
    <div>
        <div class="head">
             <router-link to='/'>
                <i class="el-icon-remove-outline"></i>
            </router-link>
            <p>砍价列表</p>
            <div></div>
        </div>
        <div class="bargain_list">
            <div class="bargain_item" v-for="(item,index) in this.$store.state.list_bargain" :key='index'>
                <div class="images"><img :src="item.pic"></div>
                <div class="aaa">
                    <div class="one">{{item.name}}</div>
                    <div class="two">{{item.characteristic}}</div>
                    <div class="three">
                        <div  style="border-right: 1px solid #e9e9e9">
                            <p style="color:#d00000;font-weight:700">￥{{ item.minPrice }}.00</p>
                            <p>底价</p>
                        </div>
                        <div  style="border-right: 1px solid #e9e9e9">
                            <p style="color:#b2b2b2">￥{{ item.originalPrice }}.00</p>
                            <p style="color:#b2b2b2">原价</p>
                        </div>
                        <div>
                            <p style="color:#b2b2b2">{{ item.stores }}</p>
                             <p style="color:#b2b2b2;margin-top:9px">限量</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                
            }
        },
         created(){
            axios.get("https://api.it120.cc/small4/shop/goods/kanjia/list").then((res)=>{
                this.$store.state.list_bargain=res.data.data.goodsMap
                // console.log(res.data.data)
            }),
            axios.post('https://api.it120.cc/small4/shop/goods/kanjia/info').then((res)=>{
                this.$store.state.listbargain=res.data.data
                console.log(res.data.data)
            })
        }
    }
</script>

<style  scoped>
.head{
    width:7.5rem;
    height:1.0rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
    border-bottom:1px solid #333333;
}
.head a{
    color:black;
    font-size: 0.5rem;

}
.head p{
    font-size: 0.4rem;
}
.bargain_list{
    width:7.5rem;
    height:12rem;
}
.bargain_item{
    width:7.5rem;
    height:3rem;
    display:flex;
    justify-content: space-between;
    align-items:center;
}
.images{
    width:2.0rem;
    height:2.4rem;
    border-radius: 0.1rem;
    overflow: hidden;
}
.images img{
    width:2.0rem;
    height:2.4rem;
    margin-left:0.2rem;
}
.aaa{
    width:5.2rem;
    height:2.4rem;
}
.one{
    width:5.2rem;
    height:0.6rem;
    font-size: 0.3rem;
    line-height: 0.6rem;
}
.two{
     width:5.2rem;
    height:0.6rem;
    font-size: 0.2rem;
    line-height: 0.6rem;
    color:#b2b2b2;
}
.three{
    width:5.2rem;
    height:1.0rem;
    margin-top:0.2rem;
    display: flex;
    justify-content: space-between;

}
.three div{
    width:1.6rem;
    height:1.0rem;
    font-size: 0.3rem;
}
.three div p{
    text-align: center;
    margin-top:0.1rem;
}
</style>