/* global LoggedInMixin:true */
LoggedInMixin = function(methodOptions) {
    console.log(JSON.stringify(methodOptions));
    check(methodOptions.checkLoggedInError, Match.ObjectIncluding({
        error: String,
        message: String,
        reason: String
    }));
    const runFunc = methodOptions.run;
    methodOptions.run = function() {
        if (!this.userId) {
            throw new Meteor.Error(...methodOptions.checkLoggedInError);
        };
        console.log(JSON.stringify(arguments));
        return runFunc(...arguments);
    }
    return methodOptions;
}
