# Cnhis design 业务组件库更新日志 <::title=日志::><::icon=ListOutline::>
### [3.1.16](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/compare/v3.1.15...v3.1.16) (2022-08-26)


### 🐞Bug Fixes | Bug修复

* **big-table:** 修复固定列导致点击锚点后滚动定位不准和触发滚动事件重复定位锚点的问题 ([9e0d68c](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/9e0d68c9625b5a88a5054733da49629fffe7e352))
* **big-table:** 修复多选框非编辑状态默认值显示错误的问题 ([0d17ed5](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/0d17ed5cca2cad4f17f8f705a250807d4adf8dec))
* **big-table:** 修复禁用复选框状态配置checkboxConfig失效的问题 ([0125c79](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/0125c799f415a404f17ccb44db6e3f6df566c5b8))
* **big-table:** 修复编辑表格问题 ([c2e0dcc](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/c2e0dccb4d311c5c930ad0238a01ef0fa05d30ad))
* **bigtable:** 修复checkboxChange的records参数丢失的问题 ([fc43c34](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/fc43c34096af318c3b6ba46f8d93ee9c511c4400))
* **button-print:** 修复打印身份校验报错的问题和一些代码优化 ([1eb5c70](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/1eb5c703f99bc883a47d5fc117853b07bde050d7))
* **fabric-chart:** 修复升温标识值错误的问题 ([556defa](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/556defa99541fcf5334c0a9ce25dc0e6d4352e4f))
* **fabric-chart:** 修复头部日期等文本更改水平和垂直排列的样式失效的问题 ([167cafb](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/167cafbdb404acba86aec30f2f64f9c181e0f814))
* **fabric-chart:** 修复温度刻度列表非整数时体温节点显示位置计算错误的问题 ([731b0b7](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/731b0b795d8dec237a410e06f71886c55ae59b15))
* **fabric-chart:** 修复降温/降痛符号配置失效的问题 ([a5edd28](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/a5edd28845fbe77e86643e8132606694b34aa11e))
* **form-config:** 修复一个宽度的样式问题 ([bad196c](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/bad196cd9a7a7c28c08c626eea2782f598d6b330))
* **form-config:** 物料区添加最小高度 ([6164ace](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/6164acecdbccd6a2d29987e95d3ff70b91ac2ccc))
* **form-render:** 修复CHECKBOX_BLOCK不生效的问题 ([014e349](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/014e3494b571b548ada06cf6474e7ceacae9731e))
* **form-render:** 修复linebar重构后的渲染错误 ([01d2c05](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/01d2c05331ffb9148d2a839c18e3ee0afd9c0145))
* **form-render:** 修复linebar默认显示隐藏字段判断错误的问题 ([9290b86](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/9290b86f4881b2c5893f84b6240861f0c9e8f93e))
* **form-render:** 修复slider控件特殊情况下出现NaN的问题 ([b5bdb83](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/b5bdb830ff439a78acdc7d57926783548e2b8777))
* **shortcut-provider:** 修复一个类型错误 ([30708e5](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/30708e51e100b4026d514018f2adcccd4acf51c9))


### ✨Features | 新功能

* **big-table:** 依据date_format自动转换Date与Time控件 ([892fe65](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/892fe65bf7f9edc1e6b8013ac56004d76bb83d2f))
* **big-table:** 新增锚点配置 ([8610cef](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/8610cef5ae82c266629e29ec98fa38ecd39d8779))
* **bit-table:** datetime类型控件自动生成timePickerProps ([f907a6e](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/f907a6e6337f3debdc1b56aa025596e6d756d3b8))
* **bit-table:** separate添加$_SEPARATE_DATA数据 ([9a25e81](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/9a25e819262dfb573e76e867086a0ad7138ed2dc))
* **fabric-chart:** 刻度增加头尾数值显隐配置 ([42b6ba6](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/42b6ba6b1e85073cf91abfa25f56496ec86afb8f))
* **fabric-chart:** 增加头部日期标题等可单独选中配置 ([12ea4c4](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/12ea4c40c5932b8954ca73f9e668233c68426e86))
* **fabric-chart:** 支持数字加文中类型日期配置 ([4feb465](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/4feb4657cb014422e2aa1cd6843a3e06b7ebf328))
* **fabric-chart:** 新增事件排版配置 ([d06caca](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/d06cacad72b964eb8d96d40865a987a9fc031c45))
* **fabric-chart:** 添加降温/降痛的提示信息 ([a41a1ae](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/a41a1ae23180975d3186b301ccd75464d63bd81a))
* **form-config:** 新增max-height配置 ([1ee4936](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/1ee49367aada24bb6120ab5241af4532422a8560))
* **form-config:** 配置项重做, 满足后端新配置 ([b2cc3b4](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/b2cc3b4aeff0a3d3f1ff23aa7f6d5613eed55a47))
* **form-render:** combination控件新增icon ([707231b](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/707231b866c191c1fb11e9f1905185ff60d45c83))
* **form-render:** datetime类型控件自动生成timePickerProps ([81bc032](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/81bc03270aa7291ae60549c0382abd40b96fd397))
* **form-render:** date控件自动数据格式化 ([e3a8c9d](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/e3a8c9d592c9c59e3e56f955a90a9e18cfa7ddf4))
* **form-render:** 业务联动与formChange触发顺序修改 ([d7bacd0](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/d7bacd0cdee624790c2de0ce5d77ce0f214ac8b1))
* **form-render:** 严格身份证校验 ([0e1b53b](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/0e1b53b16bef2c692eb2c2a784f6a8a7606ff8a0))
* **form-render:** 新增businessFormatter API用于格式化业务联动值 ([3515f5d](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/3515f5d11004a18a798061452082e2dc1cad867d))
* **form-render:** 新增COMBINATION控件的非json模式 ([c39ce6c](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/c39ce6c4fb82822fb49daa8ae05806cec80e553d))
* **form-render:** 移除business-filter参数, 新增age与birthday的业务联动 ([0094684](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/0094684cc35d6f909208503e0d8b5df8f0c644be))
* **shortcut-provider:** 事件添加preventDefault ([29db099](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/29db09983ff9ca776972c4b4afb8f94ed8d56380))
* **shortcut-provider:** 支持keep-alive生命周期 ([cb1cbfa](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/cb1cbfa23aa60023f0b82f3f39e5662542ceca90))
* **shortcut-provider:** 重写快捷键组件以适应业务变化 ([6fda698](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/6fda69862845c626d0c4a2c66d4d934dbf856b4f))

### [3.1.15](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/compare/v3.1.14...v3.1.15) (2022-08-19)


### ✨Features | 新功能

* **big-table:** separate控件弹窗依据高度变换位置, 提供手动关闭弹窗方法 ([7636b51](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/7636b517006d62caac85bfd2cce2713b8340072e))
* **big-table:** 合并attrs中的checkboxConfig/radioConfig/tooltipConfig/scrollY/expandConfig ([ea1d329](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/ea1d329e3953045b3300e613ad2b499695cf4bfa))
* **big-table:** 增加icon(圆点)为十六进制色值的显示配置 ([30754a9](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/30754a9b57df7e0904d6951ed1002e7a29e88c87))
* **big-table:** 新增dateType参数用于调整date控件类型 ([3b4fc7b](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/3b4fc7bdaf10d581a0598f9fcd0462f95f750cd2))
* **big-table:** 编辑表格表单类型支持外部props属性配置 ([e6f12fc](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/e6f12fc8be5706cb911e6fe17b213fb90f9a9dcd))
* **big-table:** 表单风格配置支持suffix ([cee1837](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/cee18375cd5f1ec06a138307927bfc0ba5943cdd))
* **big-table:** 表格添加annotation功能 ([8f44b33](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/8f44b339ec86b3b341b6e0d138f0bd15829fcba9))
* **button-print:** 更新文件类型 ([db21a87](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/db21a87c13ecea127c9a500482534d894e45d84a))
* **fabric-chart:** 刻度标题支持换行配置 ([0e7fa39](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/0e7fa39f299264a6c4515bb0d92d5061e01eb5ea))
* **form-config:** 提供FormConfigExpose类型 ([ce5c875](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/ce5c8758103e0460119f9ed83fdfe6f8a6025b46))
* **form-config:** 提供validate校验 ([e9dfafd](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/e9dfafdd48cc60b3b2535cc8f008cb3cff9df524))
* **form-config:** 新增form-config组件 ([ff12afe](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/ff12afecc7c3df321a459478bf7932bd95f53670))
* **form-render:** lifeCycle新增fieldKey字段 ([36594fe](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/36594fe6691c783a871ed07491ea63abe6a0d2ba))
* **form-render:** SELECT多选新增对应类型与样式覆盖 ([e109e6c](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/e109e6c31ae99b51600e9734498fdf9ee46ed747))
* **form-render:** 新增combination控件的校验及一些细微调整 ([b52a503](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/b52a50300eb9bb915c05935d28a7100e4a9a6b10))
* **form-render:** 新增dependKey中指定强依赖 ([1d7f6df](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/1d7f6df9aa41919c9803115446a2c21f9871757a))
* **form-render:** 新增lifeCycle配置(beforeRequest/afterRequest/onSetup) ([239fb27](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/239fb278c7e9378d0ecdd22d4c89e55462ca8ef1))
* **form-render:** 添加lazyRequest参数用于控制请求发送时机 ([387edfa](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/387edfa133b66654b18813c448561a742c78104b))
* **shortcut-provider:** 重写修改快捷键逻辑/添加对应回调/去除本地存储 ([d6a9dfd](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/d6a9dfd67c2c6460bf47bd0666ef362f49125604))


