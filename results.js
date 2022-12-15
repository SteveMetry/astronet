let testimonialsContainer = document.getElementById("testimonialsContainer");
let purchasedProductsContainer = document.createElement("div")
purchasedProductsContainer.className = "console-products";

function scrollDivRight(purchasedProductsContainer) {
  purchasedProductsContainer.scrollLeft += 600;
}

function scrollDivleft(purchasedProductsContainer) {
  purchasedProductsContainer.scrollLeft -= 600;
}

fetch(`https://astrositedesigns.com/testimonials.json`)
    .then((response) => response.json())
    .then((testimonialsList) => {
      if (testimonialsList.length > 1) {
        let receiptScrollButtons = document.createElement("div");
        receiptScrollButtons.className = "scroll-btns-container";
        let rightScrollButton = document.createElement("button");
        rightScrollButton.className = "scroll-btn";    
        rightScrollButton.onclick = () => { 
          scrollDivRight(purchasedProductsContainer)
        }
        rightScrollButton.innerText = document.getElementById("rightBtn").innerText
        let leftScrollButton = document.createElement("button");
        leftScrollButton.onclick = () => { 
          scrollDivleft(purchasedProductsContainer)
        }
        leftScrollButton.className = "scroll-btn";
        leftScrollButton.innerText = document.getElementById("leftBtn").innerText
        receiptScrollButtons.appendChild(leftScrollButton)
        receiptScrollButtons.appendChild(rightScrollButton)
        testimonialsContainer.appendChild(receiptScrollButtons);
      }
      for (let i = 0; i < testimonialsList.length; i++) {
        let eachTestimonialContainer = document.createElement("div");
        eachTestimonialContainer.className = "console-product-card ml-11 mt-24 mr-24 mb-24 grid grid-cols-3";
        // let eachTestimonialCompanyName = document.createElement("p");
        // eachTestimonialCompanyName.className = "font-thin h-12 justify-self-start";
        // eachTestimonialCompanyName.innerText = testimonialsList[i].companyName;
        // eachTestimonialContainer.appendChild(eachTestimonialCompanyName);
        let eachTestimonialRating = document.createElement("p");
        eachTestimonialRating.className = "font-thin h-12 col-span-3 text-center";
        eachTestimonialRating.innerText = `Rating: ${testimonialsList[i].rating}`;
        eachTestimonialContainer.appendChild(eachTestimonialRating);
        // let eachTestimonialDate = document.createElement("p");
        // eachTestimonialDate.className = "font-thin h-12 justify-self-end";
        // eachTestimonialDate.innerText = testimonialsList[i].date;
        // eachTestimonialContainer.appendChild(eachTestimonialDate);
        let eachTestimonialImage = document.createElement("img");
        eachTestimonialImage.className = "cart-img my-4 h-40 col-span-3 m-auto";
        eachTestimonialImage.src = testimonialsList[i].img;
        eachTestimonialContainer.appendChild(eachTestimonialImage);
        let eachTestimonialTitle = document.createElement("p");
        eachTestimonialTitle.className = "h-12 col-span-3 text-center";
        eachTestimonialTitle.innerText = testimonialsList[i].clientName;
        eachTestimonialContainer.appendChild(eachTestimonialTitle);
        let eachTestimonialMessage = document.createElement("p");
        eachTestimonialMessage.className = "font-thin col-span-3 text-center";
        eachTestimonialMessage.innerText = testimonialsList[i].message;
        eachTestimonialContainer.appendChild(eachTestimonialMessage);
        purchasedProductsContainer.appendChild(eachTestimonialContainer);
      }
      testimonialsContainer.appendChild(purchasedProductsContainer);
    });