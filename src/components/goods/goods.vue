<template>
  <div class="goods" >
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li v-for="(item,index) in goods" class="menu-item" :class="{'menu-item-selected':currentIndex===index}" @click="selectMenu(index,$event)">
          <span class="text border-1px"><span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <li v-for="item in goods" class="food-list food-list-hook">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li @click="selectFood(food,$event)" v-for="food in item.foods" class="food-item border-1px">
              <div class="icon">
                <img width="57" height="57" :src="food.icon"/>
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span>q月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">${{food.price}}</span>
                  <span class="old" v-show="food.oldPrice">${{food.oldPrice}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <cartcontrol :food="food"></cartcontrol>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shopcart :selectFoods="selectFoods" :deliveryPrice="seller.deliveryPrice" :minPrice = "seller.minPrice"></shopcart>
    <food :food="selectedFood" ref="myFood"></food>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import shopcart from 'components/shopcart/shopcart.vue'
  import cartcontrol from 'components/cartcontrol/cartcontrol.vue'
  import food from '../../components/food/food.vue'

  const ERR_OK = 0;

  export default {
    props: {
        seller: Object
    },
    data() {
      return {
        goods: [],
        listHeight: [],
        scrollY: 0,
        selectedFood: {}
      }
    },
    computed: {
      currentIndex() {
          for(let i = 0; i< this.listHeight.length; i++) {
              let height1 = this.listHeight[i];
              let height2 = this.listHeight[i+1];
              if(!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
                  return i;
              }
          }
          return 0;
      },
      selectFoods() {
        let foods = [];
        this.goods.forEach((good) => {
          good.foods.forEach((food) => {
            if (food.count) {
              foods.push(food)
            }
          });
        });
        return foods;
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];

      this.$http.get('/api/goods').then((res) => {
        res = res.body;
        if(res.errno === ERR_OK) {
          this.goods = res.data;
          this.$nextTick(() => {
            this._initScroll(); // 初始化scroll
            this._calculateHeight();
          })
        }
      })
    },
    methods: {
      selectFood(food,event) {
        if(!event._constructed) {
           return;
        }
        this.selectedFood = food;
        this.$refs.myFood.show();
      },
      selectMenu(index, event) {
        if(!event._constructed) {
            return;
        }
        let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
        let el = foodList[index];
        this.foodsScroll.scrollToElement(el, 300);
        console.log(index);
      },
      _initScroll() {
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {
          click: true
        });
        this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
          click: true,
          probeType: 3 //  探侦，实时监听位置
        });

        this.foodsScroll.on('scroll',(pos) => {
            this.scrollY = Math.abs(Math.round(pos.y));
        })
      },
      _calculateHeight() {
        let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
        let height = 0;
        this.listHeight.push(height);
        for(let i = 0; i < foodList.length; i++) {
            let item = foodList[i];
            height += item.clientHeight;
            this.listHeight.push(height);
        }
      }
    },
    components: {
        shopcart,
        cartcontrol,
        food
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .goods
    display: flex
    position: absolute
    top: 13rem
    bottom: 46px
    width: 100%
    overflow: hidden
    background: #fff;
    .menu-wrapper
      flex: 0 0 5.5rem
      width: 5.5rem
      transition: all .3
      background: #f7f7f7
      .menu-item-selected
        background: #fff;
        font-weight 700
        margin-top -1px
        border-top: 1px solid #f0f0f0
        .text
          border-left: 2px solid #6ab7ff
      .menu-item,.menu-item-selected
        position relative
        display table
        height 3.8rem
        line-height 1rem
        width 5.5rem
        border-bottom: 1px solid #f0f0f0
        &:last-child:after
          content none
      .text
        display table-cell
        padding: 0 .8rem;
        vertical-align middle
        font-size .8rem
        font-weight 200
        white-space normal
        line-height 1rem
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
          &.decrease
            bg-image('decrease_3')
          &.discount
            bg-image('discount_3')
          &.guarantee
            bg-image('guarantee_3')
          &.invoice
            bg-image('invoice_3')
          &.special
            bg-image('special_3')
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          font-size: 12px
          border-1px(rgba(7,17,27,0.2))
    .foods-wrapper
      flex: 1
      .title
        padding-left: 1.2rem
        height: 2rem
        line-height: 2rem
        font-size: .8rem
        color: rgb(147,153,159)
        background: #f7f7f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px;
        border-1px(rgba(7,17,27,0.2))
        &:last-child
          border-none(rgba(7,17,27,0.2))
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7,17,27)
          .desc,.extra
            line-height: 10px
            font-size: 10px
            color: rgb(147,153,159)
          .desc
            margin-bottom: 8px;
            line-height: 14px;
          .extra
            &.count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240,20,20)
            .old
              text-decoration:line-through
              font-size: 10px
              color: rgb(240,20,20)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
</style>
