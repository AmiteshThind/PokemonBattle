new Vue({
    el: "#app",
    
    data:{
        playerHealth :100,
        monsterHealth : 100,
        gameIsRunning : false // lets us know if we need to start the game or is it already on 
    },

    methods:{
        attack: function(){
        let monsterdamage = Math.floor((Math.random() * 10) + 1);
        let playerdamage = Math.floor((Math.random() * 10) + 1);
        this.playerHealth-=playerdamage;
        this.monsterHealth-=monsterdamage;
        },
        speicalattack : function(){
        let monsterdamage = Math.floor((Math.random() * 10) + 3);
        let playerdamage = Math.floor((Math.random() * 10) );  
        this.playerHealth-=playerdamage;
        this.monsterHealth-=monsterdamage;  
        },
        heal: function(){
        
            let monsterheal = Math.floor((Math.random() * 10) );
            let playerHealth = Math.floor((Math.random() * 10) );  
            this.playerHealth+=playerdamage;
            this.monsterHealth+=monsterdamage;  

        },
        quit: function(){


        }
    }
    });