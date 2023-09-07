import { addStamps } from '$utils/addStamps';
import { allergens } from '$utils/allergens';
import { htmlTable } from '$utils/htmlTable';
import { splideImagesOrder } from '$utils/splideImagesOrder';

window.Webflow ||= [];
window.Webflow.push(() => {
  //console.log('hello');
  addStamps();
  splideImagesOrder();
  htmlTable();
  allergens();
});
