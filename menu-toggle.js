/* This code was used to create a menu toggle with JavaScript pure, used to select the elements and check state to render te icons of menu, and also the menu-list. */

document.addEventListener('DOMContentLoaded', function () {
  const openMenu = document.getElementById('open-menu')
  const closeMenu = document.getElementById('close-menu')
  const listMenu = document.getElementById('list-menu')

  openMenu.addEventListener('click', function () {
    listMenu.style.display =
      listMenu.style.display === 'block' ? 'none' : 'block'
    openMenu.style.display = 'none'
    closeMenu.style.display = 'block'
  })

  closeMenu.addEventListener('click', function () {
    listMenu.style.display =
      listMenu.style.display === 'none' ? 'block' : 'none'
    openMenu.style.display = 'block'
    closeMenu.style.display = 'none'
  })
})

function callingRouteApi(rota) {
  window.location.href = rota
}

// Exaple of route use
;<li class="nav-item" onclick="callingRouteApi('/api/home')"></li>

// Remember to use this code in necessary create a rightly connection with the API.
