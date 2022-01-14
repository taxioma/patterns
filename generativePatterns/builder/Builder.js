var ExampleBuilder1 = /** @class */ (function () {
    function ExampleBuilder1() {
        this.reset();
    }
    ExampleBuilder1.prototype.reset = function () {
        this.product = new Product1();
    };
    ExampleBuilder1.prototype.producePartA = function () {
        this.product.parts.push('PartA1');
    };
    ExampleBuilder1.prototype.producePartB = function () {
        this.product.parts.push('PartB1');
    };
    ExampleBuilder1.prototype.producePartC = function () {
        this.product.parts.push('PartC1');
    };
    ExampleBuilder1.prototype.getProduct = function () {
        var result = this.product;
        this.reset();
        return result;
    };
    return ExampleBuilder1;
}());
var Product1 = /** @class */ (function () {
    function Product1() {
        this.parts = [];
    }
    Product1.prototype.listParts = function () {
        console.log("Product parts: " + this.parts.join(', ') + "\n");
    };
    return Product1;
}());
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.setBuilder = function (builder) {
        this.builder = builder;
    };
    Director.prototype.buildMVCProduct = function () {
        this.builder.producePartA();
    };
    Director.prototype.buildFullFeaturedProduct = function () {
        this.builder.producePartA();
        this.builder.producePartB();
        this.builder.producePartC();
    };
    return Director;
}());
function clientCode(director) {
    var builder = new ExampleBuilder1();
    director.setBuilder(builder);
    console.log('MVC');
    director.buildMVCProduct();
    builder.getProduct().listParts();
    console.log('full featured');
    director.buildFullFeaturedProduct();
    builder.getProduct().listParts();
    console.log('custom');
    builder.producePartA();
    builder.producePartC();
    builder.getProduct().listParts();
}
var director = new Director();
clientCode(director);
