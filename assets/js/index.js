const sites = [
  { title: 'Tim', class: 'tim', link: 'https://timw.co', color: 'rgba(0, 0, 0, .9)', years: '', },
  { title: 'Blog', class: 'blog', link: 'https://timw.co/notes', color: 'rgba(79, 148, 203, .9)', years: '', },
  { title: 'Github', class: 'gh', link: 'https://github.com/twhitacre', color: 'rgba(36, 41, 44, .9)', years: '', },
  { title: 'Twitter', class: 'tw', link: 'https://twitter.com/timwco', color: 'rgba(58, 165, 212, .9)', years: '', },
  { title: 'LinkedIn', class: 'li', link: 'https://linkedin.com/in/twhitacre', color: 'rgba(1, 115, 175, .9)', years: '', },
  { title: 'Speaker Deck', class: 'sd', link: 'https://speakerdeck.com/twhitacre', color: 'rgba(2, 140, 131, .9)', years: '', },
  { title: 'New Story', class: 'ns', link: 'https://newstorycharity.org/', color: 'rgba(26, 27, 29, .9)', years: '', },
  { title: '77Lines', class: '77', link: 'http://77lines.xyz', color: 'rgba(0, 0, 0, .9)', years: '', },
  { title: 'Follow Up', class: 'fu', link: 'https://wefollowup.app/', color: 'rgba(1, 192, 133, .9)', years: '', },
  { title: 'Beard Shine', class: 'bs', link: 'https://beardshine.co/', color: 'rgba(100, 92, 80, .9)', years: '', },
  { title: 'Digital Scientists', class: 'ds', link: 'https://digitalscientists.com/', color: 'rgba(255, 143, 0, .9)', years: '2017-2018', },
  { title: 'The Iron Yard', class: 'tiy', link: 'https://linkedin.com/school/the-iron-yard/', color: 'rgba(32, 47, 53, .9)', years: '2014-2017', },
  { title: 'Barley', class: 'gb', link: 'https://l.timw.co/2BEcXXg', color: 'rgba(247, 196, 51, .9)', years: '2013-2014', },
  { title: 'Argyll Studios', class: 'as', link: 'http://argyllstudios.com', color: 'rgba(101, 98, 92, .9)', years: '2009-2014', },
  { title: 'Produce Brands', class: 'pb', link: 'https://db.producebrands.com/', color: 'rgba(241, 91, 54, .9)', years: '2012-2018', },
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
