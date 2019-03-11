const sites = [
  { title: 'Tim', class: 'tim', link: 'https://timw.co', color: '#000000', years: '', },
  { title: 'Blog', class: 'blog', link: 'https://timw.co/notes', color: '#4f94cb', years: '', },
  { title: 'Github', class: 'gh', link: 'https://github.com/twhitacre', color: '#24292d', years: '', },
  { title: 'Twitter', class: 'tw', link: 'https://twitter.com/timwco', color: '#3aa5d4', years: '', },
  { title: 'LinkedIn', class: 'li', link: 'https://linkedin.com/in/twhitacre', color: '#0173af', years: '', },
  { title: 'Speaker Deck', class: 'sd', link: 'https://speakerdeck.com/twhitacre', color: '#028c83', years: '', },
  { title: 'New Story', class: 'ns', link: 'https://newstorycharity.org/', color: '#1a1b1e', years: '', },
  { title: '77Lines', class: '77', link: 'http://77lines.co', color: '#91c83e', years: '', },
  { title: 'Follow Up', class: 'fu', link: 'https://wefollowup.app/', color: '#01bf86', years: '', },
  { title: 'Beard Shine', class: 'bs', link: 'https://beardshine.co/', color: '#645c50', years: '', },
  { title: 'Digital Scientists', class: 'ds', link: 'https://digitalscientists.com/', color: '#ff8f00', years: '2017-2018', },
  { title: 'The Iron Yard', class: 'tiy', link: 'https://linkedin.com/school/the-iron-yard/', color: '#202f36', years: '2014-2017', },
  { title: 'Barley', class: 'gb', link: 'https://l.timw.co/2BEcXXg', color: '#f7c433', years: '2013-2014', },
  { title: 'Argyll Studios', class: 'as', link: 'http://argyllstudios.com', color: '#65625c', years: '2009-2014', },
  { title: 'Produce Brands', class: 'pb', link: 'https://db.producebrands.com/', color: '#f15b36', years: '2012-2018', },
];

const app = document.getElementById('app');

sites.forEach(site => {
  const section = document.createElement('a');
  const divmage = document.createElement('div');
  const h2 = document.createElement('h2');
  const title = document.createTextNode(site.title);
  const imgPath = `assets/images/${site.class}.png`;

  section.appendChild(divmage);
  section.appendChild(h2);
  h2.appendChild(title);

  if (site.years) {
    const h3 = document.createElement('h3');
    const past = document.createTextNode(site.years);
    h3.appendChild(past);
    section.appendChild(h3);
    h3.style.cssText = `color: ${site.color};`;
  }

  app.appendChild(section);

  // Set Link
  section.href = site.link;

  // Div Image Styles
  divmage.style.cssText = `background-image: url("${imgPath}");`;

  // Section Styles
  section.style.cssText = `background-color: ${site.color};`;

});