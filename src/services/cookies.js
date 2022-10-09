class Cookie {
  setCookie(name, value) {
    document.cookie = `${name}=${value}; path=/`;
  }

  getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  deleteCookie(name) {
    document.cookie = `${name}=""; path=/; max-age=0`;
  }
}

export default new Cookie();
