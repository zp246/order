// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import 'common/stylus/index.styl'

Vue.use(VueRouter);
Vue.use(VueResource);

// 引用模板
import index from './components/index/index.vue'
import home from './components/home/home.vue'
import order from './components/order/order.vue'
import my from './components/my/my.vue'
import setup from './components/my/setup.vue'
import myrating from './components/my/myrating.vue'
import content from './components/content/content.vue'
import orderconfirm from './components/order/orderConfirm.vue'
import ordertab from './components/order/orderTab.vue'
import orderpending from './components/order/orderPending.vue'
import orderrefund from './components/order/orderRefund.vue'
import orderreject from './components/order/orderReject.vue'
import orderdetail from './components/order/orderDetail.vue'
import selectadress from './components/order/selectAdress.vue'
import addinfo from './components/order/addInfo.vue'
import applyinvoice from './components/order/applyInvoice.vue'
import invoiceapply from './components/order/invoiceApply.vue'
import seacherorder from './components/order/seacherOrder.vue'
import commonproblem from './components/order/commonProblem.vue'
import feedback from './components/order/feedback.vue'
import integralmall from './components/integralmall/integralMall.vue'
import malldetail from './components/integralmall/mallDetail.vue'
import problemdetail from './components/order/problemDetail.vue'
import coupontab from './components/order/couponTab.vue'
import couponalready from './components/order/couponAlready.vue'
import couponnot from './components/order/couponNot.vue'
import couponinvalid from './components/order/couponInvalid.vue'
import appeal from './components/order/appeal.vue'
import expressspeed from './components/order/expressSpeed.vue'
import refundspeed from './components/order/refundSpeed.vue'
import bilinghistory from './components/order/bilingHistory.vue'
import personalinfo from './components/order/personalInfo.vue'
import travelinfo from './components/info/travelinfo.vue'
import info from './components/info/info.vue'
import collecttab from './components/mycollect/colloectTab.vue'
import sellercollect from './components/mycollect/sellerCollect.vue'
import goodcollect from './components/mycollect/goodCollect.vue'

// 引入子路由
import subrouter from './components/subrouter/subrouter.vue'

// 导入 pages 下的 Home.vue
import goods from './components/goods/goods'
import ratings from './components/ratings/ratings'
import seller from './components/seller/seller'
import reportseller from './components/seller/reportSeller'

// 定义路由配置
const routes = [
  {
    path: '/',
    component: index,
    children: [
      {path: '/',component: home},
      {path: 'home',component: home},
      {path: 'order',component: order},
      {path: 'my',component: my}
    ],
  },
  {
    path: '/order',
    component: order
  },
  {
    path: '/my',
    component: my
  },
  {
    path: '/setup',
    component: setup
  },
  {
    path: '/myrating',
    component: myrating
  },
  {
    path: '/content',
    component: content
  },
  {
    path: '/travelinfo',
    component: travelinfo
  },
  {
    path: '/info',
    component: info
  },
  {
    path: '/orderconfirm',
    component: orderconfirm
  },
  {
    path: '/orderdetail',
    component: orderdetail
  },
  {
    path: '/selectadress',
    component: selectadress
  },
  {
    path: '/addinfo',
    component: addinfo
  },
  {
    path: '/applyinvoice',
    component: applyinvoice
  },
  {
    path: '/invoiceapply',
    component: invoiceapply
  },
  {
    path: '/seacherorder',
    component: seacherorder
  },
  {
    path: '/commonproblem',
    component: commonproblem
  },
  {
    path: '/feedback',
    component: feedback
  },
  {
    path: '/problemdetail',
    component: problemdetail
  },
  {
    path: '/bilinghistory',
    component: bilinghistory
  },
  {
    path: '/appeal',
    component: appeal
  },
  {
    path: '/expressspeed',
    component: expressspeed
  },
  {
    path: '/refundspeed',
    component: refundspeed
  },
  {
    path: '/personalinfo',
    component: personalinfo
  },
  {
    path: '/collecttab',
    component: collecttab,
    children: [
      {path: '/',component: sellercollect},
      {path: 'sellercollect',component: sellercollect},
      {path: 'goodcollect',component: goodcollect}
    ],
  },
  {
    path: '/ordertab',
    component: ordertab,
    children: [
      {path: '/',component: orderpending},
      {path: 'orderpending',component: orderpending},
      {path: 'orderrefund',component: orderrefund},
      {path: 'orderreject',component: orderreject}
    ],
  },
  {
    path: '/coupontab',
    component: coupontab,
    children: [
      {path: '/',component: couponnot},
      {path: 'couponnot',component: couponnot},
      {path: 'couponalready',component: couponalready},
      {path: 'couponinvalid',component: couponinvalid}
    ],
  },
  {
    path: '/subrouter',
    component: subrouter,
    children: [
      {path: '/',component: goods},
      {path: 'goods',component: goods},
      {path: 'ratings',component: ratings},
      {path: 'seller',component: seller}
    ],
  },
  {
    path: '/reportseller',
    component: reportseller
  },
  {
    path: '/integralmall',
    component: integralmall
  },
  {
    path: '/malldetail',
    component: malldetail
  },
]

const resources = [];
// 创建路由实例
const router = new VueRouter({
  routes
})

const resource = new VueRouter({
  resources
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  resource,
  template: '<App/>',
  components: { App }
})
