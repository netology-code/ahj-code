import InnOgrnFormWidget from '../widget';

test('should render self', () => {
  document.body.innerHTML = '<div id="container"></div>';

  const container = document.querySelector('#container');
  const widget = new InnOgrnFormWidget(container);

  widget.bindToDOM();

  expect(container.innerHTML).toEqual(InnOgrnFormWidget.markup);
});

test('should validate input', () => {
  document.body.innerHTML = '<div id="container"></div>';

  const container = document.querySelector('#container');
  const widget = new InnOgrnFormWidget(container);

  widget.bindToDOM();

  const input = container.querySelector(InnOgrnFormWidget.inputSelector);
  input.value = '7715964180';

  const submit = container.querySelector(InnOgrnFormWidget.submitSelector);
  submit.click();

  expect(input.classList.contains('valid')).toBeTruthy();
});
