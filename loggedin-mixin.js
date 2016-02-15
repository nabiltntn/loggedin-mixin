/* global LoggedInMixin:true, Roles */
LoggedInMixin = function(methodOptions) {
    check(methodOptions.checkLoggedInError, Match.ObjectIncluding({
        error: String,
        message: Match.Optional(String),
        reason: Match.Optional(String)
    }));
    const runFunc = methodOptions.run;
    methodOptions.run = function() {
        if (!this.userId) {
            throw new Meteor.Error(..._.values(methodOptions.checkLoggedInError));
        };
        // if app is using alanning:roles and method is declaring checkRoles 
        const checkRoles = methodOptions.checkRoles;
        if (Package['alanning:roles'] && checkRoles) {
            // Empty roles are validated to false, undefined validated for true!
            check(checkRoles.roles, [String]);
            // Check rolesError object that contains error code and message
            check(checkRoles.rolesError, Match.ObjectIncluding({
                error: String,
                message: Match.Optional(String),
                reason: Match.Optional(String)
            }));
            if (!Roles.userIsInRole(this.userId, checkRoles.roles, checkRoles.group)) {
                throw new Meteor.Error(..._.values(checkRoles.rolesError));
            }
        }
        return runFunc.call(this, ...arguments);
    }
    return methodOptions;
}
