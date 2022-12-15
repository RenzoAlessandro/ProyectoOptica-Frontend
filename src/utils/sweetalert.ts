import Swal from 'sweetalert2';

export function Sweetalert(type: string, text: string) {
    switch (type) {
        case "error":
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: text
            })
            break;
        case "success":
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              Toast.fire({
                icon: 'success',
                title: 'Registrado'
              })
              break;
        case "loading":
            Swal.fire({
                allowOutsideClick: false,
                text: text
            })
            Swal.showLoading()
            break;
        case "close":
            Swal.close()
            break;
        default:
            break;
    }
}