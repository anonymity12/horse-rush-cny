import { _decorator, Component, Node, Vec3, input, Input, EventTouch, Label } from 'cc';
import { GameConstants } from '../utils/Constants';
import { EmojiAssets } from '../utils/EmojiAssets';

const { ccclass, property } = _decorator;

/**
 * 马匹控制器
 * 控制马的移动、碰撞检测、特殊状态等
 */
@ccclass('Horse')
export class Horse extends Component {
    /** 当前所在跑道 (0, 1, 2) */
    private currentLane: number = 1;
    
    /** 目标位置 */
    private targetPosition: Vec3 = new Vec3();
    
    /** 是否有护盾 */
    private hasShield: boolean = false;
    
    /** 护盾剩余时间 */
    private shieldTimeLeft: number = 0;
    
    /** 是否有磁铁 */
    private hasMagnet: boolean = false;
    
    /** 磁铁剩余时间 */
    private magnetTimeLeft: number = 0;
    
    /** 是否加速 */
    private hasSpeedBoost: boolean = false;
    
    /** 加速剩余时间 */
    private speedBoostTimeLeft: number = 0;
    
    /** emoji 显示标签 */
    @property(Label)
    emojiLabel: Label = null;

    start() {
        // 设置初始位置
        this.currentLane = 1;
        this.updatePosition();
        
        // 设置 emoji
        if (this.emojiLabel) {
            this.emojiLabel.string = EmojiAssets.HORSE;
            this.emojiLabel.fontSize = GameConstants.EMOJI_SIZE;
        }
        
        // 注册触摸事件
        this.registerInput();
    }

    update(deltaTime: number) {
        // 平滑移动到目标位置
        const currentPos = this.node.position;
        if (!currentPos.equals(this.targetPosition)) {
            const newPos = new Vec3();
            Vec3.lerp(newPos, currentPos, this.targetPosition, deltaTime * 10);
            this.node.setPosition(newPos);
        }
        
        // 更新特殊状态计时器
        this.updatePowerUps(deltaTime);
    }

    /**
     * 注册输入事件
     */
    private registerInput() {
        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
    }

    /**
     * 触摸开始事件
     */
    private onTouchStart(event: EventTouch) {
        const touchPos = event.getUILocation();
        const screenWidth = GameConstants.SCREEN_WIDTH;
        
        // 根据触摸位置决定左右移动
        if (touchPos.x < screenWidth / 2) {
            this.moveLeft();
        } else {
            this.moveRight();
        }
    }

    /**
     * 向左移动
     */
    moveLeft() {
        if (this.currentLane > 0) {
            this.currentLane--;
            this.updatePosition();
        }
    }

    /**
     * 向右移动
     */
    moveRight() {
        if (this.currentLane < GameConstants.LANE_COUNT - 1) {
            this.currentLane++;
            this.updatePosition();
        }
    }

    /**
     * 更新位置
     */
    private updatePosition() {
        const laneX = (this.currentLane - 1) * GameConstants.LANE_WIDTH;
        this.targetPosition.set(laneX, this.node.position.y, 0);
    }

    /**
     * 更新道具效果
     */
    private updatePowerUps(deltaTime: number) {
        // 护盾
        if (this.hasShield) {
            this.shieldTimeLeft -= deltaTime;
            if (this.shieldTimeLeft <= 0) {
                this.hasShield = false;
                this.shieldTimeLeft = 0;
            }
        }
        
        // 磁铁
        if (this.hasMagnet) {
            this.magnetTimeLeft -= deltaTime;
            if (this.magnetTimeLeft <= 0) {
                this.hasMagnet = false;
                this.magnetTimeLeft = 0;
            }
        }
        
        // 加速
        if (this.hasSpeedBoost) {
            this.speedBoostTimeLeft -= deltaTime;
            if (this.speedBoostTimeLeft <= 0) {
                this.hasSpeedBoost = false;
                this.speedBoostTimeLeft = 0;
            }
        }
    }

    /**
     * 激活护盾
     */
    activateShield() {
        this.hasShield = true;
        this.shieldTimeLeft = GameConstants.SHIELD_DURATION;
        console.log('护盾激活！');
    }

    /**
     * 激活磁铁
     */
    activateMagnet() {
        this.hasMagnet = true;
        this.magnetTimeLeft = GameConstants.MAGNET_DURATION;
        console.log('磁铁激活！');
    }

    /**
     * 激活加速
     */
    activateSpeedBoost() {
        this.hasSpeedBoost = true;
        this.speedBoostTimeLeft = GameConstants.SPEED_BOOST_DURATION;
        console.log('加速激活！');
    }

    /**
     * 碰撞检测
     */
    onCollision() {
        if (this.hasShield) {
            // 有护盾，消耗护盾
            this.hasShield = false;
            this.shieldTimeLeft = 0;
            console.log('护盾保护了你！');
            return false; // 没有死亡
        } else {
            // 游戏结束
            console.log('碰撞！游戏结束！');
            return true; // 死亡
        }
    }

    /**
     * 获取当前跑道
     */
    getCurrentLane(): number {
        return this.currentLane;
    }

    /**
     * 是否有磁铁效果
     */
    getHasMagnet(): boolean {
        return this.hasMagnet;
    }

    /**
     * 获取磁铁范围
     */
    getMagnetRange(): number {
        return this.hasMagnet ? GameConstants.MAGNET_RANGE : 0;
    }

    /**
     * 获取加速倍率
     */
    getSpeedMultiplier(): number {
        return this.hasSpeedBoost ? GameConstants.SPEED_BOOST_MULTIPLIER : 1.0;
    }

    onDestroy() {
        // 注销输入事件
        input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
    }
}