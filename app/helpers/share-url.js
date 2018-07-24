import Ember from 'ember';

export function shareUrl(params/*, hash*/) {
  let url = window.location.href + '/' + params[0];
  let title = params[1];
  let type = params[2];
  if (type === 'facebook') {
    return 'http://www.facebook.com/sharer/sharer.php?u='+ url +'&amp;t='+title;
  } else if (type === 'twitter') {
    return 'http://twitter.com/intent/tweet?url=' + url +'&amp;text='+title;
  } else if (type === 'linkedin') {
    return 'http://www.linkedin.com/shareArticle?mini=true&amp;url=' + url + '&amp;title=' + title;
  }
  console.log(params)
  return window.location.href + '/' + params[0];
}

export default Ember.Helper.helper(shareUrl);
