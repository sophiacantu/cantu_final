import $ from"jquery";let $nav=$("nav[data-nav]"),isVisible=!1;$(".nav-btns").on("click",(function(){!1===isVisible?($nav.show(),isVisible=!0):($nav.hide(),isVisible=!1)}));