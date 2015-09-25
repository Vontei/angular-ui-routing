var app = angular.module("not-angry-angular", ['ui.router'])
app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/home");
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "partials/home.html"
    })
    .state('about', {
      url: "/about",
      templateUrl: "partials/about.html"
    })

    .state('about.crested', {
      url: "/crested",
      templateUrl: 'partials/crested.html',
    })

    .state('about.telluride', {
      url: "/telluride",
      templateUrl: 'partials/telluride.html',
    })
    .state('about.crested.cbmr', {
      url: "/cbmr",
      templateUrl: 'partials/cbmr.html',
      authenticate: true
    })
    .state('not-authenticated', {
          url: "/",
          template: "<h1>CUIDADO CON EL LOGIN</h1>"
        })

});

app.run(function ($rootScope, $state, AuthService) {
  $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
    if (toState.authenticate && !AuthService.isAuthenticated()) {
      $state.transitionTo("not-authenticated");
      event.preventDefault();
    }

  })
})
