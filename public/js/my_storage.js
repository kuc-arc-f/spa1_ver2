//
var STORAGE_KEY = 'user_strage_object'
var myStorage = {
  load: function () {
    var user = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    console.log( 'user-len='+user.length )
    return user
  },
  save: function (user) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
  },
  remove: function () {
    localStorage.removeItem( STORAGE_KEY );
  },
  test: function () {
    var obj= localStorage.getItem(STORAGE_KEY)
    console.log(obj)
  }

}
//
var userState = {
  check: function () {
    this.store=myStorage.load()
    console.log( this.store.length )
    if(this.store.length >0){
        this.user=this.store[0]
        console.log( 'id=' +this.store[0].id )
        return this.user
    }else{
        window.location.href='/users/login'
    }    
  },
  test: function () {
  }
}
//console.log('#load-myST')