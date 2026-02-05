/**
 * 游戏常量配置
 * Game Constants Configuration
 */
export class GameConstants {
    // ============ 游戏配置 ============
    /** 初始游戏速度 */
    static readonly GAME_SPEED_INITIAL = 300;
    /** 速度增量 */
    static readonly GAME_SPEED_INCREMENT = 20;
    /** 速度增加间隔（秒） */
    static readonly SPEED_INCREASE_INTERVAL = 10;
    /** 最大游戏速度 */
    static readonly GAME_SPEED_MAX = 600;

    // ============ 马匹配置 ============
    /** 马匹移动速度 */
    static readonly HORSE_MOVE_SPEED = 500;
    /** 跑道数量 */
    static readonly LANE_COUNT = 3;
    /** 跑道宽度 */
    static readonly LANE_WIDTH = 200;
    /** 马匹起始Y坐标 */
    static readonly HORSE_START_Y = -300;

    // ============ 障碍物配置 ============
    /** 障碍物生成间隔（秒） */
    static readonly OBSTACLE_SPAWN_INTERVAL = 2.0;
    /** 障碍物最小间距 */
    static readonly OBSTACLE_MIN_DISTANCE = 300;
    /** 障碍物生成概率 */
    static readonly OBSTACLE_SPAWN_CHANCE = 0.7;

    // ============ 道具配置 ============
    /** 道具生成概率 */
    static readonly COLLECTIBLE_SPAWN_CHANCE = 0.3;
    /** 护盾持续时间（秒） */
    static readonly SHIELD_DURATION = 5.0;
    /** 磁铁持续时间（秒） */
    static readonly MAGNET_DURATION = 8.0;
    /** 磁铁吸引范围 */
    static readonly MAGNET_RANGE = 300;
    /** 加速持续时间（秒） */
    static readonly SPEED_BOOST_DURATION = 3.0;
    /** 加速倍率 */
    static readonly SPEED_BOOST_MULTIPLIER = 1.5;

    // ============ 分数配置 ============
    /** 红包分数 */
    static readonly SCORE_HONGBAO = 10;
    /** 元宝分数 */
    static readonly SCORE_YUANBAO = 50;
    /** 每秒基础分数 */
    static readonly SCORE_PER_SECOND = 1;

    // ============ 视觉配置 ============
    /** Emoji 字体大小 */
    static readonly EMOJI_SIZE = 60;
    /** 屏幕宽度 */
    static readonly SCREEN_WIDTH = 720;
    /** 屏幕高度 */
    static readonly SCREEN_HEIGHT = 1280;
}