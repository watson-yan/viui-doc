<template>
	<div class="wy-pager">
		<div>
			<button class="pager-pre" v-if="currentNum!=1" @click="pre">上一页</button>	
			<div v-if="showFirst" >
				<button @click="choose(1)" class="btn-item pager-pre">1</button>
				<span class="ellipsis">&nbsp;···&nbsp;</span> 
			</div>
			<ul class="pager-btn-group">
				<li v-for="item in pagerList" @click="choose(item)"  track-by="$index"
					:class="{'btn-item': true, 'active': currentNum == item}">{{item}}</li>
			</ul>
			<div v-if="showLast">
				<span class="ellipsis">&nbsp;···&nbsp;</span>
				<button @click="choose(totalPagesNum)" class="btn-item pager-next">{{totalPagesNum}}</button>
			</div>
			<button class="pager-next" v-if="currentNum != totalPagesNum" @click="next">下一页</button>
		</div>
	</div>
</template>
<script>
export default {
  props: {
    pn: {  // 当前页
      type: Number,
      default: 1
    },
    total: {  // 数据总数
      type: Number,
      required: true
    },
    size: {   // 分页大小
      type: Number,
      default() {
        return 10
      }
    },
    cb: {
      type: Function,
      default(n) {
        this.$route.query.pn = n
        this.$router.push({ path: this.$route.path, query: this.$route.query })
      }
    }
  },
  data() {
    return {
      currentNum: 1,  // 当前页码
      totalPagesNum: 1, // 总页数(默认为1) = Math.ceil(数据总数 / 分页大小)
      pagerList: [],
      showFirst: false,
      showLast: false
    }
  },
  created() {
    this.totalPagesNum = Math.ceil(this.total / this.size)
    this.getPagerList()
  },
  watch: { // 监视当前页，随时更新中间的页码
    currentNum() {
      if (this.pagerList.length === 0) {
        return
      }
      this.getPagerList()
    }
  },
  methods: {
    choose(n) { // 选择
      this.currentNum = n
      if (this.cb && typeof this.cb === 'function') {
        this.cb(n)
      }
    },
    pre() { // 上一页
      this.currentNum = this.currentNum === 1 ? this.currentNum : this.currentNum - 1
      this.choose(this.currentNum)
    },
    next() { // 下一页
      this.currentNum =
        this.currentNum === this.totalPagesNum ? this.totalPagesNum : this.currentNum + 1
      this.choose(this.currentNum)
    },
    getPagerList() {  // 获取中间部分的页码
      const component = this
      component.pagerList = []
      if (component.totalPagesNum <= 10) {
        for (let i = 1; i <= 10; i++) {
          component.pagerList.push(i)
        }
      } else {
        let start = 1
        let end = 0
        if (component.currentNum >= 5) {
          start = component.currentNum - 2
        }
        if (component.currentNum <= component.totalPagesNum - 3) {
          end = (component.currentNum === component.totalPagesNum - 3)
                ? start + 5 : start + 4
        } else {
          start = component.totalPagesNum - 4
          end = component.totalPagesNum
        }
        for (let i = start; i <= end; i++) {
          component.pagerList.push(i)
        }
        component.showFirst = start > 2
        component.showLast = end < component.totalPagesNum - 1
      }
    }
  }
}
</script>
<style lang="scss">
	.wy-pager {
		text-align: center;
		&>div {
			display: inline-block;
			&>button,div {
				float: left;
				display: inline-block;
			}
			&>div{
				span{
					margin: 0 3px;
				}
			}
			&::after {
				content: '';
				display: block;
				height: 0;
				clear: both;
				visibility: hidden;
				line-height: 0;
				font-size: 0;
			}
      .ellipsis {
        color: #007ACC;
      }
      button{
        margin: 0px 3px;
        padding: 5px 10px;
        color: #666;
        background: #fff;
        border: 1px solid #e5e5e5;
        outline: none;
        cursor: pointer;
      }
      .pager-btn-group {
        display: inline;
        padding-left: 0;
        list-style: none;
        li.btn-item {
          float: left;
          padding: 5px 10px;
          margin: 0px 3px;
          border: 1px solid #007ACC;
          // box-shadow: 0 2px 3px #666;
          cursor: pointer;
          color: #007ACC;
          &.active {
            color: #fff;
            background: #007ACC;
            border: 1px solid #007abb;
            box-shadow: 0 2px 3px #666;
          }
        }
      }
      .pager-pre,.pager-next {
        color: #007abb;
        border: 1px solid #007abb;
        /* box-shadow: 0 2px 3px #666; */
      }
		}
	}
</style>
