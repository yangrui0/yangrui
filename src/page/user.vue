<template>
    <div class='user'>
        <div class="user-head">
            <span class='user-left'><i class='fa fa-fw fa-cog'></i></span>
            <h3>我的717商城</h3>
            <span class='user-right'><img src="../assets/images/img_03.png" alt=""></span>
        </div>
        <div class='user-sec'>
            <dl class='user-dl' @click="tomyaddress">
                <dt><img src="../assets/images/dlsimg_03.png" alt=""></dt>
                <dd>路飞</dd>
            </dl>
            <dl class='user-dl2'  @click="tomyshop">
                <dt><i class="iconfont icon-shop"></i></dt>
                <dd>
                    <p>我的店铺</p>
                </dd>
                <i class='iconfont icon-arrowright'></i>
            </dl>
            <div class='list'>
                <dl>
                    <dt><i class='iconfont icon-daifu'></i></dt>
                    <dd>待付款</dd>
                </dl>
                 <dl>
                    <dt><i class='iconfont icon-daifahuo'></i></dt>
                    <dd>待发货</dd>
                </dl>
                 <dl>
                    <dt><i class='iconfont icon-daishouhuo'></i></dt>
                    <dd>待收货</dd>
                </dl>
                 <dl>
                    <dt><i class='iconfont icon-shouhou1'></i></dt>
                    <dd>售后</dd>
                </dl>
                <dl>
                    <dt><i class='iconfont icon-dingdan'></i></dt>
                    <dd>我的订单</dd>
                </dl>
            </div>
            <div class='list2'>
                <ul>
                    <li><span class='list-right'><i class='iconfont icon-arrowright'></i></span><span class='list-left'><i class='iconfont icon-jianzhu'></i> </span>我的社区</li>
                    <li><span class='list-right'><i class='iconfont icon-arrowright'></i></span><span class='list-left'><i class='iconfont icon-qianbao'></i> </span>账户余额</li>
                    <li @click="tomyadd"><span class='list-right'><i class='iconfont icon-arrowright'></i></span><span class='list-left'><i class='iconfont icon-dizhi'></i> </span>地址管理</li>  
                </ul>
            </div>
        </div>
        <my-footer></my-footer>
    </div> 
</template>
<script>
    export default {
        data(){
            return {
               
            }
        },
        methods:{
			tomyshop:function(){
				this.isShow1=true
			},
			close:function(){
				this.isShow1=false
			},
			tomyaddress:function(){
				this.$router.push({path:'/setting'})
			},
			tomyadd:function(){
				this.$router.push({path:'/address'})
			}
		}
    }
</script>
<style lang='scss' scoped>
    .user{
        height: 100%;
        display: flex;
        flex-direction:column;
        font-size: 12px;
        background:#fff;
        margin-top: 0;
        .user-head{
            height: 44px;
            line-height: 44px;
            text-align: center;
            position: relative;
            display: block;
            .user-left{
                position: absolute;
                left: 10px;
                top:0px;
            }
            h3{
                text-align: center;

            }
            .user-right{
                position: absolute;
                right: 10px;
                top: 0;
                img{
                   width: 15px;
                   height: 15px;
                }
            }
        }
    }
    .user-sec{
        flex:1;
        overflow-y:scroll;
        padding-top: 0;
        .user-dl{
            height: 93px;
            background:#fc7441;
            text-align: center;
            dt{
                width: 63px;
                height: 63px;
                margin: 10px auto;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            dd{
                margin-top: 10px;
                color: #fff;
            }
        }
        .user-dl2{
            height: 80px;
            border-bottom: 1px solid #eee;
            display: flex;
            padding:  22px 12px;
            box-sizing:border-box;   
            position: relative;
            color: red;  
            dt{
                width: 43px;
                height: 43px;
                i{
                    font-size: 38px;
                }
            }
            dd{
                line-height: 43px;
                padding-left: 10px;
                font-size: 16px;
                text-align: left;
            }
            >i{
                position: absolute;
                right:0;
                top:35px;           
            }
        }
        .list{
             padding: 15px;
            border-bottom: 1px solid #eee;
            display: flex;
            dl{
                flex:1;
               dt i{
                   font-size: 24px;
               }
            }
            :nth-child(5){
                border-left: 1px solid #eee;
            }

        }
        .list2{
            ul{
                li{
                    border-bottom: 1px solid #eee;
                    height: 52px;
                    line-height: 52px;
                    text-align: left;
                    padding-left: 20px;
                    clear: both;
                    
                    .list-right{
                        float: right;
                    }
                    
                }
            }
        }
    }
</style>