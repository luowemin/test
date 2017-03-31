require('../../css/productManager.css');
var Vue = require('vue');
var productEdit = {
	init:function(){
		this.initView();
	},
	initView:function(){
		var me = this;
		var styleObj = "";
		var list = this.get38Data();
		me.view = new Vue({
			el:'#app',
			data:{
				bgColor:"",
				list:list,
				curEditItem:null,
				curIndex:-1,
				baseId:list.length+1,
				showEdit:false,
				showImg:false,
				styleIntro:"外边距(margin:1px 1px 1px 1px;),内边距(padding:1px 1px 1px 1px;)",
				pStyle:"",
				cStyle:"",
				cImg:"",
				cLink:"",
				word:""
			},
			methods:{
				addType:function(type,items){
					var id = this.baseId++;
					var obj = {type:type,id:id,styleObj:styleObj};
					if(items){
						obj.items = [];
						for(var i=0;i<items;i++){
							obj.items.push({
								imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/alt.jpg?imageView2/1/w/300/h/150",
								link:"",
								styleObj:styleObj
							});
						}
					}else{
						obj.imgUrl = 'http://7xv1io.com1.z0.glb.clouddn.com/alt.jpg?imageView2/1/w/300/h/150';
						obj.link = "";
					}
					this.list.push(obj);
				},
				delType:function(item){
					item.show = false;
					var list = [];
					var source = this.list;
					for(var i=0;i<source.length;i++){
						if(source[i].id !== item.id){
							list.push(source[i]);
						}
					}
					this.list = list;
				},
				goPage:function(item,index){
					this.curIndex = !isNaN(index)?index:-1;
					this.curEditItem = item;
					this.showEdit = true;
					if(this.curEditItem){
						this.pStyle = this.curEditItem.styleObj;
						if(this.curIndex !== -1){
							var items = this.curEditItem.items[index];
							this.cStyle = items.styleObj;
							this.cImg = items.imgUrl;
							this.cLink = items.link;
						}else{
							this.cStyle = this.curEditItem.styleObj;
							this.cImg = this.curEditItem.imgUrl;
							this.cLink = this.curEditItem.link;
						}
					}
				},
				confirmEdit:function(type){
					if(type === 'p'){
						this.curEditItem.styleObj = this.pStyle;
					}else{
						var index = this.curIndex;
						var item = this.curEditItem;
						if(index !==-1){
							item = this.curEditItem.items[index];
						}
						item.imgUrl = this.cImg;
						item.link = this.cLink;
						item.styleObj = this.cStyle;
					}
				},
				databb:function(){
					var data = JSON.stringify(this.list);
					console.log(data)
				}
			}
		});
	},
	getData:function(){
		var list = [];
		var gap = 2;
		list.push({
			id:1,
			type:0,
			imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index_header.jpg",
		});
		list.push({
			id:2,
			type:4,
			imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index_cj_banner_v2.jpg",
		});
		list.push({
			id:3,
			type:5,
		});
		list.push({
			id:4,
			type:8
		});
		list.push({
			id:5,
			type:0,
			imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_cj_zhutui.jpg",
			link:8
		});
		var obj = "margin:3px 10px;";
		list.push({
			id:6,
			type:0,
			imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_title_cjtj.png",
			styleObj:obj
		});
		list.push({
			id:7,
			type:0,
			imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index_cjtj1.png",
			link:78,
			styleObj:obj
		});
		list.push({
			id:8,
			type:0,
			imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index_cjtj2_v2.png",
			link:52,
			styleObj:obj
		});
		list.push({
			id:9,
			type:0,
			imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index_cjtj3.png",
			link:36,
			styleObj:obj
		});
		list.push({
			id:10,
			type:0,
			imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index_cjtj4.png",
			link:70,
			styleObj:obj
		});
		list.push({
			id:11,
			type:0,
			imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index_cjtj5.png",
			link:68,
			styleObj:obj
		});
		list.push({
			id:11,
			type:0,
			imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index_cjtj6.png",
			link:112,
			styleObj:obj
		});
		list.push({
			id:12,
			type:6,
			isType:true,
			styleObj:"margin:0px 10px;background: #F0BB50;border-radius: 6px;padding: 10px;",
			items:[
				{
					link:"productList.html?type=18&_campaign=shouye",
					imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_class_1_v4.png",
				},
				{
					link:"productList.html?type=16&_campaign=shouye",
					imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_class_2_v4.png",
				},
				{
					link:"productList.html?type=20&_campaign=shouye",
					imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_class_3_v4.png",
				},
				{
					link:"productList.html?type=14&_campaign=shouye",
					imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_class_4_v4.png",
				}
			]
		});
		list.push({
			id:13,
			type:7,
			imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index_4.png",
			text:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_title21.png",
		});
		list.push({
			id:14,
			type:2,
			styleObj:obj,
			items:[
    			{
    				link:"66",
    				imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index_10_v2.png",
    				styleObj:"background:white;border-radius:6px;margin-bottom:"+gap*2+"px;",
    			},
    			{
    				link:"54",
    				imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index_11_v2.png",
    				styleObj:"background:white;border-radius:6px;margin-right:"+gap+"px;",
    			},
    			{
    				link:"56",
    				imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index_12_v2.png",
    				styleObj:"background:white;border-radius:6px;margin-left:"+gap+"px;",
    			}
			]
		});
		list.push({
			id:15,
			type:7,
			imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index_4.png",
			text:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_title41.png",
		});
		list.push({
			id:16,
			type:2,
			styleObj:obj,
			items:[
    			{
    				link:"144",
    				imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index_7_v8.png",
    				styleObj:"background:white;border-radius:6px;margin-bottom:"+gap*2+"px;",
    			},
    			{
    				link:"42",
    				imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index_18_v2.png",
    				styleObj:"background:white;border-radius:6px;margin-right:"+gap+"px;",
    			},
    			{
    				link:"64",
    				imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index_19_v2.png",
    				styleObj:"background:white;border-radius:6px;margin-left:"+gap+"px;",
    			}
			]
		});
		list.push({
			id:17,
			type:7,
			imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index_4.png",
			text:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_title51.png",
		});
		list.push({
			id:18,
			type:2,
			styleObj:obj,
			items:[
    			{
    				link:"62",
    				imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index_20.png",
    				styleObj:"background:white;border-radius:6px;margin-bottom:"+gap*2+"px;",
    			},
    			{
    				link:"46",
    				imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index_21_v7.png",
    				styleObj:"background:white;border-radius:6px;margin-right:"+gap+"px;",
    			},
    			{
    				link:"60",
    				imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index_22_v2.png",
    				styleObj:"background:white;border-radius:6px;margin-left:"+gap+"px;",
    			}
			]
		});
		list.push({
			id:19,
			type:7,
			imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index_4.png",
			text:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_title31.png",
		});
		list.push({
			id:20,
			type:3,
			styleObj:obj,
			items:[
    			{
    				link:"24",
    				imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index_13_v2.png",
    				styleObj:"background:white;border-radius:6px;margin:0 "+gap+"px "+gap+"px 0;",
    			},
    			{
    				link:"26",
    				imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index_14_v2.png",
    				styleObj:"background:white;border-radius:6px;margin:0 0 "+gap+"px "+gap+"px;"
    			},
    			{
    				link:"28",
    				imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index_15_v2.png",
    				styleObj:"background:white;border-radius:6px;margin:"+gap+"px "+gap+"px 0 ;"
    			},
    			{
    				link:"22",
    				imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index_16_v2.png",
    				styleObj:"background:white;border-radius:6px;margin:"+gap+"px 0 0 "+gap+"px;"
    			}
			]
		});
		list.push({
			id:21,
			type:7,
			imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index_4.png",
			text:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_title61.png",
		});
		list.push({
			id:22,
			type:2,
			styleObj:obj,
			items:[
    			{
    				link:"32",
    				imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index_23_v2.png",
    				styleObj:"background:white;border-radius:6px;margin-bottom:"+gap*2+"px"
    			},
    			{
    				link:"38",
    				imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index_24_v2.png",
    				styleObj:"background:white;border-radius:6px;margin-right:"+gap+"px"
    			},
    			{
    				link:"52",
    				imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index_25_v2.png",
    				styleObj:"background:white;border-radius:6px;margin-left:"+gap+"px"
    			}
			]
		});
		list.push({
			id:23,
			type:0,
			imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index_26.png",
		});
		return list;
	},
	get38Data:function(){
		var list = [];
		list.push({
			type:0,
			imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index_header.jpg"
		});
		list.push({
			type:0,
			imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index_banner38_v2.jpg"
		});
		list.push({
			type:0,
			imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index38_1.jpg"
		});
		list.push({
			type:0,
			imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index38_2.jpg"
		});
		list.push({
			type:0,
			imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index38_3.jpg"
		});
		list.push({
			type:0,
			imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index38_4.jpg"
		});
		list.push({
			type:0,
			imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index38_5.jpg"
		});
		list.push({
			type:0,
			imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index38_6.jpg"
		});
		list.push({
			type:0,
			imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index38_7.jpg"
		});
		list.push({
			type:0,
			imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index38_8.jpg"
		});
		list.push({
			type:0,
			imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index38_9.jpg"
		});
		list.push({
			type:0,
			imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index38_10.jpg"
		});
		list.push({
			type:0,
			imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index38_11.jpg"
		});list.push({
			type:1,
			items:[
				{
					imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index38_12_01.jpg"
				},
				{
					imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index38_12_02.jpg"
				}
			]
		});
		list.push({
			type:1,
			items:[
				{
					imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index38_13_01.jpg"
				},
				{
					imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index38_13_02.jpg"
				}
			]
		});
		list.push({
			type:0,
			imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index38_14.jpg"
		});
		list.push({
			type:0,
			imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index38_15.jpg"
		});
		list.push({
			type:0,
			imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index38_16.jpg"
		});
		list.push({
			type:0,
			imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index38_17.jpg"
		});
		list.push({
			type:1,
			items:[
				{
					imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index38_18_01.jpg"
				},
				{
					imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index38_18_02.jpg"
				}
			]
		});
		list.push({
			type:0,
			imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index38_19.jpg"
		});
		list.push({
			type:0,
			imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index38_20.jpg"
		});
		list.push({
			type:0,
			imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index38_21.jpg"
		});
		list.push({
			type:0,
			imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index38_22.jpg"
		});
		list.push({
			type:0,
			imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index38_23.jpg"
		});
		list.push({
			type:0,
			imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index38_24.jpg"
		});
		list.push({
			type:1,
			items:[
				{
					imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index38_25_01.jpg"
				},
				{
					imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index38_25_02.jpg"
				}
			]
		});
		list.push({
			type:1,
			items:[
				{
					imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index38_26_01.jpg"
				},
				{
					imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index38_26_02.jpg"
				}
			]
		});
		list.push({
			type:0,
			imgUrl:"http://7xv1io.com1.z0.glb.clouddn.com/product/image/pro_index38_27.jpg"
		});
		return list;
	}
}
productEdit.init();