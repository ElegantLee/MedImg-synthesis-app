<template>
  <div>
    <div class="synthesis-setting">
      <el-divider content-position="left">配置项</el-divider>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="模型" prop="model">
          <el-select v-model="ruleForm.model" placeholder="请选择模型">
            <el-option label="MMNet" value="shanghai"></el-option>
            <el-option label="MMNet2" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="数据集" prop="dataset">
          <el-select v-model="ruleForm.dataset" placeholder="请选择数据集">
            <el-option label="BraTs2015" value="shanghai"></el-option>
            <el-option label="OASIS3" value="beijing"></el-option>
            <el-option label="IXI" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div class="mt-5">
      <el-divider content-position="left">结果展示</el-divider>
      <el-row type="flex" justify="space-between">
        <el-col :span="8" :key="t1" :offset="index > 0 ? 2 : 0">
          <el-card :body-style="{ padding: '0px' }">
            <img src="../assets/images/1_real_A.png" class="image" />
            <div style="padding: 14px;">
              <span>T1 图像</span>
            </div>
          </el-card>
        </el-col>
        <el-col
          :span="8"
          :key="btn"
          class="d-flex jc-center ai-center"
        >
          <el-button type="primary">合成</el-button>
        </el-col>
        <el-col :span="8" :key="t2" :offset="index > 0 ? 2 : 0">
          <el-card :body-style="{ padding: '0px' }">
            <img src="../assets/images/1_fake_B.png" class="image" />
            <div style="padding: 14px;">
              <span>T2 图像</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        model: '',
        dataset: ''
      },
      rules: {
        model: [{ required: true, message: '请选择模型', trigger: 'change' }],
        dataset: [{ required: true, message: '请选择数据集', trigger: 'change' }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss">
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}

.clearfix:after {
  clear: both;
}

.el-button {
  font-size: 18px;
  line-height: 2;
}

.synthesis-setting {
  .el-form-item__label {
    color: #fff;
    font-size: 0.9rem;
  }
}

.el-divider__text {
  color: #000;
  font-size: 1rem;
  font-weight: bold;
}
</style>