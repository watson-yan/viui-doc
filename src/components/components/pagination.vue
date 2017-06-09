<template>
	<div class="vi-pagination">
		<div class="clearfix">
			<button class="pagination-pre" v-if="currentNum!=1" @click="prePage">Pre</button>	
			<template v-if="showFirst" >
				<button @click="choose(1)" class="btn-item pagination-pre">1</button>
				<button class="ellipsis">&nbsp;...&nbsp;</button> 
			</template>
			<ul class="pagination-btn-group">
				<li v-for="item in pagerList" @click="choose(item)"  track-by="$index"
					:class="{'btn-item': true, 'active': currentNum == item}">{{item}}</li>
			</ul>
			<template v-if="showLast">
				<button class="ellipsis">&nbsp;...&nbsp;</button>
				<button @click="choose(totalPagesNum)" class="btn-item pagination-next">{{totalPagesNum}}</button>
			</template>
			<button class="pagination-next" v-if="currentNum != totalPagesNum" @click="nextPage" 
        style="border-left: none;">Next</button>
      <section v-if="showTotal" class="pagination-total-show">
        共{{total}}页
      </section>
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
    showTotal: {
      type: Boolean,
      default: false
    },
    next: {
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
      if (this.next && typeof this.next === 'function') {
        this.next(n)
      }
    },
    prePage() { // 上一页
      this.currentNum = this.currentNum === 1 ? this.currentNum : this.currentNum - 1
      this.choose(this.currentNum)
    },
    nextPage() { // 下一页
      this.currentNum =
        this.currentNum === this.totalPagesNum ? this.totalPagesNum : this.currentNum + 1
      this.choose(this.currentNum)
    },
    getPagerList() {  // 获取中间部分的页码
      const component = this
      component.pagerList = []
      if (component.totalPagesNum <= 10) {
        for (let i = 1; i <= component.totalPagesNum; i++) {
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
	.vi-pagination {
		text-align: center;
    button, .btn-item {
      padding: 5px 10px;
      color: #666;
      background: #fff;
      border: 1px solid #d9d9d9;
      outline: none;
      cursor: pointer;
      &:hover {
        color: #007ACC;
      }
    }
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
      .ellipsis {
        border-left: none;
        border-right: none;
      }
      .pagination-btn-group {
        display: inline;
        padding-left: 0;
        list-style: none;
        li.btn-item {
          float: left;
          &.active {
            color: #fff;
            background: #007ACC;
            border: 1px solid #007abb;
          }
          &:not(:last-child) {
            border-right: none;
          }
        }
      }
      .pagination-pre:first-child {
        border-right: none;
      }
      .pagination-total-show {
        display: inline-block;
        padding-left: 1.75rem;
        line-height: 2.2rem;
        font-size: 0.875rem;
        color: #666;
      }
		}
    .clearfix:after {
      content: '';
      display: block;
      height: 0;
      clear: both;
      visibility: hidden;
      line-height: 0;
      font-size: 0;
    }
	}
</style>