### 🐞Bug Fixes | Bug修复

* **big-table:** separate弹窗修改为manual模式 ([84e6750](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/84e6750627a92780b13e74434ae96b09555f060a))
* **big-table:** 移除annotation默认值及添加单列annotation配置 ([4d30165](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/4d30165683ea78cdefc4e3c68ed1715017aa9604))
* **fabric-chart:** 修复不同项目y轴主刻度间的网格数值配置失效的问题 ([6647846](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/66478469fbbf17cd16dee3591b2849643f5b8a11))
* **fabric-chart:** 修复体温单所有事件禁用状态配置失效的问题 ([00e2bfe](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/00e2bfe8c85910ec5a3ef522ff6c51568614afa1))
* **fabric-chart:** 修复疼痛等级刻度标题可以拖动的问题 ([0a4e82a](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/0a4e82a8f636a70759393c79ccff42f210afec81))
* **fabric-chart:** 修复脉搏和心率不在同一时间段测量的情况下阴影区绘制失败的问题 ([f087a11](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/f087a1122f81fb903dd3488761205fc0a4785a13))
* **form-config:** 调整宽度可选值 ([1eb3b8a](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/1eb3b8a02e97457bcae168a915dbd3a8971c99ae))
* **form-render:** COMBINATION控件默认值在第一组数据中失效的问题 ([db89a9c](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/db89a9c5b940e5721376107b2acc46423050a639))
* **form-render:** DATE 组件新增month type ([4e90749](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/4e907490a42c1949001a98b454b92750a5ab0b84))
* **form-render:** SELECT控件lazyRequest为false情况下dependKey对应值修改将触发请求 ([5e18be2](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/5e18be2a99d8d5f41106e0cfac303b6d2a06187f))
* **form-render:** 修复COMBINATION控件无法设置默认值的问题 ([d509e64](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/d509e64425867fb2b9359309db20bc5cde05f7bf))
* **form-render:** 修复COMBINATION控件设置多组JSON数据解析错误的问题 ([9fb97f2](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/9fb97f2ce47df6719e18bedb7fe64cbedbcd64a5))
* **form-render:** 修复date控件值修改后不触发校验的问题 ([2eab979](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/2eab97976533d91534a0c341734b6b0a8bf1d48e))
* **form-render:** 修复input-number在inputGroup中宽度不足的问题 ([58aed57](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/58aed57dc369781681c3dfe8493b0398e1a22347))
* **form-render:** 修改一个类型限制, 由enum改为值的联合类型 ([d66c862](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/d66c8628e2dd7e53c7e6a53c459b79bce9f23eba))
* **form-render:** 简化FieldItem类型 ([41efbc7](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/41efbc7b9b15f164a9da55a68e82d5236961f5c3))
* **info-header:** 修复一个iconfont引入错误的问题 ([f240936](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/f24093609ad16779868e412597e0fdf480d4f039))
* **info-header:** 修复一个类型错误警告 ([06ccccc](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/06ccccc27fa70c0c03f9ce07aed240dc8c980bf9))

### [3.1.14](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/compare/v3.1.13-beta.10...v3.1.14) (2022-08-13)


### 🐞Bug Fixes | Bug修复

* **big-table:** 修复formLike转化option的问题 ([23df020](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/23df020f5457b2797aaca76446db7a426d16996b))
* **big-table:** 修复separateSlot中value触发与渲染机制 ([e201baf](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/e201bafa2ae1010bda983a37b6178fb7265d5e24))
* **big-table:** 修复separate组件无内容时高度不足的问题, 微调宽度计算规则 ([c3a415b](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/c3a415b2e89ec13eddc7636a1b49419337e87f23))
* **big-table:** 修复spanMethod不起效果的问题 ([176008d](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/176008dbf66df1a9bc6fcb53dc08eb84620f860b))
* **big-table:** 修复一个filter全选状态错误的问题 ([b1596c0](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/b1596c01cebc7470e4d18b42824a78438c09ca25))
* **big-table:** 修复全选事件未触发的问题以及复选框改变触发事件新增暴露records ([c9258c0](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/c9258c04f12336a6608579734cfd658dad5cf057))
* **big-table:** 修复再次点击表单未触发focus的问题 ([3e20c0b](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/3e20c0b4f5d4269b39e89d47bc9f4056183f4f5b))
* **big-table:** 修复列筛选值关闭筛选后被清空的问题 ([7857ff9](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/7857ff9bcb56eee4532faf6d9873c69da07c8b1c))
* **big-table:** 修复合并单元格后input宽度过长的问题 ([47d582c](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/47d582ce5edc16a2bf4d496c1319628551a1662a))
* **big-table:** 修复输入控件每次只能输入一个字符的问题 ([bf3c02a](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/bf3c02a361d7885ce3e93912ddd876a76669e049))
* **big-table:** 修复配置了带颜色的圆点未能正确显示的问题 ([e9415e2](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/e9415e223f674ed3885087d392861aafd6294b5e))
* **big-table:** 添加默认高度 ([828f396](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/828f3964264f2fa1b6a9ade197ffaf492ddacea0))
* **button-print:** webview环境下新增data预处理 ([5a390a1](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/5a390a12efa5687459797ecc88ba8d5f24753ac7))
* **button-print:** 修复一些类型错误 ([e586f59](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/e586f594571bf6922481b40c5665b9729e8d6193))
* **button-print:** 修复获取打印格式失败时多次添加option的问题 ([e167bfd](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/e167bfdbeb0886520446d5779ee98358c3db9edf))
* **fabric-chart:** 修复无法清除选区的问题 ([b180919](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/b180919a3291fa96b2471dcde897a1781efbba24))
* **fabric-chart:** 修复脉搏短绌的阴影部分初始化超出脉搏网格绘制区的问题 ([fec057c](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/fec057cd7e9be7ca97b3c2b2ec48d9bb7136efa1))
* **fabric-chart:** 左侧项目标题样式配置错乱 ([810df58](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/810df58e81decf46279b620e0a63f76b6479bc45))
* **fabric-chart:** 拖动节点后不符合新增条件则需复位 ([95b8759](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/95b8759fbe01dc95101874c1526203a648359db3))
* **form-render:** 修复BUTTON类型控件componentProps中声明的click事件会触发两次的问题 ([ac9c665](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/ac9c665657964466143381d1c71cf8908adec8f4))
* **form-render:** 修复dependKey为映射数据时依赖关系失效的问题 ([da3dd70](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/da3dd70a461ee42cc4f678aa378ac5039b256324))
* **form-render:** 修复suffixConfig为对象类型时key值未处理的问题 ([5f127c4](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/5f127c443231c1f60db60214940e273b97143144))
* **form-render:** 修复suffixConfig在使用带 '.' 的val_key时默认值设置错误的问题 ([b945bca](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/b945bcae22ebc237711cf2aa4819d79ae638d5a9))
* **form-render:** 修复一个select控件在选择时选项闪烁的问题 ([e53130d](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/e53130d0081fed6da05db29a6dae61e54ce232b8))
* **form-render:** 修复一个suffixConfig的类型错误 ([f651fb9](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/f651fb97848b7740660e3771282a181322b52daf))
* **form-render:** 修复一个当linebar的val_key以数字开头时dom查询错误的问题 ([0fc967f](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/0fc967f9f5493572b1b4f9669427344ca785cb85))
* **form-render:** 修复一个手动指定了容器高度后表单item样式错乱的问题 ([16ca11f](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/16ca11ffad485c02861d49072040a368ee5c8b66))
* **form-render:** 修复一个类型错误 ([8e8b8f7](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/8e8b8f7b1abbb36e50a21732c13c1cb2bc3d50f9))
* **form-render:** 修复级联控件不展示placeholder的问题 ([101f794](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/101f794ea9e52c87fe6ab24a7168173eb70ea80e))
* **form-render:** 修复锚点id修改遗漏项 ([e40ea77](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/e40ea776fc44201f914d49cdfa5d5ea9d333f77c))
* **info-header:** 修复一个路径引用的问题 ([c216bbf](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/c216bbfc8b13184968fed3dda2707091643a34f0))
* **info-header:** 翻转compact指示箭头 ([f56a6d4](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/f56a6d4fa978682c584f5a0ecbff6bb8ec192b24))
* **md-parser:** 修复md解析时对模板字符串插值语法的错误处理 ([81aead3](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/81aead30921a1366e3e298f259bf8decf1f278b6))


### ✨Features | 新功能

