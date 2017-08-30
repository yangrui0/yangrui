<template>
    <div class="classify">
        <div class='classify-head'>
            <div class="classify-search">
               <i class='iconfont icon-fangdajing'></i>
               <input type="search" placeholder="请输入你要购买的商品" class="classify-inp" @focus="goSearch" />
           </div>
        </div>
        <div class="classify-sec">
            <div class="left">
                <ul>
                    <li v-for="(item,index) in List" v-bind:class="{'m':flag==index}" @click="ask(index,item.cate_id)">{{item.cate_name}}</li>
                </ul>
            </div>
            <div class='right'>
                <dl v-for="i in arr">
                    <dt><img :src="'http://www.lb717.com/'+i.cate_icon" alt=""></dt>
                    <dd>{{i.cate_name}}</dd>                    
                </dl>

            </div>
        </div>
        <my-footer></my-footer>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return {
                    "List":[],
                    "foodList":[],
                    "arr":[],
                    "flag":0
                 }
        },
        mounted:function (){
            axios.get('../src/data/list.json').then((data)=>{
                this.List=data.data.foodList
            })
        },
        methods:{
            ask:function(index,cate_id){
                this.flag=index;
                this.arr=[];
                axios.get('../src/data/foodList.json').then((data)=>{
                    this.foodList=data.data.foodList;
                    this.foodList.forEach((val,i)=>{
                        var ID=val.parent_id;
                        if(cate_id==ID){
                            this.foodList=val;
                            this.arr.push(this.foodList)
                        }
                    })
                })
            },
            goSearch:function(){
				this.$router.push("/search");
			}
        }
       
    }
</script>
<style lang='scss'>
    .classify{
         position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction:column;
        font-size: 12px;
    }
    .classify-head{
        height: 44px;
        background: #fff;
        border-bottom: 1px solid #ccc;
        
        .classify-search{
                width: 70%;
                height: 30px;
                margin:0 auto;
                margin-top: 7px;
                line-height: 30px;
                border-radius: .15rem;
                border: none;
                background: #f1f1f1;
                
            }
               
                .classify-inp{
                    width: 70%;
                    margin-left: 5%;
                    height: 100%;
                    position: relative;
                    background: none;
                    border: none;
                    outline: none;
                 } 
    }
    .classify-sec{
        background: #fff;
          flex: 1;
          overflow-y: scroll;
          padding-bottom: 50px;
          box-sizing:border-box;
        .left{
            float: left;
            width: 30%;
            font-size: .16rem;
            margin-right: .05rem;
            font-size: 12px;
            li{
                text-align: center;
                height: .5rem;
                line-height: .5rem;
                background: #f0eced;
                .fa{
                color:red;
                }
            }
        }
 
    }
    .right{
        float: right;
        width: 68%;
          font-size: 12px;
          display: flex;
          flex-wrap:wrap;
    }
    .right dl{
        width: 30%;
        text-align: center;
        background: #f7f7f7;
        height: 1rem;
        margin: 3px;
        box-sizing:border-box;
    }
    .right dl dt{
        width: 80%;
        margin: 0 auto
    }
    .right dl dt img{
        width: 100%;
        height: auto;
    }
    .m{
        border-left: 4px  solid red;
        background: #fff !important;
        color: red;
    }
</style>