angular-zombie-app
==================

Prosta aplikacja w Angular JS przedstawiająca zombie wraz z cmentarzami

Konfiguracja
******************
W pliku controler.js należy odnaleźć linię kodu:
$scope.baseUrl = "http://localhost/angular/example/#"
a następnie zmienić ją na adres pod którym dostępny jest index.html

**************************
***                    ***
***        UWAGA       ***
***                    ***
**************************
Jeśli chcemy aby aplikacja działała bez serwera należy wykonać następujące kroki:
1. Zawartość plików z katalogu templates skopiować do index.html odpowiednio między znaczniki:
<script type="text/ng-template" id="list.html">...</script>
<script type="text/ng-template" id="zobieDetails.html">...</script>
2. Następnie należy w pliku applicationDeclare.js zmienić linijki:
templateUrl: 'templates/list.html' -> templateUrl: 'list.html'
templateUrl: 'templates/zobieDetails.html' -> templateUrl: 'zobieDetails.html'
3. Zmienić $scope.baseUrl tak jak opisano wyżej na ścieżkę dostępu do index.html
