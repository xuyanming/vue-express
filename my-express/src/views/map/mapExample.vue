 <template>
    <div style="    position: fixed;top: 0;bottom: 0;height: 100%;width: 100%;" >
        <div id="container"></div>
        <div id="tip"></div>

    </div>
    
  </template>

  <script>
     import api from '@/api/login'
    export default {
      data() {
        return {
            map:''
        }
      },
      created() {
          
      },
      methods: {
        showCityInfo() {
            //实例化城市查询类
            var citysearch = new AMap.CitySearch();
            let _this = this
            //自动获取用户IP，返回当前城市
            citysearch.getLocalCity(function(status, result) {
                console.log(status, result)
                if (status === 'complete' && result.info === 'OK') {
                    if (result && result.city && result.bounds) {
                        var cityinfo = result.city;
                        var citybounds = result.bounds;
                        document.getElementById('tip').innerHTML = '您当前所在城市：'+cityinfo;
                        api.setcity({'city':cityinfo,'rectangle':result.rectangle}).then(function (response) {
                        }).catch(function (error) {
                        });
                        //地图显示当前城市
                        _this.map.setBounds(citybounds);
                    }
                } else {
                    document.getElementById('tip').innerHTML = result.info;
                }
            });
        }
      },
      mounted () {
          this.map = new AMap.Map('container');
          this.map.setMapStyle('amap://styles/fresh');
          this.showCityInfo()
      }
    }
  </script>
  <style lang="scss" scoped>
  #container {width:100%; height: 100vh; } 
  #tip{ height: 45px;
            background-color: #fff;
            padding-left: 10px;
            padding-right: 10px;
            border: 1px solid #969696;
            position: absolute;
            font-size: 12px;
            right: 300px;
            bottom: 20px;
            border-radius: 3px;
            line-height: 45px;} 
  </style>
  