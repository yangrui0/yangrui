export default {
	state:{
		goods:{},
		count:0
	},
	mutations:{
		addShoppingList:function(state,data){
			let name="goods"+data.goods_id;
			if(state.goods[name]){
				state.goods[name].push(data);
			}else{
				state.goods[name]=[];
				state.goods[name].push(data);
			}
			state.count++;
		},
		sub:function(state,key){
			if(state.goods[key].length==1) return;
			state.goods[key].pop();
			state.count--;
		},
		add:function(state,key){
			state.goods[key].push(state.goods[key][0]);
			state.count++;
		}
	}
}