* **big-table:** input控件新增componentProps参数 ([e37f711](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/e37f711a423de3a75c67d3ce513ed1eb5cf7b07d))
* **big-table:** 导出formLikeConfig相关钩子 ([f110199](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/f110199067ee29458a0b6bd8844ad7ae36ee0c14))
* **big-table:** 接收checkbox-config参数 ([a564b9f](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/a564b9f1725e1d7cd12bf0a2f96a148ccb878d64))
* **big-table:** 支持数组分行及separateSlot/separateFormatter ([3eb7542](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/3eb75422b6574a8bccdb1bb14f49aec3943dba4d))
* **big-table:** 新增checkboxBindRowClick配置 ([8547aea](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/8547aea5e8912328434a2395e913241916b0bdc1))
* **big-table:** 新增number/input控件formlikeconfig校验规则转化, 新增switch控件及其option转化 ([1c25f1f](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/1c25f1f58849dd5f378723da61b9f5b5caa5e6ff))
* **big-table:** 新增time控件 ([72b3596](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/72b3596d3f37527eea0e859f370cf95a01fbaa1c))
* **big-table:** 新增单列showOverflow/resizable配置 ([591e1a2](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/591e1a2ef398c35111cd5d1b238e2bc496aa1f7d))
* **big-table:** 新增对INPUT/DIGITAL的转化 ([b0d652b](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/b0d652bafe4398a0013a748ef716f6371b70984a))
* **big-table:** 新增对表单风格配置的hook支持 ([5547d9d](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/5547d9dc53531fe0ef162f7a3432591e1b11cf25))
* **big-table:** 暴露列配置和行数据的渲染方法 ([6376309](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/6376309ce8b165d7f57bfd3a048c6e61d8cb17f1))
* **big-table:** 点击行可不触发勾选复选框等事件配置 ([0254132](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/02541321e532c042d78e1b582a0088e2ab0d00a8))
* **button-print:** 当没有安装插件时弹出message提示 ([f809109](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/f80910922a925da434309de89e37d0333b5ee46d))
* **button-print:** 暴露打印实例 ([f347ee0](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/f347ee0d78638a6ee4e454c13b44d36b37b262f5))
* **fabric-chart:**  添加不同类型温度可连线配置 ([5f0fd55](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/5f0fd556f60dbf15133497750b62f68905ccdda9))
* **fabric-chart:** 增加体温单定位线和主刻度x、y轴分割线样式可单独配置 ([02fb7a1](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/02fb7a198a033c33c5bc4bc2604fc32cc3edaf40))
* **fabric-chart:** 添加主动与被动调用选区事件 ([8b7969a](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/8b7969a086a6ad0ef62513bdfaebd214b00e98f8))
* **fabric-chart:** 添加可余数网格配置 ([800ed72](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/800ed726d38b1115979b8c029c724778c34b65c0))
* **field-set:** footer 自定义 ([777ccc1](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/777ccc1812d06b93d703fc511b895a0ff3542346))
* **form-render:** SELECT控件在dependKey对应表单值发生变化时, 清空值与列表 ([2b41ba2](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/2b41ba2738dd0099dfe9e4743a0049e48ab1e1a5))
* **form-render:** 内置TEXT控件支持显示表单value值 ([ec73d9d](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/ec73d9dbf5ad3012704ffd8af43b3357daa226b8))
* **form-render:** 新增inputNumber配置 suffix/prefix ([2b49342](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/2b49342f3033ada2325f8708ad6300277eda3d88))
* **form-render:** 新增maxGroupNum字段用于限制COMBINATION控件表单组最大数量 ([b6fa8aa](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/b6fa8aa70b312e81541874919ed8fcda6b2194e8))
* **form-render:** 新增select/cascader对key映射的支持 ([0a3567b](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/0a3567bf03c2d01cc290786683e998e24f60fbb8))
* **form-render:** 新增类型注释 ([af101fc](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/af101fc1105cab04390780ab9daec6c8b17b3321))
* **form-render:** 添加一个异常的类型转换, 在RADIO控件中, 任何value都将转化为字符串值 ([06faa79](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/06faa79e250d83441cbb5085d5ee9303707587b7))
* **info-header:** 新增info区额外的tip功能 ([0cee5c8](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/0cee5c88d98711bd66974dcda7d1d56fa7448bbc))
* **shortcut-setter:** 新增operation, placeholder与editPlaceholder配置, 调整一些行为 ([48b7f48](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/48b7f482d9718bc74d3ee4be977e4ae64517c30f))
* **slot-render:** 更新渲染逻辑, 移除functional参数 ([be64260](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/be642608e2964003ccb4b5f7fc2b8126ead252f2))
* **steps-wheel:** 添加最后节点渲染控制，nodeTipBox插槽增加节点id传递 ([071c4a7](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/071c4a7d55cf9c9cae423794d3969c0e9a2af297))

### [3.1.13](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/compare/v3.1.12...v3.1.13) (2022-08-05)

### 🐞Bug Fixes | Bug修复

* **big-table:** field中添加setting字段 ([1bd22b9](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/1bd22b9e59a4a018483a3295378d8ca86203cd8d))
* **big-table:** rowConfig合并逻辑 ([028859f](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/028859f2a61299c3ec7ceb19b95e34d33a5f92fc))
* **big-table:** 修复一个树表判断条件 ([46807f9](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/46807f9d8906fef498831e4ac2bef0f4b56b587b))
* **big-table:** 修复一个空值导致的问题 ([c6b3365](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/c6b3365b97b2bfe3fa5f713faaad4d77b797b641))
* **big-table:** 修复表头文本未垂直对齐 ([9e4fb8c](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/9e4fb8c53b3d146432d1252a91e39bbae5d11f04))
* **big-table:** 修复表格筛选对JSON数据的处理 ([2e0c337](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/2e0c3378b8ae7a2cd18bc99b9fcdccd7444528be))
* **fabric-chart:** 修复序号设置过大导致竖行排列叠加的问题 ([3b2121a](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/3b2121a0f42a3971ec0ee2346a7b6a8c9ff04202))
* **fabric-chart:** 修复时间刻度无法匹配精准时间段配置 ([d04ec32](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/d04ec324f20d13cdbdc2cfcb1ed0c3093d31c177))
* **fabric-chart:** 修复重叠节点由于层级问题无法显示的问题 ([f932773](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/f932773afaf94f7f936e9a1492dbdf121cc8625f))
* **fabric-chart:** 修复非重合节点开始/结束无法绘制成阴影的问题 ([0cc986f](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/0cc986fe17a4376558bd0ab47c08bbdb8a8acebd))
* **fabric-chart:** 左刻度栏宽度需为真实宽度，否则绘图区以下血压等列宽会错位 ([f743c55](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/f743c5558d2074469c94a80785d40e2d72adb65d))
* **form-render:** 修复checkbox提示弃用onChange事件的问题 ([811676c](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/811676c1b2c7e699cf06c7a5ed55c180d1cd75ad))
* **form-render:** 修复label-placement='left' 时required红点错位的问题 ([ae0609c](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/ae0609c9e0414731c3ad58e9779aecdef61a0a40))
* **form-render:** 修复select/cascader控件不触发校验及访问状态一直处于false的问题 ([c8afed0](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/c8afed0d41d419cc0d73378bf1d9674a18e4b907))
* **form-render:** 修复一个resetFields时发送多余请求的问题 ([26053f3](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/26053f3a1359c1f369f52b678c7b6260eec13b70))
* **form-render:** 修复一个当linebar的val_key以数字开头时dom查询错误的问题 ([1e5f12a](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/1e5f12a02d67dedae11722a6f77a422fde8eaed8))
* **form-render:** 修复一个手动指定了容器高度后表单item样式错乱的问题 ([61b10d1](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/61b10d19ce4da9f9830fd33996b78bdade1887eb))
* **form-render:** 修复顺序问题及slider组件对字符类型参数解析错误的问题 ([631d398](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/631d39828f39dbda9968169638bca7bc92f7ea77))
* **form-render:** 反转is_empty配置的语义 ([140a163](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/140a1633dbddaf26cde4f074b255c458e9884549))
* **scale-view:** 去掉对title中.的处理 ([99250f3](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/99250f35105d469c97ba616c264164f6f4b695e1))


### ✨Features | 新功能

