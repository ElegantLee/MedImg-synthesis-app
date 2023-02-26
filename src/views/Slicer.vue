<template>
  <div>
    <!-- <el-divider content-position="center">nii2png</el-divider> -->
    <el-tabs type="border-card">
      <el-tab-pane label="Nii2PNG">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="输入形式" prop="inputType">
            <el-radio-group v-model="ruleForm.inputType">
              <el-radio label="文件"></el-radio>
              <el-radio label="文件夹"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="输入路径" prop="inputPath">
            <el-input v-model="ruleForm.inputPath"></el-input>
          </el-form-item>
          <el-form-item label="输出路径" prop="outputPath">
            <el-input v-model="ruleForm.outputPath"></el-input>
          </el-form-item>
          <el-form-item label="切片方向" prop="direction">
            <el-select
              v-model="ruleForm.direction"
              placeholder="请选择切片方向"
            >
              <el-option label="轴向面（Axial）" value="Axial"></el-option>
              <el-option label="冠状面（Coronal）" value="Coronal"></el-option>
              <el-option label="矢状面（Sagittal）" value="Sagittal"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="旋转角度" prop="rotateNum">
            <el-select
              v-model="ruleForm.rotateNum"
              placeholder="请选择旋转角度"
            >
              <el-option label="90" value="90"></el-option>
              <el-option label="180" value="180"></el-option>
              <el-option label="270" value="270"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="submitForm('ruleForm')"
            >开始切片</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
        <el-divider></el-divider>
        <el-progress
          :text-inside="true"
          :stroke-width="24"
          :percentage="42"
          status="success"
        ></el-progress>
      </el-tab-pane>
      <el-tab-pane label="Dicom2Nii">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="输入形式" prop="inputType">
            <el-radio-group v-model="ruleForm.inputType">
              <el-radio label="文件"></el-radio>
              <el-radio label="文件夹"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="输入路径" prop="inputPath">
            <el-input v-model="ruleForm.inputPath"></el-input>
          </el-form-item>
          <el-form-item label="输出路径" prop="outputPath">
            <el-input v-model="ruleForm.outputPath"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="submitForm('ruleForm')"
            >转换</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        inputType: '',
        inputPath: '',
        outputPath: '',
        direction: '',
        rotateNum: ''
      },
      rules: {
        inputPath: [{ required: true, message: '请选择输入路径', trigger: 'blur' }],
        outputPath: [{ required: true, message: '请选择输出路径', trigger: 'blur' }],
        inputType: [{ required: true, message: '请选择输入形式', trigger: 'change' }],
        direction: [{ required: true, message: '请选择切片方向', trigger: 'change' }],
        rotateNum: [{ required: true, message: '请选择旋转角度', trigger: 'change' }]
      }
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.sliceLog {
  border: 2px solid grey;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}

.box-card {
  // width: 480px;
}
.el-tabs--border-card {
  .el-tabs__item {
    font-size: 1.2rem;
  }
  .el-form-item__label {
    color: #000;
    font-size: 0.9rem;
  }
  .el-radio__label {
    font-size: 0.8rem;
  }
}

.el-button + .el-button {
  margin-left: 3rem;
}
</style>>