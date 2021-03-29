
// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(event) {
    
/////////////////////////////////////////////////////////////////////
////////////////////  + link underline effect  //////////////////////
/////////////////////////////////////////////////////////////////////    
    
    function underlineAnim(link, e, index) {
        let underline = link.querySelector(".underline");

        anime({
            targets: underline,
            width: "100%",
            left: "0%",
            easing: 'easeOutQuint'
        });
    }

    function leaveUnderlineAnim(link, e) {
        let underline = link.querySelector(".underline");

        anime({
            targets: underline,
            width: "0%",
            left: "0%",
            easing: 'easeInQuint'
        });
    }

    // Get all links
    let workLinks = document.querySelectorAll(".link");
    
    workLinks.forEach(activateLinks);
        
    function activateLinks(link, index, value) {
        
        link.addEventListener("mouseenter", function(e) {
            underlineAnim(link, e);
        });

        link.addEventListener("mouseleave", function(e) {
            leaveUnderlineAnim(link, e);
        });
    }
/////////////////////////////////////////////////////////////////////
////////////////////  - link underline effect  //////////////////////
/////////////////////////////////////////////////////////////////////
    
    
    // window load event makes sure image is 
    // loaded before running animation
    window.onload = function() {
        $('.navbar-nav>li>a').on('click', function(){
            $('.navbar-collapse').collapse('hide');
        });
    };
    
});