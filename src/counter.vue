<style>
    .button {
        padding: 0.5rem 1rem;
        margin: 0 1rem;
        font-size: 3rem;
        color: #6cddc5;
        background: transparent;
        border: none;
        cursor: pointer;
    }

    .counter {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .count {

        padding: 1rem;
        background: #6cddc5 radial-gradient(at top right, #6cddc5, #66a6ab);
        color: #fff;
        border-radius: 6px;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3rem;
    }

    .button:disabled {
        opacity: 0.3;
        cursor: not-allowed;
    }

    .button.reset {
        font-size: 1.5rem;
        margin-top: 1rem;
    }
</style>

<template>
    <div>
        <div class="counter">
            <button @click="decrement" ref="decrement" class="button" :disabled="count === 0"><</button>
            <div class="count">{{ count }}</div>
            <button @click="increment" ref="increment" class="button">></button>
        </div>
        <div class="counter">
            <button @click="reset" ref="reset" class="button reset">Reset</button>
        </div>
    </div>
</template>

<script type="text/babel">
  export default {

    data() {
      return {
        count: 0,
      };
    },

    methods: {
      increment() {
        this.count++;
      },
      decrement() {
        if (this.count > 0)
          this.count--;
      },

      reset() {
        this.count = 0;
      },
    },

  };
</script>