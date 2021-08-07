
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form')
    form.onsubmit = async (e) => {
      e.preventDefault();
      let response = await fetch('sendMail.php', {
        method: 'POST',
        body: new FormData(form)
      });
      let result = await response.json();
      alert(result.message);
    };
  });
  