//to update the table dynamically
 $(document).ready(function () { 

    // FETCHING DATA FROM JSON FILE 
    $.getJSON("http://localhost:3000/data",  
            function (data) { 
        var student = ''; 

        // ITERATING THROUGH OBJECTS 
        $.each(data, function (key, value) { 

            //CONSTRUCTION OF ROWS HAVING 
            // DATA FROM JSON OBJECT 
            student += '<tr>'; 
            student += '<td><input type="radio" value="'+value.id+'"/></td>';
            
            student += '<td>' +  
                value.id + '</td>'; 

            student += '<td>' +  
                value.question + '</td>'; 

            student += '<td>' +  
                value.op1 + '</td>'; 

            student += '<td>' +  
                value.op2 + '</td>'; 

            student += '<td>' +  
                value.op3 + '</td>'; 
                                       
            student += '<td>' +  
                value.op4 + '</td>'; 
            student += '<td>' +  
                value.correct + '</td>'; 

             
            student += '<td><button type="button" id="edit'+value.id+'" value="'+value.id+'" onclick="editrow('+value.id+','+value.question+','+value.op1+','+value.op2+','+value.op3+','+value.op4+','+value.correct+')"/>EDIT</button></td>';
                
            student += '<td><button type="button" id="button'+value.id+'" value="'+value.id+'" onclick="deleterow('+value.id+')"/>Delete</button></td>';
            

            student += '</tr>'; 
        }); 
          

        //INSERTING ROWS INTO TABLE  
        $('#table').append(student); 
    }); 
}); 




//to post data into json file using form fields.(create)

let movies = [];
// example {id:1592304983049, title: 'Deadpool', year: 2015}
const addMovie = (ev)=>

{
    ev.preventDefault();  //to stop the form submitting
    let movie = {
        id: $('#questionid').val(),
       question: $('#question').val(),
        op1: $('#op1').val(),
        op2: $('#op2').val(),
        op3: $('#op3').val(),
        op4: $('#op4').val(),

        correct :$('#correct').val(),

    }
    
    //document.forms[0].reset();
	// to clear the form for the next entries
    //document.querySelector('form').reset();

    //for display purposes only
    console.warn('added' , {movies} );
    //let pre = document.querySelector('#msg pre');
   // pre.textContent = '\n' + JSON.stringify(movies, '\t', 2);

    //saving to localStorage
  //  localStorage.setItem('MyMovieList', JSON.stringify(movies) );


  console.log("adding")

  $.ajax({
      url:"http://localhost:3000/data",
      type: "post",

      datatype:"json",
      contentType:"application/json",

        success: function (data){

           alert("data-written");
           alert(data);

      },
      data: JSON.stringify(movie),

      });
      e.preventDefault();

    



}


document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addMovie);
});





// example {id:1592304983049, title: 'Deadpool', year: 2015}

//to update json file using (edit tab)
const updatequestion = (ev)=>

{
    ev.preventDefault();  //to stop the form submitting
    let movie = {
        id: $('#questionid').val(),
        question: $('#question').val(),
        op1: $('#op1').val(),
        op2: $('#op2').val(),
        op3: $('#op3').val(),
        op4: $('#op4').val(),

        correct :$('#correct').val(),

    }
    
    


  console.log("updating")

  var u= $(questionid).val();

  $.ajax({
      url:"http://localhost:3000/data/"+u,
      type: "patch",

      datatype:"json",
      contentType:"application/json",

        success: function (data){

           alert("data-written");
           alert(data);

      },
      data: JSON.stringify(movie),

      });
    

}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('patch').addEventListener('click', updatequestion);
});

//to delete a question array in json file using question id (delete tab)

const deletequestion = (ev)=>

{
    ev.preventDefault();  //to stop the form submitting
   
    
   

  
  
  console.log("deleting")

  var d= $(questionid).val();

  $.ajax({
      url:"http://localhost:3000/data/"+d,
      type: "delete",
      datatype:"json",
      contentType:"application/json",

        success: function (data){

           alert("data-written");
           alert(data);

      },
     
      });
    

}


document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('delete').addEventListener('click', deletequestion);
});







  function deleterow(id){



  console.log("deleting")


  $.ajax({
      url:"http://localhost:3000/data/"+id,
      type: "delete",
      datatype:"json",
      contentType:"application/json",

        success: function (data){

           alert("data-written");
       

      },
     
      });
    


}



function editrow(id,q,op1,op2,op3,op4,correct)
{

    $('#editquestionid').val(id);
    $('#editquestion').val(q);
    $('#editop1').val(op1);
    $('#editop2').val(op2);
    $('#editop3').val(op3);
    $('#editop4').val(op4);
    $('#editcorrect').val(correct);

    // $('#editquestionid').innerHTML=+id;
    // $('#editquestion').innerHTML=+op1;
    // $('#editop1').innerHTML=+op1;
    // $('#editop2').innerHTML=+op2;
    // $('#editop3').innerHTML=+op3;
    // $('#editop4').innerHTML=+op4;
    // $('#correct').innerHTML=+correct;
    



    

    console.log("editing");



}








