function funkcija() {
var UserName = document.getElementById("Vards").value;
var UserNumber = document.getElementById("Telefonanr").value;
var UserEmail = document.getElementById("epasts").value;
var UserComment = document.getElementById("koments").value;
var BackEndUrl = 'https://europe-west3-routed-in-website.cloudfunctions.net/info-mailer';

console.log("Vards: " + UserName)
console.log("Telefona nummurs: " + UserNumber)
console.log("Koments: " + UserComment)
console.log("epasts: " + UserEmail)


		let userInfo = {
			'Name' : UserName,
			'Number' : UserNumber,
			'Email' : UserEmail,
			'Comment' : UserComment,
			}
			const request = new XMLHttpRequest()
			request.open('POST', BackEndUrl + '/processUserInfo')
			request.setRequestHeader("Content-Type", "application/json");
			request.onload = () => {
				const flaskMessage = request.responseText
				console.log(flaskMessage)
			}
			request.send(JSON.stringify(userInfo))
		}