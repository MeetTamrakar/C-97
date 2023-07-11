const firebaseConfig = {
      apiKey: "AIzaSyCG_2b1HdIQHAktV_bg5DmsnJr0qD_jydo",
      authDomain: "kwitter-ec1fc.firebaseapp.com",
      databaseURL: "https://kwitter-ec1fc-default-rtdb.firebaseio.com",
      projectId: "kwitter-ec1fc",
      storageBucket: "kwitter-ec1fc.appspot.com",
      messagingSenderId: "593231689615",
      appId: "1:593231689615:web:4c2768b9bdd5484d1a7dfa"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    user_name=localstorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         name=message_data['name'];
         message=message_data['message'];
         like=message_data['like'];
         name_with_tag="<h4>"+name+"<ing class='user_tick'src='tick.png'></h4>";
         message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
         like_button="<button class='btn btn-warning'id="+firebase__message_id+"value="+like+"onclick='updateLike(this.id)'>";
         span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";
         row=name_with_tag+message_with_tag+like_button+span_with_tag;
         document.getElementById("output").innerHTML+=row;



//End code
      } });  }); }
getData();
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";


      

       
}
function updateLike(message_id){
      console.log("clicked onlike button="+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updateted_likes=Number(likes)+1;
      console.log(updateted_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like:updateted_likes
      });


}
