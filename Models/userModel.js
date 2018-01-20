var UserModel=(function(){
  var _users;
  var init=function () {
    _users=[
    {id:2, username:'alex',age:55, city:'lviv'},
    {id:3, username:'vasya',age:123, city:'london'},
    {id:3, username:'vasya',age:123, city:'london'}
    ];
  }

  var getUsers=function(){
    return _users;
  }
  return {
    init:init,
    getUsers:getUsers
  };
})();
