# 🛠️ 开发文档

## 游戏架构设计

### 核心模块

#### 1. GameManager (游戏管理器)
- 游戏状态管理（准备、进行中、暂停、结束）
- 分数计算
- 难度控制
- 游戏循环

#### 2. Horse (马匹控制)
- 左右移动控制
- 碰撞检测
- 动画控制
- 特殊状态（护盾、磁铁等）

#### 3. Road (跑道管理)
- 无限滚动背景
- 障碍物生成
- 道具生成
- 对象池管理

#### 4. Obstacle (障碍物)
- 障碍物类型（年兽、石狮子、炮竹等）
- 移动逻辑
- 碰撞体积

#### 5. Collectible (可收集道具)
- 红包（分数）
- 元宝（高分）
- 护盾
- 磁铁
- 加速道具

#### 6. UIManager (UI管理)
- 分数显示
- 游戏菜单
- 暂停界面
- 结算界面

### 游戏常量

```typescript
// Constants.ts
export class GameConstants {
    // 游戏配置
    static readonly GAME_SPEED_INITIAL = 300;
    static readonly GAME_SPEED_INCREMENT = 20;
    static readonly SPEED_INCREASE_INTERVAL = 10; // 每10秒提速
    
    // 马匹配置
    static readonly HORSE_MOVE_SPEED = 500;
    static readonly LANE_COUNT = 3; // 3条跑道
    static readonly LANE_WIDTH = 200;
    
    // 障碍物配置
    static readonly OBSTACLE_SPAWN_INTERVAL = 2.0;
    static readonly OBSTACLE_MIN_DISTANCE = 300;
    
    // 道具配置
    static readonly COLLECTIBLE_SPAWN_CHANCE = 0.3;
    static readonly SHIELD_DURATION = 5.0;
    static readonly MAGNET_DURATION = 8.0;
    
    // 分数配置
    static readonly SCORE_HONGBAO = 10;
    static readonly SCORE_YUANBAO = 50;
    static readonly SCORE_PER_SECOND = 1;
}
```

### 对象池设计

为了优化性能，使用对象池管理障碍物和道具：

```typescript
class ObjectPool {
    private pool: cc.Node[] = [];
    
    get(prefab: cc.Prefab): cc.Node {
        // 从池中获取或创建新对象
    }
    
    put(node: cc.Node): void {
        // 回收对象到池中
    }
}
```

## 开发阶段详细任务

### Phase 1: MVP (Week 1-2)

#### Day 1-2: 项目初始化
- [x] 创建 GitHub 仓库
- [ ] 初始化 Cocos Creator 项目
- [ ] 配置 TypeScript
- [ ] 创建基础场景结构

#### Day 3-4: 核心玩法
- [ ] 实现马匹左右移动
- [ ] 实现跑道无限滚动
- [ ] 添加简单的背景图

#### Day 5-6: 障碍系统
- [ ] 创建障碍物预制体
- [ ] 实现障碍物生成逻辑
- [ ] 实现碰撞检测

#### Day 7-8: 游戏逻辑
- [ ] 添加计分系统
- [ ] 实现游戏开始/结束
- [ ] 创建简单 UI

### Phase 2: 新春元素 (Week 3)

#### 美术资源
- [ ] 设计马匹精灵图（3帧动画）
- [ ] 设计障碍物（年兽、石狮子）
- [ ] 设计道具（红包、元宝、福字）
- [ ] 设计背景（灯笼、春联装饰）
- [ ] 设计 UI 元素

#### 音效资源
- [ ] 准备背景音乐（欢快的新年音乐）
- [ ] 鞭炮音效
- [ ] 收集道具音效
- [ ] 碰撞音效

#### 功能实现
- [ ] 替换所有美术资源
- [ ] 添加音效管理器
- [ ] 实现特殊道具效果
- [ ] 添加粒子特效

### Phase 3: 完善 (Week 4)

- [ ] 关卡系统
- [ ] 难度曲线调整
- [ ] 数据持久化
- [ ] 性能优化
- [ ] 微信小游戏适配
- [ ] 测试与调试

## 微信小游戏适配注意事项

1. **资源大小限制**
   - 小游戏包体积 < 4MB
   - 使用远程资源加载

2. **性能优化**
   - 使用对象池
   - 减少 Draw Call
   - 压缩图片资源

3. **API 适配**
   - 使用微信 API 获取用户信息
   - 实现分享功能
   - 接入排行榜

## 测试清单

- [ ] 马匹移动流畅性
- [ ] 碰撞检测准确性
- [ ] 障碍物生成合理性
- [ ] 分数计算正确性
- [ ] 游戏难度曲线
- [ ] 音效播放正常
- [ ] UI 交互响应
- [ ] 微信小游戏兼容性
- [ ] 不同设备分辨率适配

## 调试技巧

1. 在 Cocos Creator 中使用 Console 调试
2. 使用微信开发者工具的调试功能
3. 添加调试开关控制游戏速度
4. 可视化碰撞体积（开发模式）

---

**持续更新中...**