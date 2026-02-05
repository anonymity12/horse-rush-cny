# 🐎 马年大运 (Horse Rush CNY)

新春主题的微信小游戏 - 控制一匹马在新年的跑道上奔跑，收集红包，躲避障碍！

## 🎮 游戏简介

这是一款适合春节氛围的2D跑酷小游戏，玩家控制一匹马在充满新春元素的跑道上前进，通过左右移动躲避障碍物，收集红包和道具，获得高分！

### 核心玩法
- 🐴 控制马匹左右移动
- 🧧 收集红包和元宝获得分数
- 🎊 躲避障碍物（年兽、石狮子等）
- 🎁 使用特殊道具（护盾、磁铁、加速等）
- 🏆 挑战更高分数

### 新春元素
- 🏮 视觉：红灯笼、鞭炮、春联、烟花
- 🎵 音效：鞭炮声、新年音乐
- 🎁 道具：红包、福字、元宝
- 🐎 主角：喜庆的卡通马

## 🛠️ 技术栈

- **游戏引擎**: Cocos Creator 3.x
- **开发语言**: TypeScript
- **画面风格**: 2D
- **目标平台**: 微信小游戏

## 📁 项目结构

```
horse-rush-cny/
├── assets/                      # Cocos Creator 资源目录
│   ├── scenes/                  # 场景文件
│   │   ├── Game.scene          # 主游戏场景
│   │   └── Menu.scene          # 开始菜单
│   ├── scripts/                 # TypeScript 脚本
│   │   ├── game/
│   │   │   ├── GameManager.ts  # 游戏管理器
│   │   │   ├── Horse.ts        # 马的控制
│   │   │   ├── Obstacle.ts     # 障碍物
│   │   │   ├── Collectible.ts  # 可收集道具
│   │   │   └── Road.ts         # 跑道管理
│   │   ├── ui/
│   │   │   └── UIManager.ts    # UI 管理
│   │   └── utils/
│   │       └── Constants.ts    # 常量定义
│   ├── textures/                # 图片资源
│   │   ├── horse/              # 马的精灵图
│   │   ├── obstacles/          # 障碍物
│   │   ├── collectibles/       # 道具
│   │   ├── bg/                 # 背景
│   │   └── ui/                 # UI元素
│   ├── audio/                   # 音效资源
│   │   ├── bgm/                # 背景音乐
│   │   └── sfx/                # 音效
│   └── prefabs/                 # 预制体
├── build/                       # 构建输出
├── settings/                    # Cocos 项目配置
└── docs/                        # 文档

```

## 🚀 开发路线图

### Phase 1 - MVP（最小可玩版本）✅
- [ ] 初始化 Cocos Creator 项目
- [ ] 实现马的左右移动控制
- [ ] 实现无尽跑道生成
- [ ] 添加基础障碍物
- [ ] 实现碰撞检测
- [ ] 添加简单计分系统
- [ ] 游戏开始/结束逻辑

### Phase 2 - 新春元素🎊
- [ ] 替换为新春主题美术资源
- [ ] 添加红包收集功能
- [ ] 实现特殊道具（护盾、磁铁等）
- [ ] 添加新年音效和BGM
- [ ] 添加粒子效果（烟花、鞭炮等）

### Phase 3 - 完善与优化🎯
- [ ] 关卡系统
- [ ] 难度递增机制
- [ ] 成就系统
- [ ] 排行榜
- [ ] 数据持久化
- [ ] 性能优化
- [ ] 微信小游戏适配

## 🎯 快速开始

### 环境要求
- Node.js 14+
- Cocos Creator 3.8+
- 微信开发者工具

### 安装步骤

1. 克隆项目
```bash
git clone https://github.com/anonymity12/horse-rush-cny.git
cd horse-rush-cny
```

2. 用 Cocos Creator 打开项目
- 打开 Cocos Creator
- 选择"打开项目"
- 选择本项目目录

3. 运行项目
- 在 Cocos Creator 中点击预��按钮
- 或使用浏览器预览

4. 构建微信小游戏
- 点击"项目" -> "构建发布"
- 选择"微信小游戏"平台
- 点击"构建"

## 📝 开发规范

### 代码规范
- 使用 TypeScript 严格模式
- 遵循 ESLint 配置
- 组件和类使用大驼峰命名
- 变量和函数使用小驼峰命名
- 常量使用全大写下划线命名

### Git 提交规范
- `feat`: 新功能
- `fix`: 修复bug
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 重构
- `perf`: 性能优化
- `test`: 测试相关
- `chore`: 构建/工具相关

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

## 📄 License

MIT License

## 👥 作者

[@anonymity12](https://github.com/anonymity12)

---

🎊 **祝大家新春快乐，马年大吉！** 🐎
