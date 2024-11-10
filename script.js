var toggleButton = document.getElementById('toggle-skills');
var skills = document.getElementById('skills');
toggleButton.addEventListener('click', function () {
    if (skills.style.display === 'none' || skills.style.display === '') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
var toggleButton1 = document.getElementById('toggle-references');
var references = document.getElementById('references');
toggleButton1.addEventListener('click', function () {
    if (references.style.display === 'none' || references.style.display === '') {
        references.style.display = 'block';
    }
    else {
        references.style.display = 'none';
    }
});
