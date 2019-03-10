//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt;

const FEATURED = document.querySelector("#SideNav");
var newHeading=document.createElement("h3");
var secondaryHeadings = ['Their Finest Hour', 'Quit India', 'The Third Philippic'];


document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  var donateValue = window.prompt("How much would you like to donate?");

  if(donateValue<100) { // this is longhand
    // var newText=document.createTextNode("here is some text");
    // FEATURED.append(newHeading);
    newHeading.append("Thank you for your donation of $" + donateValue);
    FEATURED.append(newHeading);
  } else {
    newHeading.append("Thank you for your very generous donation!");
    FEATURED.append(newHeading);
    document.querySelector("#SideNav").style.color = "red";
    for (i=0; i<secondaryHeadings.length; i++) {
          document.getElementsByTagName("ARTICLE")[i].setAttribute("class", "generous-donation");
    };
  }

});





document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.

  // newParagraph.append("This speech was written by " + speechesArray[0].author + " in " + speechesArray[0].year);
  // FEATURED.append(newParagraph);

  document.querySelector("#ConsoleDisplay").innerHTML+="This speech was written by " + speechesArray[0].author + " in " + speechesArray[0].year;

  if(speechesArray[0].yearIsBCE === true){
    document.querySelector("#ConsoleDisplay").innerHTML+="<br>This speech took place before the common era.<br>";
  }else{
    document.querySelector("#ConsoleDisplay").innerHTML+="<br>This speech took place during the common era.<br>";
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[0].year === oldest){
    document.querySelector("#ConsoleDisplay").innerHTML+="<br>This is the oldest speech on the page.<br>";
  }
  if(speechesArray[0].year === newest){
    document.querySelector("#ConsoleDisplay").innerHTML+="<br>This is the most recent speech on the page.<br>";
  }
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  document.querySelector("#ConsoleDisplay").innerHTML+="This speech was written by " + speechesArray[1].author + " in " + speechesArray[1].year;

  if(speechesArray[1].yearIsBCE === true){
    document.querySelector("#ConsoleDisplay").innerHTML+="<br>This speech took place before the common era.<br>";
  }else{
    document.querySelector("#ConsoleDisplay").innerHTML+="<br>This speech took place during the common era.<br>";
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[1].year === oldest){
    document.querySelector("#ConsoleDisplay").innerHTML+="<br>This is the oldest speech on the page.<br>";
  }
  if(speechesArray[1].year === newest){
    document.querySelector("#ConsoleDisplay").innerHTML+="<br>This is the most recent speech on the page.<br>";
  }
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
document.querySelector("#ConsoleDisplay").innerHTML+="This speech was written by " + speechesArray[2].author + " in " + speechesArray[2].year;

  if(speechesArray[2].yearIsBCE === true){
    document.querySelector("#ConsoleDisplay").innerHTML+="<br>This speech took place before the common era.<br>";
  }else{
    document.querySelector("#ConsoleDisplay").innerHTML+="<br>This speech took place during the common era.<br>";
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[2].year === oldest){
    document.querySelector("#ConsoleDisplay").innerHTML+="<br>This is the oldest speech on the page.<br>";
  }
  if(speechesArray[2].year === newest){
    document.querySelector("#ConsoleDisplay").innerHTML+="<br>This is the most recent speech on the page.<br>";
  }
});
