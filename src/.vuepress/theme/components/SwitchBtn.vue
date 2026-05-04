<template>
  <div id="BingSwitchWrapper">
   
    <div id="left" @click="leftClick" :class="{ disabled: lDisabled }"></div>
    <div id="right" @click="rightClick" :class="{ disabled: rDisabled }"></div>
  </div>
</template>

<script lang="ts" setup>
import { PropType, computed } from "vue";
import { Image } from "../api/bing";
const props = defineProps({
  bingData: {
    // Provide a more definite type than `Object`
    type: Object as PropType<Image>,
    required: true,
  },
  lDisabled: Boolean,
  rDisabled: Boolean,
});
const title = computed(() => {
  if (props.bingData.copyright != undefined) {
    const index = props.bingData.copyright.indexOf("(");
    return index != -1
      ? props.bingData.copyright.substring(0, index)
      : props.bingData.copyright;
  }
  return props.bingData.copyright;
});
// Declare custom events
const emit = defineEmits(["leftClick", "rightClick"]);

const leftClick = () => {
  emit("leftClick");
};
const rightClick = () => {
  emit("rightClick");
};
</script>
<style lang="scss" scoped>
#BingSwitchWrapper {
  position: absolute;
  bottom: 0.75rem;
  right: 0.75rem;
  min-width: 1.25rem;
  min-height: 1.25rem;
  z-index: 5;
  display: flex;
  align-items: center;
  a {
    color: var(--theme-color);
    font-weight: 500;
    text-decoration: none;
    overflow-wrap: break-word;
  }
  #bingLink {
    display: flex;
    align-items: center;
    background-color: #2226;
    border-radius: 0.375rem;
    cursor: pointer;
  }
  .bingLink-icon {
    position: relative;
    width: 2.5rem;
    height: 2.5rem;
    .mapPin {
      fill: #fff;
      transform: translate3d(-50%, -50%, 0);
      top: 50%;
      left: 50%;
      position: absolute;
    }
    @media (max-width: hope-config.$mobile) {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  #bingLink-text {
    font-family: "Segoe UI", Segoe, Tahoma, Arial, Verdana, sans-serif;
    text-align: left;
    box-sizing: border-box;
    min-height: 2.5rem;
    max-width: 14rem;
    color: #fff;
    padding: 0.625rem 0.625rem 0.625rem 0rem;
    font-size: 0.9rem;
    @media (max-width: hope-config.$mobile) {
      font-size: 0.75rem;
      min-height: 2rem;
    }
  }
  #left {
    width: 2.5rem;
    height: 2.5rem;
    background-color: #222c;
    cursor: pointer;
    border-radius: 0.375rem;
    position: relative;
    margin-left: 0.25rem;
    @media (max-width: hope-config.$mobile) {
      width: 2.2rem;
      height: 2.2rem;
    }
  }
  #left::after {
    transform: scale(0.25) translate(25%) rotate(45deg);
    border-radius: 0.375rem;
    border-left: 0.375rem solid rgba(255, 255, 255, 0.8);
    border-bottom: 0.375rem solid rgba(255, 255, 255, 0.8);
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    content: "";
    position: absolute;
  }
  #left.disabled::after {
    border-left: 0.375rem solid rgba(255, 255, 255, 0.4);
    border-bottom: 0.375rem solid rgba(255, 255, 255, 0.4);
  }
  #right {
    width: 2.5rem;
    height: 2.5rem;
    background-color: #222c;
    cursor: pointer;
    border-radius: 0.375rem;
    position: relative;
    margin-left: 0.25rem;
    @media (max-width: hope-config.$mobile) {
      width: 2.2rem;
      height: 2.2rem;
    }
  }
  #right::after {
    transform: scale(0.25) translate(-25%) rotate(225deg);
    border-radius: 0.375rem;
    border-left: 0.375rem solid rgba(255, 255, 255, 0.8);
    border-bottom: 0.375rem solid rgba(255, 255, 255, 0.8);
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    content: "";
    position: absolute;
  }
  #right.disabled::after {
    border-left: 0.375rem solid rgba(255, 255, 255, 0.4);
    border-bottom: 0.375rem solid rgba(255, 255, 255, 0.4);
  }
}
</style>
