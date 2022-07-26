var init = true;
window.onload = function () {
  const toggleActive = document.getElementById('toggleHidden')
  toggleActive.onclick = function () {
    const profile = document.getElementById('profile')
    profile.classList.add('hidden')
    const cv = document.getElementById('cv')
    cv.classList.add('active')
  }
}