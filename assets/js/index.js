(function () {
  setTimeout(() => {
    const root = document.documentElement;
    root.className += ' loaded';  

    const links = document.querySelectorAll('a');
    for (let i = 0; i < links.length; i+=1) {
      links[i].setAttribute('target', '_blank');
    }

  }, 400);
}());