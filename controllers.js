ZombieApp.filter("cementaryFilter",function () {
	return function(zombies,id){
		var zombie = [];
		angular.forEach(zombies,function(val,key){
			if(val.cemId == id){
				this.push(val);		
			}
		},zombie);
		
		return zombie;
	}
});
ZombieApp.filter("zombieFilter",function () {
	return function(zombies,id){
		var zombie = [];
		angular.forEach(zombies,function(val,key){
			if(val.id == id){
				this.push(val);		
			}
		},zombie);
		
		return zombie;
	}
});
ZombieApp.controller("ZombieWordController",function($scope,GlobalValueService){
	$scope.baseUrl = "http://localhost/angular/example/#";
	
	$scope.zombiePlace = GlobalValueService.zombies;
	$scope.cementary = [
		{id:0,name:"Wrzos"},
		{id:1,name:"Zgniłego antołka"},
		{id:2,name:"Mrocznego rolnika"}
	];
	
	if($scope.prev == undefined && $scope.next == undefined){
		$scope.prev = false;
		$scope.next = false;
	}
});
ZombieApp.controller("ZombieController",function($scope,GlobalValueService,$routeParams,zombieFilterFilter){
	$scope.errorMessage	= "";
	$scope.zombieId = $routeParams.zombieId;
	var zombie = zombieFilterFilter(GlobalValueService.zombies, $routeParams.zombieId);
	if(zombie.length > 0){
		angular.extend(zombie[0],GlobalValueService.zombieDetails[$routeParams.zombieId]);
	}	
	$scope.zombie = zombie;
	$scope.nextZombieUrl = "/show/"+((parseInt($routeParams.zombieId)+1)>=GlobalValueService.zombies.length?0:parseInt($routeParams.zombieId)+1)
	$scope.prevZombieUrl = "/show/"+((parseInt($routeParams.zombieId)-1)<0?GlobalValueService.zombies.length-1:parseInt($routeParams.zombieId)-1)
	$scope.addZombie = function(name){
		if(GlobalValueService.cementaryId < 0){
			$scope.errorMessage = "Zombie nie może być bezdomny!! Wybież cmentarz.";
			return false;
		}
		if(!name){
			$scope.errorMessage = "Jak zmarły miał na imię??";
			return false;
		}
		
		var id = $scope.zombiePlace.length;
		$scope.zombiePlace.push({id: id, name: name,cemId: GlobalValueService.cementaryId});
		GlobalValueService.zombieDetails[id] = GlobalValueService.defaultDetails;
		$scope.errorMessage	= "";
	};
});

ZombieApp.controller("CementaryController",function($scope,GlobalValueService){
	$scope.setCemId = function (id) {
		GlobalValueService.cementaryId = id;
	}

	$scope.addCementary = function (name){
		if (name) {	
			$scope.cementary.push({id:$scope.cementary.length, name: name});
		}
	}
});