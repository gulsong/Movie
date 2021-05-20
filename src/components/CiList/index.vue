<template>
    <div class="cinema_b">
        <div class="cinema_body">
            <ul>
                <li>
                    <div>
                        <span>嘉星国际影城(会展店)</span>
                        <span class="q"><span class="price">22.9</span> 元起</span>
                    </div>
                    <div class="address">
                        <span>南岗区红旗大街240号(艺汇家文化商业广场3楼)</span>
                        <span>1763.5km</span>
                    </div>
                    <div class="card">
                        <div>小吃</div>
                        <div>折扣卡</div>
                    </div>
                </li>
                <li>
                    <div>
                        <span>嘉星国际影城(会展店)</span>
                        <span class="q"><span class="price">22.9</span> 元起</span>
                    </div>
                    <div class="address">
                        <span>南岗区红旗大街240号(艺汇家文化商业广场3楼)</span>
                        <span>1763.5km</span>
                    </div>
                    <div class="card">
                        <div>小吃</div>
                        <div>折扣卡</div>
                    </div>
                </li>
                <li>
                    <div>
                        <span>嘉星国际影城(会展店)</span>
                        <span class="q"><span class="price">22.9</span> 元起</span>
                    </div>
                    <div class="address">
                        <span>南岗区红旗大街240号(艺汇家文化商业广场3楼)</span>
                        <span>1763.5km</span>
                    </div>
                    <div class="card">
                        <div>小吃</div>
                        <div>折扣卡</div>
                    </div>
                </li>
                <li>
                    <div>
                        <span>嘉星国际影城(会展店)</span>
                        <span class="q"><span class="price">22.9</span> 元起</span>
                    </div>
                    <div class="address">
                        <span>南岗区红旗大街240号(艺汇家文化商业广场3楼)</span>
                        <span>1763.5km</span>
                    </div>
                    <div class="card">
                        <div>小吃</div>
                        <div>折扣卡</div>
                    </div>
                </li>
                <li>
                    <div>
                        <span>嘉星国际影城(会展店)</span>
                        <span class="q"><span class="price">22.9</span> 元起</span>
                    </div>
                    <div class="address">
                        <span>南岗区红旗大街240号(艺汇家文化商业广场3楼)</span>
                        <span>1763.5km</span>
                    </div>
                    <div class="card">
                        <div>小吃</div>
                        <div>折扣卡</div>
                    </div>
                </li>
                <li>
                    <div>
                        <span>嘉星国际影城(会展店)</span>
                        <span class="q"><span class="price">22.9</span> 元起</span>
                    </div>
                    <div class="address">
                        <span>南岗区红旗大街240号(艺汇家文化商业广场3楼)</span>
                        <span>1763.5km</span>
                    </div>
                    <div class="card">
                        <div>小吃</div>
                        <div>折扣卡</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'CiList'
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
    .cinema_body .card div{ padding: 0 3px; height: 15px; line-height: 15px; border-radius: 2px; color: #f90; border: 1px solid #f90; font-size: 13px; margin-right: 5px;}
    .cinema_body .card div.or{ color: #f90; border: 1px solid #f90;}
    .cinema_body .card div.bl{ color: #589daf; border: 1px solid #589daf;}
</style>