* **big-table:** 增加表单输入框focus事件暴露 ([841a74e](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/841a74e144b47c7b60d6d6bd685416fc6efb2ab4))
* **big-table:** 新增对表单风格配置的hook支持 ([7db0834](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/7db08340c4a0bf893ef9989c4c8fdcf23761a223))
* **button-print:** 添加对webview环境的支持 ([66ba266](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/66ba266e61e8a355b582004cee96e477c9495203))
* **fabric-chart:** 事件添加单独样式和顶部高度配置 ([9b95886](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/9b958861cd33969611c268975c7166149044a29f))
* **fabric-chart:** 优化刻度绘制计算方法并增加疼痛等级刻度绘制 ([0211e2f](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/0211e2f75942be5e0e416585055c380413ce0cd7))
* **fabric-chart:** 增加体温单定位线和主刻度x、y轴分割线样式可单独配置 ([bc60cfd](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/bc60cfd00a23f875d3ee8ed96a421ac65f20503d))
* **fabric-chart:** 增加日期yyyy和yy型配置 ([4bcf402](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/4bcf4028bfdd29e75de24f236dc0bf08982281c2))
* **fabric-chart:** 增加日期等标题样式自定义配置 ([06f2eae](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/06f2eaeb3544930f61fd8b4d528805035b662c9c))
* **fabric-chart:** 添加x符号图标和重叠符号图标绘制 ([2dc184e](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/2dc184e331ed63e5970565c85f03b6d32df7f31c))
* **fabric-chart:** 添加左侧栏刻度与数值的配置支持 ([d349c33](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/d349c33f8516ea9b865fa4717e00a81edc208bd9))
* **fabric-chart:** 脉搏短绌添加颜色填充配置 ([0ca2777](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/0ca27774499f6aff9306aad16a549cb0c934e30f))
* **form-render:** date控件添加时间校验, 修改日期校验逻辑 ([c370765](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/c370765e758fcbbc5534d293fe5f8a47190e1ee8))
* **form-render:** 完善类型声明 ([35ba87e](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/35ba87e3d369186b2ddf26d9eb971b52bc5d96df))
* **form-render:** 完成批注功能 ([8b1ffc8](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/8b1ffc83022457db719210d5156f675f9e132790))
* **form-render:** 新增queryWidget控件查找API ([55224c6](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/55224c6931af9aa032c3236d4e0c6f729bf5bab5))
* **form-render:** 略微调整组件基准样式 ([13ca27d](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/13ca27d15779d4c1b9ad7ffe4b2a65ee3f68c02d))
* **form-render:** 调整组件基准样式 ([3beaa1c](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/3beaa1c6789365144c3b365c40a4e6c2e703ab4c))
* **shortcut-provider:** 完成基本快捷键绑定 ([bc9c0d2](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/bc9c0d2c45b5cc5c4b9223e81982ad1594608c9d))
* **shortcut-provider:** 配套组件shortcut-setter完成 ([88ba8ee](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/88ba8eeacaf32b9a39f0698e4a957db610d8cb9a))
* **steps-wheel:** 新增换行多步骤组件，时间线添加额外文本展示 ([db72009](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/db72009697ed97d6d05f7f22151dce985c7933df))

### [3.1.12](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/compare/v3.1.11...v3.1.12) (2022-07-29)

### ✨Features | 新功能

* **big-table:** 完成换行功能 ([f81f40c](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/f81f40c577ccb28205bf4593c753a6645f11ee4a))
* **big-table:** 绑定$attrs, 对外暴露vxe-table所有api ([319c0bc](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/319c0bccb70a86807e6fad60c12b102848e37f9a))
* **bigTable:** 增加树表虚拟滚动效果 ([8c8957f](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/8c8957f80621116db5a8c61369c717d6621ba989))
* **fabric-chart:** point增加拖动事件 ([adab6d8](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/adab6d86eb8a163cd4413b9f9bb72036e7046da4))
* **fabric-chart:** 体温单中间节点渲染，待完善 ([ebc4946](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/ebc49468864b64cd6c67eb8286bb57efebda3745))
* **fabric-chart:** 增加hover提示弹框 ([988aa4e](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/988aa4e2e3d314e791967b1b131e103ea72a7a42))
* **fabric-chart:** 增加头部的住院日数和手术产后日期部分 ([113e886](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/113e886ce9903c0e0dd50ac0f81acfadf2e37034))
* **fabric-chart:** 增加脉搏短绌阴影绘制 ([065c732](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/065c732dc2a388977a0e1f53ec76f26c5297e16c))
* **fabric-chart:** 头部行支持上下排序渲染 ([f4da258](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/f4da258c138d00c4038f02e507aa4bc95dbd2eca))
* **fabric-chart:** 完成阴影线段绘制 ([22200c3](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/22200c3e764879bf54130f60054b1953aaaa31ca))
* **fabric-chart:** 断点配置和节点整点计算x坐标调整 ([f06528b](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/f06528b75dc91c4e667b6bb22e031f11936c5a11))
* **fabric-chart:** 新增疼痛等级 ([3e06745](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/3e06745c08b1e4496ca3d13ceebec77a0dcbd003))
* **fabric-chart:** 日期、住院日数、手术产后日期、时间等，配置显隐入口 ([c1ec040](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/c1ec0408d1229ebacc3870ed97fc2c342227af40))
* **fabric-chart:** 添加右键编辑节点功能 ([e10ba36](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/e10ba362bf536b3e0181b7fe3a1c33f93e965ece))
* **fabric-chart:** 添加左侧折线图标总览、拖动新增 ([64497bf](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/64497bffcc9b761319c31ddf269f96eba48790f0))
* **fabric-chart:** 节点moving失效，替换mouseup:before ([6f3f226](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/6f3f226a3f37b6198eb32018ebaafc0c30159327))
* **form-render:** cascader控件在转换叶子节点后自动关闭 ([101ec73](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/101ec73623cbadd8d9a656e32aae49e64301d0c2))
* **form-render:** date控件添加时间校验, 修改日期校验逻辑 ([333617f](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/333617fdf3e6b4021b2c535ffa6c729e058cb2b5))
* **form-render:** field-item支持componentProps预设 ([0985259](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/0985259961cc324acb59e5b42b6436f2525bb694))
* **form-render:** 内置TEXT与BUTTON控件类型, 并添加相关文档 ([6e89f04](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/6e89f04e12b6b5eb69468e91c54c7ccbbc448b4c))
* **form-render:** 新增4个默认scope用于基础业务判断并更新文档 ([72e4cd3](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/72e4cd34b586849602c5291574239c9a6056b79a))
* **form-render:** 新增业务绑定类型age_unit ([8c8799d](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/8c8799dae8dbbebdda7398ba0ebef9ec854c74f8))
* **form-render:** 新增生日与年龄的业务联动 ([649be10](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/649be10af2d612d1608b19c4f8b930647db7013e))

### 🐞Bug Fixes | Bug修复

* **big-table:** 修复表格组件在vxe-table高于4.2.5版本下渲染失败的问题 ([df58edf](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/df58edfaeb5051060baac29e4a291f913a7d3b98))
* **big-table:** 默认编辑状态配置修改为manual ([8824d9f](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/8824d9feda00abd9b88f32874ed918a047a7a5a0))
* **fabric-chart:** 修复计算阴影边角坐标错误的问题 ([6496f57](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/6496f57c53cf24783c43be3bd400d5bd9735cbc2))
* **fabric-chart:** 修复阴影绘制缺陷 ([f27ce90](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/f27ce90f1e1c44703962cd43d31b301088a003d2))
* **fabric-chart:** 右键输入框操作会隐藏弹框以及添加数字内容上下限校验 ([4293f00](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/4293f008874ba7a2cf0ab0ac9d676a152b917c01))
* **field-set:** 修复一个导致dts编译失败的类型问题 ([4cc7216](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/4cc721624dab0b95f78855618296cee26438e22a))
* **form-render:** 修复checkbox提示弃用onChange事件的问题 ([76e209e](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/76e209ec48fd493c749331e5736200f7fd986c09))
* **form-render:** 修复COMBINATION控件使用表达式语法是出错的问题 ([104a7e1](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/104a7e124f7f20c5f95dbc50424a1dcab79948a2))
* **form-render:** 修复select/cascader控件不触发校验及访问状态一直处于false的问题 ([657c5d0](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/657c5d08f3215735547cf6289278afb51ddba1de))
* **form-render:** 修复顺序问题及slider组件对字符类型参数解析错误的问题 ([efa0c94](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/efa0c9420ed37deb556669d28de53c2c2bf46b59))
* **scale-view:** fontSizeObj取值修改 ([f478b15](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/f478b15c6d0f080b035d2b9d381dc0181c08b6c7))
* **scale-view:** prompt-message style ([9858cd1](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/9858cd143c82b6c5ed65f4fa70ca9654f9512705))
* **scale-view:** style fix ([ef29db3](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/ef29db3bcd9f78beed52ace2bbfcfb28b4429c72))
* **scale-view:** 下拉选项动态数据源转静态取值 ([e309bc7](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/e309bc72c1804b52edea13bb66f42841b0d22e3c))
* **scale-view:** 分线栏没有内容也要展示分割线的 ([a5ce974](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/a5ce97465dcfb5f8d62b38f4170c1c4c33f26a06))
* **scale-view:** 初始化参数解析fix ([a08b62c](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/a08b62cb1306e40657986a48194f6a438d3a1fa6))
* **scale-view:** 提交提示语fix ([25a21bf](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/25a21bf43f2a79af21dc1ee3b900e6b5f0e9221c))
* **scale-view:** 查看提示对话框右上角关闭图标显示异常 ([44740ca](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/44740ca09da9c1b4c6e44bb9462164236ee74d14))
* **select-label:** 按需引入弹窗放大缩小图标样式异常 ([1e768af](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/1e768aff137b312a5823f340a88df0fe5a226d1f))

### [3.1.11](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/compare/v3.1.10...v3.1.11) (2022-07-22)

### ✨Features | 新功能

- **big-table:** 下拉选框支持多选、支持自定义单元格样式 ([640667b](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/640667b427535a647e19539e12936d49eceaa4c6))
- **big-table:** 增加空内容插槽 ([71d6ac8](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/71d6ac89c343b413bdeab75741ce34184d70e8d2))
- **big-table:** 新增右键菜单功能
- **form-render:** 新增自动锚点功能
- **form-render:** 新增 resetFields 功能
- **form-render:** 新增自定义布局，支持表单结构自定义
- **form-render:** 新增 html_type(LINE_BREAKS)
- **form-render:** 新增 cascader 控件的枝干节点在数据源深度不足的情况下自动转换为叶子节点

