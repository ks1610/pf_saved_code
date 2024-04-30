<!-- PAGEFLY CART HELPER - DO NOT DELETE -->
    <script>
          try {
          setTimeout(function () {
            window.__pagefly_helper_store__ &&
              window.__pagefly_helper_store__.subscribe(function (res) {
            	document.dispatchEvent(new CustomEvent('ajaxProduct:added', {
                    detail: {
                      product: res,
                      addToCartBtn: ''
                    }
                          }));
		});
          }, 2500);
        } catch (e) {
          console.warn(e);
        }
    </script>

	//Or
		 <!-- PAGEFLY CART HELPER - DO NOT DELETE -->
    <script>
          try {
          setTimeout(function () {
            window.__pagefly_helper_store__ &&
              window.__pagefly_helper_store__.subscribe(function (res) {
            	theme.cart.getCartProductMarkup().then(html => {
                            var selectors = {
                                products: '[data-products]',
                                qtySelector: '.js-qty__wrapper',
                                subTotal: '[data-subtotal]',
                              };
                            var markup = theme.CartForm.prototype._parseProductHTML(html);
                            var items = markup.items;
                            var count = parseInt(items.dataset.count);
                            var subtotal = items.dataset.cartSubtotal;
                            var savings = items.dataset.cartSavings;
							var wrapper = $('#CartDrawerForm');
                            var products = wrapper[0].querySelector(selectors.products)
                            var subtotals = wrapper[0].querySelector(selectors.subTotal)
                            theme.CartForm.prototype.updateCartDiscounts(markup.discounts);
                            theme.CartForm.prototype.updateSavings(savings);

                            if (count > 0) {
                              wrapper[0].parentNode.classList.remove('is-empty');
                            } else {
                              wrapper[0].parentNode.classList.add('is-empty');
                            }

                            theme.CartForm.prototype.updateCount(count);

                            // Append item markup
                            products.innerHTML = '';
                            products.append(items);
                            // Update subtotal
                            subtotals.innerHTML = theme.Currency.formatMoney(subtotal, theme.settings.moneyFormat);
                            wrapper[0].querySelectorAll(selectors.qtySelector).forEach(el => {
                                var selector = new theme.QtySelector(el, {
                                  namespace: '.cart-' + wrapper[0].dataset.location,
                                  isCart: true
                                });
                              });
                            if (window.AOS) { AOS.refreshHard() }
                          });
		});
          }, 2500);
        } catch (e) {
          console.warn(e);
        }
    </script>
