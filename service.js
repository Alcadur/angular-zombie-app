ZombieApp.service("GlobalValueService",function () {
	this.cementaryId = -1;
	this.zombies = [
		{id:0,name:"Zgniłek",cemId:0},
		{id:1,name:"Piwosz",cemId:1},
		{id:2,name:"Pies młynarza",cemId:2},
		{id:3,name:"Ziarenko",cemId:0},
		{id:4,name:"Salcesonik",cemId:1},
		{id:5,name:"Młynarz",cemId:2},
		{id:6,name:"Ahmed",cemId:0}
	];
	
	this.defaultDetails = {
		photo:"photo/zd.jpg",
		desc: "Umarł ale nie na śmierć", 
		like:["mózgi","meble z Ikei <i>(niewiadomo czemu zombie za nimi przepadają)</i>","sernik"]
	}	
	
	this.zombieDetails = {
		0:{
			photo:"photo/z1.jpg", 
			desc:"Odleżał swoje i wykopali go", 
			like:["mózgi","meble z Ikei <i>(niewiadomo czemu zombie za nimi przepadają)</i>","ogrodzenia"]
		},
		1:{
			photo:"photo/z2.jpg",
			 desc:"Zalał się w trupa",
			  like:["mózgi","meble z Ikei <i>(niewiadomo czemu zombie za nimi przepadają)</i>","piwo","%%%%"]
		},
		2:{
			photo:"photo/z4.png",
		 	desc:"Szczek, szcek, pies na baby... i samochody",
		  like:["mózgi","meble z Ikei <i>(niewiadomo czemu zombie za nimi przepadają)</i>","kości","szczury","pandy"]
		},
		3:{
			photo:"photo/z3.jpg",
			desc:"Skosiło go z nóg",
			like:["mózgi","meble z Ikei <i>(niewiadomo czemu zombie za nimi przepadają)</i>","ciastka <i>tylko zborzowe</i>"]
		},
		4:{
			photo:"photo/z5.jpg", 
			desc:"Podłożyli mu świnię", 
			like:["mózgi","meble z Ikei <i>(niewiadomo czemu zombie za nimi przepadają)</i>","golonka","pieczyste"]
		},
		5:{
			photo:"photo/z6.jpg", 
			desc:"Przerobili go na mąkę", 
			like:["mózgi","meble z Ikei <i>(niewiadomo czemu zombie za nimi przepadają)</i>","BHP", "zwierzaki"]
		},
		6:{
			photo:"photo/ahmed.jpg", 
			desc:"The dead terrorist", 
			like:["jazdę mini cooper","bomby","bombki","bombeczki","bombunie"]
		}
	}
	
});