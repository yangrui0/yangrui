<template>
	<div class="load_area">
		<div class="home-list" v-for="(val,ind) in json">
			<h4 class="title">{{json[ind].title}}</h4>
			<div class="pro_show">
				<div class="product" v-for="x in json[ind].data">
					<dl>
						<dt><img class="show" :src="x.url"></dt>
						<dd>
							<p class="content">
				              {{x.detail}}
				            </p>
				            <p class="price">
				              <span>￥{{x.price}}</span>
				            </p>
				              <img v-on:click="addShoppingList(x)" class="pos" src="../assets/homeland3.png" alt="" >
						</dd>
					</dl>
					
				</div>
			</div>
		</div>
		<transition>
			<p class="tip" v-if="flag">添加成功</p>
		</transition>
		
	</div>
</template>

<script>
export default {
	props:{
		json:{
			type:Array,
			required:true
		}
	},
	data:function(){
		return {
			flag:false
		}
	},
	methods:{
		addShoppingList:function(goods_info){
			this.$store.commit("addShoppingList",goods_info);
			if(this.flag) return;
			this.flag=true;
			setTimeout(()=>{
				this.flag=false;
			},1000)
		}
	}
}
</script>

<style scoped>
	.home-list .title{
		height: .4rem;
		background: #fff;
		line-height: .4rem;
		font-weight: 100;
		margin: 8px 0;
		font-size: 16px;
	}
	.home-list dl{
		width: 100%;
	    height: 100%;
	    background: #fff;
	}
	.home-list{
	    width: 100%;
	    margin-top: 0.06rem;
	    overflow: hidden;
	    margin-bottom: 0.06rem;
	}
	.product{
	    width: 49%;
		overflow: hidden;
		height: 2.75rem;
		margin-right: 1%;
		float: left;
	    position: relative;
	}
	.pro_show{
		overflow: hidden;
	}
	.home-list dl dt img{
	    width: 100%;
	    height: 1.845rem;
	}
	.pos{
		position: absolute;
		right: .16rem;
		bottom: 5px;
		width: 35px;
	}
	.price{
		color: red;
		position: absolute;
		bottom: 5px;
		left: .16rem;
		font-size: .21rem;
	}
	.tip{
		position: absolute;
		width: 60%;
		height: .24rem;
		color: #fff;
		line-height: .24rem;
		text-align: center;
		border-radius: .1rem;
		right: 0;
		left: 0;
		bottom: .8rem;
		margin: 0 auto;
		background: rgba(0,0,0,0.7);
	}
		.v-enter,.v-leave-to{
			opacity: 0;
		}
		.v-enter-to,.v-leave{
			opacity: 1;
		}
		.v-enter-active,.v-leave-active{
			transition:all 0.3s ease-in;
		}
</style>