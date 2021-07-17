<template>
  <div id="button-box">
      <div class="buttonup">
          <button @click="upClick" :disabled="disableUp">》</button>
      </div>
      <div class="buttondown">
          <button @click="downClick" :disabled="disableDown">《</button>
      </div>
  </div>
</template>

<script>

export default {
  name: 'ButtonBox',
  props: {
    dataRight: {
        type: Array,
        default() {
        return [];
        }
    },
    data: {
      type: Array,
      default() {
        return [];
      },
    }
  },
  data() {
    return {
        Datasource: this.data,
        rightData: this.dataRight,
        disableDown: false,
        disableUp: false,
    }
  },
  methods: {
      upClick() {
          var selectData = this.Datasource.filter(function(item){
              return item.check == true;
          });
        // 不能成功的原因是：filter()返回的是满足条件的数组,
        // rightData也是数组（相当于把一个数组追加进另一个数组）
        // this.rightData.push(selectData);
        console.log(selectData);
        this.rightData.push(...selectData);
        console.log(this.rightData);
        // ES5
        // 合并数组（concat()函数）
        // this.rightData = this.rightData.concat(selectData);
        // ES6
        // 扩展运算符
        // this.rightData = [...this.rightData,...selectData]
        this.Datasource = this.Datasource.filter(function(item) {
            return item.check == false;
        });
        console.log(this.Datasource);
        this.$emit('changesource',this.Datasource);
        if(this.Datasource == ''){
            this.disableUp = true;
        }
      },
      downClick() {
          var targetdata = this.rightData.filter(function(item) {
              return item.check == true;
          });
          this.Datasource.push(...targetdata);
          this.rightData = this.rightData.filter(function(item) {
            return item.check == false;
          });
          this.$emit('changetarget',this.rightData);
          if(this.rightData == ''){
            this.disableDown = true;
        }
      }
  }
}
</script>

<style>
    .buttonup{
        text-align: center;
        margin-top: 80px;
    }
    .buttondown{
        text-align: center;
        margin-top: 20px;
    }
</style>