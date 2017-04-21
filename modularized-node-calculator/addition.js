function Addition(){
    this.add = function(a, b){
        return parseInt(a) + parseInt(b);
    }
}

module.exports = new Addition();
