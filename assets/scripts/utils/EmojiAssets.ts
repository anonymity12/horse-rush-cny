/**
 * Emoji 资源映射
 * 用于开发阶段的占位符，后期会替换为真实美术资源
 */
export class EmojiAssets {
    // ============ 主角 ============
    static readonly HORSE = '🐎';
    
    // ============ 障碍物 ============
    static readonly OBSTACLE_BEAST = '👹';      // 年兽
    static readonly OBSTACLE_LION = '🦁';       // 石狮子
    static readonly OBSTACLE_ROCK = '🪨';       // 石头
    
    // ============ 可收集道具 ============
    static readonly HONGBAO = '🧧';             // 红包
    static readonly YUANBAO = '🪙';             // 元宝
    static readonly SHIELD = '🛡️';              // 护盾
    static readonly MAGNET = '🧲';              // 磁铁
    static readonly SPEED = '⚡';               // 加速
    
    // ============ 装饰元素 ============
    static readonly LANTERN = '🏮';             // 灯笼
    static readonly FIRECRACKER = '🧨';         // 鞭炮
    static readonly FIREWORK = '🎆';            // 烟花
    static readonly FU = '福';                  // 福字
    
    // ============ UI 元素 ============
    static readonly COIN = '💰';                // 金币图标
    static readonly TROPHY = '🏆';              // 奖杯
    static readonly STAR = '⭐';                // 星星
    
    /**
     * 获取随机障碍物 emoji
     */
    static getRandomObstacle(): string {
        const obstacles = [
            this.OBSTACLE_BEAST,
            this.OBSTACLE_LION,
            this.OBSTACLE_ROCK
        ];
        return obstacles[Math.floor(Math.random() * obstacles.length)];
    }
    
    /**
     * 获取随机道具 emoji
     */
    static getRandomCollectible(): string {
        const collectibles = [
            this.HONGBAO,
            this.YUANBAO,
            this.SHIELD,
            this.MAGNET,
            this.SPEED
        ];
        return collectibles[Math.floor(Math.random() * collectibles.length)];
    }
}