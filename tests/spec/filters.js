describe("Tests for filters", function(){
    var filter;

    var zombies = [
        {id:0,name:"Zgniłek",cemId:0},
        {id:1,name:"Piwosz",cemId:1},
        {id:2,name:"Pies młynarza",cemId:2},
        {id:3,name:"Ziarenko",cemId:0}
    ];

    describe("CementaryFilter",function(){
       beforeEach(function(){
           module("ZombieApp");

           inject(function($filter){
              filter =  $filter("cementaryFilter");
           });
       });

        it("Find zombies by cementary id",inject(function(){
            var _zombies = filter(zombies, 0);
            expect(_zombies.length).toBe(2);
        }));

        it("Cant find zombie with id", function(){
            var _zombies = filter(zombies, 159);
            expect(_zombies.length).toEqual(0);
        });
    });

    describe("ZombieFilter",function(){
        beforeEach(function(){
            module("ZombieApp");

            inject(function($filter){
                filter =  $filter("zombieFilter");
            });
        });

        it("Find zombie by id",function(){
           var zombie = filter(zombies,1)[0];
           expect(zombie.name).toEqual("Piwosz");
        });

        it("Cant find zombie with id", function(){
           var zombie = filter(zombies, 159)[0];
           expect(zombie).toBeUndefined();
        });
    });
});