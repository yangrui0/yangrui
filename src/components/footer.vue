<template>
	<footer>
      <dl>
        <dt><router-link to="/index"><i class="iconfont icon-shouye"></i></router-link></dt>
        <dd><router-link to="/index">首页</router-link></dd>
      </dl>
      <dl>
        <dt><router-link to="/classify"><i class="iconfont icon-all"></i></router-link></dt>
        <dd><router-link to="/classify">分类</router-link></dd>
      </dl>
      <dl>
        <dt><router-link to="/contact"><i class="iconfont icon-shejiao"></i></router-link></dt>
        <dd><router-link to="/contact">社交</router-link></dd>
      </dl>
      <dl>
        <dt>
        	<router-link to="/ShoppingCart"><i class="iconfont icon-cart"></i></router-link>
        	
        </dt>
        <dd><router-link to="/ShoppingCart">购物车</router-link></dd>
        <span class="num">{{n}}</span>
      </dl>
      <dl>
        <dt><router-link to="/information"><i class="iconfont icon-wode-copy"></i></router-link></dt>
        <dd><router-link to="/information">我的</router-link></dd>
      </dl>
    </footer>
</template>

<script>
	export default {
		data(){
			return {

			}
		},
    computed:{
      n:function(){
        return this.$store.state.count;
      }
    }

	}
</script>

<style lang="scss">
	footer {
      overflow: hidden;
      width: 100%;
      height: 50px;
      display: flex;
      text-align: center;
      background: #fff;
      dl {
         flex: 1;
         padding: 5px 0;
         position: relative;
       
            
            .num{
               position: absolute;
               top: 3px;
               right: 15px;
               display: block;
               width: 15px;
               height: 15px;
               border-radius: 50%;
               background: #fc4141;
               color: #fff;
               text-align: center;
               line-height: 15px;
            }
         
      }

   }
</style>
