function clearForm() {
  document.getElementById("enrollmentForm").reset();
}

document.getElementById("enrollmentForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var imageLink = document.getElementById("imageLink").value;
  var gender = document.getElementById("gender").value;
  var skills = document.querySelectorAll('input[name="skills"]:checked');
  var skillsArray = Array.from(skills).map(skill => skill.value).join(', ');

  // Create table row
  var table = document.getElementById("enrolledStudentsTable");
  var row = table.insertRow(-1);
  var nameCell = row.insertCell(0);
  var emailCell = row.insertCell(1);
  var imageLinkCell = row.insertCell(2);
  var genderCell = row.insertCell(3);
  var skillsCell = row.insertCell(4);

  // Populate table row
  nameCell.innerHTML = name;
  emailCell.innerHTML = email;
  imageLinkCell.innerHTML = '<img src="' + imageLink + '" width="50" height="50">';
  genderCell.innerHTML = gender;
  skillsCell.innerHTML = skillsArray;

  // Clear form
  clearForm();
});