// JavaScript Document
$('document').ready(function() {
   $('#btn').click(function(){
	   alert("function called succesfully");
	   });
		
	$("#ajax").on('submit',function(){
		   var name=$("#username").val();
		   $.ajax({
			   url:"../ajax/file.php",
			   method:"POST",
			   data:{name:name},
			   success: function(data){
				   $("#msg").html(data);
				   }
			   
			   });
		
		return false;
		
		});
		
	$("#username").keypress(function(){
		 var name=$("#username").val();
		   $.ajax({
			   url:"../ajax/file.php",
			   method:"POST",
			   data:{name:name},
			   success: function(data){
				   $("#msg").html(data);
				   }
			   
			   });
		});
		
		
    	$("#username").keyup(function(){
		 var name=$("#username").val();
		   $.ajax({
			   url:"../ajax/file.php",
			   method:"POST",
			   data:{name:name},
			   success: function(data){
				   $("#msg").html(data);
				   }
			   
			   });
		});
});