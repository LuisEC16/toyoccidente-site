window.onload = openModal;
function openModal() {
    if (Cookies.get('modal_app') !== 'hide') {
        UIkit.modal('#my-modal').show();
    }
  }

  function closeModal() {
    Cookies.set('modal_app', 'hide', { secure: true, expires: 1 });
    UIkit.modal('#my-modal').hide();
  }