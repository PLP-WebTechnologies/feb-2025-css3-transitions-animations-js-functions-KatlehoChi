document.getElementById('animateBtn').addEventListener('click', function () {
    document.querySelector('.animated-box').classList.toggle('active');
});

document.getElementById('saveDataBtn').addEventListener('click', function () {
    localStorage.setItem('userData', 'User clicked save!');
    alert('Data saved to localStorage!');
});
