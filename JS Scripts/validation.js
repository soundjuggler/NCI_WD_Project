// Made by Cole Gilman, Harry Reilly, and Jack Kelly

// Jack Kelly
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("All entries must be filled");
    return false;
  }
} 

function userData(){
	var first = document.getElementById("1").value;
	var second = document.getElementById("2").value;
	var third = document.getElementById("3").value;
	var fourth = document.getElementById("4").value;
	var fifth = document.getElementById("5").value;
	var sixth = document.getElementById("6").value;
	document.getElementById("change").innerHTML = "first"+"second"+"third"+"fourth"+"fifth"+"sixth";
}

// Harry Reilly
function showText1() {
        //get the div elemenet with the class "layer"
        var textDiv = document.querySelector('.layer1');
        //text inside the div
        textDiv.innerHTML = 'It might be tempting to leave all your studying for that big exam up until the last minute, but research suggests that cramming does not improve longer term learning. ';
        //formatting the text
        textDiv.style.color = 'black';
        textDiv.style.fontSize = '28px';
        textDiv.style.fontFamily = 'Arial';
        textDiv.style.textShadow = "1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000";
    }
    function showText2() {
        //get the div elemenet with the class "layer"
        var textDiv = document.querySelector('.layer2');
        //text inside the div
        textDiv.innerHTML = 'Having a study plan with set goals can help you feel more prepared and can give you a roadmap to follow. Schwab said procrastination is one mistake that students often make when transitioning to a university-level course load.';
         //formatting the text
        textDiv.style.color = 'black';
        textDiv.style.fontSize = '28px';
        textDiv.style.fontFamily = 'Arial';
        textDiv.style.textShadow = "1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000";
        }
    function showText3() {
        //get the div elemenet with the class "layer"
        var textDiv = document.querySelector('.layer3');
        //text inside the div
        textDiv.innerHTML = "You don't have to struggle through difficult material on your own. Many students are not used to seeking help while in high school, but seeking extra support is common in college.";
         //formatting the text
        textDiv.style.color = 'black';
        textDiv.style.fontSize = '28px';
        textDiv.style.fontFamily = 'Arial';
        textDiv.style.textShadow = "1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000";
        }
    function showText4() {
        //get the div elemenet with the class "layer"
        var textDiv = document.querySelector('.layer4');
        //text inside the div
        textDiv.innerHTML = 'Your fellow students are likely going through the same struggles that you are. Reach out to classmates and form a study group to go over material together, brainstorm, and to support each other through challenges.';
         //formatting the text
        textDiv.style.color = 'black';
        textDiv.style.fontSize = '28px';
        textDiv.style.fontFamily = 'Arial';
        textDiv.style.textShadow = "1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000";
        }
    function showText5() {
        //get the div elemenet with the class "layer"
        var textDiv = document.querySelector('.layer5');
        //text inside the div
        textDiv.innerHTML = 'It might take a bit of time (and trial and error!) to figure out what study methods work best for you. There are a variety of ways to test your knowledge beyond simply reviewing your notes or flashcards. ';
         //formatting the text
        textDiv.style.color = 'black';
        textDiv.style.fontSize = '28px';
        textDiv.style.fontFamily = 'Arial';
        textDiv.style.textShadow = "1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000";
        }
    function showText6() {
        //get the div elemenet with the class "layer"
        var textDiv = document.querySelector('.layer6');
        //text inside the div
        textDiv.innerHTML = "Where you study can be just as important as how you study. Find a space that is free of distractions and has all the materials and supplies you need on hand. Eat a snack and have a water bottle close by so you're properly fueled for your study session. ";
         //formatting the text
        textDiv.style.color = 'black';
        textDiv.style.fontSize = '28px';
        textDiv.style.fontFamily = 'Arial';
        textDiv.style.textShadow = "1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000";
        }

        
        //getting the navlinks div and make a variable for it 
        var navLinks = document.getElementById("navLinks");
        //here brings out the navlinks bar to poistion 0 on the screen bringing it out
        function showMenu(){
            navLinks.style.right = "0";
        }
        //here brings the nav links back in by making its property reduce it to -200px
        function hideMenu(){
            navLinks.style.right = "-200px";
        }