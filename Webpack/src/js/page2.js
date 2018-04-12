import $ from 'jquery';
import { Horloge } from './horloge';

$(function() {
  $('body').append('<h2>Page 2</h2>');
  $('body').append('<div class="horloge"></div>');

  $('.horloge').each(function() {
    // TODO remove this
    var horloge = new Horloge(this);
    horloge.start();
  });
});
