/*window.onload = function() {
    if (myDataRef != null)
    {
    	//alert('Data is in Firebase!')
    }
    }
*/

window.onload = function getData(){
	var listRef = new Firebase('https://blog-store.firebaseio.com/Blogs');
	listRef.on('child_added', function(snapshot) {
  	var msgData = snapshot.val();

  	var node=document.createElement("LI");
	var textnode=document.createTextNode('Title: ' + msgData.Blog_title + "\n" + "|" + msgData.date_time + "\n" + '|Blog: |' + msgData.Blog_content);
	node.appendChild(textnode);
	document.getElementById("blogs").appendChild(node);

	var blank=document.createElement("P");
	var blanktext=document.createTextNode(' ');
	blank.appendChild(blanktext);
	document.getElementById("blogs").appendChild(blank);
});
} 
