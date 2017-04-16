define (
	'module3',
	function Controller(model, view) {
	var self = this;

	view.elements.addBtn.on('click', addItem);
	view.elements.listContainer.on('click', '.item-delete', removeItem);

	function addItem() {
		var newItem = view.elements.input.val();
		model.additem(newItem);
		view.renderList(model.data);
		view.elements.input.val('');
	}

	function removeItem() {
		var item = $(this).attr('data-value');

		model.removeItem(item);
		view.renderList(model.data);
	}
});

$(function () {
	var firstToDoList = ['learn javascript', 'learn html', 'make coffe'];
	var model = new Model(firstToDoList);
	var view = new View (model);
	var controller = new Controller(model, view);

});
