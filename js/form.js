// jQuery(document).ready(function($) {
//     "use strict";

//     //Contact
//     $('form.allForm').submit(function() {
//         var f = $(this).find('.form-group'),
//             ferror = false,
//             emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

//         f.children('input').each(function() { // run all inputs

//             var i = $(this); // current input
//             var rule = i.attr('data-rule');

//             if (rule !== undefined) {
//                 var ierror = false; // error flag for current input
//                 var pos = rule.indexOf(':', 0);
//                 if (pos >= 0) {
//                     var exp = rule.substr(pos + 1, rule.length);
//                     rule = rule.substr(0, pos);
//                 } else {
//                     rule = rule.substr(pos + 1, rule.length);
//                 }

//                 switch (rule) {
//                     case 'required':
//                         if (i.val() === '') {
//                             ferror = ierror = true;
//                         }
//                         break;

//                     case 'minlen':
//                         if (i.val().length < parseInt(exp)) {
//                             ferror = ierror = true;
//                         }
//                         break;

//                     case 'email':
//                         if (!emailExp.test(i.val())) {
//                             ferror = ierror = true;
//                         }
//                         break;

//                     case 'checked':
//                         if (!i.is(':checked')) {
//                             ferror = ierror = true;
//                         }
//                         break;

//                     case 'regexp':
//                         exp = new RegExp(exp);
//                         if (!exp.test(i.val())) {
//                             ferror = ierror = true;
//                         }
//                         break;
//                 }
//                 i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
//             }
//         });
//         f.children('select').each(function() { // run all inputs

//             var i = $(this); // current input
//             var rule = i.attr('data-rule');

//             if (rule !== undefined) {
//                 var ierror = false; // error flag for current input
//                 var pos = rule.indexOf(':', 0);
//                 if (pos >= 0) {
//                     var exp = rule.substr(pos + 1, rule.length);
//                     rule = rule.substr(0, pos);
//                 } else {
//                     rule = rule.substr(pos + 1, rule.length);
//                 }

//                 switch (rule) {
//                     case 'required':
//                         if (i.val() === '') {
//                             ferror = ierror = true;
//                         }
//                         break;

//                     case 'minlen':
//                         if (i.val().length < parseInt(exp)) {
//                             ferror = ierror = true;
//                         }
//                         break;

//                     case 'email':
//                         if (!emailExp.test(i.val())) {
//                             ferror = ierror = true;
//                         }
//                         break;

//                     case 'checked':
//                         if (!i.is(':checked')) {
//                             ferror = ierror = true;
//                         }
//                         break;

//                     case 'regexp':
//                         exp = new RegExp(exp);
//                         if (!exp.test(i.val())) {
//                             ferror = ierror = true;
//                         }
//                         break;
//                 }
//                 i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
//             }
//         });
//         f.children('textarea').each(function() { // run all inputs

//             var i = $(this); // current input
//             var rule = i.attr('data-rule');

//             if (rule !== undefined) {
//                 var ierror = false; // error flag for current input
//                 var pos = rule.indexOf(':', 0);
//                 if (pos >= 0) {
//                     var exp = rule.substr(pos + 1, rule.length);
//                     rule = rule.substr(0, pos);
//                 } else {
//                     rule = rule.substr(pos + 1, rule.length);
//                 }

//                 switch (rule) {
//                     case 'required':
//                         if (i.val() === '') {
//                             ferror = ierror = true;
//                         }
//                         break;

//                     case 'minlen':
//                         if (i.val().length < parseInt(exp)) {
//                             ferror = ierror = true;
//                         }
//                         break;
//                 }
//                 i.next('.validation').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
//             }
//         });
//         if (ferror) return false;
//         else var str = $(this).serialize();
//         var action = $(this).attr('action');
//         if (!action) {
//             action = 'form/contactform.php';
//         }
//         $.ajax({
//             type: "POST",
//             url: action,
//             data: str,
//             success: function(msg) {
//                 // alert(msg);
//                 if (msg == 'OK_Vehicle') {
//                     toastr.success('Muy pronto te Contactaremos', 'Consulta Enviada');
//                     $('#modalVehicle').modal('hide');
//                 } else if (msg == 'OK_Cita') {
//                     toastr.success('Muy pronto te Contactaremos', 'Cita Agendada');
//                     $('#modalCita').modal('hide');
//                 } else if (msg == 'OK_Contact') {
//                     $("#sendmessage").addClass("show");
//                     $("#errormessage").removeClass("show");
//                     $('.allForm').find("input, textarea").val("");
//                     toastr.success('Muy pronto te Contactaremos', '¡Muchas Gracias!');
//                 } else if (msg == 'error') {
//                     toastr.error('Intentalo nuevamente', 'No Procesado');
//                 } else {
//                     $("#sendmessage").removeClass("show");
//                     $("#errormessage").addClass("show");
//                     $('#errormessage').html(msg);
//                     toastr.error('Intentalo nuevamente', 'No Procesado');
//                 }
//             }
//         });
//         return false;
//     });

// });