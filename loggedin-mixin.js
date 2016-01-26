/* global LoggedInMixin:true */
LoggedInMixin = function(methodOptions) {
    check(methodOptions.checkLoggedInError, Match.ObjectIncluding({
        error: String,
        message: String,
        reason: String
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
