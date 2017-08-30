<template>
	<div class="shop-car">
		<header class="shops-car">
            <span class="edit">编辑</span>
            购物车
        </header>
		<section class="main">
			<div class="main-car">
                <div>
    				<dl v-for="(x,k) in list">
                        <b class="jisuan">
                            <span class="del" @click="sub(k)">-</span>
                            <span class="shu">{{x.length}}</span>
                            <span class="add" @click="add(k)">+</span>
                        </b>
                        <input @click="checked($event,k)" type="checkbox" v-bind:id="k">
    					<label v-bind:for="k"  class="radio">✔</label>
    					<dt>
                            <img v-bind:src="x[0].url" alt="">               
                        </dt>
    					<dd>
    						<p class="car-title">
    							{{x[0].detail}}
    						</p>
    						<p class="sum">×{{x.length}}</p>
    						<p class="prices">￥{{x[0].price}}</p>
    					</dd>
    				</dl>
    			</div>
            </div>
		</section>
        <div class="bottom">
            <input type="checkbox" @click="checkAll" id="checkall">
            <label for="checkall" class="points radio">✔</label>
            <span class="all-chiecked" >全选</span> 
            <p class="heji">
                <b>合计：</b>
                <span class="pla">￥{{sumPrice.toFixed(2)}}</span>
            </p>
            <p class="jiesuan">
                结算
            </p>
        </div>
        <my-footer></my-footer>
	</div>
</template>
<script>
	export default({
        data:function(){
            return {
                list:null,
                arr:[]
            }
        },
        created:function(){
            this.init();
        },
        methods:{
            init:function(){
                this.list=this.$store.state.goods;
            },
            sub:function(key){
                this.list={};
                this.$store.commit("sub",key);
                this.init();
            },
            add:function(key){
                this.list={};
                this.$store.commit("add",key);
                this.init();
            },
            checked:function(e,key){
                if(e.target.checked){
                    this.arr.push(key)
                }else{
                    this.arr.splice(this.arr.indexOf(key),1)
                }
            },
            checkAll:function(e){
                let dom=document.querySelector(".main-car").querySelectorAll("input");
                this.arr=[];
                if(e.target.checked){
                    for(let i=0;i<dom.length;i++){
                        dom[i].checked=true;
                    }
                    for(let key in this.list){
                        this.arr.push(key);
                    }
                }else{
                    for(let i=0;i<dom.length;i++){
                        dom[i].checked=false;
                    }
                    this.arr=[];
                }
            }
        },
        computed:{
            sumPrice:function(){
                let sum=0;
                for(let i=0;i<this.arr.length;i++){
                   sum+=this.list[this.arr[i]].length*this.list[this.arr[i]][0].price;
                }
                return sum;
            }
        }
    })
</script>
<style>
.shop-car{
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: #fff;
  display: flex;
  flex-direction:column;
  
}
.main{
  overflow: hidden;
  overflow-y: auto;
}
.shop-car input{
    display: none;
}
.shops-car{
	background: #fafafb;
    border-bottom: 1px solid #e5e5e5;
    height: 0.5rem;
    position: relative;
    font-size: .175rem;
    text-align: center;
    line-height: 0.5rem;
    display: block;
}
section{
	flex:1;
	background: #fff;
}
.edit{
	position: absolute;
    display: inline-block;
    right: .15rem;
    font-size: 0.15rem;
}
.main-car dl{
	width: 100%;
    height: 1.3rem;
    background: #fff;
    margin-bottom: .1rem;
    position: relative;
}
.main-car dl dt{
	width: 100px;
    margin-top: .16rem;
    float: left;
    height: 1rem;
    margin-left: 0.5rem;
}
.main-car dl dt img{
	width: 100%;
    height: 100%;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
}
.main-car dl dd{
	font-size: .13rem;
    margin-top: .16rem;
    float: left;
    margin-left: .1rem;
    width: auto;
}
.car-title{
	width: 2.1rem;
    padding-top: 0.5rem;
    padding-top: .15rem;
    height: .3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: auto;
    font-size: .15rem;
    color: #666666;
}
.sum{
    width: .8rem;
}
.prices{
    font-size: .15rem;
    width: .8rem;
    color: #fc4141;
    margin-top: 0.12rem;
    font-weight: bold;
}
input:checked+label{
    background: #fc4141;
}
.jisuan{
    position: absolute;
    display: inline-block;
    width: 1rem;
    height: .3rem;
    top: .7rem;
    right: .15rem;
    font-weight: 300;
    line-height: auto;
    border: 1px solid #d8d8d8;
    border-radius: 2px;
    display: -webkit-flex;
}
.jisuan span{
    text-align: center;
    line-height: .3rem;
}
.del{
    width: 30%;
    color: #333333;
    font-size: .25rem;
    border-right: 1px solid #d8d8d8;
}
.add{
    width: 30%;
    color: #333333;
    font-size: .225rem;
    border-left: 1px solid #d8d8d8;
}
.shu{
    width: 40%;
}
.bottom{
    border-top:1px solid #e5e5e5;
    width: 100%;
    height: 0.465rem;
    background: #FFF;
    position: relative;
    display: -webkit-flex;
}

.radio{
	display: inline-block;
    position: absolute;
    left: .1rem;
    top: .5rem;
    width: .24rem;
    height: .24rem;
    border-radius: 50%;
    border: 1px solid #ccc;
    color: #fff;
    font-size: .18rem;
    line-height: .24rem;
    text-align: center;
}
.points{
    display: inline-block;
    position: absolute;
    border: 1px solid #ccc;
    top: 9px;
    left: .2rem;
    width: .24rem;
    height: .24rem;
    border-radius: 50%;
    border: 1px solid #ccc;
}
.all-chiecked{
    width: 30%;
    color: #666666;
    text-align: center;
    font-size: 0.15rem;
    line-height: .465rem;
    margin-left: 0.4rem;
}
.jiesuan{
    width: 30%;
    background: #fc4141;
    text-align: center;
    line-height: .45rem;
    color: #ffffff;
    font-size: 0.16rem;
    margin-left: .63rem;
}
.heji{
    width: 3rem;
}
.heji b{
    font-size: .15rem;
    font-weight: inherit;
}
.pla{
    font-size: .175rem;
    color: #fc4141;
    display: inline-block;
    margin-bottom: 0.1rem;
    font-weight: bold;
    line-height: .45rem;
}
</style>