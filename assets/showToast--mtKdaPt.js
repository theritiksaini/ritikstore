(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const d=[{id:1,name:"Laptop",category:"Computers",brand:"ExampleBrand",price:999.99,stock:50,description:"Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display. life (with laptop lid closed) Magic Keyboard with Touch ID Also",image:"../images/lapi.png"},{id:2,name:"Smartphone",category:"Mobiles",brand:"TechGadget",price:499.99,stock:100,image:"../images/iphone.png",description:"Feature-rich smartphone with a 6.2-inch screen, 12MP dual camera, 128GB storage, and a 4000mAh battery. Titanium. A17 Pro chip. Action button 2000 nits display"},{id:3,name:"Wireless Headphones",category:"Audio",brand:"SoundBeats",price:149.99,stock:30,image:"../images/headphone.png",description:"High-quality wireless headphones with over-ear design, 20 hours of battery life, and a sleek black color. Experience the ultimate in wireless diverse range price"},{id:4,name:"Watches",category:"Wearables",brand:"FitTech",price:199.99,stock:20,image:"../images/watch.png",description:"Smartwatch with a 1.3-inch AMOLED display, water-resistant design, fitness tracking features, and a stylish silver color."},{id:5,name:"Speakers",category:"Audio",brand:"SoundBeats",price:149.99,stock:30,image:"../images/speakers.png",description:"High-quality wireless headphones with over-ear design, 20 hours of battery life, and a sleek black color."},{id:6,name:"Television",category:"Video",brand:"Samsung",price:199.99,stock:20,image:"../images/tv.png",description:"Smartwatch with a 1.3-inch AMOLED display, water-resistant design, fitness tracking features, and a stylish silver color."}],n=document.querySelector("#cartValue"),c=r=>n.innerHTML=` <i class="fa-solid fa-cart-shopping"> ${r.length} </i>`,l=()=>{let r=localStorage.getItem("cartProductLS");return r?(r=JSON.parse(r),c(r),r):[]};function p(r,i){const a=document.createElement("div");a.classList.add("toast"),r==="add"?a.textContent=`Product with ID ${i} has been added.`:a.textContent=`Product with ID ${i} has been deleted.`,document.body.appendChild(a),setTimeout(()=>{a.remove()},2e3)}export{l as g,d as p,p as s,c as u};
