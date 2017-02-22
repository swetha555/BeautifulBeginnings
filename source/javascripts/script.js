$(document).ready(function() {
	var itemsSelected = 0;

	// $(".item").click(function() {
	// 	itemsSelected++;
	// 	$(this).addClass("active");
	// 	$("#items-selected").text(itemsSelected);
	// 	$("#items-selected-xs").text(itemsSelected);
	// });
	$(".add-to-cart").click(function() {
		itemsSelected++;
		$(this).addClass("active");
		$("#items-selected").text(itemsSelected);
		$("#items-selected-xs").text(itemsSelected);
	});

	$(".login-action").click(function() {
	 	$('#login-modal').modal('show');
	});
	$(".cart-action").click(function() {
	 	$('#cart-modal').modal('show');
	});
});
