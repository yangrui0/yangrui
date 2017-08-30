<template>
	<div class="addressPage">
		<header class="add-header">
			<a href="##" class="backss" @click="hh"><i class="fa fa-angle-left"></i></a>
			收货地址
			<a href="##" class="homes"><i class="fa fa-star"></i></a>
		</header>
		<section>
			<div class="adds">
				<div class="every">
					<div class="top">
						<p class="user">
							<span class="name">锐锐锐锐锐锐</span>
							<span class="phone">18811112345</span>
						</p>
						<p class="content">
							北京海淀上地七街八维
						</p>
					</div>
					<div class="bot">
						<span class="delete"><i class="fa fa-star"></i> 删除</span>
						<span class="editAds"><i class="fa fa-edit"></i> 编辑</span>
						<label class='off'>
			                <input type="checkbox"/>
			                <span class='sp addsp'></span>
			                
			            </label>
						<span>设为默认地址</span>
			           
			            
					</div>
				</div>
			</div>
			<p class="ps" @click="addnew">+新增收货地址</p>
		</section>
		
	</div>
</template>
<script>
	export default({
		methods:{
			hh:function(){
				this.$router.go(-1)
			},
			addnew:function(){
				this.$router.push({path:'/newaddress'})
			}
			
		}
	})
</script>
<style>
.addressPage{
	  position: absolute;
	  left: 0;
	  top: 0;
	  right: 0;
	  bottom: 0;
	  display: flex;
	  flex-direction:column;
}
section{
	background: #eeeeee;
	flex:1;
}
.top{
	overflow: hidden;
    text-align: left;
    border-bottom: 1px solid #ccc;
    padding-left: 15px;
}
.add-header{
    border-bottom: 1px solid #ccc;
	background: #fff;
	width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 18px;
    position: relative;
	display: block;
}
.backss{
	position: absolute;
	left: 10px;
}
.homes{
	position: absolute;
	right: 10px;
}
.homes i{
	color: #666;
}
.backss i{
	color: #666;
}
.ps{
	font-family: PingFangSC-Regular, sans-serif;
    background: #fc4141;
    width: 233px;
    height: 49px;
    text-align: center;
    line-height: 50px;
    border-radius: 24px;
    margin-top: 40px;
    margin-left: 71px;
    color: #fff;
    font-size: 16px;
}
.off input{
    display: none;
}
.off input:checked + span{
    background: #fb4141;
    border: 1px solid #fb4141;
}
.off input:checked + span::after{
    content: "";
    display: block;
    width: 12px;
    height: 6px;
    border-left: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: translateX(2px) translateY(2px) rotate(-45deg);  
}
.sp{
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 100%;
    border: 1px solid #ccc;
    flex-shrink: 0;
    margin-right: 5px; 
}
.addsp{
	position: relative;
	top: 3px;
}
.adds{
	background: #fff;
}
.user{
	font-size: 16px;
    height: 42px;
    margin-top: 10px;
}
.content{
	height: 38px;
}
.bot{
	height: 49px;
	line-height: 49px;
	text-align: left;
	font-size: 14px;
	padding-left: 10px;
}

.delete,.editAds{
	float: right;
	margin-right: 10px;
}

</style>