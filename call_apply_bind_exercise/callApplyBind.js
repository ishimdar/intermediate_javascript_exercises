function sumEvenArguments() {
        var tempArg = Array.prototype.slice.call(arguments);
        tempArg = tempArg.filter(function (ele) {
            return (ele % 2) === 0;
        }).reduce(function (acc, next) {
            return acc+next;
        }, 0);
        return tempArg;
    }
    console.log(sumEvenArguments.bind(this, 1,2,3,4)());
