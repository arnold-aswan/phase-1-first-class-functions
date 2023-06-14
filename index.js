function receivesAFunction(functionReceive) {
    return functionReceive()
}

function returnsANamedFunction() {
    return function namedFunction () {

    } 
}

function returnsAnAnonymousFunction() {
    return function () {

    }
}