/*
Function to Validate First Name Entered By User
*/
function firstName() {
  var a = document.getElementById("firstname").value;
  var b = /^[A-Z][a-z]{2,15}$/;

  if (b.test(a)) {
    {
      document.querySelector("#firstname").classList = "success";
      document.querySelector("#firstname-error").style.display = "none";
    }
  } else {
    document.querySelector("#firstname").classList = "fail";
    document.querySelector("#firstname-error").style.display = "flex";
    var error_message = document.querySelector("#firstname-error");
    var error_message_text;
    error_message.style.color = "red";

    if (!a.match(/^[A-Z]$/)) {
      error_message_text = "Only First letter be capital";
    }
    if (a.match(/[,.!?;:'"@#$%^&*()<>|\/]/)) {
      error_message_text = "Must not contain special char";
    }
    if (a.match(/[0-9]/)) {
      error_message_text = "Number cannot be used";
    }
    if (a.length < 3) {
      error_message_text = "At least 3 char long";
    }
    if (a.length > 15) {
      error_message_text = "Not more than 15 char";
    }
    if (a.match(/\s+/)) {
      error_message_text = "Remove Whitespace";
    }

    error_message.innerHTML = error_message_text;
  }
}

/*
Function to Validate Last Name Entered By User
*/
function lastName() {
  var c = document.getElementById("lastname").value;
  var d = /^[A-Z][a-z]{3,10}$/;

  if (d.test(c)) {
    document.querySelector("#lastname").classList = "success";
    document.querySelector("#lastname-error").style.display = "none";
  } else {
    document.querySelector("#lastname").classList = "fail";
    document.querySelector("#lastname-error").style.display = "flex";
    var error_message = document.querySelector("#lastname-error");
    var error_message_text;
    error_message.style.color = "red";

    if (!c.match(/^[A-Z]+$/)) {
      error_message_text = "Only First letter be capital";
    }
    if (c.match(/[,.!?;:'"@#$%^&*()<>|\/]/)) {
      error_message_text = "Must not contain special char";
    }
    if (c.match(/[0-9]/)) {
      error_message_text = "Number cannot be used";
    }
    if (c.length < 3) {
      error_message_text = "At least 3 char long";
    }
    if (c.length > 10) {
      error_message_text = "Not more than 10 char";
    }
    if (c.match(/\s+/)) {
      error_message_text = "Remove Whitespace";
    }

    error_message.innerHTML = error_message_text;
  }
}

/*
Function to Validate Phone Number Entered By User
*/
function phoneNo() {
  var a = document.getElementById("phonenumber").value;
  var regex = /^[6789]\d{9}$/;

  if (regex.test(a)) {
    document.querySelector("#phonenumber").classList = "success";
    document.querySelector("#phone-error").style.display = "none";
  } else {
    document.querySelector("#phonenumber").classList = "fail";
    document.querySelector("#phone-error").style.display = "flex";
    var error_message = document.querySelector("#phone-error");
    var error_message_text;
    error_message.style.color = "red";

    if (a.match(/[-+=`{} ,.!?;:'"@#$%^&*()<>|\/]/)) {
      error_message_text = "Special char not allowed";
    }
    if (a[0] != /^[6789]/) {
      error_message_text = "Enter Indian No. starts 6,7,8,9";
    }
    if (a.match(/^\d+$/) && a.length !== 10) {
      error_message_text = "Exactly 10 digits allowed";
    }
    if (a.match(/\s+/)) {
      error_message_text = "Remove Whitespace";
    }
    if (a.match(/[a-zA-Z]/)) {
      error_message_text = "Char cannot be used";
    }

    error_message.innerHTML = error_message_text;
  }
}

/*
Function to Validate Email Entered By User
*/
function Email() {
  var a = document.getElementById("email").value;
  var b = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;

  if (b.test(a)) {
    document.querySelector("#email").classList = "success";
    document.querySelector("#email-error").style.display = "none";
  } else {
    document.querySelector("#email").classList = "fail";
    document.querySelector("#email-error").style.display = "flex";
    var error_message = document.querySelector("#email-error");
    var error_message_text;
    error_message.style.color = "red";

    if (!a) {
      error_message_text = "Email  cannot be empty";
    } else if (a.match(/\s/)) {
      error_message_text = "Cannot contain whitespace.";
    } else if (
      (a.match(/-/g) || []).length > 2 ||
      (a.match(/_/g) || []).length > 2
    ) {
      error_message_text = "Cannot contain more than 2 hyphens or underscores.";
    } else if (a.match(/[+=`{},!?;:'"#$%^&*()<>|\/]/)) {
      error_message_text = "Special char not allowed";
    } else {
      error_message_text = "Invalid email";
    }
    error_message.innerHTML = error_message_text;
  }
}

/*
Function to Validate Gender of User
*/
function validateGender() {
  var genderInput = document.querySelector('input[name="gender"]:checked')?.value;
  if(!genderInput){
    return false;
  }
  else{
    return true;
  }
  
}

/*
Function to Handle submit button Funcitonality
*/
function Submit () {
  let returnVal = true;

  /*
  Checking if all the fields pass the validation.
  */
  document.querySelectorAll(".err").forEach((item)=>{
    if(item.style.display != "none")returnVal = false;
  });

  /*
  Checking if none of the field are empty.
  */

  ['firstname',"lastname","email","profession","phonenumber","country","DOB"].forEach((item)=>{
    if(document.getElementById(item).value == '')returnVal = false;
  });
  if(!validateGender())returnVal=false;
  /*
  Alerting the user of the values filled 
  */
  if(returnVal){
    let fName = document.getElementById("firstname").value;
    let lName = document.getElementById("lastname").value;
    let eMail = document.getElementById("email").value;
    let pNo = document.getElementById("phonenumber").value;
    let pRofession = document.getElementById("profession").value;
    let cOuntry = document.getElementById("country").value;
    let gEnder = document.querySelector('input[name="gender"]:checked')?.value;
    let dOb = document.getElementById('DOB').value;
    alert(`Name : ${fName} ${lName} \nPhone : ${pNo}\nEmail : ${eMail}\nProfession : ${pRofession}\nCountry : ${cOuntry}\nGender : ${gEnder}\nD.O.B : ${dOb}`);
    /*
  Resetting all the fields.
  */
    Reset();
  }
  else{
    alert("Each Field is required.");
  }
}

/*
Function to handle Reset button functionality
*/
function Reset () {
  document.getElementById("firstname").value="";
  document.getElementById("lastname").value="";
  document.getElementById("email").value="";
  document.getElementById("phonenumber").value="";
  document.getElementById("profession").value="";
  document.getElementById("country").value="";
  document.querySelector('input[name="gender"]:checked').checked=false;
  document.getElementById('DOB').value="";
  const nodeList= document.querySelectorAll(".err");
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].style.display = "none";
  }
}