// Dom7
var $ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  root: '#app',
  name: 'Myapp',
  view: {
    stackPages:true,
  },
  theme: theme,
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  routes: routes,
  popup: {
    closeOnEscape: true,
  },
  sheet: {
    closeOnEscape: true,
  },
  popover: {
    closeOnEscape: true,
  },
  actions: {
    closeOnEscape: true,
  },
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
});

var mainView = app.views.create('.view-main');
var $$ = Dom7;



cek();

function cek(){
  var status = localStorage.getItem("status");
  if (status=="login") {
     // app.dialog.alert("Berhasil Login");

     // remove clear hanya sementara
    // localStorage.removeItem("status");
    // localstorage.clear();

    app.views.main.router.navigate('/dashboard/');

  } else {
    // app.views.main.router.navigate('/home/');
  }
}




    


$$("#masuk").click(function(){
  var username = $$("#username").val();
  var password = $$("#password").val();

// app.request({
//   url: 'http://localhost/baru/login.php',
//   statusCode: {
//     404: function (xhr) {
//       alert('page not found');
//     }
//   }
// })

// app.dialog.alert("tes","Konfirmasi");
  app.request({
    // url: "http://localhost/baru/login.php",
    url: "http://bloodhum.com/core/login.php",
    type: "POST",
    data: {
      "username": username,
      "password": password,
    },
    dataType: 'json',
    success:function(data){

      console.log(data);
      
      if(data.error){
        app.dialog.alert(data.pesan,"Konfirmasi");

      } else {
        // localStorage.setItem("status","login");
        // localStorage.setItem("id",data[0].id);
        // localStorage.setItem("username",data[0].Email);
        // app.dialog.alert(data.pesan);

        // app.dialog.preloader('My text...');

       
        app.dialog.preloader();
        

  setTimeout(function () {
    // localStorage.setItem("status","login");
    //     localStorage.setItem("id",data[0].id);
    //     localStorage.setItem("username",data[0].Email);
    // app.dialog.close();
    app.dialog.close();

    localStorage.setItem("status","login");

    app.views.main.router.navigate('/dashboard/');

  }, 1000);
// localStorage.setItem("id",data[0].id);
//     localStorage.setItem("username",data[0].Email);
        
        //cek();
      }
    }

  });

});


 return {
    methods: {
      signIn: function () {
        var $ = this.$;
        var app = this.$app;
        var username = $('input#demo-username-1').val();
        var password = $('input#demo-password-1').val();
        app.dialog.alert('Username: ' + username + '<br>Password: ' + password, function () {
          app.loginScreen.close();
        })
      }
    }
  }