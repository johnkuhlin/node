function outter() {
    var num = 2;

    this.inner = function() {
        console.log(num);
    }
    num++;
}

(new outter()).inner();
