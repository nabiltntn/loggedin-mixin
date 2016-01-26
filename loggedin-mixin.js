/* global LoggedInMixin:true */
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
        return runFunc(...arguments);
    }
    return methodOptions;
}
