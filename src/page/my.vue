<template>
	<div class="my">
		<header class="my-header">
			<div class="shezhi">
				<i class="fa fa-cog"></i>
			</div>
			我的717商城
		</header>
		<section>
			<div class="logo">
				<img src="../img/tou.png" alt="" class="logo-img">
				<p class="logo-title">71712419352</p>
			</div>
			<div class="my-shop">
				<span class="shop-img">
					<img src="../img/img_06.png" alt="">
					我的店铺
				</span>
				<span class="shop-more">
					<i class="fa fa-angle-right"></i>
				</span>
			</div>
			<div class="my-list">
				<dl>
					<dt> <i class="fa fa-star"></i> </dt>
					<dd>待付款</dd>
				</dl>
				<dl>
					<dt> <i class="fa fa-star"></i> </dt>
					<dd>待发货</dd>
				</dl>
				<dl>
					<dt> <i class="fa fa-star"></i> </dt>
					<dd>待收货</dd>
				</dl>
				<dl>
					<dt> <i class="fa fa-star"></i> </dt>
					<dd>售后</dd>
				</dl>
				<dl>
					<dt> <i class="fa fa-star"></i> </dt>
					<dd>我的订单<i class="fa fa-angle-right"></i></dd>
				</dl>
			</div>
			<ul class="sorts-list">
				<li><i class="fa fa-star"></i>我的社区<a class="sort-more"><i class="fa fa-angle-right "></i></a></li>
				<li><i class="fa fa-star"></i>账户余额<a class="sort-more"><i class="fa fa-angle-right "></i></a></li>
				<li><i class="fa fa-star"></i>地址管理<a class="sort-more"><i class="fa fa-angle-right "></i></a></li>
			</ul>
			<div class="hot">
				<h4>
					<img src="../img/my16.png" alt="">
					热门推荐
					<img src="../img/my16.png" alt="">
				</h4>
			</div>
		</section> 
		<footers></footers>
	</div>
</template>
<script>
import footers from './footer.vue'
	export default({
		components:{
			footers
		}
	})
</script>
<style>
.my{
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
	display: flex;
	flex-direction:column;
}
section{
	flex:1;
	overflow-y: scroll;
}
.my-header{
	height: 1rem;
    position: relative;
    background: #fff;
    text-align: center;
    line-height: 1rem; 
    font-size: 0.35rem;
    text-align: center;
    width: 100%;
}
.shezhi{
	position: absolute;
	left: .1rem;
}
.shezhi i{
	color: #666;
}
.logo{
	width: 100%;
    height: 2rem;
    background: rgb(252,104,65);
}
.logo-img{
	width: 1.23rem;
    height: 1.24rem;
    margin: 0.14rem 0 0 3.15rem;
}
.logo-title{
	text-align: center;
    color: #ffffff;
    font-size: 0.3rem;
    line-height: .5rem;
    font-weight: normal;
    font-family: PingFangSC-Regular, sans-serif;
}
.my-shop{
	background: #ffffff;
    margin-bottom: 0.1rem;
    width: 100%;
    height: 1.32rem;
    color: #fc4141;
    position: relative;
    border-bottom: 1px solid #eeeeee;
}
.shop-img{
	margin: 6% 0 0 15%;
    font-size: .34rem;
    display: inline-block;
}
.shop-img img{
	position: absolute;
    top: 25%;
    left: .3rem;
    width: 0.7rem;
    height: 0.63rem;
}
.shop-more{
	position: absolute;
    top: 35%;
    right: 5%;
    width: 0.17rem;
    height: 0.35rem;
}
.shop-more i{
	font-size: .5rem;
	position: absolute;
}
.my-list{
	width: 100%;
    height: 1.3rem;
    display: -webkit-flex;
    margin-bottom: .1rem;
    background: #fff;
}
.my-list dl{
	flex:1;
	text-align: center;
	height: 100%;
    padding-top: .25rem;
    box-sizing:border-box;
}
.my-list dl dt i{
	color: #333;
	font-size: 0.22rem;
}
.my-list dl dd{
	color: #333;
	font-size: 0.26rem;
	margin-top: 5px;
}
.my-list dl:last-child{
	border-left: 1px solid #e5e5e5;
}
.sorts-list{
	background: #fff;
	margin-bottom: .1rem;
}
.sorts-list li{
	width: 100%;
    height: 1.03rem;
    border-bottom: 1px solid #e5e5e5;
    line-height: 1.03rem;
    padding-left: .6rem;
    box-sizing:border-box;
    color: #666;
}
.sorts-list li i{
	margin-right: .1rem;
}
.sort-more{
	position: absolute;
	right: .2rem; 
}
.sort-more i{
	font-size: .36rem;
}
.hot h4{
	width: 100%;
    background: #ffffff;
    height: .9rem;
    line-height: .9rem;
    position: relative;
    text-align: center;
    margin-bottom: .2rem;
}
.hot h4 img{
	width: 0.34rem;
    height: 0.24rem;
}
.hot h4 img:nth-child(1){
	position: absolute;
    top: 0.33rem;
    left: 2.7rem;
}
.hot h4 img:nth-child(2){
	position: absolute;
    top: 0.33rem;
    right: 2.6rem;
}
</style>