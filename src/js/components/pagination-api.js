import svgfile from '../../images/icons.svg';

export const Pagination = class {
  constructor(name) {
    this.page = 1;
    this.buttonsList = [];
    this.event = null;
    this.name = name;

    const savePage = sessionStorage.getItem(`${this.name}Page`);
    if (savePage) {
      this.page = JSON.parse(savePage);
    }
  }
  get currentPage() {
    return this.page;
  }
  set currentPage(newPage) {
    this.page = newPage;
  }
  incrementPage() {
    this.page += 1;
  }
  decrementPage() {
    this.page -= 1;
  }
  resetPage() {
    this.page = 1;
    if (this.name) {
      sessionStorage.setItem(`${this.name}Page`, JSON.stringify(this.page));
    }
  }

  create({
    prelink,
    totalPages,
    currentEvent,
    step = 5,
    arrows = true,
    dots = true,
    scrollPage = true,
  }) {
    const oldPaginationList = document.querySelector('.pagination-list');
    if (oldPaginationList) {
      oldPaginationList.remove();
    }

    if (totalPages <= 1) return;

    const paginationList = document.createElement('ul');
    paginationList.classList.add('pagination-list');
    prelink.append(paginationList);

    paginationList.addEventListener('click', onButtonClick.bind(this));

    function onButtonClick(e) {
      if (e.target.hasAttribute('data-pagination')) {
        const oldCurrentPage = this.page;

        switch (e.target.dataset.pagination) {
          case 'next':
            if (this.page < totalPages) {
              this.incrementPage();
            }
            break;

          case 'prev':
            if (this.page > 1) {
              this.decrementPage();
            }
            break;

          default:
            this.page = Number(e.target.getAttribute('data-pagination'));
            break;
        }

        const newCurrentPage = this.page;

        if (oldCurrentPage !== newCurrentPage) {
          if (this.name) {
            sessionStorage.setItem(`${this.name}Page`, JSON.stringify(this.page));
          }
          currentEvent();
          this.render(arrows, step, dots);
          if (scrollPage) {
            setTimeout(() => {
              window.scrollTo(0, 0);
            }, 150);
          }
        }
      }
    }

    const paginationPageButtons = () => {
      for (let i = 1; i <= totalPages; i += 1) {
        const buttonClass = ['pagination-btn'];
        if (i === this.page) buttonClass.push('pagination-btn--active');
        this.buttonsList.push(
          `<li>
          <button type='button'
          name="page"
          class='${buttonClass.join(' ')}'
          data-pagination=${i}>${i}</button>
          </li>`,
        );
      }
    };

    if (totalPages <= step + 1 || window.innerWidth < 768) {
      dots = false;
    }
    paginationPageButtons();
    this.render(arrows, step, dots);
  }

  render(arrows, step, dots) {
    const paginationList = document.querySelector('.pagination-list');
    const buttonNext = arrows
      ? `<li><button type='button' class='pagination-btn pagination-btn--arrow' data-pagination='next'><svg class="pagination-btn--icon" transform='rotate(180)' width="16" height="16">
      <use href="${svgfile}#icon-arrow"></button></li>`
      : null;
    const buttonPrev = arrows
      ? `<li><button type='button' class='pagination-btn pagination-btn--arrow' data-pagination='prev'><svg class="pagination-btn--icon" width="16" height="16">
                <use href="${svgfile}#icon-arrow"></use>
            </svg></button></li>`
      : null;
    const paginationDots = '<li><span class="pagination-btn--dots">...</span></li>';

    let startSlice = 0;
    let endSlice = this.buttonsList.length;
    const currentIdx = this.page - 1;

    if (this.page >= step && this.buttonsList.length - currentIdx >= step) {
      startSlice = this.page - step / 2;
      endSlice = this.page + step / 2;
    } else if (this.page < step) {
      startSlice = 0;
      endSlice = step + (dots ? 1 : 0);
    } else if (this.buttonsList.length - currentIdx < step) {
      startSlice = -step - (dots ? 1 : 0);
      endSlice = this.buttonsList.length;
    }

    const numBtns = this.buttonsList.slice(startSlice, endSlice);
    const firstNumBtn = dots
      ? startSlice !== 0
        ? [...this.buttonsList.slice(0, 1), paginationDots]
        : []
      : [];
    const lastNumBtn = dots
      ? endSlice !== this.buttonsList.length
        ? [paginationDots, ...this.buttonsList.slice(-1)]
        : []
      : [];
    const allButtons = [buttonPrev, ...firstNumBtn, ...numBtns, ...lastNumBtn, buttonNext];

    paginationList.innerHTML = allButtons.join('');

    const currentActiveBtn = document.querySelector('.pagination-btn--active');
    currentActiveBtn?.classList.remove('pagination-btn--active');

    const activeBtn = document.querySelector(`.pagination-btn[data-pagination='${this.page}']`);
    activeBtn.classList.add('pagination-btn--active');
  }
};
