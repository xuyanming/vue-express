<template>
    <div >
        <el-table
        :data="formdata"
        style="width: 100%">
        <el-table-column
            prop="index"
            label="序号"
            width="160">
            <template slot-scope="scope">
                <span >{{ scope.$index + 1 }}</span>
            </template>
        </el-table-column>
        <el-table-column prop="label" label="部门名称" >
            <template slot-scope="scope">
                <div :style="`padding-left:${20*(scope.row.num-1)}px`" >
                    <span style="display:inline-block;width:14px;height:14px;">
                        <i style="cursor: pointer;" class="el-icon-caret-right" @click="rowclick( scope.row, scope.column, scope.$index )"  v-if="scope.row.children && !scope.row.flag"></i>
                        <i style="cursor: pointer;" class="el-icon-caret-bottom" @click="cellclick( scope.row, scope.column, scope.$index )"  v-if="scope.row.children && scope.row.flag"></i>
                        
                    </span>
                    {{scope.row.label}}
                </div>
            </template>
        </el-table-column>
        <el-table-column
            prop="label"
            label="部门类型"
            width="100">
            <template slot-scope="scope">
                <span>{{otype[scope.row.type - 1]}}</span>
            </template>
        </el-table-column>
        <el-table-column
            label="操作"
            width="200"
            >
        </el-table-column>
        </el-table>
    </div>
</template>

<script>
var istitution = 1;
var nstitution = 1;
var flags = true;
export default {
  name: 'personal',
  data() {
    return {
        columns: [
          {
            text: '部门名称',
            dataIndex: 'name'
          },
          {
            text: '部门类型',
            dataIndex: 'type'
          }
        ],
      optiontext:'',
      Checkedx:false,               //是否分校
      addbranchnum:1,
      labelPosition:'right',
      dialogVisible:false,
      form:{
        orgid:'',
        orgname:'',
        parentOrgname:'',
        parentOrgid:'',
      },
      data2: [],
      data3: [],
      formdata: [],
      tabledata:[{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      otype: ['学校','部门','部门','分校区'],
      ishandlcontrol:[],    //权限分配
      nohandlcontrol:[],
    }
  },
  components:{
    
    
  },
  created(){
    this.loadTree();
  },
  mounted() {

  },
  computed: {
    nohandlcontrols:function(){
      let _nohandlcontrol = this.nohandlcontrol.map(function(item,index){
            return item.id
      })
      return _nohandlcontrol
    },
    ishandlcontrols:function(){
      let _ishandlcontrol = this.ishandlcontrol.map(function(item,index){
            return item.id
      })
      return _ishandlcontrol
    }
  },
  methods:{
    rowclick(row, column, $index){
        let _this=this;
        this.formdata[$index].flag=true;
        row['children'].forEach((r,index)=>{
        _this.formdata.splice($index+1+index,0,r)
        })
    },
    cellclick(row, column, $index){
        this.formdata[$index].flag=false;
        function flagchange(rs){
        rs.forEach(r=>{
            if(r['children']){
                flagchange(r['children'])
            }
            r.flag=false
        })
        
        }
        flagchange(this.formdata[$index]['children'])
        let _this=this;
        
        function del(rs){
        let arr=[]
        rs.forEach((r,index)=>{
            if(r['children']){
                arr=arr.concat(del(r['children']))
            }
            arr.push(r.label) 
        })
        return arr
        }
        let arrdata=del(row['children'])
        let data=[]
        this.formdata.forEach((r,index)=>{
        if(arrdata.indexOf(r.label) == -1){
            data.push(r)
        }
        })
        this.formdata=data
    },
    loadTree() {
        let tabledata = this.tabledata
        function flagchange(rs,rf){
            rs.forEach((r,index)=>{
                 rf ? r['num'] = rf.num+1 : r['num']=1
                if(r['children']){
                    flagchange(r['children'],r)
                }
                r['flag']=false;
            })
        }
        flagchange(tabledata)
        this.formdata=tabledata
    },
  },
     
}

</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>

