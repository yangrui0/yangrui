<template>
	<div class="container">
		<header>
         <dl>
            <dt><i class="iconfont icon-jianzhu"></i></dt>
            <dd>服务站</dd>
         </dl>
         <div class="search">
            <i class="iconfont icon-fangdajing"></i>
            <input type="text" placeholder="请输入您要购买的商品" @focus="goSearch" />
         </div>
         <dl>
            <dt><i class="iconfont icon-shop"></i></dt>
            <dd>我的店铺</dd>
         </dl>
      </header>
		<main class="content" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="20">
			<div class="contain">
				<section class="banner-swiper">
					<swiper :options="swiperOption">
						<swiper-slide>
							<img src="../assets/banner1.png">
						</swiper-slide>
						<swiper-slide>
							<img src="../assets/banner2.png">
						</swiper-slide>
						<swiper-slide>
							<img src="../assets/banner3.png">
						</swiper-slide>
						<swiper-slide>
							<img src="../assets/banner4.png">
						</swiper-slide>
						<swiper-slide>
							<img src="../assets/banner5.png">
						</swiper-slide>
						<div class="swiper-pagination"  slot="pagination"></div>
					</swiper>
				</section>

				<div class="menu">
				<dl>
					<dt><img src="../assets/img/menu1.gif" alt=""></dt>
					<dd>牛奶乳品</dd>
				</dl>
				<dl>
					<dt><img src="../assets/img/menu2.gif" alt=""></dt>
					<dd>家乡味道</dd>
				</dl>
				<dl>
					<dt><img src="../assets/img/menu3.gif" alt=""></dt>
					<dd>悠闲零食</dd>
				</dl>
				<dl>
					<dt><img src="../assets/img/menu4.gif" alt=""></dt>
					<dd>米面粮油</dd>
				</dl>
				<dl>
					<dt><img src="../assets/img/menu5.gif" alt=""></dt>
					<dd>调味调料</dd>
				</dl>
				<dl>
					<dt><img src="../assets/img/menu6.gif" alt=""></dt>
					<dd>酒水饮料</dd>
				</dl>
				<dl>
					<dt><img src="../assets/img/menu7.gif" alt=""></dt>
					<dd>果蔬生鲜</dd>
				</dl>
				<dl>
					<dt><img src="../assets/img/menu8.gif" alt=""></dt>
					<dd>进口食品</dd>
				</dl>
					
			
				</div>
				<div class="shop_act">
					<div class="left_tip">商场<br>动态</div>
					<div class="right_tip">
						<swiper :options="options">
							<swiper-slide>滑过is刚回来的发过来快递费给你了快递发给你你发的快过年打扰你俩咖啡馆哪来的你打卡了发给</swiper-slide>
							<swiper-slide>滑高点击率房管局的分类根据对方离开国家法律你你发的快过年打扰你俩咖啡馆哪来的你打卡了发给斯蒂芬哪来的时刻付多所 </swiper-slide>
							<swiper-slide>活动is更合理地妇姑荷箪食覅领导更好 考试结果海口市工商联更多福利控股环境哪个服的v</swiper-slide>
						</swiper>	
					</div>
				</div>
				<div class="pro_tuijian">
					<h4 class="title">
						<span class="main"><i class="iconfont icon-wodeyouhuiquan"></i>天天特惠</span>
						<span class="second">每天有惊喜</span>
						<span class="more">更多 ></span>
					</h4>
					<div class="pro_show">
						<div class="left_show">
							<img src="../assets/show_02.png">
						</div>
						<div class="right_show">
							<div class="pro1"><img src="../assets/show_05.png"></div>
							<div class="pro2"><img src="../assets/show_07.png"></div>
						</div>
					</div>
				</div>
				<my-loader :json="json">
					
				</my-loader>
			</div>
		</main>
		<my-footer></my-footer>
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import ajax from '../config/ajax'
	import loader from '../components/loader.vue'
	export default {
		data(){
			return {
				swiperOption:{ 
	                centeredSlides: true, 
	                paginationClickable: true,
	                autoplay:1500,
	                pagination : '.swiper-pagination',
	                autoplayDisableOnInteraction:false,
					loop:true
				},
				options:{
					autoplay:2000,
					loop:true,
					direction:"vertical",
	                autoplayDisableOnInteraction:false,
	                onlyExternal:true
				},
				flag:true,
				busy: false,
				json:[]
			}
		},
		methods:{
			goSearch:function(){
				this.$router.push("/search");
			},
			loadMore:function(e){
			      ajax("GET","./src/server/data.json").then((data)=>{
						this.json.push(data);
					});
				/*let H=e.target.offsetHeight;
				let contain=e.target.querySelector(".contain").offsetHeight;
				let temp=this.loadMore;
				if(contain-e.target.scrollTop-H<20){
					this.flag=false;
					ajax("GET","./src/server/data.json").then((data)=>{
						this.json.push(data);
						this.flag=true;
					})
				}*/
			}
		},
		components:{
			"my-loader":loader
		}
	}
