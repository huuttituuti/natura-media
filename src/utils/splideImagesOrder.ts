export function splideImagesOrder() {
  /* ORDER OF SPLIDE IMAGES */
  const mainImage = document.querySelector("[gallery='main-image']");
  const noImage = document.querySelector("[gallery='no-image']");
  const list = document.querySelector("[gallery='list']");
  const infoCard = document.querySelector("[gallery='info-card']");
  const videoCard = document.querySelector("[gallery='video-card']");
  const listWrp = document.querySelector("[gallery='list-wrp']");
  const galleryDesktop = document.querySelector("[gallery='desktop']");
  let infoCardPosition;
  let videoCardPosition;

  /* If there main image is set, remove no image placeholder,
  so it doesn't mess up with the info- and video card positioning */
  if (noImage?.classList.contains('w-condition-invisible')) {
    noImage.remove();
  }

  // If infocard has position set in it's attribute, convert to number
  if (infoCard.getAttribute('gallery-location')) {
    infoCardPosition = Number(infoCard.getAttribute('gallery-location')) - 1;
  }

  // If videocard has position set in it's attribute, convert to number
  if (videoCard.getAttribute('gallery-location')) {
    videoCardPosition = Number(videoCard.getAttribute('gallery-location')) - 1;
  }

  if (list.childElementCount === 0) {
    //remove multi-gallery from dom
    listWrp.remove();
    // If there's no value set for infocard location, swap infocard and main image position so main image is always on right
    if (!infoCard.getAttribute('gallery-location')) {
      infoCard.insertAdjacentElement('afterend', mainImage);
    } else {
      // If infocard has value in gallery-location attribute, change position according to it
      list.insertBefore(infoCard, list.children[infoCardPosition]);
    }
  } else if (list.childElementCount === 1) {
    // If the 1 is invisible
    /* Don't remember what this was for?
    But if the gallery had only 1 image, it would disappear
    so I hid this section of code. 25/10/23*/
    /*if (list?.querySelectorAll('invisible')) {
      listWrp.remove();
    }*/
    // If there's only 1 image in multigallery and there IS NO videocard
    if (!videoCard) {
      if (!infoCard.getAttribute('gallery-location')) {
        // main image second
        galleryDesktop.insertBefore(mainImage, list.children[1]);
      } else {
        list.insertBefore(infoCard, list.children[infoCardPosition]);
      }
    } else if (videoCard && window.innerWidth > 991) {
      /* If there's only 1 image in multigallery, there IS videocard
      and the it's not on mobile layouts */
      galleryDesktop.insertBefore(videoCard, galleryDesktop.children[videoCardPosition]);
      galleryDesktop.insertBefore(infoCard, galleryDesktop.children[infoCardPosition]);
    }
  } else if (list.childElementCount > 1) {
    // If there's more than 1 image in multigallery, main image second
    list.insertBefore(mainImage, list.children[1]);
    if (!infoCard.getAttribute('gallery-location')) {
      // and infocard fourth
      list.insertBefore(infoCard, list.children[3]);
    } else {
      list.insertBefore(infoCard, list.children[infoCardPosition]);
      list.insertBefore(mainImage, list.children[1]);
    }
  }
} // export function
