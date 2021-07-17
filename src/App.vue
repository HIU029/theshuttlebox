<template>
  <div id="app">
    <div class="shuttle-box-left"><shuttle-box-left :data="sourceData"></shuttle-box-left></div>
    <div class="button-box"><button-box :data="sourceData" :dataRight="targetData" @changesource="changesource" @changetarget="changetarget"></button-box></div>
    <div class="shuttle-box-right"><shuttle-box-right :dataRight="targetData"></shuttle-box-right></div>
  </div>
</template>

<script>
import ShuttleBoxLeft from './components/ShuttleBoxLeft.vue'
import ShuttleBoxRight from './components/ShuttleBoxRight.vue'
import ButtonBox from './components/ButtonBox.vue'

export default {
  name: 'App',
  components: {
    ShuttleBoxLeft,
    ShuttleBoxRight,
    ButtonBox,
  },
  data() {
    return {
      sourceData: [
        {name: 'content1',check: false,disable: false},
        {name: 'content2',check: false,disable: false},
        {name: 'content3',check: false,disable: false},
        {name: 'content4',check: false,disable: false},
        {name: 'content5',check: false,disable: false},
        {name: 'content6',check: false,disable: false},
        {name: 'content7',check: false,disable: false},
        {name: 'content8',check: false,disable: false},
        {name: 'content9',check: false,disable: false},
        {name: 'content10',check: false,disable: false},
        {name: 'content11',check: false,disable: false},
        {name: 'content12',check: false,disable: false},
      ],
      targetData: [],
    }
  },
  methods: {
    changesource(Datasource){
      this.sourceData = Datasource;
    },
    changetarget(rightData){
      this.targetData = rightData;
    }
  }
}
</script>

<style>
  .shuttle-box-left,.button-box,.shuttle-box-right{
    float: left;
  }
  .shuttle-box-right,.button-box{
    margin-left: 60px;
  }
</style>
