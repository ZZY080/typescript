class Ponit {
    x=1;
    y=2;
    scale(n:number){
        this.x*=n;
        this.y*=n
    }
}

const p=new Ponit();
p.scale(10);
console.log(p.x,p.y);