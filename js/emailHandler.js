document.addEventListener('DOMContentLoaded', function() {
    // Inicializa EmailJS con tu User ID
    emailjs.init('XLBo9EefVoe0sqT78');

    const form = document.getElementById('contactForm');
    const feedbackEl = document.getElementById('form-feedback');

    // Expresiones regulares para validación
    const patterns = {
        nombre: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        telefono: /^[0-9\s+-]*$/,
        mensaje: /^[\s\S]{10,500}$/
    };

    // Validación en tiempo real
    form.addEventListener('input', function(e) {
        const target = e.target;
        validateField(target);
    });

    // Validación al enviar
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        const fields = ['nombre', 'email', 'telefono', 'mensaje'];
        
        fields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (!validateField(field)) {
                isValid = false;
            }
        });

        if (isValid) {
            sendForm();
        }
    });

    function validateField(field) {
        const value = field.value.trim();
        const fieldId = field.id;
        const errorEl = document.getElementById(`${fieldId}-error`);
        
        // Validación para campos requeridos
        if (field.required && value === '') {
            showError(errorEl, 'Este campo es obligatorio');
            return false;
        }
        
        // Validación específica por tipo de campo
        if (value !== '') {
            switch(fieldId) {
                case 'nombre':
                    if (!patterns.nombre.test(value)) {
                        showError(errorEl, 'Ingrese un nombre válido (solo letras y espacios)');
                        return false;
                    }
                    break;
                case 'email':
                    if (!patterns.email.test(value)) {
                        showError(errorEl, 'Ingrese un correo electrónico válido');
                        return false;
                    }
                    break;
                case 'telefono':
                    if (!patterns.telefono.test(value)) {
                        showError(errorEl, 'Ingrese un número de teléfono válido');
                        return false;
                    }
                    break;
                case 'mensaje':
                    if (!patterns.mensaje.test(value)) {
                        showError(errorEl, 'El mensaje debe tener entre 10 y 500 caracteres');
                        return false;
                    }
                    break;
            }
        }
        
        // Si pasa todas las validaciones
        hideError(errorEl);
        return true;
    }

    function showError(errorEl, message) {
        errorEl.textContent = message;
        errorEl.style.display = 'block';
    }

    function hideError(errorEl) {
        if(!errorEl) return;
        errorEl.textContent = '';
        errorEl.style.display = 'none';
    }

    function sendForm() {
        const button = form.querySelector('button[type="submit"]');
        const originalButtonText = button.textContent;
        
        // Cambiar texto del botón y deshabilitar
        button.textContent = 'Enviando...';
        button.disabled = true;
        
        // Obtener datos del formulario
        const formData = {
            name: document.getElementById('nombre').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone: document.getElementById('telefono').value.trim(),
            message: document.getElementById('mensaje').value.trim(),
            time: new Date().toLocaleString()
        };

        // Enviar con EmailJS
        emailjs.send('service_igl7ixf', 'template_zegms99', formData)
            .then(function(response) {
                form.reset();
                Toastify({
                    text: "¡Formulario enviado con éxito!",
                    duration: 3000,
                    gravity: "top",
                    position: "right",
                    backgroundColor: "green"
                }).showToast();

            }, function(error) {
                console.error('Error al enviar el formulario:', error);
                Toastify({
                    text: "Error al enviar el formulario. Intenta de nuevo.",
                    duration: 3000,
                    gravity: "top",
                    position: "right",
                    backgroundColor: "red"
                }).showToast();
            })
            .finally(() => {
                button.textContent = originalButtonText;
                button.disabled = false;
            });
    }
});