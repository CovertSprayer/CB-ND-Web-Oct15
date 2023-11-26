var data = [{l:3, b:6}, {l:4, b:4}, {l:4, b:2}];

var area = (l,b) => l*b;
var perimeter = (l,b) => 2*(l+b);

function calculate(data, logic){    //calculate -> HOF
    var output = [];
    for(var rect of data){
        var ans = logic(rect.l, rect.b);
        output.push(ans);
    }
    return output;
}

var areas = calculate(data, area); // area -> callback fn
var perimeters = calculate(data, perimeter); // perimeter -> callback fn
console.log(areas);
console.log(perimeters);

// function calculate(data){
//     var areas = [];
//     var perimeters = [];
//     for(var rect of data){
//         areas.push(area(rect.l, rect.b));
//         perimeters.push(perimeter(rect.l, rect.b));
//     }

//     return [areas, perimeters];
// }
// var output = calculate(data);

// console.log(output[0]);
// console.log(output[1]);