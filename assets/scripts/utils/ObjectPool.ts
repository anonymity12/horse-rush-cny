import { _decorator, Node, Prefab, instantiate, NodePool } from 'cc';
const { ccclass } = _decorator;

/**
 * 对象池管理器
 * 用于优化性能，复用游戏对象
 */
@ccclass('ObjectPool')
export class ObjectPool {
    private pools: Map<string, NodePool> = new Map();

    /**
     * 从对象池获取节点
     * @param prefab 预制体
     * @param key 池的唯一标识
     */
    get(prefab: Prefab, key: string): Node {
        if (!this.pools.has(key)) {
            this.pools.set(key, new NodePool());
        }

        const pool = this.pools.get(key);
        let node: Node = null;

        if (pool.size() > 0) {
            node = pool.get();
        } else {
            node = instantiate(prefab);
        }

        return node;
    }

    /**
     * 将节点放回对象池
     * @param node 要回收的节点
     * @param key 池的唯一标识
     */
    put(node: Node, key: string): void {
        if (!this.pools.has(key)) {
            this.pools.set(key, new NodePool());
        }

        const pool = this.pools.get(key);
        pool.put(node);
    }

    /**
     * 清空指定对象池
     * @param key 池的唯一标识
     */
    clear(key: string): void {
        if (this.pools.has(key)) {
            const pool = this.pools.get(key);
            pool.clear();
            this.pools.delete(key);
        }
    }

    /**
     * 清空所有对象池
     */
    clearAll(): void {
        this.pools.forEach(pool => pool.clear());
        this.pools.clear();
    }

    /**
     * 获取指定池的大小
     * @param key 池的唯一标识
     */
    getPoolSize(key: string): number {
        if (this.pools.has(key)) {
            return this.pools.get(key).size();
        }
        return 0;
    }
}