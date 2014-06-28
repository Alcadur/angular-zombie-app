describe("Tests for controllers",function(){
    var controller;
    var scope = {};
    describe("Zombie world",function(){
        beforeEach(function(){
           module("ZombieApp");

            inject(function($controller){
                controller = $controller("ZombieWordController",{$scope: scope});
            });
        });

        it("prev and next not declared",function(){
            expect(scope.prev).toEqual(false);
            expect(scope.next).toEqual(false);
        });
    });

    describe("Zombie", function(){
        var globalService;
        beforeEach(function(){
            module("ZombieApp");

            inject(function($controller, GlobalValueService){
                controller = $controller("ZombieController",{$scope: scope});
                globalService = GlobalValueService;
            });
            globalService.cementaryId = -1;
        });

        it("Try add zombie without name",function(){
            globalService.cementaryId = 2;
            scope.addZombie("");
            expect(scope.errorMessage.length).toBeGreaterThan(0);
        });

        it("Try add zombie without cementary",function(){
            scope.addZombie("Janek");
            expect(scope.errorMessage.length).toBeGreaterThan(0);
        });

        it("Try add zombie without name and cementary", function(){
            scope.addZombie("");
            expect(scope.errorMessage.length).toBeGreaterThan(0);
        });

        it("Add zombie", function(){
            var startLength = scope.zombiePlace.length;
            globalService.cementaryId = 2;
            scope.addZombie("Janek");
            expect(scope.zombiePlace.length).toBeGreaterThan(startLength);
        });
    });

    describe("Cementary", function(){
        var globalService;
        beforeEach(function(){
            module("ZombieApp");
            scope.cementary = [];

            inject(function($controller, GlobalValueService){
                controller =  $controller("CementaryController", {$scope: scope});
                globalService = GlobalValueService;
            });
        });

        it("Set cementary id to global value service", function(){
            scope.setCemId(25);
            expect(globalService.cementaryId).toEqual(25);
        });

        it("Add cementary", function(){
            var startLength = scope.cementary.length;
            scope.addCementary("new Cem");
            expect(scope.cementary.length).toBeGreaterThan(startLength);
        });
    });
});