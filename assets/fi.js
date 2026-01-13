// document.addEventListener('DOMContentLoaded', () => {
//   document
//     .querySelectorAll('.product-variant__item[data-parent-color]')
//     .forEach(item => {
//       item.style.display = 'none';
//     });
// });


// const main_color_family_btns = document.querySelectorAll('.main_color_family');
 
//  if (main_color_family_btns) {
    
 
//  main_color_family_btns.forEach((button) => {
//                         button.addEventListener('click', (e) => {
//                           e.preventDefault();
//                           button.classList.add('active');

//                           const selectedColor = button.dataset.parentColor;
//                           let firstVisibleInput = null;

//                           document.querySelectorAll('.product-variant__item').forEach((item) => {
//                             if (item.dataset.parentColor === selectedColor) {
//                               item.style.display = 'inline-block';
//                               if (!firstVisibleInput) {
//                                 firstVisibleInput = item.querySelector('input[type="radio"]');
//                               }
//                             } else {
//                               item.style.display = 'none';
//                             }
//                           });

//                           if (firstVisibleInput) {
//                             firstVisibleInput.checked = true;
//                             firstVisibleInput.dispatchEvent(new Event('change', { bubbles: true }));
//                           }
//                         });
//                       });
//                       }


// document.addEventListener('DOMContentLoaded', () => {
//   const variantItems = document.querySelectorAll(
//     '.product-variant__item[data-parent-color]'
//   );

//   const selectedInput = document.querySelector(
//     '.product-variant__input:checked'
//   );

//   let activeColor = null;

//   if (selectedInput) {
//     const selectedItem = selectedInput.closest('.product-variant__item');
//     activeColor = selectedItem?.dataset.parentColor || null;
//   }

//   // Hide / show variants
//   variantItems.forEach(item => {
//     item.style.display =
//       activeColor && item.dataset.parentColor === activeColor
//         ? 'inline-block'
//         : 'none';
//   });

//   // Mark active main color button
//   if (activeColor) {
//     document
//       .querySelectorAll('.main_color_family')
//       .forEach(btn => {
//         btn.classList.toggle(
//           'is-active',
//           btn.dataset.parentColor === activeColor
//         );
//       });
//   }
// });






document.addEventListener('DOMContentLoaded', () => {
  const colorButtons = document.querySelectorAll('.main_color_family');
  const variantItems = document.querySelectorAll(
    '.product-variant__item[data-parent-color]'
  );

  /* ---------------------------
     INITIAL STATE (PRESELECTED)
  ---------------------------- */
  const selectedInput = document.querySelector(
    '.product-variant__input:checked'
  );

  let activeColor = null;

  if (selectedInput) {
    const selectedItem = selectedInput.closest('.product-variant__item');
    activeColor = selectedItem?.dataset.parentColor || null;
  }

  variantItems.forEach(item => {
    item.style.display =
      activeColor && item.dataset.parentColor === activeColor
        ? 'inline-block'
        : 'none';
  });

  colorButtons.forEach(btn => {
    btn.classList.toggle(
      'is-active',
      btn.dataset.parentColor === activeColor
    );
  });

  /* ---------------------------
     CLICK HANDLER
  ---------------------------- */
  colorButtons.forEach(button => {
    button.addEventListener('click', e => {
      e.preventDefault();

      const selectedColor = button.dataset.parentColor;
      let firstVisibleInput = null;

      // 🔁 Toggle active class correctly
      colorButtons.forEach(btn => {
        btn.classList.remove('is-active');
      });
      button.classList.add('is-active');

      // 🔁 Filter variants
      variantItems.forEach(item => {
        if (item.dataset.parentColor === selectedColor) {
          item.style.display = 'inline-block';

          if (!firstVisibleInput) {
            firstVisibleInput = item.querySelector('input[type="radio"]');
          }
        } else {
          item.style.display = 'none';
        }
      });

      // 🔁 Select first visible variant
      if (firstVisibleInput) {
        firstVisibleInput.checked = true;
        firstVisibleInput.dispatchEvent(
          new Event('change', { bubbles: true })
        );
      }
    });
  });
});
