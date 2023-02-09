/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.cur=0;
    this.history=[homepage]
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.history= this.history.slice(0, this.cur+1);
    this.history.push(url);
    this.cur++;
    return url
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    this.cur-=steps;
    console.log(this.history)
    if(this.cur<0){
        this.cur=0;
        return this.history[0]
    }
    return this.history[this.cur]
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    this.cur+=steps;
    if(this.cur> this.history.length-1){
        this.cur= this.history.length-1;
        return this.history[this.cur]
    }
    return this.history[this.cur]
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

// var BrowserHistory = function(homepage) {
//     this.cur = 1;
//     this.history = [homepage];
// };

// /** 
//  * @param {string} url
//  * @return {void}
//  */
// BrowserHistory.prototype.visit = function(url) {
//     if(this.cur !== this.history.length){
//        this.history = this.history.slice(0,this.cur);
//     }
//     this.cur++;
//     this.history.push(url);
// };

// /** 
//  * @param {number} steps
//  * @return {string}
//  */
// BrowserHistory.prototype.back = function(steps) {
//     if(this.cur-steps-1 < 0){
//         this.cur = 1;
//     }else{
//         this.cur = this.cur - steps;
//     }
//     return this.history[this.cur-1];
// };

// /** 
//  * @param {number} steps
//  * @return {string}
//  */
// BrowserHistory.prototype.forward = function(steps) {
//     if(this.cur+steps>this.history.length){
//         this.cur = this.history.length
//     }else{
//         this.cur = this.cur+steps
//     }
//     return this.history[this.cur-1];
// };