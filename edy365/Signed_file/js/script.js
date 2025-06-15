
var filenr = 0;
const fileArray = [];
const checkedArray = [];

let x = 0;
var i = 0;
let value = 0;

function showLocalFiles(event) {
  const files = event.target.files;

  for (const file of files) {
    const fileName = file.name;
    fileArray.push(fileName);

    const fileContainer = document.createElement('div');
    fileContainer.classList.add('file-container');

    const fileNameElement = document.createElement('span');
    fileNameElement.innerText = fileName;
    fileContainer.appendChild(fileNameElement);

    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
	removeButton.className = 'closeIT';
    removeButton.addEventListener('click', () => {
      fileContainer.remove();
      const index = fileArray.indexOf(fileName);
      if (index > -1) {
        fileArray.splice(index, 1);
        checkedArray.splice(index, 1);
      }
    });
    fileContainer.appendChild(removeButton);
	
	var br = document.createElement("br");
	fileContainer.appendChild(br);
	
	var label = document.createElement('label');
	
	label.appendChild(document.createTextNode(' Vai fails ir parakstits?'));
	fileContainer.appendChild(label);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
	checkbox.id = 'igcheckbox';
    checkbox.addEventListener('change', () => {
      checkedArray[fileArray.indexOf(fileName)] = checkbox.checked;
      console.log(checkedArray + fileArray);
    });
	
	fileContainer.appendChild(checkbox);
	
    document.getElementById('fileList').appendChild(fileContainer);
  }
}

function checkCheckboxes() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  var results = [];

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      results.push(true);
    } else {
      results.push(false);
    }
  }

  return results;
}

		
		
    function Parakstits(){
		
		var checkboxResults = checkCheckboxes();
		let trueorfalse = 0;
		let signed = false;
		
		if(checkboxResults[0] == null && fileArray[0] == null){
			
		console.log("Aint gon happen!");
		
		}else{
		
		
		do{
			
			let trueorfalse = 0;
			let signed = false;
			
			if(checkboxResults[i] == true){
            signed = true;
			trueorfalse = 1;
            console.log(fileArray[i] + " Has been sent! And its: " + signed + trueorfalse);
            }
            else if(checkboxResults[i] != true){
            console.log(fileArray[i] + " Has been sent! And its: " + signed + trueorfalse);
			trueorfalse = 0;
			signed = false;
            }
			
			
			const xhr = new XMLHttpRequest();
	
			xhr.onload = function(){
	
			const serverResponse = document.getElementById("serverResponse")
			serverResponse.innerHTML = this.responseText;
	};
	
				xhr.open("POST", "php/ajax.php");
				xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				xhr.send("filename="+fileArray[i]); //+"SignedValue="+trueorfalse;
				document.cookie="trueorfalse="+trueorfalse;
		
		i = i + 1;
		trueorfalse = 0;
		signed = false;
		
			}while(i < fileArray.length)
				
			createPopupNotification()
			
	}
	}
	
	function createPopupNotification(){
		
	const square = document.querySelector('.fade-in-square');
		square.animate([
		// Keyframes
		{opacity: 0},
		{opacity: 1}
		], {
		// Options
			duration: 1000, // 1 second
			easing: 'ease-in-out',
			fill: 'forwards'
		});
		
		var JustAText = document.getElementById("JustAText");
		i = 0;
		
		do{
		
        JustAText.innerHTML += "<br>" + "File: " + fileArray[i] + " Has been added to [file] database!" + "</br>";
		i = i + 1;
		
		}while(i < fileArray.length)
			
		const element_1 = document.getElementById('localFileInput');
		element_1.setAttribute('disabled', '');
		element_1.style.cursor = "not-allowed";
		
		const SUB = document.getElementById('submit');
		SUB.setAttribute('disabled', '');
		SUB.style.cursor = "not-allowed";
}

	function Done(){
		
	location.reload();
	
	}




	
	
	