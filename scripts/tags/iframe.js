/* global hexo */
// Usage: {% iframe iframe-html-code %}

function iframe(args) {
  var src = args.join(' ');

  if (!src) {
    hexo.log.warn('iframe html can NOT be empty');
  }

  return '<div class=\'iframe-container\'>' + src + '</div>';
}

hexo.extend.tag.register('iframe', iframe);
