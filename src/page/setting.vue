<template>
	<div class="seting">
		<header class="set-header">
			<a href="##" class="backs" @click="goback"><i class="fa fa-angle-left"></i></a>
			设置
		</header>
		<section>
			<div class="seting-list">
				<h4>我的头像
					<div class="face">
						<img src="../assets/images/dlsimg_03.png" alt="">
					</div>
					
					<a href="##" class="mores"><i class="fa fa-angle-right"></i></a>
				</h4>
				<ul class="listss">
					<li @click="tousername">用户名<span class="username">路飞</span>
						<a href="##" class="mores"><i class="fa fa-angle-right"></i></a></li>
					<li>我的二维码名片<a href="##" class="mores"><i class="fa fa-angle-right"></i></a></li>
					<li>绑定手机号<a href="##" class="mores"><i class="fa fa-angle-right"></i></a></li>
				</ul>
			</div>
		</section>
		<p class="mind">退出登录</p>
	</div>
</template>
<script>
	export default({
		methods:{
			goback:function(){
				this.$router.go(-1)
			},  
			tousername:function(){

			}
		}
	})
</script>
<style>
	.seting{
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		background: #f4f4f4;
	}
	.set-header{
		height: 50px;
		position: relative;
		background: #fafafb;
		text-align: center;
		line-height: 50px;
		font-size: 16px;
		margin-bottom: 5px;
	}
	.backs{
		position: absolute;
		left: 10px;
		
	}
	.backs i{
		font-size:22px;
	}
	.seting-list{
		text-align: left;
	}
	.seting-list h4{
	    overflow: hidden;
	    height: 74px;
	    border-bottom: 1px solid #e5e5e5;
	    background: #fff;
	    font-size: 16px;
	    margin-top: 10px;
	    line-height: 74px;
	    position: relative;
	    padding-left: 15px;
	}
	.seting-list h4 .face{
		display: inline-block;
	    width: 60px;
	    height: 60px;
	    float: right;
	    margin-right: 30px;
	    margin-top: 5px;
		border-radius: 50%;
		overflow: hidden;
	}
	.seting-list .face img{
		width: 100%;
		height: 100%;
	}
	.mores{
		position: absolute;
		right: 10px;
	}
	.listss{
		background: #fff;
	}
	.listss li{
		height: 52px;
		border-bottom: 1px solid #e5e5e5;
		line-height: 52px;
		margin-left: 15px;
		position: relative;
	}
	.listss li span{
		float: right;
	    padding-right: 30px;
	    font-family: PingFangSC-Regular, sans-serif;
	}
	.mind{
		width:275px; 
	    height: 54px;
	    text-align: center;
	    line-height: 54px;
	    margin: 85px auto;
	    background: #fc4141;
	    color: #fff;
	    font-size: 16px;
	    border-radius: 25px;
	}
</style>