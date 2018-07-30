 <template>
    <div>
        <el-row :gutter="10">
            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="4">
                <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>卡片名称</span>
                    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                </div>
                <div v-for="o in 4" :key="o" class="text item">
                    {{'列表内容 ' + o }}
                </div>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="8">
                <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>卡片名称</span>
                    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                </div>
                <div v-for="o in 4" :key="o" class="text item">
                    {{'列表内容 ' + o }}
                </div>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="8">
                <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>卡片名称</span>
                    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                </div>
                <div v-for="o in 4" :key="o" class="text item">
                    {{'列表内容 ' + o }}
                </div>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="4">
                <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>卡片名称</span>
                    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                </div>
                <div v-for="o in 4" :key="o" class="text item">
                    {{'列表内容 ' + o }}
                </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row style="margin-top:20px;">
            <el-col style="position: relative;" :span="24">
            <div id="source" style="height:800px"></div>
            <div class="commap">访问来源</div>
            </el-col>
        </el-row >
            <el-row style="margin-top:20px;" :gutter="10">
                <el-col :xs="24" :sm="12" >
                    <el-carousel height="150px">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <h3>{{ item }}</h3>
                    </el-carousel-item>
                    </el-carousel>
                </el-col>
                <el-col :xs="24" :sm="12">
                    <el-carousel height="150px">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <h3>{{ item }}</h3>
                    </el-carousel-item>
                    </el-carousel>
                </el-col>
            </el-row>
        
            
    </div>
  </template>

  <script>
    import api from '@/api/login'
    export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
            }, {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
            }, {
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
            }, {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
            }]
        }
      },
      methods: {
        handleClick(row) {
            console.log(row);
        }
      },
      mounted () {
          this.map = new AMap.Map('source',{
              zoom: 5
          });
          this.map.setMapStyle('amap://styles/fresh');

         var colors = [
            '#0cc2f2',
            '#4fd2b1',
            '#90e36f',
            '#ffe700',
            '#ff9e00',
            '#ff6700',
            '#ff1800'
        ];
        let _this = this
        AMapUI.load(['ui/misc/PointSimplifier', 'lib/$'], function(PointSimplifier, $) {

            if (!PointSimplifier.supportCanvas) {
                alert('当前环境不支持 Canvas！');
                return;
            }

            var pointSimplifierIns = new PointSimplifier({
                zIndex: 115,
                autoSetFitView: false,
                map: _this.map, //所属的地图实例

                getPosition: function(item) {
                    if (!item) {
                        return null;
                    }

                    var parts = item.split(',');

                    return [parseFloat(parts[0]), parseFloat(parts[1])];
                },
                getHoverTitle: function(dataItem, idx) {
                    return '序号: ' + idx;
                },
                //使用GroupStyleRender
                renderConstructor: PointSimplifier.Render.Canvas.GroupStyleRender,
                renderOptions: {
                    eventSupport: false, //禁止事件,对性能更友好
                    //点的样式
                    pointStyle: {
                        fillStyle: null,
                        width: 5,
                        height: 5
                    },
                    topNAreaStyle: null,
                    getGroupId: function(item, idx) {

                        //随机返回一个组ID
                        return Math.ceil(colors.length * Math.random());
                    },
                    groupStyleOptions: function(gid) {

                        //随机设置大小
                        var radius = 2 + 10 * Math.random();

                        return {

                            pointStyle: radius > 0 ? {
                                content: function(ctx, x, y, width, height) {

                                    var p = {
                                        x: x + width / 2,
                                        y: y + height / 2,
                                        radius: radius
                                    };

                                    ctx.beginPath();
                                    var gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
                                    gradient.addColorStop(0, "rgba(7,120,249,0.8)");
                                    gradient.addColorStop(1, "rgba(7,120,249,0.1)");
                                    ctx.fillStyle = gradient;
                                    ctx.arc(p.x, p.y, p.radius, Math.PI * 2, false);
                                    ctx.fill();

                                },

                                //fillStyle: colors[gid % colors.length],
                                width: radius * 2,
                                height: radius * 2
                            } : null,
                            pointHardcoreStyle: {
                                width: radius * 2 + 3,
                                height: radius * 2 + 3
                            }
                        };
                    }

                }
            });


            //重复render
            setInterval(function() {
                pointSimplifierIns.render();
            }, 500)

            api.getusercity().then(r=>{
                var data = [];
                r.data.data.forEach(r=>{
                    data.push(r.rectangle.split(';')[0])
                })
                pointSimplifierIns.setData(data);
            })
        });

      }
    }
  </script>
  <style>
  .commap{
    height: 45px;
    background-color: #fff;
    padding-left: 10px;
    padding-right: 10px;
    border: 1px solid #969696;
    position: absolute;
    font-size: 12px;
    right: 20px;
    top: 20px;
    border-radius: 3px;
    line-height: 45px;
  }
  </style>
  

