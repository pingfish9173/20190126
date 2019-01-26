$(function() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (!user) {
          window.location.href = "login.html";
        }
    });
  var productsRef = firebase.database().ref("products");

  productsRef.on("value", function(snapshot) {
    var products = snapshot.val();

    var tmpl = $.templates('#product-item');
    var html = tmpl.render(products);

    $('#product-list').html(html);
  });
});
