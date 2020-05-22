<template>
  <section class="basic-timeline-tab">
    <ul class="tab-timeline" :style="{'width':0.7*timeline.length + 'rem'}">
      <li class="timeline-item" v-for="(item,index) of timeline" :key="index">
        <div class="item-day">{{item.day}}</div>
        <div class="item-week">{{item.week}}</div>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  name: "home",
  components: {},
  data: () => ({
    timeline: []
  }),
  created() {
    this.setTimeline();
  },
  methods: {
    setTimeline() {
      let timer = new Date(), //当前时间
        year = timer.getFullYear(), //获取当前年份
        month = timer.getMonth(), //获取当前月份
        days = new Date(year, month + 1, -1).getDate() + 1, //获取当月最大天数
        oneDayWeek = new Date(year, month, 1).getDay(), //获取当月第一天是周几
        weeks = "日一二三四五六"; //全部星期集合
      let w = oneDayWeek; //初始的周别
      for (let i = 0; i < days; i++) {
        //判断临界值
        if (w === 6) { w = 0; } else { w++;}
        let oday = { //将每一天的日期和周别存起来
          day: `${("0" + (month + 1)).toString().slice(-2)}-${("0" + (i + 1)).toString().slice(-2)}`,
          week: `星期${weeks.charAt(w)}`
        };
        this.timeline.push(oday);
      }
      console.log(this.timeline);
    }
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.basic-timeline-tab {
  overflow-x: auto;
  height: 0.6rem;
  background-color: #fff;
  .tab-timeline {
    box-sizing: border-box;
    overflow-wrap: normal;
    flex-wrap: nowrap;
    height: 100%;
    padding: 10px 0;
    .timeline-item {
      box-sizing: border-box;
      float: left;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-content: space-around;
      height: 100%;
      width: 0.7rem;
      text-align: center;
      color: #666;
      font-size: 14px;
      .item-day,
      .item-week {
        width: 100%;
      }
    }
  }
}
</style>