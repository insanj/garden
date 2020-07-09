
class GardenCookies {
  static setCookie(cname, cvalue, exdays = 365) {
    const maxAge = 'max-age=' + (60 * 60 * 24 * exdays); // 31536000 = year
    document.cookie = cname + '=' + cvalue + ';' + maxAge + ';path=/';
  }

  static getCookie(cname) {
    var name = cname + '=';
    var decodedCookie;

    try {
      decodedCookie = decodeURIComponent(document.cookie);
    } catch (err) {
      console.log(err);
      return '';
    }

    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }
}

export default GardenCookies;
