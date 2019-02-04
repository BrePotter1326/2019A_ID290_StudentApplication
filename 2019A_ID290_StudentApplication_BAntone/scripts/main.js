$('#getStudentsBtn').click(function(){
    $.getJSON("students.json", function(students){
        students.forEach(function(s){
            $('.studentArea').append('<div class="studetns"><h1>' + s.firstName + " " + s.lastName + '</h1><ul><li>GPA: ' + s.gpa + '</li><li>Age: ' + s.age + '</li></ul></div>');
        });
    });
});
$('#getPassingStudentsBtn').click(function(){
    $.getJSON("students.json", function(students){
        students.forEach(function(s){
            if(s.gpa > 2){
                $('.studentArea').append('<div class="studetns"><h1>' + s.firstName + " " + s.lastName + '</h1><ul><li>GPA: ' + s.gpa +'</li></ul></div>');
            }
        });
    });
});
$('#getFailingStudentsBtn').click(function(){
    $.getJSON("students.json", function(students){
        students.forEach(function(s){
            if(s.gpa < 2){
                $('.studentArea').append('<div class="studetns"><h1>' + s.firstName + " " + s.lastName + '</h1><ul><li>GPA: ' + s.gpa +'</li></ul></div>');
            }
        });
    });
});
$('#getAdultStudentsBtn').click(function(){
    $.getJSON("students.json", function(students){
        $('.studentArea').html('');
        students.forEach(function(s){
            $('.studentArea').append('<div class="studetns"><h1>' + s.firstName + " " + s.lastName + '</h1><ul><li>Age: ' + s.age +'</li></ul></div>');
        });
    });
});
$('#getFirstAndLastNamesBtn').click(function(){
    $.getJSON("students.json", function(students){
        $('.studentArea').html('');
        students.forEach(function(s){
            $('.studentArea').append('<div class="studetns"><h1>' + s.firstName + " " + s.lastName + '</h1></div>');
        });
    });
});

$('#clearStudentsBtn').click(function(){
    $('.studentArea').html('');
});