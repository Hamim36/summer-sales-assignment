document.addEventListener('DOMContentLoaded', function() {
    let totalPrice = 0;
    const cartList = document.getElementById('cart').querySelector('ol');
    const purchaseButton = document.querySelector('.btn-secondary');

    
    document.getElementById('promo-btn').addEventListener('click', function() {
        
        document.getElementById('coupon-input').value = 'sell200';
        
        if (document.getElementById('coupon-input').value === 'sell200') {
            document.getElementById('apply-button').disabled = false;
        }
    });

    
    document.getElementById('coupon-input').addEventListener('input', function() {
        
        if (document.getElementById('coupon-input').value === 'sell200') {
            document.getElementById('apply-button').disabled = false;
        } else {
            document.getElementById('apply-button').disabled = true;
        }
    });

    document.querySelectorAll('.card-body').forEach(cardBody => {
        cardBody.addEventListener('click', function() {
            
            const itemName = this.querySelector('h1').textContent.trim();
            const priceText = this.querySelector('p').textContent.trim(); 
            const price = parseFloat(priceText); 

            
            console.log('Item:', itemName);
            console.log('Price:', price);

            
            const newItem = document.createElement('li');
            newItem.textContent = `${cartList.childElementCount + 1}. ${itemName}: ${price.toFixed(2)} TK`;
            cartList.appendChild(newItem);

            
            totalPrice += price;

            
            document.getElementById('Total-price').textContent = totalPrice.toFixed(2);

        
            if (totalPrice > 0) {
                purchaseButton.disabled = false;
            }

            
            document.getElementById('Discount').textContent = '00.00 TK';
            document.getElementById('total').textContent = '00.00 TK';
        });
    });

    
    document.getElementById('apply-button').addEventListener('click', function() {
        const couponInput = document.getElementById('coupon-input').value;
        if (couponInput === 'sell200' && totalPrice >= 200) {
            totalPrice *= 0.8; // 

            
            document.getElementById('Discount').textContent = (totalPrice * 0.2).toFixed(2) + ' TK';

            document.getElementById('total').textContent = totalPrice.toFixed(2) + ' TK';

            alert('20% discount applied!');
        } else if (couponInput === 'sell200' && totalPrice < 200) {
            alert('You are not eligible for this coupon code!');
        } else {
            alert('Invalid coupon code!');
        }
    });
});
