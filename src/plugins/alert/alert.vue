<template>
    <div v-if="queue.length != 0" class="vi-alert">
        <section class="cover-mask"></section>
        <article class="alert-panel">
            <div class="alert-header">
                <h4>{{queue[0].caption || '提示'}}<span @click="close">+</span></h4>
            </div>
            <div class="alert-content">
                <section class="main">
                    {{queue[0].content}}
                </section>
            </div>
            <div class="alert-footer">
              <section class="alert-footer-btns">
                  <button @click="ok">确定</button>
              </section>
            </div>
        </article>
    </div>
</template>
<script>
export default {
  data() {
    return {
      queue: []
    }
  },
  methods: {
    close() {
      this.queue.shift()
    },
    ok() {
      if (this.queue[0].cb && typeof this.queue[0].cb === 'function') {
        this.queue[0].cb()
      }
      this.queue.shift()
    }
  }
}
</script>
<style lang="scss">
.vi-alert {
  .cover-mask {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(29, 29, 29, 0.7);
    z-index: 100;
  }
  .alert-panel {
    padding:  0.825rem 0.5rem;
    position: absolute;
    left: 50%;
    top: 50%;
    background: #fff;
    width: 420px;
    transform: translate(-50%, -50%);
    border-radius: 4px;
    z-index: 101;
    .alert-header {
      padding: 0.5rem;
      padding-bottom: 0;
      h4 {
        margin: 0;
        span {
          margin-top: -0.5rem;
          float: right;
          cursor: pointer;
          font-size: 1.5rem;
          color: #666;
          transform: rotate(45deg);
          &:hover {
            color: #1b89de;
          }
        }
      }
    }
    .alert-content {
      padding: 1rem 0.5rem;
    }
    .alert-footer {
      overflow:auto;
      _height:1%;
      .alert-footer-btns {
        padding: 0px 0.5rem;
        float: right;
        button {
          padding: 0 1rem;
          line-height: 2.125rem;
          border: none;
          color: #fff;
          cursor: pointer;
          background: #1b89de;
          border-radius: 3px;
          &:active {
            background: #1b6eae;
          }
          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>

