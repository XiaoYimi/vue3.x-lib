# Vue3.0 手册

## 从 Vue2.x 升级到 Vue3.x

```js
// 最好所有版本都是新的。
vue create vue3-demo

// 选择配置(避免手动写初始化代码 router, vuex)
> Manually select features
◉ Babel
◉ Router
◉ Vuex
◉ CSS Pre-processors
◉ Linter / Formatter

// 进行配置
Using history mode? Y
Pick a CSS Pre-processors? node-sass
Pick Linter / Formatter config?  ESLint + Standard config
Pcik additional lint features? Lint on save
Where do you prefer placing config for Babel, PostCSS, EsLint, etc? In dedicated config files

// 进入主分支
cd vue3-demo

// 进行升级 (自动安装 vue-cli-plugin-vue-next 插件)
vue add vue-next

// 在安装 vue-cli-plugin-vue-next 插件时,会进行以下操作
// 安装 Vue 3.0 依赖
// 更新 Vue 3.0 webpack loader 配置，使其能够支持 .vue 文件构建（这点非常重要）
// 创建 Vue 3.0 的模板代码
// 自动将代码中的 Vue Router 和 Vuex 升级到 4.0 版本，如果未安装则不会升级
// 自动生成 Vue Router 和 Vuex 模板代码

```



## Vue3.x VueRouter 写法

```js
import { createRouter, createWebHashHistory } from 'vue-router'

import Test from './src/views/Test.vue'

const routes = [
    {
        path: '/test', name: 'vue3-test',
        component: Test, meta: { title: 'Vue3.x 测试' }
    }
]

let router = createRouter({
    mode: createWebHashHistory,
    routes
})

router.beforEach((from, to, next) => {
    document.title = to.meta.title;
})

export default router
```





## Vue3.x Vuex 写法

```js

```







## Vue3.0 的变化

### 元素挂载个数

Vue2.x 只能挂载一个根节点。

Vue3.X 可以挂载多个根节点。



###  实例化 Vue 实例对象

Vue2.x 通过 new Vue() 操作创建实例对象。内部 this 就是实例对象。

Vue3.x 通过 createApp() 操作创建实例对象。没有 this 存在。



### 类型推导能力

Vue2.x 无静态类型检查。

Vue3.x 有静态类型检查。



### 数据响应式

Vue2.x 通过数据劫持结合订阅者-发布者模式(Object.defineProperty())来监听数据的变化。但是监听不到对象属性的增删，数组元素和长度的变化。



Vue3.x 通过 ES2015 的 Proxy 来替代 Object.defineProperty()；不仅可以监听到对象属性的增删、数组元素和长度变化，还可以监听 Set,Map,WeakSet,WeakMap 等的监听；且实现了惰性监听(不在初始化时创建所有的 Observer，而是在需要用到的时候才监听)。



### 模板

Vue2.x 的作用域插槽会随父组件重新渲染。

Vue3.x 改成函数的形式，只影响子组件的重新渲染；从而提升性能。



## Vue3.0 写法

```js
Vue.createApp({
  components: { ... },
  data: () => ({ ... }),
  methods: { ... },
  beforeCreate() { ... },
  created() { ... },
  beforeMount() { ... },
  mounted() { ... },
  computed: { ... },
  watch: { ... },
  beforeUpdate() { ... },
  updated() { ... },
  before
}).mount('#demo')
```





## Vue 的内部项

```js
const { 
    createApp,
    ref,
    reactive,
    computed,
    watchEffect,
    onMounted,
    onUnmounted,
    toRefs
} = Vue;

// ref 会将一个基本类型值转换为代理对象(数据响应式)
// reactive 会将一个引用类型值转换为代理对象(数据响应式)

// toRefs 会将一个代理对象(数据响应式)打平,使得页面可以直接获取被打平的代理对象的键值.
```



### createApp

创建组件页面的方法，并挂载在某一元素。

```js
import { createApp } from 'vue'

createApp({
	setup() {
    	// 主程序(数据，方法)
    }
}).mount('#app');
```



### ref

对基本类型值包装成代理对象(数据响应式)。

```js
import { ref } from 'vue'

setup () {
	const state = ref(true)
	
	return {
		state
	}
}

// template 中直接使用 state 就可以获取值 true
```



### reactive

对引用类型值包装成代理对象(数据响应式)。

```
import { reactive } from 'vue'

setup () {
	const data = reactive({
		state: true
	})
	
	return {
		data
	}
}

// template 中直接使用 data.state 就可以获取值 true
```



### toRefs

将一个代理对象(数据响应式)打平,使得页面可以直接获取被打平的代理对象的键值。

```js
import { reactive, toRefs } from 'vue'

setup () {
	const data = reactive({
		state: true
	})
	
	return {
		toRefs(data)
	}
}

// template 中直接使用 state 就可以获取值 true
```





## Vue3.0 周期函数

 onBeforeMount

 onMounted

 onBeforeUpdate

 onUpdated

 onBeforeUnmount

 onUnmounted

 onActivated

 onDeactivated

 onRenderTracked

 onRenderTriggered

 onErrorCaptured



不存在 beforeCreate, created 周期函数；实际上 setup() 函数就相当于这两项周期函数。

页面有多少个响应对象(应用的插值表达式)就有 n 个执行 n 次 onRenderTracked





## 核心函数

### 组件的程序入口  ----  setup

相当于 beforeCreate 和 created 这两项生命周期函数。



setup() 函数接收 2 个参数。第一个参数 props (来自父组件的 props)，第二个参数 ctx (上下文对象,相当于 vue2.x 的 this)。



### 经过 Proxy 的包装对象  ----  reactive

接收一个普通数据对象，返回一个响应式的数据对象。相当于 vue2.x 的 data 集合。



### 将 reactive() 后的包装对象转换为 ref 形式的响应式数据  --  toRefs





## Vue3.0 插槽使用

### 匿名插槽 默认 v-slot:default



### 具名插槽

父组件在插槽替换位置必须使用 template, 并且添加属性 v-slot:slot-name.

子组件在定义插槽是必须添加属性 name="slot-name"