### 🐞Bug Fixes | Bug 修复

- 【量表抽离】-分片上传视频，入参异常 ([cc67135](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/cc67135d616480513c92d75b8ae1982342e0eb7f))
- chunk-upload 预览删除按钮样式错位，分片上传完成获取不到数据 ([8bde786](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/8bde78657b8f28b6e69e66c4b28d6fef96ec9a6c))
- chunkUpload 上传限制 ([94df7a8](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/94df7a81acbd2b67bf89f6aeab628cb902d5aefa))
- **form-render:** 修复 resetFields 时没有初始值会导致 dom 更新失败的问题 ([11f7d3a](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/11f7d3a51efa2d469510a328079242776b652724))
- radio/checkbox validate fix ([e2c5199](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/e2c51991953a49b4103bb2b4215c4ad642d5e5fa))
- scale upload 优化 ([bbb13cd](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/bbb13cd561ea86d53f9000a442ca2ad2f13db9f6))
- scale 分栏线样式 fix ([36d5d39](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/36d5d395203a178eedc384be333bc2e881d23789))
- scaleview 添加暴露方法 ([8febfee](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/8febfee6a20a28f5c227934298971ae983a46af6))
- **select-person:** 检索操作后 check 事件未同步已选数据 ([af6a514](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/af6a51442df2e860471154c693ed81b256db48e9))
- 分享的量表隐藏取消按钮 ([185d0e7](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/185d0e7737916cdfbce824d990dd3d122e01ed59))
- 检索之前已选的选项失效 ([3ffd019](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/3ffd0197e552530ff28f5dfdc94dc9df11729013))
- **big-table:** 修复表头 filter 中搜索功能失效的问题

### [3.1.10](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/compare/v3.1.9-beta.5...v3.1.10) (2022-07-15)

### ✨Features | 新功能

- bigtable 支持配置行类名 ([e7fe93e](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/e7fe93ee9fab0f4c309f2bac1fa29c2f9a800e41))
- fabric-chart 初版 ([19ba264](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/19ba264156746e10f664c77e5db18139d3c1d011))
- 体温单 left 部分，待完善 ([0ac4634](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/0ac463403d907fe6d5076789b10de8fa027d67fc))
- 体温单头部内容 ([8f207eb](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/8f207eb99bc4c4d371c1289dc3619bf842f4c81b))
- 体温单待完善 ([a34f6c2](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/a34f6c2ac16bc725eccb68695ade065d43ae2148))
- 基础网格 ([6ecab41](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/6ecab41877e34379fb61c8c8ac42f9b73ee25639))
- 打包时对 png 进行 base64 转化 ([22b56ff](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/22b56ff3b9cd79b60efda096aa594206d14bf94e))
- 支持 codesandbox/调整 build 文件类型与路径处理逻辑 ([0b14e5c](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/0b14e5cebb0d5d84e93422fdac3a1966c81ae290))
- 暂时隐藏 codesandbox ([21c1e99](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/21c1e991fd211b817cd251845410c091bd6a1198))

### 🐞Bug Fixes | Bug 修复

- datetime 日期修复 ([acef606](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/acef606cb5e0771275c0615a5f346a6f1074cbc2))
- field-set 打包缺失 d.ts ([de4e72e](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/de4e72e45a7ae4a4183abb059d24297d73b8bb26))
- label bugfix ([f268895](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/f268895a08c1b1d2c21cd301a70388068bca50ab))
- label 删除:key="theKey" ([30d002d](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/30d002dab4e66d74707882bfd5e08be5aa6c15a1))
- radio checkbox datetime 默认值 bugfix ([ba9e3f3](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/ba9e3f3b1e200eca815f434c8676580aabb1799f))
- radio/checkbox input focus 的时候不更改选中项 ([5a6f9da](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/5a6f9da9f93e55e6768aa0232283bfe676113d72))
- scale bugfix ([e820e20](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/e820e20fc8d0816df06807e1660d2c7fb469aa49))
- scale datetime 添加空值判断 ([df35a95](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/df35a951fbfb16a1e7a9cfdab7daaae51097a88e))
- scale noBtn 不校验 ([27e1f34](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/27e1f342e2f8ce9250e2cda4857b4c3a870c812b))
- scale props bugfix ([0a1adb6](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/0a1adb66f85e0904950004d2820ff49525b4f3b7))
- scale state 为避免引用地址函数返回 ([a2ad74d](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/a2ad74d0c2808f8d0f39880eeb5f6432209239d4))
- scale style fix ([a5f66d7](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/a5f66d74bfcaa2a9a12a88de44b877e37a6e3588))
- scale-container 样式 ([3a8b1d1](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/3a8b1d1217bbc1497f33f14f8a28fb77b27632ab))
- scale 样式修复 ([e0fe4a3](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/e0fe4a31845b22a03b93f396398fe8fe5e87f4ac))
- settingView ref 类型错误 ([4dc831b](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/4dc831b9a913174987f99dc87c3edf4422f697b8))
- upload bugfix ([207fe67](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/207fe67a7e35caa4c863048602bd8dc35f11b940))
- 修复 fabric 打包类型错误 ([c78cefb](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/c78cefbc61c072e59f5ac2f8207b84ee667e133c))
- 全选不应选中禁用项 ([689bfbc](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/689bfbca86ac87c6db300a72711521670e59136b))
- 填写量表 bugfix ([efb0d72](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/efb0d7210f7c33e89434c230f2ca55dc57d7ce59))
- 标签选择弹框最大化图标样式错位 ([6f8bc49](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/6f8bc4975a37bd6554c612d26055ce7345b43e1b))
- 移除 field-set 中的两个类型 ([f0173e1](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/f0173e1e0fe6bed135e488620f2a1496a7cf043b))
- 补充行配置类名 ([798a44c](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/798a44c5b9cd0288d548a0c5c55909bca06b2b2e))
- 表格全选后样式多余 ([74ce6db](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/74ce6dba9c24e0403684c33499eb1e448d978640))

### [3.1.9-beta.5](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/compare/v3.1.9-beta.4...v3.1.9-beta.5) (2022-07-12)

### ✨Features | 新功能

- 增加 fabric 依赖 ([cef3ee8](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/cef3ee87f9b579cd226c9809917cff3cb57b17c3))

### 🐞Bug Fixes | Bug 修复

- 隐藏勾选数据后的长显提示 ([35bea93](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/35bea93aad2f70e6e5d520d570ff69a4d903982f))

### [3.1.9-beta.3](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/compare/v3.1.9...v3.1.9-beta.3) (2022-07-11)

### ✨Features | 新功能

- form-render 中 formChange 事件添加 context 参数/新增 FormChangePayload 类型用于监听函数的参数提示 ([467f9b3](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/467f9b30a495da9804831324aa66fe024514d98c))
- form-render 支持 urlConfig.dependKeys ([332e75f](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/332e75fd9087c196f29c88c949a4b3cc2a10cff4))
- form-render 新增下拉数据自动联动，新增 formChange 中的 context 参数 ([26dacbb](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/26dacbbd2d63b88b93e9382ffcd9fc5833738e50))
- 文档 md 解析新增 hmr 无感热更新 ([148210d](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/148210d0cba198c3a21379b3d6af6f678cbc40d4))
- 新增 hmr 时自动维持 scroll 状态的功能 ([00ade2a](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/00ade2a5a0e4da0ef57f62f3284cd27f0da7cacc))
- 表格初始化时增加序号栏可配置显隐 ([d7c8437](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/d7c8437f7972de9d590066e3af70b509077636b4))

### 🐞Bug Fixes | Bug 修复

- 清空搜索条件后不需要展开树节点 ([315a045](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/315a045132231a0322e3d667b8fadd910b9c3032))
- 父级匹配关键词时无法显示其下子级 ([e794b1f](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/e794b1f37b7e270158238ae620cbb35f8b3cd6fb))

### [3.1.9](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/compare/v3.1.8-beta.9...v3.1.9) (2022-07-08)

### 🐞Bug Fixes | Bug 修复

- 修复一个文档中的错误 ([1673bb5](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/1673bb55ca3c7ead3e2012f0264004e8320fd244))
- 选人组件无回车搜索以及检索后全选后的标签与当前树的数据不匹配的问题 ([8dbd0ba](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/8dbd0baa8a4f8b5b43a5fa58bc1ed0c35cd4f243))

### [3.1.8-beta.9](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/compare/v3.1.8-beta.8...v3.1.8-beta.9) (2022-07-08)

### ✨Features | 新功能

- form-render 添加复杂表单功能,通过 COMPLEX 组织一个嵌套的, 复杂的表单结构 ([877f92c](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/877f92cbe3f3c92c41f8b89c067ca92526622ac3))

### [3.1.8-beta.6](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/compare/v3.1.8-beta.5...v3.1.8-beta.6) (2022-07-07)

### 🐞Bug Fixes | Bug 修复

- 修复文档中 dev 环境可以显示代码高亮但是 prod 环境全部显示黑体的问题 ([8880322](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/8880322cb5929ce1d51be4611bd3525e3ed8dc5f))
- 选人组件基础检索后展开节点报错 ([3dfa3a8](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/3dfa3a8f138e6ab79afaff84bb8ceb0b35eff0e9))

