function simplemodule(array, callback) {
    return process.nextTick(function() {
        callback([]);
    });
}

module.exports = simplemodule;