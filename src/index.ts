import { addStamps } from '$utils/addStamps';
import { allergens } from '$utils/allergens';
import { articleSchedule } from '$utils/articleSchedule';
import { htmlTable } from '$utils/htmlTable';
import { splideImagesOrder } from '$utils/splideImagesOrder';

window.Webflow ||= [];
window.Webflow.push(() => {
  //console.log('hello');

  if (document.querySelector("[swiper='index-hero']")) {
    // If actual index (front) page
    //articleSchedule(2);
  } else {
    addStamps();
    splideImagesOrder();
    htmlTable();
    allergens();
  }
});
