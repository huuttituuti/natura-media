import { addStamps } from '$utils/addStamps';
import { splideImagesOrder } from '$utils/splideImagesOrder';
import { htmlTable } from '$utils/htmlTable';

window.Webflow ||= [];
window.Webflow.push(() => {
  //console.log('hello');
  //document.addEventListener('DOMContentLoaded', function () {
  addStamps();
  splideImagesOrder();
  htmlTable();
  //});
});
