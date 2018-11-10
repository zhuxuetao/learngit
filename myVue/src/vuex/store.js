/*
* @Author: 祝雪涛
* @Date:   2018-11-10 13:52:13
* @Last Modified by:   祝雪涛
* @Last Modified time: 2018-11-10 14:19:24
*/
import Vue from 'vue'
import Vuex from 'vuex'



//告诉vue “使用” vuex


Vue.use(Vuex);

//创建一个对象保存应用启动时的初始状态


const state = {
  //TOO: 放置初始状态值
}


//创建一个对存储一系列我们接下来要写的mytation
const mytations = {
  //ToDo：放置我们的状态变更函数
}

//整合初始状态和变更函数,我们就得到了我们所需要的store
//致此，这个store就可以连接到我们的应用中

export default new Vuex.Store({
  state,
  mytations
})

