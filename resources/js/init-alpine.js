window.themeSetup = function () {
    
  function getThemeFromLocalStorage() {
      // if user already changed the theme, use it
      if (window.localStorage.getItem('dark')) {
          return JSON.parse(window.localStorage.getItem('dark'))
      }

      // else return their preferences
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          return true;
      }

  }

  function setThemeToLocalStorage(value) {
      window.localStorage.setItem('dark', value)
  }

  return {
    darkMode: getThemeFromLocalStorage(),
    toggleTheme() {
      this.darkMode = !this.darkMode
      setThemeToLocalStorage(this.darkMode)
    },
    isSideMenuOpen: false,
    toggleSideMenu() {
      this.isSideMenuOpen = !this.isSideMenuOpen
    },
    isOpen: false,
    closeSideMenu() {
      this.isSideMenuOpen = false
    },
    isNotificationsMenuOpen: false,
    toggleNotificationsMenu() {
      this.isNotificationsMenuOpen = !this.isNotificationsMenuOpen
    },
    closeNotificationsMenu() {
      this.isNotificationsMenuOpen = false
    },
    isProfileMenuOpen: false,
    toggleProfileMenu() {
      this.isProfileMenuOpen = !this.isProfileMenuOpen
    },
    closeProfileMenu() {
      this.isProfileMenuOpen = false
    },
    isPagesMenuOpen: false,
    togglePagesMenu() {
      this.isPagesMenuOpen = !this.isPagesMenuOpen
    },
    // Modal
    isModalOpen: false,
    trapCleanup: null,
    openModal() {
      this.isModalOpen = true
      this.trapCleanup = focusTrap(document.querySelector('#modal'))
    },
    closeModal() {
      this.isModalOpen = false
      this.trapCleanup()
    },
  }
}
