function MyPromise(callback) {
    var self = this;
    var state = null;
    //记录resolver的参数
    var param = null;
    // 执行传入的**方法，并改变promise对象的状态
    callback(resolve, reject)
    //resolve方法
    function resolve(data) {
        let parmise
        // 改变状态
        state = true
        param = data
        nextResolve (asynconFulfilled(param))
        parmise = asynconFulfilled(param)
        if(parmise === undefined) {
            // 如果等于，就不能解析parmise.constrtuctor

        }else if (parmise.constructor === self.constructor) {
            // 等待传递进来的promise对象执行完毕，然后根据传递进来的promise对象的状态执行 resolve或reject
            // 注意， 这个param是个形参，在then方法的promise中执行
            promise.then(function(param) {
                resolve(pararm)
            },function(param) {
                reject(param)
            })
        }else {
            //这是前面的then方法没有返回promise对象
            resolve(promise)
        }
    }
    // reject 方法
    function reject(err) {
        state = false
        param = err
        nextReject(asynconRejected(param))
    }
    var nextResolve = null
    var nextReject = null
    // 记录then方法的参数，onfulfilled, onReject
    var asynconFulfilled = null
    var asynconRejected = null
    this.then = function(onFulfilled, onRejected) {
        // 返回一个新的promise对象
        return new self.constructor(function(resolve, reject) {
            if (state = true) {
                // param 是promise对象完成后的结果
                resolve(onFulfilled(param))
            }else if( state = false) {
                reject(onRejected(param))
            } else {
                nextResolve = resolve
                nextReject = reject
                asynconFulfilled = onFulfilled
                asynconRejected = onRejected
            }
        })
    }
}
