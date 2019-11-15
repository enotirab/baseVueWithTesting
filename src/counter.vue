<template>
    <div>
        <button @click="decrement" ref="decrement">--</button>
        <span class="count">{{ count }}</span>
        <button @click="increment" ref="increment">++</button>
    </div>
</template>

<script type="text/babel">
  export default {

    data() {
      return {
        count: 0,
      }
    },

    methods: {
      increment() {
        this.count++
      },
      decrement(){
        if(this.count > 0)
            this.count--;
      },
    }

  };
</script>