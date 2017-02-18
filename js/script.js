$(document).ready(function() {
	var itemsSelected = 0;

	$("#navBar").load("partials/nav-bar.html");
	$("#items-list").load("partials/items-list.html", function(argument) {
		$(".item").click(function() {
		itemsSelected++;
		$(this).addClass("active");
		$("#items-selected").text(itemsSelected);
		$("#items-selected-xs").text(itemsSelected);
	});
	});
	$("#footer").load("partials/footer.html");
	
});