### [3.1.8-beta.5](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/compare/v3.1.8-beta.4...v3.1.8-beta.5) (2022-07-05)

### ✨Features | 新功能

- bigtable 增加 checkboxChange 事件 ([36361e9](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/36361e9641756c1d50d280fc9b7a56ddb9780356))
- form-render--cascader 组件同时支持数组与 JSON 数据 ([908735c](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/908735cca14038b09dac38874842cba8327449fd))

### 🐞Bug Fixes | Bug 修复

- 选人组件基础检索不精准 ([850c301](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/850c301e439fffb1e6641ef2f3197bb16dd51d76))

### [3.1.8-beta.3](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/compare/v3.1.8...v3.1.8-beta.3) (2022-07-05)

### ✨Features | 新功能

- info-header 添加年龄单位修改 ([9561401](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/9561401b59c35666b9db6df28cad35111c80fe41))
- scale label ([aaa8c04](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/aaa8c0421276dbbb2f72550576779ce19df80dbb))
- 优化部署脚本 ([8c27b5d](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/8c27b5d6cfbc162d5b96d8043cc31ec176f03d03))
- 优化部署脚本 ([8cbbb03](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/8cbbb03a4033695975edb14723092e41d834d3bf))
- 优化部署脚本 ([0567f40](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/0567f40ff2e185ea34bc335a5ba9f75bbfab0ec3))
- 添加一个不用 expect 的部署脚本 ([1e2789d](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/1e2789d90deecc7f162c8960e24332ec3e765479))
- 编写 auto-router 插件，完成文档路由自动化 ([af20770](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/af20770a0f02b690f595b2479e3bab80d8980933))
- 自动路由添加默认路径跳转/微调 log 文档内容 ([3ce78a3](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/3ce78a3f52335a21bdc49626375e9da1422f1e0b))
- 自动路由添加默认路径跳转/微调 log 文档内容 ([8802f50](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/8802f504a21ba2927479763e19177606e4f9869a))
- 通过编写 auto-router 插件，完成文档路由自动化 ([258bd8c](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/258bd8c2c52d5dd9115e1e6f66086e8c9ab62375))

### 🐞Bug Fixes | Bug 修复

- peerDependencies 中移除 naive-ui ([4ea7e3f](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/4ea7e3f941c831b2cdcdfd794657e4e3b0706bb2))
- scale label change 与 naive 方法冲突改为 onChange ([172d1fc](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/172d1fc59872e32937e2ea12c1115d85ebb60f90))
- scale radio/checkbox disabled ([ad1edea](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/ad1edeab47192811ee0d46eab862158a128de3e9))
- scale selectLabel 引用 fix ([3156760](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/31567606b2ea76a2c9746f132029f161f581db99))
- 修复 form-redner--cascade 控件错误提交数据的问题 ([d6a725f](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/d6a725f1df396004278b0779265dc70c0d2d4a50))
- 修复 form-render--slider 组件 marks 处理错误的问题 ([8dba75d](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/8dba75dfb33ce818bf065267c0d75580e453d24e))
- 修复 form-render 导出问题，添加部署脚本 ([5780c0d](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/5780c0dd00b13a7d85d8156508e29a9e9d2dc614))
- 找回 upload 文档 ([fd03b62](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/fd03b628d114cce5ef2ba5546a66498bf98e19b8))

### [3.1.8](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/compare/v3.1.7...v3.1.8) (2022-07-01)

### ✨Features | 新功能

- 调整 dev 脚本, 添加 node 内存限制修改指令/微调 form-render 组件 ([d4bef2c](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/d4bef2cad7c20c623800f63a6b5b61c50ff037c4))
- 添加 form-render 组件，添加部分文档使用的 devDeps ([e95c43f](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/e95c43fc390750200b1a769d76fa719df55a4c28))
- 文档支持了 markdown 写法 ([d0a52d8](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/d0a52d8d1549aaeca8f387dbbcb384335488ed72))

### 🐞Bug Fixes | Bug 修复

- 修复 select-label 组件无响应的问题 ([da001a1](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/da001a1147c78edc4a20c92b39f80d95e79667db))
- 修改导出名称 ([c2cdb0f](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/c2cdb0fdccbf4c99da05b30cb58abe524504e8b2))
- 修改锚点检索逻辑, 排除内容区的影响 ([606641a](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/606641a96d70ce5c5ecfe8bd634e020ab402fe9e))
- 修改 info-header 组件中的 text-align 样式 ([a4e3683](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/a4e36832f2857fa2c56492cfe40522991a0a8f2f))
- 优化 expandXeUtils 方法 ([16a9dc2](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/16a9dc28d3d59ff01d3c60460a48b370a90b5ab5))
- drag-layout 和 chunk-upload 增加 vexutils 扩展方法 ([b6d9f95](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/b6d9f95d7b0980fc52dc7f7448386420584b442a))
- scale 取值修复 ([522fa0d](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/522fa0dd44d3fb568feecb2bcad9b60be4aa1bb4))
- scale 修复 ([1a1b993](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/1a1b993878952a352cbd88fc814113d8f510b538))
- window 操作系统下引入文件路径报错 ([a8aa66a](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/a8aa66a1ef4b5623dfef956543468633151a7423))

### [3.1.7](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/compare/v3.1.6...v3.1.7) (2022-06-24)

### ✨Features | 新功能

- 非编辑表格单元格自定义插槽 ([5a64d80](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/5a64d80e5870c8ce0c8777531ff0dadcac5cb18e))
- field-set 兼容新接口字段 ([9c3fdbd](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/9c3fdbd55ce2a676c8ac5ef0428b2d832187ad5f))

### 🐞Bug Fixes | Bug 修复

- 表格编辑操作时不需要选中行 ([f7fc9a2](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/f7fc9a2dea7d537965c5f9d8c96d0d5e6f759506))
- 筛选 Teleport 标签失效 ([c9544ca](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/c9544ca2c474358c6638f4e3b2855a9b71d179ed))
- 跳题逻辑 fix ([a4696c9](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/a4696c9d22d0cd478b54ee20219a30cd81b9c410))
- 修复打包后无法按需引入的问题 ([77c44bc](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/77c44bc2f77b5ca1c8d78a15422753359215aec6))
- 选人组件异步加载搜索后复选框勾选失效 ([186eaef](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/186eaef2ce50e0017a42b3e2d0f3e2ee06c843ea))
- 移除 peerDependencies 中的依赖 ([507ac48](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/507ac48b9069f63739c86dc75773752ef910e43d))
- container scroll fix ([83c8fe8](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/83c8fe896644180999a137a43f507592ad570cd9))
- info-header 样式在 index.less 导出, 修复一个文档错误 ([b483519](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/b4835198b3c780a327b25086d4d8d00b3023718f))

### [3.1.6](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/compare/v3.1.5-beta.1...v3.1.6) (2022-06-17)

### ✨Features | 新功能

- 表格添加默认行高 ([1a50015](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/1a50015d8321ef9c5d76cee25eabb14fd8c83b1e))
- 处理 info-header 中的边界情况 ([8e0d9f8](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/8e0d9f834d474f2fb8542a31cb9a9362b42a4ce8))
- 流程图组件添加测试数据展示 ([692b465](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/692b465c759f72f6187712dfe4c0f7f966630cb0))
- 时间线 ([dcd2a2f](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/dcd2a2f0825edf9374af554f2bbffc431ca7f984))
- 添加流程图组件代码页面 ([f296206](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/f296206c3326686c50070e5bf4cbe765d3bc68e8))
- 新增 info-header 组件 ([5a023ed](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/5a023ed2967b9c7bb28446a34ebeb26cf82bc13a))
- 新增 info-header 组件的 README ([3c81ea5](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/3c81ea5f07111b4278957e7b4be079534b903ee0))
- 支持表格总计自定义值和单位 ([b638388](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/b6383886d89548519a0fc86f121cba87950dbe8f))
- 支持自定义表格序号插槽、支持 rowConfig 配置 ([2c616f7](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/2c616f7801873ed8493576ecd997a0a440e1a1e8))
- editor 富文本编辑器 ([26997a5](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/26997a56b32e8afbc5ad8e849cf82238d62a148d))
- form-table 组件初步迁移完成 ([a6e60f2](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/a6e60f26de473d89b0885bd92e0502e2e07cb83e))
- grid 滚动条样式 ([034d9e9](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/034d9e9fb14871d6094250e19e8f8a6f9c5c751e))
- prettierrc 格式化文件 ([77e3552](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/77e3552a1736b354a27f4892141c81fd342e521a))

### 🐞Bug Fixes | Bug 修复

- 标签组件 bug（量表对接） ([7aa58f0](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/7aa58f0c9d149891b1126dfa7b6535c90cbd6997))
- 调整 info-header 的间距 ([c6fe591](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/c6fe5912d48a8aa6fc927ebd5a9875446c441dbe))
- 量表导出单个组件名称&样式 fix ([e37ac45](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/e37ac45451ccbac6a662e0bcfeb08f5562bbc2db))
- 修复一些 info-header 的 bug ([af02ec5](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/af02ec5ee0cd59303dac40d8fbef8efebb3b8405))
- 字段设置样式优化 ([8c7aa54](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/8c7aa5481cb464bad0ead5a05c0260813c7d5b6e))

