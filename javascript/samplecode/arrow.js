var obj ={
    say : function(){
        console.log(this);
        var f = function(){console.log(this);};
        f();
        var g = () => console.log(this);
        g();
    }
};
obj.say();