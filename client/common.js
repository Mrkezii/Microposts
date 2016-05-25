  Meteor.startup(function () {
    AccountsEntry.config({

      homeRoute: '/',                  // mandatory - path to redirect to after sign-out
      dashboardRoute: '/',             // mandatory - path to redirect to after successful sign-in
      waitEmailVerification: false   // Set to true to wait until newly created user's email has been verified.
    });
  });
