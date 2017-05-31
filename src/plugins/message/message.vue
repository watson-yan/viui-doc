<template>
    <div v-if="queue.length > 0" class="popup-message">
        <template v-for="(item, index) of queue">
            <transition name="slide-fade">
                <section class="message-item">
                    {{item.text}}<span class="close" @click="remove(index)">+</span>      
                </section>
            </transition>        
        </template>
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
    remove(index) {
      this.queue.splice(index, 1)
    }
  }
}
</script>
<style lang="scss">
.popup-message {
    position: fixed;
    right: 0;
    bottom: 0;
    .message-item {
        position: relative;
        padding: 10px;
        padding-right: 30px;
        margin: 3px;
        color: #fff;
        background: #04a7ba;
        border-radius: 3px 0px 0px 3px;
        &>.close {
            position: absolute;
            top: 5px;
            right: 5px;
            font-size: 16px;
            cursor: pointer;
            font-weight: 800;
            transform: rotate(45deg);
        }
    }
}
</style>

