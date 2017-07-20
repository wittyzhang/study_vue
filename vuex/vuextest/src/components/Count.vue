<template>
  <div>
      <h2>{{msg}}</h2><hr/>
      <h3>{{ $store.state.count}}--{{count}}</h3>
      <p>
          <button @click="add(10)">+</button>
          <button @click="reduce">-</button>
      </p>
  </div>
</template>

<script>
import store from '@/vuex/store';
import { mapState, mapMutations } from 'vuex';
export default {
  data () {
      return {
          msg:'Hello Vuex'
      }
  },
//   computed:{ //第一种方法 计算属性  访问状态对象
//     count() {
//         return this.$store.state.count;
//     }
//   },
    // computed: mapState({ // 利用mapstate
    //     count: state => state.count
    // }),
    computed: mapState(['count']), //利用数组形式  常用
    methods: mapMutations(['add','reduce']), //利用模板获取mutations方法
  store
}
</script>

