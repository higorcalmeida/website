
const modals = document.querySelectorAll('.modal');

for (const modal of modals) 
{
    modal.addEventListener('click', (event) => 
    {
        if (event.target.className.includes('modal_main_class') == true) 
        {

            modal.style.display = 'none';

        }
    });
}

function show_modal(identifier) 
{

    const modal = document.getElementById(identifier);

    modal.style.display = 'flex';

}