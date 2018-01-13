$(document).ready(generateMenu);

function generateMenu() {
  addIdsToRecipes();
  addMenu();
  setRecipeVisible('recipe_1');
}

/**
*addIdsToRecipes
*
* function iterates over 'post' class items
* in 'primaryContent' and adds ids according
* the * pattern 'recipe_' + sequence_number
*
*/
function addIdsToRecipes(){
  var primaryContent = document.getElementById('primarycontent');
  var posts = primaryContent.getElementsByClassName('post');
  for( var i = 0; i < posts.length; i++ ){
    posts[i].setAttribute('id', 'recipe_' + i);
  }
}

/**
* addMenu
*
* Main function to construct the side menu.
* Fetches all 'post' class items from 'primaryContent'
* into an array. The array is the iterated to
* obtain the 'h4' title as menu item text. In the
* same iteration, list and link items are created.
* the link's are also loaded with a click event
* function.
* Finally, the menu is attached to it's place on
* the papge.
*/
function addMenu(getNumberOfRecipes){
  var menu = document.createElement('ul');
  var primaryContent = document.getElementById('primarycontent');
  var posts = primaryContent.getElementsByClassName('post');

  for( var i = 0; i < posts.length; i++ ){
    var menuItem = document.createElement('li');
    var link = document.createElement('a');
    link.href = '#recipe_' + i;
    link.textContent = posts[i].getElementsByTagName("h4")[0].innerHTML;
    var currentId = 'recipe_' + i;
    link.addEventListener("click", function() {
      setRecipeVisible(event.target.getAttribute('href').substring(1));
      event.preventDefault();
      return false;
    });

    menuItem.appendChild(link);
    menu.appendChild(menuItem);
    var receptmeny = document.getElementById('receptmeny');
    var contentArea = receptmeny.getElementsByClassName('contentarea')[0];
    contentArea.appendChild(menu);
  }
}

/**
* setAllRecipeInvisible
*
* Helper function to set the style
* of all posts to display: none.
*/
function setAllRecipeInvisible(){
  var primaryContent = document.getElementById('primarycontent');
  var posts = primaryContent.getElementsByClassName('post');
  for( var i = 0; i < posts.length; i++ ){
    posts[i].style.display = 'none';
  }
}

/**
* setRecipeVisible
*
* Helper function that sets the respective
* post provided as input argument to style
* display: 'block'
*
* @param postId string acc pattern: 'recipe_' + seq_number
*/
function setRecipeVisible(postId){
  setAllRecipeInvisible();
  var post = document.getElementById(postId);
  post.style.display = 'block';
}
