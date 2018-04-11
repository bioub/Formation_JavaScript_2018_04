var contactES3 = {
  prenom: 'Romain',
  hello: function() {
    console.log('ES3 Bonjour je m\'appelle ' + this.prenom);
  },
  helloAsync: function() {
    // Portée de closure
    var that = this;
    setTimeout(function() {
      console.log('ES3 Bonjour je m\'appelle ' + that.prenom);
    }, 1000);
  },
  helloAsyncMethod: function() {
    setTimeout(bind(this.hello, this), 1000);
  }
};

contactES3.hello();
contactES3.helloAsync();
contactES3.helloAsyncMethod();

function hello(p1, p2) {
  console.log('Global Bonjour ' + p1 + ', ' + p2 + ' je m\'appelle ' + this.prenom);
}

hello.call(contactES3, 'Jean', 'Eric');
hello.apply(contactES3, ['Jean', 'Eric']);
hello.call(contactES3, ...['Jean', 'Eric']);

function bind(fct, applyThis) {
  return function() {
    fct.call(applyThis);
  };
}

var contactES5 = {
  prenom: 'Romain',
  hello: function() {
    console.log('ES5 Bonjour je m\'appelle ' + this.prenom);
  },
  helloAsync: function() {
    setTimeout(function() {
      console.log('ES5 Bonjour je m\'appelle ' + this.prenom);
    }.bind(this), 1000);
  },
  helloAsyncMethod: function() {
    setTimeout(this.hello.bind(this), 1000);
  },
};

contactES5.hello();
contactES5.helloAsync();
contactES5.helloAsyncMethod();



const contactES6 = {
  prenom: 'Romain',
  hello() {
    console.log('ES6 Bonjour je m\'appelle ' + this.prenom);
  },
  helloAsync() {
    setTimeout(() => {
      console.log('ES6 Bonjour je m\'appelle ' + this.prenom);
    }, 1000);
  },
  helloAsyncMethod() {
    setTimeout(this.hello.bind(this), 1000);
  },
};

contactES6.hello();
contactES6.helloAsync();
contactES6.helloAsyncMethod();

/*
const btns = document.querySelectorAll('.btn-delete');

btns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    // NE PLUS UTILISER this
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
  });
});
*/
