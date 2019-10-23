import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    // 状态管理对象
   state:{
        list: [],
        list1:[],
        list2:[],
        list_bargain:[]
   },
   mutations:{
       //点击头像隐藏
       touxiang(){

       },

       //购物车隐藏
       gouwuche(){

       },
       //点击添加
       addtianjia(state,item){
          state.list1.push(item)
         // let arr = [...list1]
       },
       //购物车加加
       addjia(state,index){
         // item.product_info.brand_id ++  
         state.list1[index].product_info.brand_id ++
         // console.log(state.list1[index])
            
       },
       //购物车减减
       addjian(state,item){
          item.product_info.brand_id--
          if (item.product_info.brand_id<1){
               state.list1.forEach((v,i)=>{
                    if (v.product_info.brand_id ===0){
                        state.list1.splice(i,1)
                    }
               })
          }
       },
       //删除
       del(state,index){
          state.list1.splice(index,1)
       },
       //价格低到高
       qw(state){
          state.list.sort((a,b)=>{
             return a.price - b.price
          })
       },
       //价格高到低
       wq(state){
         state.list.sort((a,b)=>{
            return b.price - a.price
         })
       },
       addzongjia(state){
         let obj =0;
         state.list1.forEach(v => {
            return  obj += v.price
         })
       },
       addzongshu(state){
          let obj = 0;
          state.list1.forEach(v =>{
             return obj += Number(v.product_info.brand_id)
          })
       }

      //  zong(){
      //     let obj=0
      //    for(let i in state.list1){
      //       obj +=state.list1[i].price * state.list1[i].product_info.brand_id
      //    }
      //    return obj
      //  }
   }
})

export default store