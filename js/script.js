//Calculation
let sum = 0;
function scoreCalculator(userValue) {
    let names = ["js", "datatype", "element", "known", "type", "year", "framework","programming","brendan","popular"];
    names.forEach(function(name) {
        var userValue = $("choices:radio[name=" + name + "]:checked").val();
        if(userValue === "10") {
            sum+=10;
        }
    });
}