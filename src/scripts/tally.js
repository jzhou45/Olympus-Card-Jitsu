class Tally{
    constructor(player){
        this.points = [];
        this.player = player;
        this.monster = {};
        this.hero = {};
        this.god = {};
    };

    type(i){
        return this.points[i].type;
    };

    color(i){
        return this.points[i].color;
    };

    win(){
        const monsterLen = Object.keys(this.monster).length;
        const heroLen = Object.keys(this.hero).length;
        const godLen = Object.keys(this.god).length;
        if (monsterLen >= 3 || heroLen >= 3 || godLen >= 3) return true;
        if (monsterLen >= 1 && heroLen >= 1 && godLen >= 1){
            if (this.uniq().length >= 3) return true;
        };
        return false;
    };

    uniq(){
        const dict = {};
        const monsterVals = Object.keys(this.monster);
        const heroVals = Object.keys(this.hero);
        const godVals = Object.keys(this.god);
        for (let i = 0; i < monsterVals.length; i++){
            dict[monsterVals[i]] = i
        };
        for (let j = 0; j < heroVals.length; j++){
            dict[heroVals[j]] = j
        };
        for (let k = 0; k < godVals.length; k++){ 
            dict[godVals[k]] = k
        };
        return Object.keys(dict);
    };

    append(){
        const card = this.points[this.num()];
        const color = card.color;
        const type = card.type;
        if (type === "monster"){
            this.monster[color] = "placeholderLMAOxD";
        } else if (type==="hero"){
            this.hero[color] = "placeholderLMAOxD";
        } else{
            this.god[color] = "placeholderLMAOxD";
        };
    };

    num(){
        return this.points.length - 1;
    };
};

export default Tally;