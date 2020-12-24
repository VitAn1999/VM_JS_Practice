function _createModal(щзешщты) {
  const modal = document.createElement('div');
  modal.classList.add('v-modal');
  modal.insertAdjacentHTML(
    'afterbegin',
    ` <div class="v-modal__overlay">
      <div class="v-modal__window">
        <div class="v-modal__header">
          <span class="v-modal__title">Modal title</span>
          <span class="v-modal__close">&times;</span>
        </div>
        <div class="v-modal__body">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div class="v-modal__footer">
          <button class="btn btn-success">Ok</button>
          <button class="btn btn-danger">Cancel</button>
        </div>
      </div>
    </div>
  `
  );
  document.body.appendChild(modal);
  return modal;
}

$.modal = function (options) {
  const $modal = _createModal(options);
  let closing = false;
  return {
    open() {
      closing && $modal.classList.add('open');
    },
    close() {
      closing = true;
      $modal.classList.remove('open');
      $modal.classList.add('hidden');
      setTimeout(() => {
        $modal.classList.remove('hidden');
        closing = false;
      }, 300);
    },
    destroy() {},
  };
};
