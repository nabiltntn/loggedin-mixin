# loggedin-mixin


## Install

```sh
$ meteor add tunifight:loggedin-mixin
```

## Usage

```js
// Method definition
const method = new ValidatedMethod({
  name, // DDP method name
  mixins : [LoggedInMixin],
  checkLoggedInError: {
    error: 'notLogged',
    message: 'You need to be logged in to call this method',//Optional
    reason: 'You need to login' //Optional
  },
  validate, // argument validation
  run // Method body
});
```

The LoggedInMixin mixin requires the new `checkLoggedInError` option which includes
the required informations to throw an Error. Note that `message` and `reason` are optional.


## Roles check
If you are using `alanning:roles` package in your application, you can add
roles check to the basic logged-in check.

For that, you need to add the new `checkRoles` option which includes the required
informations about `roles`, `group` and the error to throw.

```js
// Method definition
const method = new ValidatedMethod({
  name, // DDP method name
  mixins : [LoggedInMixin],
  checkRoles: {
    roles: ['admin'],
    group: 'group1', // Optional
    rolesError: {
      error: 'not-allowed',
      message: 'You are not allowed to call this method',//Optional
      reason: 'You are not allowed to call this method' //Optional
    }
  }
  checkLoggedInError: {
    error: 'notLogged',
    message: 'You need to be logged in to call this method',//Optional
    reason: 'You need to login' //Optional
  },
  validate, // argument validation
  run // Method body
});
```
