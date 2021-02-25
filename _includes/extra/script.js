/*https://stackoverflow.com/questions/3839227/how-to-get-height-of-div-in-px-dimension*/
var topnavigationHeight = $("#topnavigationWrapperID").outerHeight();

/*https://stackoverflow.com/questions/17534661/make-anchor-link-go-some-pixels-above-where-its-linked-to*/
function addMargin() {
    window.scrollTo(0,  window.pageYOffset - topnavigationHeight - 15);
}

window.addEventListener('hashchange', addMargin);

