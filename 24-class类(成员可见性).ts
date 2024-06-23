class Animal {
    private __run__(){
        console.log('Animal is running...');
    }
    // 受保护的
    protected move(){
        this.__run__();
        console.log("走两步");
    }
    // 公开的
    run(){
        this.__run__();
        this.move();
        console.log("跑起来");
    }
}

const a = new Animal();
// 子类
class Dog extends Animal {
    bark(){
        console.log("汪汪");
    }
}

const d = new Dog();
