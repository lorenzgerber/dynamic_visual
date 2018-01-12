$(document).ready(generateMenu);

function generateMenu() {
  addIdsToRecipes();
  addMenu();
}

function addIdsToRecipes(){
  var primaryContent = document.getElementById('primarycontent');
  var posts = primaryContent.getElementsByClassName('post');
  for( var i = 0; i < posts.length; i++ ){
    posts[i].setAttribute('id', 'recipe_' + i);
  }
}

function addMenu(getNumberOfRecipes){
  var menu = document.createElement('ul');
  var primaryContent = document.getElementById('primarycontent');
  var posts = primaryContent.getElementsByClassName('post');
  
  for( var i = 0; i < posts.length; i++ ){
    var menuItem = document.createElement('li');
    var link = document.createElement('a');
    link.href = '#recipe_' + i;
    link.textContent = posts[i].getElementsByTagName("h4")[0].innerHTML;
    menuItem.appendChild(link);
    menu.appendChild(menuItem);
    var receptmeny = document.getElementById('receptmeny');
    var contentArea = receptmeny.getElementsByClassName('contentarea')[0];
    contentArea.appendChild(menu);
  }



}
