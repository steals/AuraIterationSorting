({
    init: function(component, event, helper) {
        var items = [
            {attr1: 1, attr2: '1', sortAsc: false},
            {attr1: 2, attr2: '2', sortAsc: false},
            {attr1: 3, attr2: '3', sortAsc: false},
            {attr1: 4, attr2: '4', sortAsc: false},
            {attr1: 5, attr2: '5', sortAsc: false},
        ];
        component.set('v.items', items);
    },

    sortItems: function(component, event, helper) {
        var items = component.get('v.items');
        var sortAsc = !component.get('v.sortAsc');
        component.set('v.sortAsc', sortAsc);
        items.sort(helper.sortFunction(sortAsc));
        component.set('v.items', items);
    },

    deleteItem: function(component, event, helper) {
        var items = component.get('v.items');
        items.splice(0, 1);
        component.set('v.items', items);
    }
});
