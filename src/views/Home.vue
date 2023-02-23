<template>
  <el-container style="height: 100vh;">
    <el-aside
      width="6vw"
      height="100vh"
      class="func-icons d-flex flex-column jc-start ai-center"
    >
      <div
        class="func-icon mt-5"
        v-on:click="handleClick('/synthesis')"
      >
        <!-- <router-link to="/synthesis">
          <img src="../assets/images/synthesis.png" alt />
        </router-link>-->
        <el-tooltip
          class="item"
          effect="dark"
          content="图像合成"
          placement="right"
        >
          <img src="../assets/images/synthesis.png" alt />
        </el-tooltip>

        <!-- <FuncIcon path="/synthesis">
          <img src="../assets/images/synthesis.png" alt />
        </FuncIcon>-->
      </div>
      <div class="func-icon">
        <router-link to="/slicer">
          <el-tooltip
            class="item"
            effect="dark"
            content="Nii切片工具"
            placement="right"
          >
            <img src="../assets/images/slicer.png" alt />
          </el-tooltip>
        </router-link>
        <!-- <FuncIcon path="/slicer">
          <img src="../assets/images/slicer.png" alt />
        </FuncIcon>-->
      </div>
      <!-- <div class="func-icon">
        <router-link to="/viewer">wpswwww
          <img src="../assets/images/viewer.png" alt />
        </router-link>
      </div>-->
      <div class="func-icon">
        <el-tooltip
          class="item"
          effect="dark"
          content="黑暗模式"
          placement="right"
        >
          <!-- <img src="../assets/images/light.png" alt /> -->
        </el-tooltip>
      </div>
    </el-aside>
    <el-divider direction="vertical"></el-divider>
    <el-container>
      <el-header
        style="text-align: right;"
        class="d-flex jc-end ai-center"
      >
        <div class="mr-4" @click="minisize">
          <span class="iconfont btn">&#xe65a;</span>
        </div>
        <div class="mr-4" @click="maximize">
          <span class="iconfont btn">&#xe66f;</span>
        </div>
        <div @click="close">
          <span class="iconfont btn">&#xe66e;</span>
        </div>
      </el-header>
      <el-divider></el-divider>
      <el-main>
        <router-view :key="$route.path"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import FuncIcon from '../components/FuncIcon.vue';

export default {
  name: 'Home',
  components: {
    FuncIcon
  },
  data() {
    return {};
  },
  methods: {
    handleClick(path) {
      this.$router.push(path);
    },
    close() {
      // console.log(window.electron)
      window.electron.ipcRenderer.send('window-close')
    },
    minisize() {
      window.electron.ipcRenderer.send('window-minimize')
    },
    maximize() {
      window.electron.ipcRenderer.send('window-maximize')
    }
  },
  mounted() {
    this.$router.push('/main');
  }
};
</script>
<style lang="scss" scoped>
.func-icon {
  text-align: center;
  img {
    width: 56%;
    vertical-align: center;
  }
  &:last-child {
    margin-top: auto;
  }
}
.btn {
  -webkit-app-region: no-drag;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
}
.el-aside {
  // background-color: rgb(3, 71, 146);
  background: linear-gradient(to bottom right, #00e0fa, #02428b);
}

.el-header {
  background: linear-gradient(to bottom right, #00e0fa, #02428b);
  color: #333;
  line-height: 10vh;
  -webkit-app-region: drag;
}

.func-icons {
  color: #333;
  line-height: 10vh;
}

@font-face {
  font-family: 'iconfont'; /* Project id 3879965 */
  src: url('../assets/iconfont/iconfont.woff2?t=1675588257620') format('woff2'),
    url('../assets/iconfont/iconfont.woff?t=1675588257620') format('woff'),
    url('../assets/iconfont/iconfont.ttf?t=1675588257620') format('truetype');
}

// iconfont
.iconfont {
  font-family: 'iconfont' !important;
  font-size: 23px;
  font-style: normal;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

// 分割线
.el-divider--vertical {
  height: 100vh;
  margin: 0;
}

.el-divider--horizontal {
  margin: 0;
}

.item {
  margin: 4px;
}
</style>
