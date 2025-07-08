
const contact_form_submit_btn = document.getElementById('main__center-contact__form-main__submit-btn');
const failure                 =          document.getElementById('main__center-contact__form-failure');

contact_form_submit_btn.addEventListener('click', (event) => 
{

    const name    =    document.getElementById('main__center-contact__form-main__area-name').value;
    const email   =   document.getElementById('main__center-contact__form-main__area-email').value;
    const message = document.getElementById('main__center-contact__form-main__area-message').value;

    if ((!name) || (!email) || (!message)) 
    {

        display_contact_form_failure('Preencha todos os campos do formulário de contato');

        event.preventDefault();

        return;

    } 

    failure.innerHTML = '';

    console.log(`${name} - ${email} - ${message}`);

    const subject     =                                              encodeURIComponent('Contato');
    const body        = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`);
    const mailto_link =     `mailto:higorcoutoalmeida@hotmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailto_link;

});

function display_contact_form_failure(failure_message) 
{

    failure.innerHTML = '';

    const message_div =                 document.createElement('div');
    message_div.id    = 'main__center-contact__form-failure__message';        

    const message_div_icon =                      document.createElement('div');
    message_div_icon.id    = 'main__center-contact__form-failure__message-icon';

    message_div_icon.innerHTML = '<i><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#af1820"><path d="m339-288 141-141 141 141 51-51-141-141 141-141-51-51-141 141-141-141-51 51 141 141-141 141 51 51ZM480-96q-79 0-149-30t-122.5-82.5Q156-261 126-331T96-480q0-80 30-149.5t82.5-122Q261-804 331-834t149-30q80 0 149.5 30t122 82.5Q804-699 834-629.5T864-480q0 79-30 149t-82.5 122.5Q699-156 629.5-126T480-96Zm0-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z"/></svg></i>';

    const message_div_m =                   document.createElement('div');
    message_div_m.id    = 'main__center-contact__form-failure__message-m';

    const message_div_m_text       = document.createElement('p');
    message_div_m_text.textContent =             failure_message;

    message_div_m.appendChild(message_div_m_text);

    message_div.appendChild(message_div_icon);
    message_div.appendChild(   message_div_m);

    failure.appendChild(message_div);

}