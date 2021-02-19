class MyPromise{
    then(){
        console.log('then方法被调用了。。。');
        return this;
    }

    catch(){
        console.log('catch方法被调用了。。。');
        return this;
    }
}

var promise = new MyPromise();

promise.then().then().catch();