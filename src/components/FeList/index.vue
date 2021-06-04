<template>
    <div class="fe_b">
        <div class="fe_body">
            <Loading v-if="isLoading"/>
            <Scroller :handleToScroll="handleToScroll" :handleToTouchEnd="handleToTouchEnd">
                <ul>
                    <li class="pullDown">
                        <p>{{pullDownMsg}}</p>
                    </li>
                </ul>
            </Scroller>
        </div>
    </div>
</template>

<script>
export default {
    name:'FeList',
    data(){
        return{
            cinemaList:[],
            pullDownMsg:'',
            isLoading:true,
            prevCityId:-1
        }
    },
    activated(){
        var cityId=this.$store.state.city.id;
        if(this.prevCityId===cityId){
            return;
        }
        this.isLoading=true;
        this.$axios.get('/api/cinemaList?cityId='+cityId).then((res)=>{
            var msg=res.data.msg;
            if(msg==='ok'){
                this.cinemaList=res.data.data.cinemas;
                this.isLoading=false;
                this.prevCityId=cityId;
            }
        })
    },
    methods: {
        handleToDetail(){
            console.log('handleToDetail');
        },
        handleToScroll(pos){
            if(pos.y>30){
                this.pullDownMsg='正在更新中';
            }
        },
        handleToTouchEnd(pos){
            if(pos.y>30){
                this.$axios.get('/api/cinemaList?cityId=10').then((res)=>{
                    var msg=res.data.msg;
                    if(msg==='ok'){
                        this.pullDownMsg='更新成功';
                        setTimeout(()=>{
                            this.cinemaList=res.data.data.cinemas;
                            this.pullDownMsg='';
                        },1000);
                    }
                });
            }
        }
    }
}
</script>

<style scoped>
    #content .fe_b{ margin-top: 45px; display: flex; width:100%; position: absolute; top: 50px; bottom: 50px;}
    #content .fe_body{ flex:1; overflow:auto;}
    .fe_body ul{ padding:20px;}
    .fe_body li{  border-bottom:1px solid #e6e6e6; margin-bottom: 20px;}
    .fe_body .pullDown {margin: 0;padding: 0;border: none;}
    .fe_body .pullDown p{margin: 0 auto;text-align: center;}
</style>