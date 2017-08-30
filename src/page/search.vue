<template>
    <div class='search_page'>
       <div class='search_head'>
          <div class="search_lookfor">
            <i class='iconfont icon-fangdajing'></i>
           <input type="search" placeholder='请输入您要搜索的内容' v-model.trim='search_value' class='search-inp'/>
          </div>
            
           <button class="btn_search" @click='search_txt'>搜索</button>
       </div>
       <div class='search_sec'>
           <h2>最近搜索<span><i class='fa fa-fw fa-trash'></i></span></h2>
           <div class='search-info'>
               <p v-if='!searchinfo'>暂无搜索记录</p>
               <ul v-else>
                  <li v-for='x in local_history'>{{x}}</li>
               </ul>
           </div>
    
            <div class='uls'>
                <h3>大家都在搜</h3>
                <p class='list'>
                   <span>面粉</span>
                   <span>牛奶</span>
                   <span>蔬菜</span>
                   <span>油米</span>
                   <span>锅巴</span>
                   <span>特产</span>
                   <span>面粉</span>
                   <span>牛奶</span>
                   <span>蔬菜</span>
                   <span>油米</span>
               </p>
            </div>
       </div>
       <my-footer></my-footer>
    </div>
 
</template>
<script>
    export default{
        data(){
            return {
                search_value:"",
                local_history:[],
                searchinfo:false
            }
        },
        created:function(){
          if(localStorage.getItem('search-history')){
              this.local_history=JSON.parse(localStorage.getItem('search-history'))
              this.searchinfo=true
          }
        },
        methods:{
           search_txt:function(){
             // console.log(222)
              if(this.search_value){
                this.local_history.push(this.search_value)
                localStorage.setItem('search-history',JSON.stringify(this.local_history))
              }

           }
        }
    }

</script>
<style lang='scss' scoped>
    .search_page{
        width: 100%;
        height: 100%;
        font-size: 12px;
        background: #fff;
        display: flex;
        -webkit-flex-direction: column;
    }
    .search_head{
            display: flex;
            justify-content:space-around;
            height: 44px;
            border-bottom: 1px solid #eee; 
        .search_lookfor{
              width: 60%;
              background: #eee;
              height: 30px;
              margin-top: 7px;
              margin-left: 15%;
              border-radius: 15px;
        }
        .search-inp{
            height: 32px;
            width: 70%;
            height: 30px;
            line-height: 30px;
            border: none;        
            box-sizing:border-box;
            background: #eee; 
            margin-left: 5px;
        }
        .btn_search{
        border: none;
        width: 15%;
        height: 30px;
        background: none;
        margin-top: 8px;
        
    }
    } 
    .search_sec{
        overflow-y:scroll;
        height: 100%;
        flex: 1;
        h2{
            height: 40px;
            line-height: 40px;
            text-align: left;
            padding-left: 10px;
            box-sizing:border-box;
           position: relative;
            span{
                position: absolute;
                right: 10px;
                top:0;
            }
        }
        .search-info{
            text-align: center;
            height: 75px;
            ul{
                display: flex;
                flex-wrap:wrap;
                li{
                     width: 20%;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    margin: 5px;
                }
            }
        }
        .uls{
            padding-left: 10px;
            padding-right: 25px;
            margin-top: 25px;
           h3{
                text-align: left;
           }
           .list{
                display: flex;
                flex-wrap:wrap;
                    span{
                    width: 20%;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    margin: 5px;
                }
           }
            
        }
    }
</style>