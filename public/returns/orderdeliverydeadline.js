var callExecuter=function(){
    console.log("entering in ajax")
    $.ajax({
      type:'Get',
      url:'https://5c08fb783386.ngrok.io/settings',
      // data: {random_param:"Hello there!"},
      success:function(data){
       var notification = data.data
        var myJSON = JSON. stringify(notification)
        console.log("returning in ajax successful",myJSON)
      },
      error: function(error){console.log("error:",error)}
    });
  }
  callExecuter();
//   debugger
// $(function() {
//   var a = Shopify.shop;
//   console.log(Shopify,a)
// })
// var button = document.createElement("button");
// button.innerHTML =   callExecuter();

// var client = ShopifyBuy.buildClient({
//   domain: 'my-shop.myshopify.com',
//   storefrontAccessToken: 'your-storefront-access-token', // previously apiKey, now deprecated
// });
// var ui = ShopifyBuy.UI.init(client);
// ui.createComponent('product', {
//   id: 1234567,
//   node: document.getElementById('my-product')
// });

