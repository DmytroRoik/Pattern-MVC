var UserView = (function () {
  var createTemplate=function(templateString,user){
    var result=templateString.replace('#{{','{{');
    result=result.replace(/\{\{\w{1,}\}\}/g, function (match,pos,oribinText) {
      var key_prop=match.substring(2, match.length-2);
      if(key_prop in user) return user[key_prop];
      else return '';
    });
    return '<li>'+result+'</li>';
  },
  renderUser = function(users){
    var templateString = 'Hello, {{city}} {{age}}! #{{username}}'
    var $content=document.getElementById('users');

    var templateUser='';
    for(let u of users){
      templateUser+=createTemplate(templateString,u);
    }

    $content.innerHTML=templateUser;
  };

  return{
    renderUser:renderUser
  }

})();
