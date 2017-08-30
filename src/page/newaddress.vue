<template>
	<div class="newaddress">
		<header class="add-header">
			<a href="##" class="backss" @click="hh"><i class="fa fa-angle-left"></i></a>
			收货地址
			<a href="##" class="homes"><i class="fa fa-star"></i></a>
		</header>
		<div class="main">
			<input type="text" placeholder="收货人姓名">
			<input type="text" placeholder="手机号">
		
		<div class="selects">
			<div class="sel">
				<select name="" id="privience" @change="citys" v-model="provience">
					<option :value="item.name" v-for="item in list">{{item.name}}</option>
				</select>
			</div>
			<div class="sel">
				<select name="" id="city" @change="asigons" v-model="asigon">
					<option :value="i.name" v-for="i in list1">{{i.name}}</option>
				</select>
			</div>
			<div class="clear"></div>
			<div class="sel sel3">
				<select name="" id="district">
					<option :value="item.name" v-for="item in list2">{{item.sub}}</option>
				</select>
			</div>
			<div class="xiangxi">
				<input type="text" placeholder="详细地址">
			</div>
		</div>
		<p class="default">
			<label class='off'>
                <input type="checkbox" v-model='checked'/>
                <span class='sp newaddsp'></span>
                设为默认地址
            </label>
		</p>
		<p class="keep">
			保存
		</p>
		</div>
	</div>
</template>
<script>
	import axios from "axios";
	export default({
		data:function(){
			return {
				checked:false,
				list:[],
				list1:[],
				list2:[],
				provience:"",
				asigon:""
			}
		},
		created:function(){
			axios.get('./src/data/city.json').then((res)=>{
				this.list=res.data;
				//console.log(this.list)
			})
		},
		methods:{
			hh:function(){
				this.$router.go(-1)
			},
			citys:function(){
				this.list.forEach((v,i)=>{
					if(v.name==this.provience){
						this.list1=v.sub;
						// console.log(v.sub)
					}
				})
			},
			asigons:function(){
				for(let vs in this.list1){
					// console.log(this.list1[vs].sub)
					this.list1.forEach((vi,j)=>{
						if(this.asigon==vi.name){
							this.list2=this.list1[vs].sub
							console.log(this.list1[vs].sub)
						}
					})
				}
			}
		}
	})
</script>
<style lang="scss">
.newaddress{
	background: #eeeeee;
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
}
.add-header{
    border-bottom: 1px solid #ccc;
	background: #fafafb;
	width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 18px;
    position: relative;
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
.main input{
	width: 94%;
	border: none;
    line-height: 45px;
    margin:16px 3% 0 3%;
    padding-left: 10px;
    box-sizing:border-box;
}
.selects{
	margin-top: 16px;
}
.clear{
	clear: both;
}
.sel:nth-child(1){
    float: left;
    width: 42%;
    height: 45px;
    overflow: hidden;
    margin-left: 10px;
}
.sel:nth-child(2){
    margin-left: 10%;
    float: left;
    width: 42%;
    height: 45px;
    overflow: hidden;
}

.sel select{
	background: #fff;
    border: none;
    padding-left: 15px;
    width: 100%;
    height: 45px;
}

.sel3{
    width: 94%;
    height: 45px;
    overflow: hidden;
	margin: 16px auto;
	select{
		width: 100%;
	}
}

.xiangxi{
	width: 94%;
    height: 45px;
    text-align: left;
	margin: 0 auto;
	margin-bottom: 16px;
}
.xiangxi input{
	border: none;
    width: 100%;
    line-height: 45px;
    padding-left: 10px;
    box-sizing:border-box;
	margin: 0;
}
.default{
	width: 94%;
	margin-left: 3%;
    font-size: 14px;
    color: #666666;
    box-sizing:border-box;
}
.keep{
	width: 230px;
    height: 50px;
    margin: 25px auto;
    background: #fc4141;
    text-align: center;
    line-height: 50px;
    color: #fff;
    border-radius: 25px;
    font-size: 18px;
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
.newaddsp{
	float: left;
}

</style>