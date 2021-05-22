<template>
    <div class="cinema_b">
        <div class="cinema_body">
            <ul>
                <li v-for="item in cinemaList" :key="item.id">
                    <div>
                        <span>{{item.nm}}</span>
                        <span class="q"><span class="price">{{item.sellPrice}}</span> 元起</span>
                    </div>
                    <div class="address">
                        <span>{{item.addr}}</span>
                        <span>{{item.distance}}</span>
                    </div>
                    <div class="card">
                        <div v-for="(num,key) in item.tag" :key="key" :class="classCard(key)"><div v-if="num===1||key==='vipTag'">{{formatCard(key)}}</div></div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'CiList',
    data(){
        return{
            cinemaList:[]
        }
    },
    mounted(){
        this.$axios.get('/api/cinemaList?cityId=10').then((res)=>{
            var msg=res.data.msg;
            if(msg==='ok'){
                this.cinemaList=res.data.data.cinemas;
            }
        })
    },
    computed:{
        formatCard(){
            return (value) =>
            {
                var card = [
                    {key:"allowRefund",value:'允许退款'},
                    {key:"buyout",value:'购票'},
                    {key:"cityCardTag",value:'城市卡'},
                    {key:"deal",value:'交易'},
                    {key:"endorse",value:'转让'},
                    {key:"sell",value:'出售'},
                    {key:"snack",value:'小吃'},
                    {key:"vipTag",value:'折扣卡'},
                ];
                for(var i=0;i<card.length;i++){
                    if(card[i].key===value){
                        return card[i].value;
                    }
                }
                return '';
            }
        },
        classCard(){
            return (value) =>
            {
                var card = [
                    {key:"allowRefund",value:'bl'},
                    {key:"buyout",value:'bl'},
                    {key:"cityCardTag",value:'bl'},
                    {key:"deal",value:'bl'},
                    {key:"endorse",value:'bl'},
                    {key:"sell",value:'bl'},
                    {key:"snack",value:'or'},
                    {key:"vipTag",value:'or'},
                ];
                for(var i=0;i<card.length;i++){
                    if(card[i].key===value){
                        return card[i].value;
                    }
                }
                return '';
            }
        }
    }
}
</script>

<style scoped>
    #content .cinema_b{ margin-top: 45px; display: flex; width:100%; position: absolute; top: 50px; bottom: 50px;}
    #content .cinema_body{ flex:1; overflow:auto;}
    .cinema_body ul{ padding:20px;}
    .cinema_body li{  border-bottom:1px solid #e6e6e6; margin-bottom: 20px;}
    .cinema_body div{ margin-bottom: 10px;}
    .cinema_body .q{ font-size: 11px; color:#f03d37;}
    .cinema_body .price{ font-size: 18px;}
    .cinema_body .address{ font-size: 13px; color:#666;}
    .cinema_body .address span:nth-of-type(2){ float:right; }
    .cinema_body .card{ display: flex;}
    .cinema_body .card div div{ padding: 0 3px; height: 15px; line-height: 15px; border-radius: 2px; color: #f90; border: 1px solid #f90; font-size: 13px; margin-right: 5px;}
    .cinema_body .card div.or div{ color: #f90; border: 1px solid #f90;}
    .cinema_body .card div.bl div{ color: #589daf; border: 1px solid #589daf;}
</style>