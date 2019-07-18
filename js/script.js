function submit(id) { return document.getElementById(id); }


function submitForm() {
    submit("mybtn").disabled = true;
    submit("status").innerHTML = 'please wait...';
    var formdata = new FormData();
    formdata.append("name", submit("name").value);
    formdata.append("surname", submit("surname").value);
    formdata.append("email", submit("email").value);
    formdata.append("message", submit("message").value);
    var ajax = new XMLHttpRequest();
    ajax.open("POST", "js/parser.php");
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            if (ajax.responseText == "success") {
                submit("contact").innerHTML = '<h2> Votre message a été envoyé avec succès</h2>';
                setTimeout(function() { window.location.reload(); }, 3000);

            } else {
                submit("status").innerHTML = ajax.responseText;
                submit("mybtn").disabled = false;
            }
        }
    }
    ajax.send(formdata);
}