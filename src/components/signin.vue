<template>
    <div>
        <div class="head">
            <router-link to='/'>
                <i class="el-icon-remove-outline"></i>
            </router-link>

            <div class="content">
                <div class="content-one">您的可用积分为</div>
                <div class="content-two">999</div>
            </div>

            <div class="content-slider">
            </div>

        </div>
        
        <div class="two-head">
                 <el-button class="btn1" round>签到</el-button>
        </div>
        
        <div class="fonter-one">
            <img src="../assets/qiandao02.png">
            <div>
                <div class="font-shop">消费购物</div>
                <div class="font-shopping">购物完成确认收货后立返积分</div>
            </div>
                <router-link to='/' class="btn2" tag="button">去购物</router-link>

        </div>

        <div class="fonter-ones">
            <img src="../assets/qiandao01.png">
            <div>
                <div class="font-shops">积分兑换</div>
                <div class="font-shoppings">积分兑好礼,20积分即可兑换礼券</div>
            </div>
                <router-link to='/gose' class="btn2s" tag="button">去兑换</router-link>


        </div>
        <router-view />
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.head{
    width:100%;
    height:5rem;
    background: -webkit-gradient(linear,left top,right top,from(#f1ead8),to(#fefbf2));
    background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, from(rgb(241, 234, 216)), to(rgb(254, 251, 242)));
    position:relative;
}
.head a{
    position:absolute;
    top:-0.44rem;
    left:0.24rem;
}
.el-icon-remove-outline{
    color:black;
    font-size: 0.5rem;
}
.content{
    width:7.5rem;
    height:2.2rem;
    padding-top: 1rem;
}
.content-one{
    width:7.5rem;
    height:0.6rem;
    font-size: 0.4rem;
    text-align: center;
    color:#999999;
}
.content-two{
    width:7.5rem;
    height:1rem;
    font-size: 0.5rem;
    text-align: center;
    color:#b3a078;
    font-weight: 700;
    margin-top:0.3rem;
}
.content-slider{
    width:7.5rem;
    height:1.4rem;
    position:absolute;
    bottom: 0;
    background: #e8e1cf;
}
.two-head{
    width:7.5rem;
    height:2rem;
    display:flex;
    justify-content: space-around;
    align-items: center;
}
.btn1{
    width: 3.1597222222rem;
    height: .6944444444rem;
    font-size: .2916666667rem;
    color: #fff;
    background: #b3a078;
    border-radius:0.6944444444rem;
    border: none;
}
.fonter-one{
    width:6.9rem;
    height:1.5rem;
    margin: 0 auto;
    background: #f4ebe2;
    border-radius: 0.1388888889rem;
    overflow: hidden;
    display: flex;
    margin-top: 0.3rem;
}
.fonter-one img{
    width:1.1rem;
    height:1.1rem;
    margin-top: 0.4rem;
}
.fonter-one>div{
    width:4.2rem;
    height:0.88rem;
    margin-top: 0.4rem;
    margin-left:0.2rem;
}
.font-shop{
    font-size: 0.3rem;
    margin-bottom: 0.2rem;
    color: #e1b68c;
}
.font-shopping{
    font-size: 0.2rem;
    color:#e1b68c;
}
.btn2{
    width:1rem;
    height:0.5rem;
    background: #e1b68c;
    border:1px solid #e1b68c;
    color:white;
    border-radius: 0.1rem;
    font-size: 0.26rem;
    margin-top: 0.5rem;
}
.fonter-ones{
    width:6.9rem;
    height:1.5rem;
    margin: 0 auto;
    background: #ede6d6;
    border-radius: 0.1388888889rem;
    overflow: hidden;
    display: flex;
    margin-top: 0.3rem;
}
.fonter-ones img{
    width:1.1rem;
    height:1.1rem;
    margin-top: 0.4rem;
}
.fonter-ones>div{
    width:4.2rem;
    height:0.88rem;
    margin-top: 0.4rem;
    margin-left:0.2rem;
}
.font-shops{
    font-size: 0.3rem;
    margin-bottom: 0.2rem;
    color: #b3a078;
}
.font-shoppings{
    font-size: 0.2rem;
    color:#b3a078;
}
.btn2s{
    width:1rem;
    height:0.5rem;
    background: #b3a078;
    border:1px solid #b3a078;
    color:white;
    border-radius: 0.1rem;
    font-size: 0.26rem;
    margin-top: 0.5rem;
}
</style>