//Variables:
const changed_msg = document.querySelector('.changed_msg');
const form = document.querySelector('form');
const petition = document.querySelector('.petition');
const question = document.querySelector('.question');
const btn = document.getElementById('btn');
const span = document.querySelector('#hidden_span');
const msg = [...' Peter please answer the following question.      '];
const spnDiv = document.querySelector('.spn');
const hmbrg_icon = document.querySelector('#hmbrg');
const hmbrg_menu = document.querySelector('.hmbrg_menu');
const overlay = document.querySelector('.overlay');
const empty_p = document.querySelector('#empty_p');
let classy_word_p = document.querySelector('.classy_word_p');
let classy_word_author = document.querySelector('.classy_word_author');
const twitter_btn = document.querySelector('.twitter');
const generate_btn = document.querySelector('.generate');
const loader = document.querySelector('.loader');
const btnPlus = document.createElement('button');
let count = 0;
// API:
const proxy = 'https://cors-anywhere.herokuapp.com/';
const api_fortune = 'http://www.muppetlabs.de/api/?lang=en&categories=fortunes';
const api_quote =
  'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';

//Getting fortunes from API:
const fortuneTeller = async () => {
  try {
    const response = await fetch(proxy + api_fortune);
    const data = await response.json();
    changed_msg.textContent = data.fortune;
  } catch (err) {
    changed_msg.textContent =
      ' This is your unlucky day. Try again later. HTTP for the blame!';
  }
};

//Getting quotes from API:
const getQuote = async () => {
  try {
    const response = await fetch(proxy + api_quote);
    const data = await response.json();
    if (data.quoteAuthor === ' ') {
      classy_word_author.textContent = 'Unknown...';
    }
    classy_word_author.textContent = data.quoteAuthor;
    classy_word_p.textContent = data.quoteText;
  } catch (err) {
    classy_word_p.textContent =
      ' This is your unlucky day. Try again later. HTTP for the blame!';
    classy_word_author.textContent = 'Dilara Aksoy';
  }
};

//Twitter Functionality:
const tweetOfTheDay = () => {
  const quote = classy_word_p.textContent;
  const author = classy_word_author.textContent;
  const twitter = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitter, '_blank');
};

//Event Listeners:
//To change the header paragraph with a message saying "Peter says:":
const changeParagraphFirst = () => {
  const new_pa = document.createElement('p');
  const content = 'Peter says:';
  const welcome = document.getElementById('welcome');
  new_pa.append(content);
  welcome.parentNode.replaceChild(new_pa, welcome);
};
btn.addEventListener('click', changeParagraphFirst, { once: true });

//If question input is empty, user will see message.
btn.addEventListener('click', () => {
  if (question.value === '') {
    changed_msg.textContent = 'You must enter a valid question.';
  } else {
    //If play is not activated, answer is a fortune guess that comes from API.
    fortuneTeller();
  }
});
//Generate A Quote:
generate_btn.addEventListener('click', getQuote);
//Tweet the Quote:
twitter_btn.addEventListener('click', tweetOfTheDay);

//For play:
//I couldn't figure it out how to store an input as a string and use methods on it.
//So I believe my answer isn't correct but highly creative.
petition.addEventListener('keydown', (e) => {
  if (e.key === '.') {
    e.key.display = 'none';
    petition.value = ' ';
    petition.addEventListener('input', () => {
      if (count < 43) {
        count++;
        let msgcontext = msg[count];
        petition.classList.add('hide');
        const spn = document.createElement('span');
        spn.append(msgcontext);
        spnDiv.append(spn);
      }
      btn.addEventListener('click', () => {
        changed_msg.remove();
        empty_p.textContent = petition.value;
      });
    });
  }
});

//Hamburger menu section:
hmbrg_icon.addEventListener('click', () => {
  overlay.classList.add('hmbrg_menu_open');
  hmbrg_menu.classList.add('hmbrg_menu_open');
});
overlay.addEventListener('click', () => {
  overlay.classList.remove('hmbrg_menu_open');
  hmbrg_menu.classList.remove('hmbrg_menu_open');
});

//Refresh the page.
function createButton() {
  btnPlus.classList.add('btn_plus');
  const pls = '+';
  btnPlus.append(pls);
  document.querySelector('main').append(btnPlus);
}
btn.addEventListener('click', createButton, { once: true });
btnPlus.addEventListener('click', () => {
  location.reload();
});