</script>

<style lang="scss">
	.container{
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.container .content{
		flex: 1;
		overflow-y: auto;
	}
	header {
      width: 100%;
      height: 44px;
      display: flex;
      padding: 5px 0;
      background: #fff;

   .search {
      width: 60%;
      height: 30px;
      background: #f5f5f5;
      border-radius: 15px;
      margin-left: 10px;
      margin-top: 7px;

   i {
      margin-left: 8%;
      line-height: 30px;
   }

   input {
      width: 75%;
      border: none;
      background: none;
   }

   }
   dl {
      width: 15%;
      text-align: center;
      color: #FC4141;
      margin-left: 10px;
   }

   }
	.banner-swiper {
		margin-bottom: 8px;
	}
	.banner-swiper img{
		width: 100%;
		display: block;
	}

	.menu {
      display: flex;
      background: #fff;
      flex-wrap: wrap;

     

   }
   .menu  dl {
         width: 25%;
         padding: 0 18px;
         box-sizing: border-box;
         text-align: center;
         margin-top: 16px;
   }

   .menu dl dt, dd {
            width: 100%;
         }

    .menu dl dt {
            background: #f5f5f5;
            border-radius: 50%;
            overflow: hidden;
         }

    .menu dl img {
            width: 100%;
         }
	.subject{
		height: 2rem;
		display: flex;
		flex-wrap: wrap;
		background: #fff;
	}
	.subject a{
		width: 25%;
		text-align: center;
	}
	.subject dl{
		margin-top: .16rem;
	}
	.subject dl dt{
		margin-bottom: 5px;
	}
	.subject img{
		width: .5rem;
		height: .5rem;
	}
	.shop_act{
		display: flex;
		align-items: center;
		height: .56rem;
		box-sizing: border-box;
		padding: 0 16px;
		background: #fff;
	}
	.shop_act .left_tip{
		color: #ff6d00;
		flex:1;
	}
	.shop_act .right_tip{
		height: .44rem;
		flex:9;
		border-radius: .1rem;
		margin-left: .12rem;
		box-sizing: border-box;
		padding: 0 8px;
		text-align: left;
		padding: 0.06rem 8px;
		line-height: .16rem;
		border:#ccc solid 1px;
		overflow: hidden;
	}
	.right_tip .swiper-container{
		height: 100%;
	}
	.right_tip .swiper-slide{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	.pro_tuijian{
		height: auto;
	}
	.pro_tuijian .title{
		height: .4rem;
		line-height: .4rem;
		font-weight: 100;
		background: #fff;
		margin:8px 0;
	}
	.pro_tuijian .title .iconfont{
		margin: 0 .1rem;
		font-size: .18rem;
	}
	.pro_tuijian .main,.pro_tuijian .second{
		color: #ff6d00;
		float: left;
	}
	.pro_tuijian .title .main{
		font-size: .16rem;	
	}
	.pro_tuijian .title .second{
		margin-left: .16rem;
		font-size: .12rem;
	}
	.title .more{
		float: right;
		margin-right: .12rem;
	}
	.pro_show{
		overflow:hidden;
	}
	.pro_show>div{
		float: left;
	}
	.pro_show .left_show{
		width: 49%;
		margin-right: 1%;
	}
	.pro_show .right_show{
		width: 50%;
	}
	.pro_show img{
		display: block;
		width: 100%;
		height: auto;
		margin-bottom: 0.04rem;
	}
	.loadmore{
		text-align: center;
		font-size: .14rem;
	}
	 .swiper-pagination-bullet-active{
		background: #fff;
	} 
</style>