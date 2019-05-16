//栏目切换1.0 by wt
/*
eg:两个栏目切换
参数介绍 tableName:相同栏目名称 divName：相同内容名称 nowId：当前id count：总数量
        nowClass：选中时class defaultClass：默认class
tabChange('zwwb','zwwbDiv',1,2,'sel','')
tabChange('zwwb','zwwbDiv',1,2,'sel','')
*/
//栏目切换(css相同切换)
function tabChange(tableName,divName,nowId,count,nowClass,defaultClass){
	if(count > 0){
		for(var i = 1;i <= count;i++){
			if(nowId == i){
				changeDisplayByID(divName+"_"+i,true);//显示
				changeClassByID(tableName+"_"+i,nowClass);//css切换
			}else{
				changeDisplayByID(divName+"_"+i,false);//隐藏
				changeClassByID(tableName+"_"+i,defaultClass);//css切换
			}
		}
	}
}

/*
eg:两个栏目切换
参数介绍 tableName:相同栏目名称 divName：相同内容名称 nowId：当前id count：总数量
        nowClassArr：选中时class(数组中的第n个) defaultClassArr：默认class(数组中的第n个)
tabChangeArr('zwwb','zwwbDiv',1,2,['sel','sel'],['',''])
tabChangeArr('zwwb','zwwbDiv',2,2,['sel','sel'],['',''])
*/
//栏目切换(不同css切换，数组方式定义)
function tabChangeArr(tableName,divName,nowId,count,nowClassArr,defaultClassArr){
	if(count > 0){
		for(var i = 1;i <= count;i++){
			if(nowId == i){
				changeDisplayByID(divName+"_"+i,true);//显示
				changeClassByID(tableName+"_"+i,nowClassArr[i-1]);//css切换
			}else{
				changeDisplayByID(divName+"_"+i,false);//隐藏
				changeClassByID(tableName+"_"+i,defaultClassArr[i-1]);//css切换
			}
		}
	}
}

//显示隐藏 
function tabChange1(divName,nowId,count){
	if(count > 0){
		for(var i = 1;i <= count;i++){
			if(nowId == i){
				changeDisplayByID(divName+"_"+i,true);//显示
			}else{
				changeDisplayByID(divName+"_"+i,false);//隐藏
			}
		}
	}
}

//仅css切换
function tabChange2(tableName,nowId,count,nowClass,defaultClass){
	if(count > 0){
		for(var i = 1;i <= count;i++){
			if(nowId == i){
				changeClassByID(tableName+"_"+i,nowClass);//css切换
			}else{
				changeClassByID(tableName+"_"+i,defaultClass);//css切换
			}
		}
	}
}

//根据id修改显示隐藏
function changeDisplayByID(id,isShow){
	if(document.getElementById(id) != null){
		if(isShow){
			document.getElementById(id).style.display="block";//显示
		}else{
			document.getElementById(id).style.display="none";//隐藏
		}
	}
}

//根据id修改Class
function changeClassByID(id,name){
	if(document.getElementById(id) != null){
		document.getElementById(id).className=name;
	}
}