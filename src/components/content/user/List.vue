<!--  -->
<template>
<div class='user'>
<div class="list">
  <el-table
      :data="tableData" :stripe=true :border=true
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
       <el-table-column
        label="操作">
        <template slot-scope="scope">
        <el-button size='mini' @click="detail(scope.$index, scope.row)">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
</div>
<div class="detail">
  <el-dialog title="详情" :visible.sync="dialogFormVisible">
    <detail :form2 = "form2" :aka="message"  ></detail>
  </el-dialog>
</div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Detail from './Detail'

export default {
//import引入的组件需要注入到对象中才能使用


name: 'User',
components: {Detail},
data() {
//这里存放数据
return {

  tableData: [{
            date: '2016-05-02',
            name: '王小虎9',
            address: '上海市普陀区金沙江路 1518 弄',
            id: 9
          }, {
            date: '2016-05-04',
            name: '王小虎2',
            address: '上海市普陀区金沙江路 1517 弄',
            id: 2
          }, {
            date: '2016-05-01',
            name: '王小虎3',
            address: '上海市普陀区金沙江路 1519 弄',
            id: 3

          }, {
            date: '2016-05-03',
            name: '王小虎4',
            address: '上海市普陀区金沙江路 1516 弄',
            id: 4
          }],
          dialogFormVisible: false,
          form2: {},
          message: 'i am your father'

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

  detail(index,row){
    console.log('row: ', row);
    console.log('index: ', index);
    this.dialogFormVisible = true;
    this.form2 = {'name':row.name}
    console.log('this.form2: ', this.form2);


  }

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style>

</style>