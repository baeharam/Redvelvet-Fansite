const initializeMembers = function initializeMembers() {
  const groupInside = document.getElementById('group__inside-js');
  const groupMembers = document.querySelectorAll('.group__member');
  const singles = document.querySelectorAll('.single');
  const backBtn = document.getElementById('backBtn-js');
  const header = document.getElementById('header-js');
  const HIDE_CLASS = 'hide';
  const SHOW_CLASS = 'show';

  const showBackBtn = function showBackBtn() {
    backBtn.classList.remove(HIDE_CLASS);
    backBtn.classList.add(SHOW_CLASS);
  };

  const hideBackBtn = function hideBackBtn() {
    backBtn.classList.remove(SHOW_CLASS);
    backBtn.classList.add(HIDE_CLASS);
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
      showBackBtn();
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

  backBtn.addEventListener('click', () => {
    hideBackBtn();
    hideExpandedMembers();
    document.querySelector('.group__member--expand').classList.remove('group__member--expand');
    showHeader();
  });
};

initializeMembers();
