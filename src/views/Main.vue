<template>
  <div class="about">
    <div class="title d-flex jc-center">
      <span>医学图像合成仿真系统</span>
    </div>

    <!-- <div class="version d-flex jc-center">
      <span>版本：v1.0</span>
    </div> -->
    <!-- <div class="github d-flex jc-center">
      <a
        href="https://github.com/ElegantLee/MedImg-synthesis-app"
      >GitHub</a>
    </div> -->
  </div>
</template>

<script>

export default {};
</script>

<style lang="scss">
.about {
  position: relative;
  top: 18vh;
  left: 13vw;
  width: 70vw;
  height: 50vh;
}

.title {
  height: 36%;
  line-height: 3rem;
  span {
    font-weight: bold;
    font-size: 3rem;
    display: inline-block;
  }
}

/* .version {
  font-size: 2rem;
  line-height: 2rem;
  height: 15%;
  span {
    display: inline-block;
  }
} */

.github {
  font-size: 2rem;
  line-height: 2rem;
  a {
    display: inline-block;
  }
}
</style>