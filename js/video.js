function moveToSelected(element) {
  let selected;
  if (element === 'next') {
    selected = document.querySelector('.selected').nextElementSibling;
  } else if (element === 'prev') {
    selected = document.querySelector('.selected').previousElementSibling;
  } else {
    selected = element;
  }

  let next = selected ? selected.nextElementSibling : null;
  let prev = selected ? selected.previousElementSibling : null;

  if (selected) {
    selected.classList = '';
    selected.classList.add('carousel__contents');
    selected.classList.add('selected');
  }
  if (prev) {
    prev.classList = '';
    prev.classList.add('carousel__contents');
    prev.classList.add('prev');
  }
  if (next) {
    next.classList = '';
    next.classList.add('carousel__contents');
    next.classList.add('next');
  }

  while (next && next.nextElementSibling) {
    next.nextElementSibling.classList = '';
    next.nextElementSibling.classList.add('carousel__contents');
    next.nextElementSibling.classList.add('hide');
    next = next.nextElementSibling;
  }

  while (prev && prev.previousElementSibling) {
    prev.previousElementSibling.classList = '';
    prev.previousElementSibling.classList.add('carousel__contents');
    prev.previousElementSibling.classList.add('hide');
    prev = prev.previousElementSibling;
  }
}

document.addEventListener('keydown', (e) => {
  switch (e.which) {
    case 37:
      moveToSelected('prev');
      break;
    case 39:
      moveToSelected('next');
      break;
    default:
  }
  e.preventDefault();
});

document.querySelector('.prev').addEventListener('click', () => {
  moveToSelected('prev');
});

document.querySelector('.next').addEventListener('click', () => {
  moveToSelected('next');
});

document.querySelectorAll('.video__player').forEach((videoElem) => {
  videoElem.addEventListener('mouseenter', () => {
    const src = videoElem.getAttribute('src');
    if (!src.includes('autoplay')) {
      videoElem.setAttribute('src', `${src}&autoplay=1`);
    }
  });
});
