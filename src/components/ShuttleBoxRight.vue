<template>
  <div id="shuttle-box-right">
    <div class="target-box">
      <div class="all-target">
        <label for="">
          <input type="checkbox" @click="ChangeAllCheck">
        </label>
        <div class="total">{{dataRight.length}}项</div>
      </div>
      <ul class="target-list">
        <li v-for="(i,index) in dataRight" :key="index">
          <label for="">
            <input type="checkbox" v-model="i.check" @click="LonelyClick(index)"><span>{{i.name}}</span>
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShuttleBoxRight',
  data() {
    return {
      check: false,
    }
  },
  props: {
    dataRight: {
      type: Array,
      default() {
        return [];
      },
    }
  },
  methods: {
    ChangeAllCheck() {
      if(!this.check){
        for(let i of this.dataRight){
          console.log(i.check);
          i.check = true;
        }
      }else{
        for(let i of this.dataRight){
          i.check = false;
          console.log(i.check);
        }
      }
      // console.log(this.data.filter(item => item.check == true).length);
    },
    LonelyClick(index) {
      var cnt = 0;
      // console.log(index);
      // console.log(!this.data[index].check);
      if(!this.dataRight[index].check == false){
        this.check = false;
        // console.log(this.check);
      }
      for(let i of this.dataRight){
        if(i.check == false){
          cnt += 1;
        }
      }
      console.log(cnt);
      if(cnt == 1){
        this.check = true;
      }
    }
  }
}
</script>


<style>
  ul li{
    list-style: none;
  }
  ul,li{
    margin: 0;
    padding: 0;
  }
  .target-box{
    width: auto;
    height: 240px;
    border: 1px solid #999;
    border-radius: 5px;
    overflow: auto;
  }
  .all-target{
    width: 180px;
    padding: 0 10px;
    height: 40px;
    border-bottom: 1px solid #999;
    line-height: 40px;
  }
  .target-list{
    width: 180px;
    padding: 10px;
  }
  .target-list li{
    padding: 5px 0;
  }
  span{
    padding: 0 10px;
  }
  .total{
    float: right;
  }
</style>