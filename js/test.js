const grid = document.querySelector('.grid');
const msnry = new Masonry(grid, {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true,
});

// const initFullpage = function initFullpage() {
//   // eslint-disable-next-line no-new
//   new fullpage('#fullpage', {
//     anchors: ['irene', 'seulgi', 'wendy', 'yeri', 'joy'],
//     autoScrolling: true,
//     scrollOverflow: true,
//   });
//   fullpage_api.setAllowScrolling(true);
// };

// imagesLoaded(grid).on('progress', () => {
//   msnry.layout();
//   // initFullpage();
// });
