let obj1={
    name:"Person",age:5
};

let obj2={
    age=5,name:"Person 1"
};
JSON.stringify(obj1)==JSON.stringify(obj2)
_.isEqual(obj1,obj2)
