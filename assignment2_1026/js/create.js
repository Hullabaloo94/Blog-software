function submitOnClick()
{
var currentDate = new Date()

var title = $('#name_input').val();
var text = $('#message_input').val(); 

var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear()
var hours = currentDate.getHours() 
var mins = currentDate.getMinutes()

var date_and_time = "Date/Time: " + day + "/" + month + "/" + year + " at " + hours + ":" + mins;

if(title == "") //Start of validation code (Task 6)
	{
		$('#name_input').val(prompt("Please enter you title: ","" ));
		console.log('NOTE: If you clicked CANCEL on the title box which appeared, enter title in the title textbox on the webpage.');
	}

if(text == "") 
	{
		var css_blog = document.createElement("style");
		css_blog.type = "text/css";
		css_blog.innerHTML = "#message_input { border-color: red }";
		document.body.appendChild(css_blog);
		console.log('ERROR: You are missing your blogs content, please enter the blogs content then try again.');
	}
if(title != "" && text != "")
	{
		myDataRef.push({Blog_title: title, Blog_content: text, date_time: date_and_time});
		$('#message_input').val('');
		$('#name_input').val('');

		myDataRef.on('child_added', function(snapshot) {
		var message = snapshot.val();
  		}); 
  		return;
  	} //End of validation code (Task 6)	
}