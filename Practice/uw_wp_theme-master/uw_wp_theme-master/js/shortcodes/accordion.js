"use strict";var UWAccordion=function(){var e=document.querySelectorAll("#accordion");if(1<e.length)for(var t=0;t<e.length;t++)e[t].id="accordion-"+t;var n=document.querySelectorAll(".accordion #collapse");if(0<n.length)for(var r=0;r<n.length;r++)n[r].id="collapse-"+r,n[r].parentElement.getElementsByClassName("btn-link")[0].dataset.target="#"+n[r].id,n[r].parentElement.getElementsByClassName("btn-link")[0].setAttribute("aria-controls",n[r].id),n[r].dataset.parent="#"+n[r].parentElement.parentElement.id,n[r].previousElementSibling.id=n[r].id+"-header",n[r].setAttribute("aria-labelledby",n[r].previousElementSibling.id);var a=document.querySelectorAll(".accordion .collapse");if(1<a.length)for(var l=function(n){var r=a[n].classList.contains("collapse");new MutationObserver(function(e){e.forEach(function(e){if("class"===e.attributeName){var t=e.target.classList.contains("show");r!==t&&((r=t)?a[n].setAttribute("role","region"):a[n].removeAttribute("role","region"))}})}).observe(a[n],{attributes:!0})},o=0;o<a.length;o++)l(o);document.querySelectorAll(".accordion .card-header button").forEach(function(t){t.addEventListener("focus",function(e){t.parentElement.parentElement.parentElement.parentElement.classList.add("focus")}),t.addEventListener("blur",function(e){t.parentElement.parentElement.parentElement.parentElement.classList.remove("focus")})}),document.querySelectorAll(".accordion").forEach(function(e){var c=Array.prototype.slice.call(e.querySelectorAll(".card-header button"));e.addEventListener("keydown",function(e){var t=e.target,n=e.which.toString(),r=e.ctrlKey&&n.match(/33|34/);if(t.classList.contains("btn-link"))if(n.match(/38|40/)||r){var a=c.indexOf(t),l=n.match(/34|40/)?1:-1,o=c.length;c[(a+o+l)%o].focus(),e.preventDefault()}else if(n.match(/35|36/)){switch(n){case"36":c[0].focus();break;case"35":c[c.length-1].focus()}e.preventDefault()}})})};new UWAccordion;