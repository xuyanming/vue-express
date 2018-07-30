<template>
  <div >
    <div style="width:500px; margin:50px auto">
        <ele-calendar  @pick="clickpick"  :lunarcalendar="true" :currentmonth="currentmonth" :render-content="renderContent" :disabledDate="disabledDate" :highlight="false"  :prop="prop" @date-change="datechange" :border="true" :data="datedef">
          </ele-calendar >
    </div>
    <div>{{parmas}}</div>
  </div>
  
</template>

<script>
import eleCalendar from 'ele-calendar'
export default {
  name: 'calendarExample',
  data(){
    	return{
    		timeout:'',
            switchmonth:false,
            currentmonth:true,
            checked:'',
            dialogVisible:false,
            value1:'',
            datedef:[
                {"proid":null,"deptid":null,"proname":null,"id":null,"date":"2018-06-30","content":555,"cid":null,"sid":null,"deptname":null,"createDate":null},
                {"proid":null,"deptid":null,"proname":null,"id":null,"date":"2018-06-26","content":666,"cid":null,"sid":null,"deptname":null,"createDate":null},
                {"proid":null,"deptid":null,"proname":null,"id":null,"date":"2018-07-1","content":666,"cid":null,"sid":null,"deptname":null,"createDate":null},
                {"proid":null,"deptid":null,"proname":null,"id":null,"date":"2018-07-5","content":777,"cid":null,"sid":null,"deptname":null,"createDate":null},
                {"proid":null,"deptid":null,"proname":null,"id":null,"date":"2018-07-26","content":567,"cid":null,"sid":null,"deptname":null,"createDate":null},
            ],
            highlight:true,
            prop:'date',
            parmas:''
    	}
    },
  components: {
      eleCalendar
  },
  methods: {
      disabledDate(val){
          
      },
      renderContent(h,parmas) {
        const loop = data =>{
            return (
                data.defvalue.value ? (<div> <span style=" font-size:10px;  text-align: right; display: inline-block;width: 90%;">{data.defvalue.text}</span>
                <span style=" font-size:10px;  text-align: right; display: inline-block;width: 90%;">{data.defvalue.Lunar.lDayChinese}</span>
                </div>) : <div><span style="  font-size:10px;  text-align: right; display: inline-block;width: 90%;">{data.defvalue.text}</span>
                <span style="  font-size:10px;  text-align: right; display: inline-block;width: 90%;">{data.defvalue.Lunar.lDayChinese}</span></div>
            )
        }
        return (
            <div  on-click={ () => this.append(parmas)} style="min-height:60px;">
            {
            loop(parmas)
            }
            </div>
                
            );
      },
      append(parmas){
        this.parmas =parmas
      },
      datechange(val){
          console.log(val,'1111')
      },
      clickpick(value,event,row,celltd){
        console.log(value,event,row,celltd)
      }
  }
}
</script>

<style>
</style>
