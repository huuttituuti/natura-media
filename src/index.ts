import { addStamps } from '$utils/addStamps';
import { splideImagesOrder } from '$utils/splideImagesOrder';
import { htmlTable } from '$utils/htmlTable';

window.Webflow ||= [];
window.Webflow.push(() => {
  document.addEventListener('DOMContentLoaded', function () {
    addStamps();
    splideImagesOrder();
    htmlTable();
  });
});