### [3.1.5-beta.1](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/compare/v3.1.5...v3.1.5-beta.1) (2022-06-15)

### ✨Features | 新功能

- 标签组件的一些优化和 demo ([e2e4459](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/e2e4459f6f6127148975e6489cff0395c6d92fcf))
- 合并代码, 打包方式修改, 代码调整 ([07101c8](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/07101c8433c3ee6342cf7d50b6c6fa4e658eba91))
- 合并 v3，移动 select-page 组件位置，处理一些 form-table 中的类型问题 ([5992363](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/5992363f242af7a8ca22e4faa3a55a3c6661e708))
- 迁移 selectPage 组件及 table-search 组件 ([3543648](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/354364801dd8c8bf750518eb6ac84c1afacaece0))
- 添加 table-search/table-search-more 组件 ([8292c0a](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/8292c0aeb8f323dd939328c7e917e9cce845f339))
- bigtable 增加自定义操作栏插槽 ([916a029](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/916a0297ea61eaea5f22dc5fa019455a73e2a161))
- bigtable 增加 keydown 事件 ([e910259](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/e910259e4e0785a332affc34652b7f8365d70cd4))
- label-label ([012d13c](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/012d13cfefc66b063924f97f90d808e34b080c89))
- map 组件基本完成 ([3b45a92](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/3b45a92030531011529011cb5f4a3c2b52753ca9))
- scale 查缺补漏 ([94a541d](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/94a541d5dea3664cc4cab66f415864ef608c2699))
- scale address 基本完成 ([12e3888](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/12e38886fc96c8e4aa09c3a7d940b5a7de9130f2))
- scale cascader 基本完成 ([0af6c1a](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/0af6c1a1270aede8e896fefe3c07b2fdfcb72636))
- scale collection 基本完成 ([f91c268](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/f91c2683187c71c72ad207ee1a0a99f859190d11))
- scale datetime 基本完成 ([3129106](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/31291065405b6dd120a78addacbb180b2583376d))
- scale radio&checkbox 基本完成 ([c198640](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/c19864057a8162af99c232977747424e5119af0f))
- scale select 基本完成 ([f127490](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/f12749082c6122d6529ce8486aeac6c274b0101e))
- scale upload 基本完成 ([a33cafc](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/a33cafcd82a453dd125de11109efc0207c62b607))
- scale-input 基本完成 ([fdf0bb1](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/fdf0bb1bf6f818226beedd4506216d8597c4a67a))
- upload 和 video modal 基本完成 ([bd27a0e](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/bd27a0e54b79eca150cd33216f95b5e5feb8584f))

### 🐞Bug Fixes | Bug 修复

- "打包更改" ([d6f9e73](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/d6f9e737f7b311255d51e25187223f476ce80bd8))
- 处理打包问题 ([6caebb2](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/6caebb20ec2d895b8cc6b49b102b8168d6c8c37a))
- 打包类型 fix ([6a1eea8](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/6a1eea83d0e198bd3f36f048238c9a4f40ca8873))
- 公共组件路径变更 ([a5853a6](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/a5853a6e92ff8702d534775446308ea39da35055))
- 函数式组件添加 props ([e7ae25a](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/e7ae25a6c8aebfbaea599ae14d5221cafb9a15d1))
- 开始至结束日期不能选择当天日期 ([e603099](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/e603099cfe77e6408f9b9d95793832a1f956a0b8))
- 清空日期组件后禁用范围失效 ([7afe1c1](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/7afe1c176a05f4b301ea5fbca2e335e01f81303f))
- 删除无用代码 ([148cf3d](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/148cf3d9443f1bc64995f731055b2a11481c23d6))
- 修正 v-viewer 版本 ([5d932df](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/5d932df884e5a4b55c7de681f14059df288cfe0f))
- 样式缺少} ([fc2a76f](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/fc2a76f6d4c112a234d74a80118631619655e8d4))
- 一些打包时出现的问题 ([01e394e](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/01e394e8890ed23c50dd5456c72aeee2ec2d9bd8))
- query 替换 ([f561644](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/f5616442c4bb55b9397728e088bf86aacb92ce1e))
- scale-view/map/chunk-upload 组件打包问题处理完毕 ([c0aacfe](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/c0aacfe5abed9a5757b72af1bef9af8610013ca0))
- scale-view 打包报错问题 ([0d28f7c](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/0d28f7c32a09a0a570e32bad9fca0439cd3a5402))
- upload 类型处理 ([41c6d6e](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/41c6d6ec8003d5fe7c469a1e5141b92d7cc9e041))

### [3.1.5](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/compare/v3.1.4-beta.1...v3.1.5) (2022-06-10)

### ✨Features | 新功能

- style 构建新增图片处理,且兼容别名 ([00e6de5](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/00e6de5f53fd332d16f1f2fdf22e0eb2afbab9ec))
- 一些 form-table 的功能/添加组件更新日志 md ([6fed9c0](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/6fed9c094295ebda74b29aa2b094e6734c4c1586))
- 完成小部分 form-table 的重构 ([a2db96f](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/a2db96f390185f902d76a83966cc8b9873f9abf9))
- 标签组件 ([1ffdeee](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/1ffdeee29ff6542e414ae5e6ae09ef56eda0ba78))

### 🐞Bug Fixes | Bug 修复

- 编辑表格输入框提示可配置 ([326ad2e](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/326ad2e7391602f1ddc476a87063c1b79fe99782))

### [3.1.4](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/compare/v3.1.3...v3.1.4) (2022-06-07)

### ✨Features | 新功能

- 提供一个安全的组件注册器 ([faa608a](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/faa608a6c8b49ad9c6f7fa50edb3546ab61e347b))

### 🐞Bug Fixes | Bug 修复

- 打印身份校验弹框未显示标题 ([cfad93c](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/cfad93c748712358fe0552861c13d52049f730f5))

### [3.1.3](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/compare/v3.1.2...v3.1.3) (2022-06-06)

### ✨Features | 新功能

- 剩余组件迁移完成 ([6289565](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/6289565b4ce04773ef659b54e5624b6e0598f21f))
- 修改一些 package 配置, 提供 types 入口 ([8b6a006](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/8b6a006fdb17966aad7b2fc6d7db5d59553922a8))
- bigtable 解析携带###内容展示 ([baeaa3c](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/baeaa3c29bf22de2121f0ae7b605b13b92d681f7))

### 🐞Bug Fixes | Bug 修复

- 修复一个类型错误, 删除引用中的.js ([2afb070](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/2afb070a305a2a4d874565a6831debeabdaa4586))
- bigtable 表格自适应后 fix 定位的列错乱 ([505725b](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/505725bb0944ade6c83f944e050bb772e49eb5a9))
- bigtable 默认选中行失效 ([19c9896](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/19c9896502c6cde3ffb906d2e3bb50e316aaec5f))
- sfcType fix as required install prop ([42405e9](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/42405e9434e6ab46ccdcd2c7d65873513195b3d6))

### [3.1.2](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/compare/v3.1.1...v3.1.2) (2022-06-02)

### ✨Features | 新功能

- 打印按钮无数据时提示配置，点击前增加前置事件，代码优化 ([abadb9c](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/abadb9c9531f9172c59736dc7479a65b435360f2))

### 🐞Bug Fixes | Bug 修复

- 表格编辑更改 data 数据页面数据未联动 ([3e30da2](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/3e30da2dbf346217626811a8745a8e7286750c8c))
- 下拉未匹配到的默认值没有显示、表格编辑下拉被表格挡住 ([e4260f6](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/e4260f61a137d2248d7940d7a77d2e4a3cbcf526))
- 循环引用 bigtable 组件导致组件间 sate 数据联动的问题 ([472a415](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/472a4157b599c711ae2a90e72dee2d3dacd17a0e))
- bigtable 表格高度自适应 ([f462a97](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/f462a978b4b0a30e92a8b4b2a7bf5082c0bf0f91))

### [3.1.1](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/compare/v3.1.0...v3.1.1) (2022-06-01)

### ✨Features | 新功能

- 表格编辑调接口下拉框支持关键字搜索 ([93157a8](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/93157a8e6cfca91f7f146c61ba7986eaa2716d0f))
- 表格编辑默认状态设置、校验规则可配置 ([e9618a5](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/e9618a57b9c26dc1a354650bf631eadb91cd0552))

### 🐞Bug Fixes | Bug 修复

- 打印组件选择格式后下拉菜单未收起，也没有选定的格式样式标识 ([f64f656](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/f64f656dc87c0efef1fea114a57fdc94c179b4b6))
- big-table 初始化会强制默认选中所有行 ([55eadeb](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/55eadebe653f366d4fa27d5d82cfef6347d7f322))

## [3.1.0](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/compare/v3.0.9...v3.1.0) (2022-05-31)

### ✨Features | 新功能

- 打印格式选择 ([56180bf](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/56180bfde66108455c7ed15870c257c46a88c834))
- 下拉加映射配置 ([0ea094b](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/0ea094be74e155b2cf37b52df149694118ecf876))

### 🐞Bug Fixes | Bug 修复

- 解决冲突 ([0ee5bc1](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/0ee5bc10e02148e208eb4da481590d2da9be536c))

