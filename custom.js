$( document ).ready( function () {
	countCart();
	let kimchiBtn = document.getElementById( "addKimchiToCart" );
	let kimbapBtn = document.getElementById( "addKimbapToCart" );
	let bulgogiBtn = document.getElementById( "addBulgogiToCart" );

	$( kimchiBtn ).on( 'click', () => {
		console.log( 'click' );
		addToCart( 'kimchi' )
		animateAdd( kimchiBtn );
	} )
	$( kimbapBtn ).on( 'click', () => {
		console.log( 'click' );
		addToCart( 'kimbap' )
		animateAdd( kimbapBtn );
	} )
	$( bulgogiBtn ).on( 'click', () => {
		console.log( 'click' );
		addToCart( 'bulgogi' )
		animateAdd( bulgogiBtn );
	} )


	// initializeScroll();
	initializeCounter();
	generateOrderList();
	initializeCounter();

} );
let initializeScroll = () => {
	let nav = document.getElementById( 'mainNav' )
	let sticky = nav.offsetTop;
	window.onscroll = function () {
		myFunction()
	};

	function myFunction() {
		if ( window.pageYOffset >= sticky ) {
			nav.classList.add( "sticky" )
		} else {
			nav.classList.remove( "sticky" );
		}
	}
}
let animateAdd = ( element ) => {
	if ( !!element ) {
		element.classList.add( 'animate__animated', 'animate__fadeOutTopRight' );
		setTimeout( () => {
			element.classList.remove( 'animate__animated', 'animate__fadeOutTopRight' )
			element.classList.add( 'animate__animated', 'animate__rollIn' );
			setTimeout( () => {
				element.classList.remove( 'animate__animated', 'animate__rollIn' )
			}, 2000 );
		}, 1000 );
	}
}
let addToCart = ( type ) => {
	console.log('type: ', type);
	oldItems = JSON.parse( localStorage.getItem( 'itemsArray' ) ) || [];
	switch ( type ) {
		case 'Saint Lauren Fringe Rucksack':
			let one = oldItems[ 0 ] || 0;
			one++;
			oldItems[ 0 ] = one;
			break;
		case 'Chanel Pink Leather':
			let two = oldItems[ 1 ] || 0;
			two++;
			oldItems[ 1 ] = two;
			break;
		case 'Givenchy Black Gold Strap':
			let three = oldItems[ 2 ] || 0;
			three++;
			oldItems[ 2 ] = three;
			break;
		case 'Gucci White / Ophidia Tote':
			let four = oldItems[ 3 ] || 0;
			four++;
			oldItems[ 3 ] = four;
			break;
		case 'Prada Calf Leather Handbag':
			let five = oldItems[ 4 ] || 0;
			five++;
			oldItems[ 4 ] = five;
			break;
		case 'Gucci Beige Small':
			let six = oldItems[ 5 ] || 0;
			six++;
			oldItems[ 5 ] = six;
			break;
		case 'Coach Dalton Tote Bag':
			let seven = oldItems[ 6 ] || 0;
			seven++;
			oldItems[ 6 ] = seven;
			break;
		case 'Chanel Sky Blue':
			let eight = oldItems[ 7 ] || 0;
			eight++;
			oldItems[ 7 ] = eight;
			break;
		case 'Prada Black Saffiano Leather':
			let nine = oldItems[ 8 ] || 0;
			nine++;
			oldItems[ 8 ] = nine;
			break;
		case 'Givenchy Antigona':
			let ten = oldItems[ 9 ] || 0;
			ten++;
			oldItems[ 9 ] = ten;
			break;
		case 'Coach Calf Leather':
			let eleven = oldItems[ 10 ] || 0;
			eleven++;
			oldItems[ 10 ] = eleven;
			break;
		case 'Gucci White / Mini Sylvie Bag':
			let twelve = oldItems[ 11 ] || 0;
			twelve++;
			oldItems[ 11 ] = twelve;
			break;
		default:
			break;
	}
	localStorage.setItem( 'itemsArray', JSON.stringify( oldItems ) );
	countCart();
}
let countCart = () => {
	let oldItems = JSON.parse( localStorage.getItem( 'itemsArray' ) ) || [];
	let counter = 0;
	for ( let i = 0; i < oldItems.length; i++ ) {
		if ( oldItems[ i ] )
			counter++
	}
	document.getElementById( "lblCartCount" ).innerText = counter.toString();
}
let generateOrderList = () => {
	let list = JSON.parse( localStorage.getItem( 'itemsArray' ) ) || [];
	let element = document.getElementById( 'orderList' );
	let total = 0;
	if(!element) return;
	if ( list[ 0 ] ) {
		total += 57849 * parseInt(list[0]);
		let newList = document.createElement( 'li' );
		newList.classList.add( 'list-unstyled-item', 'list-hours-item', 'd-flex' );
		newList.innerHTML =
			`
				<div>
					<p>Saint Lauren Fringe Rucksack <br/><code>(₱57,849.00)</code></p>
				</div>
				<div class="input-group item-counter" style="">
					<span class="input-group-btn">
						<button type="button" class="btn btn-danger btn-number" data-type="minus" data-field="quant[0]" style="border-radius: 0px;height: 40px;" id="oneMinus">
							<i class="fas fa-minus"></i>
						</button>
					</span>
					<input type="text" name="quant[0]" class="form-control input-number" value="${list[ 0 ]}" min="1" id="oneCounter"
					max="100" style="height: 40px;">
					<span class="input-group-btn">
						<button type="button" class="btn btn-success btn-number" data-type="plus"
						data-field="quant[0]" style="border-radius: 0px;height: 40px;">
						<i class="fas fa-plus"></i>
						</button>
					</span>
				</div>
			`;
		element.append( newList );
	}
	if ( list[ 1 ] ) {
		total += 4599 * parseInt(list[1]);
		let newList = document.createElement( 'li' );
		newList.classList.add( 'list-unstyled-item', 'list-hours-item', 'd-flex' );
		newList.innerHTML =
			`
				<div>
					<p>Chanel Pink Leather <br/><code>(₱4,599.00)</code></p>
				</div>
				<div class="input-group item-counter" style="">
					<span class="input-group-btn">
						<button type="button" class="btn btn-danger btn-number" data-type="minus" data-field="quant[1]" style="border-radius: 0px;height: 40px;"  id="twoMinus">
							<i class="fas fa-minus"></i>
						</button>
					</span>
					<input type="text" name="quant[1]" class="form-control input-number" value="${list[ 1 ]}" min="1" id="twoCounter"
					max="100" style="height: 40px;">
					<span class="input-group-btn">
						<button type="button" class="btn btn-success btn-number" data-type="plus"
						data-field="quant[1]" style="border-radius: 0px;height: 40px;">
						<i class="fas fa-plus"></i>
						</button>
					</span>
				</div>
			`;
		element.append( newList );
	}
	if ( list[ 2 ] ) {
		total += 44237 * parseInt(list[2]);
		let newList = document.createElement( 'li' );
		newList.classList.add( 'list-unstyled-item', 'list-hours-item', 'd-flex' );
		newList.innerHTML =
			`
				<div>
					<p>Givenchy Black Gold Strap <br/><code>(₱44,237.00)</code></p>
				</div>
				<div class="input-group item-counter" style="">
					<span class="input-group-btn">
						<button type="button" class="btn btn-danger btn-number" data-type="minus" data-field="quant[2]" style="border-radius: 0px;height: 40px;" id="threeMinus" >
							<i class="fas fa-minus"></i>
						</button>
					</span>
					<input type="text" name="quant[2]" class="form-control input-number" value="${list[ 2 ]}" min="1" id="threeCounter"
					max="100" style="height: 40px;">
					<span class="input-group-btn">
						<button type="button" class="btn btn-success btn-number" data-type="plus"
						data-field="quant[2]" style="border-radius: 0px;height: 40px;">
						<i class="fas fa-plus"></i>
						</button>
					</span>
				</div>
			`;
		element.append( newList );
	}
	if ( list[ 3 ] ) {
		total += 101113 * parseInt(list[3]);
		let newList = document.createElement( 'li' );
		newList.classList.add( 'list-unstyled-item', 'list-hours-item', 'd-flex' );
		newList.innerHTML =
			`
				<div>
					<p>Gucci White / Ophidia Tote <br/><code>(₱101,113.00)</code></p>
				</div>
				<div class="input-group item-counter" style="">
					<span class="input-group-btn">
						<button type="button" class="btn btn-danger btn-number" data-type="minus" data-field="quant[3]" style="border-radius: 0px;height: 40px;" id="fourMinus" >
							<i class="fas fa-minus"></i>
						</button>
					</span>
					<input type="text" name="quant[3]" class="form-control input-number" value="${list[ 2 ]}" min="1" id="fourCounter"
					max="100" style="height: 40px;">
					<span class="input-group-btn">
						<button type="button" class="btn btn-success btn-number" data-type="plus"
						data-field="quant[3]" style="border-radius: 0px;height: 40px;">
						<i class="fas fa-plus"></i>
						</button>
					</span>
				</div>
			`;
		element.append( newList );
	}
	if ( list[ 4 ] ) {
		total += 135305 * parseInt(list[4]);
		let newList = document.createElement( 'li' );
		newList.classList.add( 'list-unstyled-item', 'list-hours-item', 'd-flex' );
		newList.innerHTML =
			`
				<div>
					<p>Prada Calf Leather Handbag <br/><code>(₱135,305.00)</code></p>
				</div>
				<div class="input-group item-counter" style="">
					<span class="input-group-btn">
						<button type="button" class="btn btn-danger btn-number" data-type="minus" data-field="quant[4]" style="border-radius: 0px;height: 40px;" id="fiveMinus" >
							<i class="fas fa-minus"></i>
						</button>
					</span>
					<input type="text" name="quant[4]" class="form-control input-number" value="${list[ 2 ]}" min="1" id="fiveCounter"
					max="100" style="height: 40px;">
					<span class="input-group-btn">
						<button type="button" class="btn btn-success btn-number" data-type="plus"
						data-field="quant[4]" style="border-radius: 0px;height: 40px;">
						<i class="fas fa-plus"></i>
						</button>
					</span>
				</div>
			`;
		element.append( newList );
	}
	if ( list[ 5 ] ) {
		total += 80118 * parseInt(list[5]);
		let newList = document.createElement( 'li' );
		newList.classList.add( 'list-unstyled-item', 'list-hours-item', 'd-flex' );
		newList.innerHTML =
			`
				<div>
					<p>Gucci Beige Small <br/><code>(₱80,118.00)</code></p>
				</div>
				<div class="input-group item-counter" style="">
					<span class="input-group-btn">
						<button type="button" class="btn btn-danger btn-number" data-type="minus" data-field="quant[5]" style="border-radius: 0px;height: 40px;" id="sixMinus" >
							<i class="fas fa-minus"></i>
						</button>
					</span>
					<input type="text" name="quant[5]" class="form-control input-number" value="${list[ 2 ]}" min="1" id="sixCounter"
					max="100" style="height: 40px;">
					<span class="input-group-btn">
						<button type="button" class="btn btn-success btn-number" data-type="plus"
						data-field="quant[5]" style="border-radius: 0px;height: 40px;">
						<i class="fas fa-plus"></i>
						</button>
					</span>
				</div>
			`;
		element.append( newList );
	}
	if ( list[ 6 ] ) {
		total += 28900 * parseInt(list[6]);
		let newList = document.createElement( 'li' );
		newList.classList.add( 'list-unstyled-item', 'list-hours-item', 'd-flex' );
		newList.innerHTML =
			`
				<div>
					<p>Coach Dalton Tote Bag <br/><code>(₱28,900.00)</code></p>
				</div>
				<div class="input-group item-counter" style="">
					<span class="input-group-btn">
						<button type="button" class="btn btn-danger btn-number" data-type="minus" data-field="quant[6]" style="border-radius: 0px;height: 40px;" id="sevenMinus" >
							<i class="fas fa-minus"></i>
						</button>
					</span>
					<input type="text" name="quant[6]" class="form-control input-number" value="${list[ 2 ]}" min="1" id="sevenCounter"
					max="100" style="height: 40px;">
					<span class="input-group-btn">
						<button type="button" class="btn btn-success btn-number" data-type="plus"
						data-field="quant[6]" style="border-radius: 0px;height: 40px;">
						<i class="fas fa-plus"></i>
						</button>
					</span>
				</div>
			`;
		element.append( newList );
	}
	if ( list[ 7 ] ) {
		total += 2699 * parseInt(list[7]);
		let newList = document.createElement( 'li' );
		newList.classList.add( 'list-unstyled-item', 'list-hours-item', 'd-flex' );
		newList.innerHTML =
			`
				<div>
					<p>Chanel Sky Blue <br/><code>(₱2,699.00)</code></p>
				</div>
				<div class="input-group item-counter" style="">
					<span class="input-group-btn">
						<button type="button" class="btn btn-danger btn-number" data-type="minus" data-field="quant[7]" style="border-radius: 0px;height: 40px;" id="eightMinus" >
							<i class="fas fa-minus"></i>
						</button>
					</span>
					<input type="text" name="quant[7]" class="form-control input-number" value="${list[ 2 ]}" min="1" id="eightCounter"
					max="100" style="height: 40px;">
					<span class="input-group-btn">
						<button type="button" class="btn btn-success btn-number" data-type="plus"
						data-field="quant[7]" style="border-radius: 0px;height: 40px;">
						<i class="fas fa-plus"></i>
						</button>
					</span>
				</div>
			`;
		element.append( newList );
	}
	if ( list[ 8 ] ) {
		total += 117394 * parseInt(list[8]);
		let newList = document.createElement( 'li' );
		newList.classList.add( 'list-unstyled-item', 'list-hours-item', 'd-flex' );
		newList.innerHTML =
			`
				<div>
					<p>Prada Black Saffiano Leather <br/><code>(₱117,394.00)</code></p>
				</div>
				<div class="input-group item-counter" style="">
					<span class="input-group-btn">
						<button type="button" class="btn btn-danger btn-number" data-type="minus" data-field="quant[8]" style="border-radius: 0px;height: 40px;" id="nineMinus" >
							<i class="fas fa-minus"></i>
						</button>
					</span>
					<input type="text" name="quant[8]" class="form-control input-number" value="${list[ 2 ]}" min="1" id="nineCounter"
					max="100" style="height: 40px;">
					<span class="input-group-btn">
						<button type="button" class="btn btn-success btn-number" data-type="plus"
						data-field="quant[8]" style="border-radius: 0px;height: 40px;">
						<i class="fas fa-plus"></i>
						</button>
					</span>
				</div>
			`;
		element.append( newList );
	}
	if ( list[ 9 ] ) {
		total += 69419 * parseInt(list[9]);
		let newList = document.createElement( 'li' );
		newList.classList.add( 'list-unstyled-item', 'list-hours-item', 'd-flex' );
		newList.innerHTML =
			`
				<div>
					<p>Givenchy Antigona <br/><code>(₱69,419.00)</code></p>
				</div>
				<div class="input-group item-counter" style="">
					<span class="input-group-btn">
						<button type="button" class="btn btn-danger btn-number" data-type="minus" data-field="quant[9]" style="border-radius: 0px;height: 40px;" id="tenMinus" >
							<i class="fas fa-minus"></i>
						</button>
					</span>
					<input type="text" name="quant[9]" class="form-control input-number" value="${list[ 2 ]}" min="1" id="tenCounter"
					max="100" style="height: 40px;">
					<span class="input-group-btn">
						<button type="button" class="btn btn-success btn-number" data-type="plus"
						data-field="quant[9]" style="border-radius: 0px;height: 40px;">
						<i class="fas fa-plus"></i>
						</button>
					</span>
				</div>
			`;
		element.append( newList );
	}
	if ( list[ 10 ] ) {
		total += 25027 * parseInt(list[10]);
		let newList = document.createElement( 'li' );
		newList.classList.add( 'list-unstyled-item', 'list-hours-item', 'd-flex' );
		newList.innerHTML =
			`
				<div>
					<p>Coach Calf Leather <br/><code>(₱25,027.00)</code></p>
				</div>
				<div class="input-group item-counter" style="">
					<span class="input-group-btn">
						<button type="button" class="btn btn-danger btn-number" data-type="minus" data-field="quant[10]" style="border-radius: 0px;height: 40px;" id="elevenMinus" >
							<i class="fas fa-minus"></i>
						</button>
					</span>
					<input type="text" name="quant[10]" class="form-control input-number" value="${list[ 2 ]}" min="1" id="elevenCounter"
					max="100" style="height: 40px;">
					<span class="input-group-btn">
						<button type="button" class="btn btn-success btn-number" data-type="plus"
						data-field="quant[10]" style="border-radius: 0px;height: 40px;">
						<i class="fas fa-plus"></i>
						</button>
					</span>
				</div>
			`;
		element.append( newList );
	}
	if ( list[ 11 ] ) {
		total += 107470 * parseInt(list[11]);
		let newList = document.createElement( 'li' );
		newList.classList.add( 'list-unstyled-item', 'list-hours-item', 'd-flex' );
		newList.innerHTML =
			`
				<div>
					<p>Gucci White / Mini Sylvie Bag <br/><code>(₱107,470.00)</code></p>
				</div>
				<div class="input-group item-counter" style="">
					<span class="input-group-btn">
						<button type="button" class="btn btn-danger btn-number" data-type="minus" data-field="quant[11]" style="border-radius: 0px;height: 40px;" id="twelveMinus" >
							<i class="fas fa-minus"></i>
						</button>
					</span>
					<input type="text" name="quant[11]" class="form-control input-number" value="${list[ 2 ]}" min="1" id="twelveCounter"
					max="100" style="height: 40px;">
					<span class="input-group-btn">
						<button type="button" class="btn btn-success btn-number" data-type="plus"
						data-field="quant[11]" style="border-radius: 0px;height: 40px;">
						<i class="fas fa-plus"></i>
						</button>
					</span>
				</div>
			`;
		element.append( newList );
	}
	let newList = document.createElement( 'li' );
	newList.classList.add( 'list-unstyled-item', 'list-hours-item', 'd-flex' );
	newList.innerHTML =
		`
				<div>
					<p>TOTAL: </p>
				</div>
				<div class="input-group item-counter" style="">
					<h2><code id="totalValue">₱${total.toLocaleString()}.00</code></h2>
				</div>
			`;
	element.append( newList );
	initializeTotalCounter(total);
	initializeRemoveToCounter();
	if(total === 0)
		document.getElementById('checkoutBtn').disabled = true;

	let form = document.getElementById('orderForm');
	$(form).on('submit', submitData);
}
let initializeCounter = () =>{
	$('.btn-number').click(function(e){
		e.preventDefault();

		fieldName = $(this).attr('data-field');
		type      = $(this).attr('data-type');
		var input = $("input[name='"+fieldName+"']");
		var currentVal = parseInt(input.val());
		if (!isNaN(currentVal)) {
			if(type == 'minus') {

				if(currentVal > input.attr('min')) {
					input.val(currentVal - 1).change();
				}
				if(parseInt(input.val()) == input.attr('min')) {
				}

			} else if(type == 'plus') {

				if(currentVal < input.attr('max')) {
					input.val(currentVal + 1).change();
				}
				if(parseInt(input.val()) == input.attr('max')) {
					$(this).attr('disabled', true);
				}

			}
		} else {
			input.val(0);
		}
	});
	$('.input-number').focusin(function(){
		$(this).data('oldValue', $(this).val());
	});
	$('.input-number').change(function() {

		minValue =  parseInt($(this).attr('min'));
		maxValue =  parseInt($(this).attr('max'));
		valueCurrent = parseInt($(this).val());

		name = $(this).attr('name');
		if(valueCurrent >= minValue) {
			$(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
		} else {
			alert('Sorry, the minimum value was reached');
			$(this).val($(this).data('oldValue'));
		}
		if(valueCurrent <= maxValue) {
			$(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
		} else {
			alert('Sorry, the maximum value was reached');
			$(this).val($(this).data('oldValue'));
		}


	});
	$(".input-number").keydown(function (e) {
		// Allow: backspace, delete, tab, escape, enter and .
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
			// Allow: Ctrl+A
			(e.keyCode == 65 && e.ctrlKey === true) ||
			// Allow: home, end, left, right
			(e.keyCode >= 35 && e.keyCode <= 39)) {
			// let it happen, don't do anything
			return;
		}
		// Ensure that it is a number and stop the keypress
		if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
			e.preventDefault();
		}
	});
}
let initializeTotalCounter = (total) => {
	let oneCounter = document.getElementById('oneCounter');
	$(oneCounter).on('change', ()=>{
		let oldValue = oneCounter.defaultValue;
		let newValue = oneCounter.value;
		let oldItems = JSON.parse( localStorage.getItem( 'itemsArray' ) ) || [];
		oldItems[0] = parseInt(newValue);
		localStorage.setItem( 'itemsArray', JSON.stringify( oldItems ) );
		oneCounter.defaultValue = newValue;
		if(oldValue > newValue){
			total -= 57849;
		}else{
			total += 57849;
		}
		document.getElementById('totalValue').innerText = `₱${total.toLocaleString()}.00`;
	})
	let twoCounter = document.getElementById('twoCounter');
	$(twoCounter).on('change', ()=>{
		let oldValue = twoCounter.defaultValue;
		let newValue = twoCounter.value;
		let oldItems = JSON.parse( localStorage.getItem( 'itemsArray' ) ) || [];
		oldItems[1] = parseInt(newValue);
		localStorage.setItem( 'itemsArray', JSON.stringify( oldItems ) );
		twoCounter.defaultValue = newValue;
		if(oldValue > newValue){
			total -= 4599;
		}else{
			total += 4599;
		}
		document.getElementById('totalValue').innerText = `₱${total.toLocaleString()}.00`;
	})
	let threeCounter = document.getElementById('threeCounter');
	$(threeCounter).on('change', ()=>{
		let oldValue = threeCounter.defaultValue;
		let newValue = threeCounter.value;
		let oldItems = JSON.parse( localStorage.getItem( 'itemsArray' ) ) || [];
		oldItems[2] = parseInt(newValue);
		localStorage.setItem( 'itemsArray', JSON.stringify( oldItems ) );
		threeCounter.defaultValue = newValue;
		if(oldValue > newValue){
			total -= 44237;
		}else{
			total += 44237;
		}
		document.getElementById('totalValue').innerText = `₱${total.toLocaleString()}.00`;
	})
	let fourCounter = document.getElementById('fourCounter');
	$(fourCounter).on('change', ()=>{
		let oldValue = fourCounter.defaultValue;
		let newValue = fourCounter.value;
		let oldItems = JSON.parse( localStorage.getItem( 'itemsArray' ) ) || [];
		oldItems[3] = parseInt(newValue);
		localStorage.setItem( 'itemsArray', JSON.stringify( oldItems ) );
		fourCounter.defaultValue = newValue;
		if(oldValue > newValue){
			total -= 101113;
		}else{
			total += 101113;
		}
		document.getElementById('totalValue').innerText = `₱${total.toLocaleString()}.00`;
	})
	let fiveCounter = document.getElementById('fiveCounter');
	$(fiveCounter).on('change', ()=>{
		let oldValue = fiveCounter.defaultValue;
		let newValue = fiveCounter.value;
		let oldItems = JSON.parse( localStorage.getItem( 'itemsArray' ) ) || [];
		oldItems[4] = parseInt(newValue);
		localStorage.setItem( 'itemsArray', JSON.stringify( oldItems ) );
		fiveCounter.defaultValue = newValue;
		if(oldValue > newValue){
			total -= 135305;
		}else{
			total += 135305;
		}
		document.getElementById('totalValue').innerText = `₱${total.toLocaleString()}.00`;
	})
	let sixCounter = document.getElementById('sixCounter');
	$(sixCounter).on('change', ()=>{
		let oldValue = sixCounter.defaultValue;
		let newValue = sixCounter.value;
		let oldItems = JSON.parse( localStorage.getItem( 'itemsArray' ) ) || [];
		oldItems[5] = parseInt(newValue);
		localStorage.setItem( 'itemsArray', JSON.stringify( oldItems ) );
		sixCounter.defaultValue = newValue;
		if(oldValue > newValue){
			total -= 80118;
		}else{
			total += 80118;
		}
		document.getElementById('totalValue').innerText = `₱${total.toLocaleString()}.00`;
	})
	let sevenCounter = document.getElementById('sevenCounter');
	$(sevenCounter).on('change', ()=>{
		let oldValue = sevenCounter.defaultValue;
		let newValue = sevenCounter.value;
		let oldItems = JSON.parse( localStorage.getItem( 'itemsArray' ) ) || [];
		oldItems[6] = parseInt(newValue);
		localStorage.setItem( 'itemsArray', JSON.stringify( oldItems ) );
		sevenCounter.defaultValue = newValue;
		if(oldValue > newValue){
			total -= 28900;
		}else{
			total += 28900;
		}
		document.getElementById('totalValue').innerText = `₱${total.toLocaleString()}.00`;
	})
	let eightCounter = document.getElementById('eightCounter');
	$(eightCounter).on('change', ()=>{
		let oldValue = eightCounter.defaultValue;
		let newValue = eightCounter.value;
		let oldItems = JSON.parse( localStorage.getItem( 'itemsArray' ) ) || [];
		oldItems[7] = parseInt(newValue);
		localStorage.setItem( 'itemsArray', JSON.stringify( oldItems ) );
		eightCounter.defaultValue = newValue;
		if(oldValue > newValue){
			total -= 2699;
		}else{
			total += 2699;
		}
		document.getElementById('totalValue').innerText = `₱${total.toLocaleString()}.00`;
	})
	let nineCounter = document.getElementById('nineCounter');
	$(nineCounter).on('change', ()=>{
		let oldValue = nineCounter.defaultValue;
		let newValue = nineCounter.value;
		let oldItems = JSON.parse( localStorage.getItem( 'itemsArray' ) ) || [];
		oldItems[8] = parseInt(newValue);
		localStorage.setItem( 'itemsArray', JSON.stringify( oldItems ) );
		nineCounter.defaultValue = newValue;
		if(oldValue > newValue){
			total -= 117394;
		}else{
			total += 117394;
		}
		document.getElementById('totalValue').innerText = `₱${total.toLocaleString()}.00`;
	})
	let tenCounter = document.getElementById('tenCounter');
	$(tenCounter).on('change', ()=>{
		let oldValue = tenCounter.defaultValue;
		let newValue = tenCounter.value;
		let oldItems = JSON.parse( localStorage.getItem( 'itemsArray' ) ) || [];
		oldItems[9] = parseInt(newValue);
		localStorage.setItem( 'itemsArray', JSON.stringify( oldItems ) );
		tenCounter.defaultValue = newValue;
		if(oldValue > newValue){
			total -= 69419;
		}else{
			total += 69419;
		}
		document.getElementById('totalValue').innerText = `₱${total.toLocaleString()}.00`;
	})
	let elevenCounter = document.getElementById('elevenCounter');
	$(elevenCounter).on('change', ()=>{
		let oldValue = elevenCounter.defaultValue;
		let newValue = elevenCounter.value;
		let oldItems = JSON.parse( localStorage.getItem( 'itemsArray' ) ) || [];
		oldItems[10] = parseInt(newValue);
		localStorage.setItem( 'itemsArray', JSON.stringify( oldItems ) );
		elevenCounter.defaultValue = newValue;
		if(oldValue > newValue){
			total -= 25027;
		}else{
			total += 25027;
		}
		document.getElementById('totalValue').innerText = `₱${total.toLocaleString()}.00`;
	})
	let twelveCounter = document.getElementById('twelveCounter');
	$(twelveCounter).on('change', ()=>{
		let oldValue = twelveCounter.defaultValue;
		let newValue = twelveCounter.value;
		let oldItems = JSON.parse( localStorage.getItem( 'itemsArray' ) ) || [];
		oldItems[11] = parseInt(newValue);
		localStorage.setItem( 'itemsArray', JSON.stringify( oldItems ) );
		twelveCounter.defaultValue = newValue;
		if(oldValue > newValue){
			total -= 107470;
		}else{
			total += 107470;
		}
		document.getElementById('totalValue').innerText = `₱${total.toLocaleString()}.00`;
	})
}
let initializeRemoveToCounter = () => {
	let oneBtn = document.getElementById('oneMinus');
	let oneCounter = document.getElementById('oneCounter');
	$(oneBtn).on('click', ()=>{
		if(oneCounter.value === "1"){
			localStorage.setItem( 'selectedItem', 'one' );
			removeToCounter(false)
		}
	});
	let twoBtn = document.getElementById('twoMinus');
	let twoCounter = document.getElementById('twoCounter');
	$(twoBtn).on('click', ()=>{
		if(twoCounter.value === "1"){
			localStorage.setItem( 'selectedItem', 'two' );
			removeToCounter(false)
		}
	});
	let threeBtn = document.getElementById('threeMinus');
	let threeCounter = document.getElementById('threeCounter');
	$(threeBtn).on('click', ()=>{
		if(threeCounter.value === "1"){
			localStorage.setItem( 'selectedItem', 'three' );
			removeToCounter(false)
		}
	});
	let fourBtn = document.getElementById('fourMinus');
	let fourCounter = document.getElementById('fourCounter');
	$(fourBtn).on('click', ()=>{
		if(fourCounter.value === "1"){
			localStorage.setItem( 'selectedItem', 'four' );
			removeToCounter(false)
		}
	});
	let fiveBtn = document.getElementById('fiveMinus');
	let fiveCounter = document.getElementById('fiveCounter');
	$(fiveBtn).on('click', ()=>{
		if(fiveCounter.value === "1"){
			localStorage.setItem( 'selectedItem', 'five' );
			removeToCounter(false)
		}
	});
	let sixBtn = document.getElementById('sixMinus');
	let sixCounter = document.getElementById('sixCounter');
	$(sixBtn).on('click', ()=>{
		if(sixCounter.value === "1"){
			localStorage.setItem( 'selectedItem', 'six' );
			removeToCounter(false)
		}
	});
	let sevenBtn = document.getElementById('sevenMinus');
	let sevenCounter = document.getElementById('sevenCounter');
	$(sevenBtn).on('click', ()=>{
		if(sevenCounter.value === "1"){
			localStorage.setItem( 'selectedItem', 'seven' );
			removeToCounter(false)
		}
	});
	let eightBtn = document.getElementById('eightMinus');
	let eightCounter = document.getElementById('eightCounter');
	$(eightBtn).on('click', ()=>{
		if(eightCounter.value === "1"){
			localStorage.setItem( 'selectedItem', 'eight' );
			removeToCounter(false)
		}
	});
	let nineBtn = document.getElementById('nineMinus');
	let nineCounter = document.getElementById('nineCounter');
	$(nineBtn).on('click', ()=>{
		if(nineCounter.value === "1"){
			localStorage.setItem( 'selectedItem', 'nine' );
			removeToCounter(false)
		}
	});
	let tenBtn = document.getElementById('tenMinus');
	let tenCounter = document.getElementById('tenCounter');
	$(tenBtn).on('click', ()=>{
		if(tenCounter.value === "1"){
			localStorage.setItem( 'selectedItem', 'ten' );
			removeToCounter(false)
		}
	});
	let elevenBtn = document.getElementById('elevenMinus');
	let elevenCounter = document.getElementById('elevenCounter');
	$(elevenBtn).on('click', ()=>{
		if(elevenCounter.value === "1"){
			localStorage.setItem( 'selectedItem', 'eleven' );
			removeToCounter(false)
		}
	});
	let twelveBtn = document.getElementById('twelveMinus');
	let twelveCounter = document.getElementById('twelveCounter');
	$(twelveBtn).on('click', ()=>{
		if(twelveCounter.value === "1"){
			localStorage.setItem( 'selectedItem', 'twelve' );
			removeToCounter(false)
		}
	});

}
let removeToCounter = (verified) =>{
	if(verified){
		let selectedItem = localStorage.getItem( 'selectedItem' );
		localStorage.setItem( 'selectedItem', null );
		let oldItems = JSON.parse( localStorage.getItem( 'itemsArray' ) ) || [];
		switch(selectedItem){
			case 'one':
				oldItems[ 0 ] = 0;
				break;
			case 'two':
				oldItems[ 1 ] = 0;
				break;
			case 'three':
				oldItems[ 2 ] = 0;
				break;
			case 'four':
				oldItems[ 3 ] = 0;
				break;
			case 'five':
				oldItems[ 4 ] = 0;
				break;
			case 'six':
				oldItems[ 5 ] = 0;
				break;
			case 'seven':
				oldItems[ 6 ] = 0;
				break;
			case 'eight':
				oldItems[ 7 ] = 0;
				break;
			case 'nine':
				oldItems[ 8 ] = 0;
				break;
			case 'ten':
				oldItems[ 9 ] = 0;
				break;
			case 'eleven':
				oldItems[ 10 ] = 0;
				break;
			case 'twelve':
				oldItems[ 11 ] = 0;
				break;
		}
		localStorage.setItem( 'itemsArray', JSON.stringify( oldItems ) );
		location.reload();
	}else
		$("#myModal").modal()
}
let resetDisabledBtns = ()=>{
	document.getElementById('kimchiMinus').disabled = false;
	document.getElementById('bulgogiMinus').disabled = false;
	document.getElementById('kimbapMinus').disabled = false;
}
let submitData = (e)=>{
	e.preventDefault();
	console.log('submit');
	let submitBtn = document.getElementById('submitBtn');
	submitBtn.disabled = true;
	submitBtn.innerText = 'please wait...';
	let emailAddress = document.getElementById('emailAddress');
	console.log('emailAddress: ', emailAddress.value)
	$("#thankyouModal").modal();
	document.getElementById( "lblCartCount" ).innerText = "0"
	document.getElementById("closeForm").click();
	localStorage.setItem( 'itemsArray', null );
	document.getElementById('orderList').innerHTML = `
				<li class="list-unstyled-item list-hours-item d-flex">
				<div>
				<p>TOTAL: </p>
				</div>
				<div class="input-group item-counter" style="">
				<h2><code id="totalValue">₱0</code></h2>
				</div>
				</li>`;
	document.getElementById('checkoutBtn').disabled = true;
	return true;
	$.post("server/",
		{
			email: emailAddress.value,
			order: JSON.parse( localStorage.getItem( 'itemsArray' ) ) || []
		},
		function(data, status){
			console.log('data: ', data);
			console.log('data type: ', typeof data);
			if(data && data.includes('true') && status === "success"){
				$("#thankyouModal").modal();
				document.getElementById("closeForm").click();
				localStorage.setItem( 'itemsArray', null );
				document.getElementById('orderList').innerHTML = `
				<li class="list-unstyled-item list-hours-item d-flex">
				<div>
				<p>TOTAL: </p>
				</div>
				<div class="input-group item-counter" style="">
				<h2><code id="totalValue">₱0</code></h2>
				</div>
				</li>`;
				document.getElementById('checkoutBtn').disabled = true;
			}else{
				alert('an error has occurred please contact admin')
			}
			console.log('status: ', status);
		});
}

