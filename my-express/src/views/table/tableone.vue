<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="2">
                <el-button type="info" @click="addinfo" >添加</el-button>
            </el-col>
            <el-col :span="16">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="姓名">
                        <el-input v-model="formInline.user" placeholder="姓名"></el-input>
                    </el-form-item>
                    <el-form-item label="邮编">
                        <el-input v-model="formInline.region" placeholder="邮编"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="getlist">查询</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        
        <el-table
            :data="tableData"
            :span-method="objectSpanMethod" border
            style="width: 100%">
            <el-table-column
            fixed
            prop="date"
            label="日期">
            </el-table-column>
            <el-table-column
            prop="name"
            label="姓名"
            width="120">
            </el-table-column>
            <el-table-column
            prop="province"
            label="省份"
            width="120">
            </el-table-column>
            <el-table-column
            prop="city"
            label="市区"
            width="120">
            </el-table-column>
            <el-table-column
            prop="address"
            label="地址">
            </el-table-column>
            <el-table-column
            prop="zip"
            label="邮编"
            width="120">
            </el-table-column>
            <el-table-column
            fixed="right"
            label="操作">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button @click="handlechange(scope.row)" type="text" size="small">编辑</el-button>
                <el-button @click="delinfo(scope.row)" type="text" size="small">删除</el-button>
            </template>
            </el-table-column>
        </el-table>

        <!-- 添加&修改 -->
        <el-dialog
        title="编辑"
        :visible.sync="dialogVisible"
        width="50%">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="日期">
                <el-date-picker
                v-model="form.date"
                type="date"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
                >
                </el-date-picker>
            </el-form-item>
            <el-form-item label="姓名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="省份">
                <el-input v-model="form.province"></el-input>
            </el-form-item>
            <el-form-item label="市区">
                <el-input v-model="form.city"></el-input>
            </el-form-item>
            <el-form-item label="地址">
                <el-input v-model="form.address"></el-input>
            </el-form-item>
            <el-form-item label="邮编">
                <el-input v-model="form.zip"></el-input>
            </el-form-item>
        </el-form>

        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="hanldlesub">确 定</el-button>
        </span>
        </el-dialog>
        
    </div>
  
</template>

<script>
import api from '@/api/login'
  export default {
    created() {
    	
    },
    methods: {
      setdates(arr) {
          var obj = {},
              k, arr1 = [];
          for(var i = 0, len = arr.length; i < len; i++) {
              k = arr[i].name;
              if(obj[k])
                  obj[k]++;
              else
                  obj[k] = 1;
          }
          //保存结果{el-'元素'，count-出现次数}
          for(var o in obj) {
          		if(obj[o]===1){
              	this.arr1.push(0)
              }else{
                for(let i=0;i<obj[o];i++){
                  if(i===0){
                    this.arr1.push(obj[o])
                  }else{
                    this.arr1.push(1)
                  }
                }
              }
              
          }
      },
      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 1) {
          if ( this.arr1[rowIndex] > 1) {
            return {
              rowspan: this.arr1[rowIndex],
              colspan: 1
            };
          }else if(this.arr1[rowIndex] == 0){
          	return {
              rowspan: 1,
              colspan: 1
            };
          }else{
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      },
      handleClick(row) {
        console.log(row);
      },
      onSubmit() {
        console.log('submit!');
      },
      addinfo(){
          this.form={
            id:null,
            date:'',
            name: '',
            province: '',
            city: '',
            address: '',
            zip: ""
        }
          this.dialogVisible=true;
      },
      hanldlesub(){
          let _this=this;
          if(this.form.id){
            api.tableup(this.form).then(function (response) {
                _this.$message({
                    showClose: true,
                    message: response.data
                });
                _this.dialogVisible = false;
                _this.getlist()
            }).catch(function (error) {
                // console.log(error);
            });  
          }else{
            api.tableadd(this.form).then(function (response) {
                _this.$message({
                    showClose: true,
                    message: response.data
                });
                _this.dialogVisible = false;
                _this.getlist()
            }).catch(function (error) {
                // console.log(error);
            });
          }
          
      },
      getlist(){
          let _this=this;
          api.gettable(this.formInline).then(function (res) {
              if(res.data.meta.code == '200'){
                  _this.tableData=res.data.data;
                  _this.setdates(_this.tableData)
              }
           }).catch(function (error) {
                // console.log(error);
           });
      },
      handlechange(row){
        this.form={
            id:row.id,
            date:row.date,
            name:row.name,
            province:row.province,
            city:row.city,
            address:row.address,
            zip:row.zip
        }
          this.dialogVisible=true;
      },
      delinfo(row){
          let _this=this;
          api.deltable({rows:row.id}).then(function (response) {
              
               _this.getlist()
          }).catch(function (error) {
                // console.log(error);
          });
      }
    },
    created() {
        this.getlist()
    },
    mounted() {
    },
    data() {
      return {
        dialogVisible:false,
        formInline: {
          user: '',
          region: ''
        },
        form:{
            id:null,
            date:'',
            name: '',
            province: '',
            city: '',
            address: '',
            zip: ""
        },
        tableData: [],
        arr1:[]
      }
    }
  }
</script>