const toasts = document.getElementById('toasts');
const btn = document.getElementById('button');

btn.addEventListener('click', generateToast)

function generateToast() {

  const toast = document.createElement('div')

  toast.classList.add('toast')

  toast.innerText = 'test'

  toasts.appendChild(toast)

  setInterval(function () {
    toast.remove()
  }, 5000)
}
