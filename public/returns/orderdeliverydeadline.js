var callExecuter=function(){
    console.log("entering in ajax")
    $.ajax({
      type:'Get',
      url:'https://5c08fb783386.ngrok.io/settings',
      success:function(data){
        var notification = data.data
        console.log("returning in ajax successful",notification.name)
        var codeBlock = '<div class="content">' +
                        '<h1>PRESS BUTTON For surprise</h1>' +
                        '<button class="btnpres">'+ 'Press' +'</button>' +
                    '</div>';
                    document.getElementById("SiteNav").innerHTML = codeBlock
                    $('.btnpres').click(function(){ 
                                    $("#SiteNav").append("<h2>"+ notification.name +"</h2>")
                                    $(this).hide();
                        // The new id, target buttons
                       //If it changed something, hide the button
                  })
                    // var node = document.createElement("LI");                 // Create a <li> node
                    // var textnode = document.createTextNode(notification.name);         // Create a text node
                    // node.appendChild(textnode);                              // Append the text to <li>
                    // document.getElementById("SiteNav").appendChild(node).style.cssText ="color:red; font-size: 150%; padding-left:20%";
                  },
                  error: function(error){console.log("error:",error)}
                });
              }
              callExecuter();
              // $("#SiteNav").append("<h2>"+ notification.name +"</h2>")
  //  document.getElementById('SiteNav').style.cssText ="border: 2px solid green"
  // data: {random_param:"Hello there!"},
