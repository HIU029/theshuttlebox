<template>
  <div id="shuttle-box">
    <div class="select-box">
      <div class="all-select">
        <label for="">
          <input type="checkbox" v-model="check" @click="ChangeAllCheck()" >
        </label>
        <div class="total">{{data.length}}项</div>
      </div>
      <ul class="select-list">
        <li v-for="(i,index) in data" :key="index">
          <label for="">
            <input type="checkbox" v-model="i.check" :disabled="i.disable" @click="LonelyClick(index)"><span>{{i.name}}</span>
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShuttleBoxLeft',
  data() {
    return {
      check: false,
    }
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      },
    }
  },
  methods: {
    ChangeAllCheck() {
      if(!this.check){
        for(let i of this.data){
          i.check = true;
        }
      }else{
        for(let i of this.data){
          i.check = false;
        }
      }
      // console.log(this.data.filter(item => item.check == true).length);
    },
    LonelyClick(index) {
      var cnt = 0;
      var qg = 0;
      // console.log(index);
      // console.log(!this.data[index].check);
      if(!this.data[index].check == false){
        this.check = false;
        // console.log(this.check);
      }
      for(let i of this.data){
        if(i.check == false){
          cnt += 1;
        }
      }
      console.log(cnt,qg);
      if(cnt == 1){
        this.check = true;
      }else{
        this.check = false;
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
  .select-box{
    width: auto;
    height: 240px;
    border: 1px solid #999;
    border-radius: 5px;
    overflow: auto;
  }
  .all-select{
    width: 180px;
    padding: 0 10px;
    height: 40px;
    border-bottom: 1px solid #999;
    line-height: 40px;
  }
  .select-list{
    width: 180px;
    padding: 10px;
  }
  .select-list li{
    padding: 5px 0;
  }
  span{
    padding: 0 10px;
  }
  .total{
    float: right;
  }
</style>