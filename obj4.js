const counter = {
    count: 0,
};


Object.defineProperty(counter, "reset", {
    get:
        function () {
            counter.count = 0;
        }

});



Object.defineProperty(counter, "increment", {
    get:
        function () {
            counter.count++;
        }

});

Object.defineProperty(counter, "decrement", {
    get:
        function () {
            counter.count - 1;
        }
});

//counter.reset;
counter.increment;
//counter.decrement;

console.log(counter.count)