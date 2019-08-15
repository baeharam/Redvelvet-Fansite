const initializeMembers = function initializeMembers() {
  const groupInside = document.getElementById('group__inside-js');
  const groupMembers = document.querySelectorAll('.group__member');
  const singles = document.querySelectorAll('.single');
  const closeBtn = document.getElementById('closeBtn-js');
  const header = document.getElementById('header-js');
  const HIDE_CLASS = 'hide';
  const SHOW_CLASS = 'show';

  const showcloseBtn = function showcloseBtn() {
    closeBtn.classList.remove(HIDE_CLASS);
    closeBtn.classList.add(SHOW_CLASS);
  };

  const hidecloseBtn = function hidecloseBtn() {
    closeBtn.classList.remove(SHOW_CLASS);
    closeBtn.classList.add(HIDE_CLASS);
  };

  const showExpandedMembers = function showExpandedMembers(index) {
    singles[index].classList.remove(HIDE_CLASS);
    singles[index].classList.add(SHOW_CLASS);
  };

  const hideExpandedMembers = function hideExpandedMembers() {
    document.querySelector('.show').classList.add(HIDE_CLASS);
    document.querySelector('.show').classList.remove(SHOW_CLASS);
  };

  const deactivateAnimationOfMember = function deactivateAnimation(member) {
    member.style.animationName = 'none';
  };

  const hideHeader = function hideHeader() {
    header.classList.remove(SHOW_CLASS);
    header.classList.add(HIDE_CLASS);
  };

  const showHeader = function showHeader() {
    header.classList.remove(HIDE_CLASS);
    header.classList.add(SHOW_CLASS);
  };

  groupMembers.forEach((member, index) => {
    member.addEventListener('mouseenter', () => {
      groupMembers.forEach((_member, _index) => {
        if (_index !== index) {
          _member.classList.remove('group__member--active');
        } else {
          _member.classList.add('group__member--active');
        }
      });
    });
    member.addEventListener('click', () => {
      member.classList.add('group__member--expand');
      showExpandedMembers(index);
      showcloseBtn();
      hideHeader();
    });
  });

  groupInside.addEventListener('mouseleave', () => {
    groupMembers.forEach(member => member.classList.add('group__member--active'));
  });

  window.addEventListener('resize', () => {
    if (document.documentElement.offsetHeight <= 768) {
      groupMembers.forEach(member => deactivateAnimationOfMember(member));
    }
  });

  closeBtn.addEventListener('click', () => {
    hidecloseBtn();
    hideExpandedMembers();
    document.querySelector('.group__member--expand').classList.remove('group__member--expand');
    showHeader();
  });
};

const initializePhotos = function initializePhotos() {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('intersect');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px 200px 0px' });
  const photos = document.querySelectorAll('.photo');
  photos.forEach(photo => io.observe(photo));
};

window.onload = () => {
  initializeMembers();
  initializePhotos();
};
