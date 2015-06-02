var itemList = $('.item');
var itemImage,
    itemTitle,
    itemShopName,
    itemPrice,
    itemHolder;

var hamburger = '<a href="#"><img class="hamburg" src="images/hamburger.png"></a>';
var heart = '<a href="#"><img class="heart" src="images/heart.png"></a>';

brownies.results.forEach (function (item) {

  itemImage = '<a href="#"><img class="brownieimg" src="' + item.Images[0].url_170x135 + '"></a>';
  itemTitle = '<p class="browniename"><a href="#">' + item.title + '</a></p>';
  itemShopName = '<p class="brownieseller"><a href="#">' + item.Shop.shop_name + '</a></p>'
  itemPrice = '<p class="brownieprice"> $' + item.price + ' ' + item.currency_code + '</p>'

  itemHolder = '<div class="itemHolder">' + itemImage + '<div class ="itemInfo">' + itemTitle +
                itemShopName + itemPrice + '</div>' + hamburger + heart + '</div>'

  itemList.append(itemHolder);

});


/* From review with Tim
Generate Sidebar Categories

//Return the arrays of taxonomies

var sidebar = etsy.results.map( function (item) {
  return item.taxonomy_path;
});

//Loop through the taxonomies and add them to an array when as
//long as they are not already added

var sidebarItems = [];
sidebar.forEach( function(list) {
  list.forEach( function(item) {
    if (sidebarItems.indexOf(item) === -1) {
      sidebarItems.push(item);
    }
  });
});

//Reference to UL
var sideBarUL = $('#sideBarCats');
sidebarItems.forEach( function (){
  sideBarUL.append("<li><a href="#">"
   + sbItem + "</a></li>")
});


////////////////////////////////////////////

var itemCont = $('.items');
etsy.results.forEach( function(){
  itemCont.append("<div class='item'><h3>" + item.title + "</div></h3>")
});

*/
