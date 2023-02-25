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
        <el-col :span="10">
          <el-card :body-style="{ padding: '0px' }">
            <!-- <img src="../assets/images/1_real_A.png" class="image" /> -->
            <el-upload
              class="avatar-uploader"
              action="#"
              accept="image/jpg, image/jpeg, image/png"
              drag
              :auto-upload="false"
              :show-file-list="false"
              :on-change="(file, fileList) => {return uploadFile(file, fileList, 'img_t1')}"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="t1Url" :src="t1Url" class="image" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <div class="imageCategory">
              <span>T1 图像</span>
            </div>
          </el-card>
        </el-col>
        <el-col
          :span="4"
          class="d-flex flex-column jc-around ai-center"
        >
          <el-button type="primary">合成</el-button>
          <el-button type="success">保存</el-button>
        </el-col>
        <el-col :span="10">
          <el-card :body-style="{ padding: '0px' }">
            <!-- <img src="../assets/images/1_fake_B.png" class="image" /> -->
            <el-upload
              class="avatar-uploader"
              action="#"
              accept="image/jpg, image/jpeg, image/png"
              :auto-upload="false"
              :show-file-list="false"
              :on-change="(file, fileList) => {return uploadFile(file, fileList, 'img_t2')}"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="t2Url" :src="t2Url" class="image" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <div class="imageCategory">
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
      },
      t1Url: '',
      t2Url: ''
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      // const isJPG = file.type === 'image/jpeg' || file.type === 'imgage/png';
      const isLt2M = file.size / 1024 / 1024 < 2

      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!');
      // }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isLt2M
    },
    uploadFile(file, fileList, key) {
      // let formData = new FormData()
      let img = file.raw
      if (key === 'img_t1')
        this.t1Url = URL.createObjectURL(img)
      else
        this.t2Url = URL.createObjectURL(img)

      // formData.append('file', file)
      // 传formData给后台就行
      // 比如
      // 接口(formData).then(res=>{
      // this.videoUrl=res.url
      // })
    }
  }
}
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

.el-button+.el-button {
  // margin-left: 0;
}

.el-row--flex {
  margin-top: 2rem;
}

.imageCategory {
  text-align: center;
  padding: 14px;
}

/* 图片上传 */
.el-divider__text {
  color: #000;
  font-size: 1rem;
  font-weight: bold;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 100%;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.el-upload-dragger {
  width: 100%;
  height: 100%;
}
</style>