### [3.0.9](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/compare/v3.0.8...v3.0.9) (2022-05-30)

### 🐞Bug Fixes | Bug 修复

- 不传 scrollConfig 报错； ([8897413](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/88974131e5eed48f39ebe2955830062b6976f8ec))

### [3.0.8](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/compare/v3.0.7...v3.0.8) (2022-05-27)

### ✨Features | 新功能

- 表格按键配置、滚动事件派发、编辑 formType 事件 index、选择行支持默认选中 ([1401d21](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/1401d21dada02da4a6aa82de33f23f206ef97662))
- 选人组件 ([a21d86e](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/a21d86e638afdd580cc5d0a90094b520a59f1b44))

### 🐞Bug Fixes | Bug 修复

- 表格 MAX_CHECK_SIZE 字段代码格式化导致传参失败 ([a22a3b4](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/a22a3b45c2c87be7f575a572549cfcdc407a7a52))
- 异步加载 allow-checking-not-loaded 报错 ([d086dc2](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/d086dc2e77cbe4c53e7a796b0cf29a4dad7b4d52))

### [3.0.7](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/compare/v3.0.6...v3.0.7) (2022-05-25)

### ✨Features | 新功能

- big-table 编辑增加 date 类型 ([fce033b](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/fce033b338b0ea2ccd4b4496e21a27e44ef8e68b))

### 🐞Bug Fixes | Bug 修复

- 表格编辑初始化不应展示操作项 ([165217d](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/165217d96e076b67f449483cf957b4b211545af8))

### [3.0.6](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/compare/v3.0.5...v3.0.6) (2022-05-24)

### ✨Features | 新功能

- 打印增加默认参数配置 ([b7abea5](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/b7abea576bb8dd39d42324f8cdefb604903e131e))
- big-table 日期编辑 ([b4fc52e](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/b4fc52e4998bbaa7f63d475bae2028406ca78c1f))

### [3.0.4](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/compare/v3.0.3...v3.0.4) (2022-05-23)

### ✨Features | 新功能

- vxe-table 按需引入报错 ([4a4220d](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/4a4220dda8e1a77f9c59996081a8c3d07d8c5917))

### 🐞Bug Fixes | Bug 修复

- field-set 可按需引入 ([7eb5380](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/7eb538007cc348a17990a6b630b153692aa98534))

### [3.0.2](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/compare/v3.0.1...v3.0.2) (2022-05-19)

### ✨Features | 新功能

- 表格编辑自定义插槽； ([de1c522](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/de1c522181efbb42baa195e5f9bf2670bab3369a))

### 🐞Bug Fixes | Bug 修复

- 打包后引入 src 别名路径报错 ([fefb642](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/fefb642c4718a22e717e9e8c98948d17136fe9e2))

### [3.0.1](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/compare/v3.0.0...v3.0.1) (2022-05-17)

### ✨Features | 新功能

- 部分警告容错处理 ([b5f16ed](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/b5f16ed0a9884a515ebe2729a0f460e2ab170f08))
- 打包前删除旧包 ([1559071](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/1559071bdd9c6faa7e9f6d5d0c49fff5ffe034bd))
- rollup 打包 jsx 编译和一些其他优化 ([6625d47](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/6625d473523595bb3479ca444a37ed06bffb55aa))

## 3.0.0 (2022-05-12)

### ✨Features | 新功能

- 表格行编辑 ([aaf7351](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/aaf7351741518ee984741d40aa2db572682510ed))
- 部分结构、方法优化 ([28f904e](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/28f904e57025943e6352829ab69ff21a65d7b07f))
- 打包路径配置 ([7e5e83c](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/7e5e83cf0664c9eaa2493e6e5d57d2bbabe0b705))
- 分离 BigTable 的 state、emit、补充 BigTable 方法 ([6b3ff34](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/6b3ff3431cbd4411d9446bb0736248d04cba930f))
- 更改 ico 图标 ([cc67da5](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/cc67da541a09def8ae5b242d7632fda9cd9ea00f))
- 删除 BigTable 无用的 expose 方法 ([f1de86d](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/f1de86d9d2c4487e8aae2e0566dff91b6cf90ec0))
- 提取 BigTable 中部分工具方法 ([c7ddcbd](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/c7ddcbd4df2cf71120a971950e413af2a899712a))
- 完善表格编辑功能 ([f25a92a](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/f25a92ac552837cd6560701ec1b9956e4151da4e))
- 完善 BigTable 公共组件 ([7bae845](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/7bae8454bc2a48d0d03072bbe184b089296c5f21))
- 新增 baseTable 组件 demo ([613bb40](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/613bb409e14825958ea83f8622ec952f89cd5d26))
- 新增 drag-layout ([e7da534](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/e7da53454ffe3607cd7fb19fa610a49a6ccf596e))
- 新增 vxe-table 组件，待完善 ([cff14e7](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/cff14e7a4e5244409cfd5b2e203a59a65afb607b))
- 优化部分 antd 组件为 naive ([b56ef53](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/b56ef538001a3e6915de50580312fb47757a114b))
- 优化打包配置 ([9f6f1b1](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/9f6f1b166848412eb6806bbafcf7209c44c68cdf))
- 优化首页 ([739cc5f](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/739cc5f55ebd3cf96540afedf09f85314f3f801d))
- 增加搜索防抖以及部分字段配置更改 ([a4e8542](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/a4e85423289e7c2e0c76f96a0f5878e7138fbfa4))
- 增加 css 打包压缩 ([9ba9069](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/9ba9069cdfc554c00fcbbe688f1bfa5f96b09c0e))
- 增加 grid 表格基础组件，待完善 ([eab1bbe](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/eab1bbeef45329204811c682ec0444d1a3f02578))
- big-table ([77bef18](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/77bef18e12fe086b53abbb04edfe699ef0efc1d5))
- button-print ([0c8ca04](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/0c8ca049957994413c156da37480220fe08e90c3))
- DragLayout ([2798c8c](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/2798c8c6b971bd4cbc1dbd7698523d256b95c890))
- edit-form ([0791618](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/07916183d1bb97b794aa49b84182508161850f04))
- edit-input ([5fbb95d](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/5fbb95dae4352eb8f2dd98f973f0944ac33c969a))
- edit-select ([1750e2c](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/1750e2c6c10a44a94c393c3059476574d2aa9210))
- edit-table 新增行与删除 ([c34fc17](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/c34fc1770666216b4732493bfee9dceeccab4062))
- EditForm ([ee200a5](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/ee200a530112688d754dd523a5598e4a235360e6))
- editForm 部分功能 ([53554b5](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/53554b593d874784414ccf81edd452dc39416105))
- FieldSet 字段设置 ([66e7d8f](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/66e7d8f914128a9e550a94a643a0ec3434d1bd68))
- grid 的 methods ([1166857](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/11668571c8896daed763458ed92f03331aa553c5))
- grid 全局引用 vxe-table，按需引用会报错 ([d90e8b8](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/d90e8b8ea909337b54267978b109da20c47deed4))
- ignore ([8553407](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/85534077bbb99b7740c37e03be3aa98c852be2b8))
- prop interface 和打印账号 ([6bc9446](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/6bc9446d0f26f21bff086b6bace1be2c6bc08532))
- useBatchEditing ([d5f6261](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/d5f626182735cb356ed6e9a70d0895754f2c4aab))
- useNestTable，优化 useBatchEditing ([327d5f3](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/327d5f3aad20f5df324a8eb289894e8a57f8c7a0))
- vue3 版组件库初次架构 ([212ca49](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/212ca4956f5dd045cfe417bab34812dc05883c27))

### 🐞Bug Fixes | Bug 修复

- .vue 格式文件 withDefaults 类型定义只能在内部处理？ ([2830aa4](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/2830aa4d72d5ddac3447c700cfa6b5476d4dafa4))
- 测试优化 button-print ([c01ec55](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/c01ec55fe0c2e811c86ada2679b6004fdbaeacd0))
- 打包报错 ([e290116](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/e2901164e27811464e3fabbc1e894e98607b33a5))
- 打包报错 unknown word ([be20dc4](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/be20dc436b93fe5b5a28103bc28bf73f7b65e98c))
- 打包后 bigtable 控制台警告需要使用函数式插槽以及 deep 样式失效 ([7ac2404](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/7ac240426072f93fe7bef254b96518be100d5a01))
- 更改 portal 用法为 teleport ([993f855](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/993f85500081852aff685e8c7b0b35de002e1da7))
- 修复优化 rollup 打包相关 ([872ed5a](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/872ed5a6dec17e14e77988e86772b8c95dd5d433))
- handleEdit 事件报错 ([71e6d5e](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/71e6d5e59e0277f8a0b74dcd3854ffafdac779f0))
- hover 事件包含 select 组件失效 ([65e64d5](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/65e64d534d6642b0264d3613032c2dc25a407307))
- import_meta.globEager、vueJsxCompat 打包报错 ([b384e27](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/b384e2712227418cf86c9b72b2c145d4e69f6cc5))
- slots 打包编译成属性 ([b12bb40](http://120.25.59.85:3000/cnhis-frontend/cnhis-design-vue/commit/b12bb40c21be0dce1e7786058ae2863997638f8d))
