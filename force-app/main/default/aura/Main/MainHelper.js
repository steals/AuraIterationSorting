({
    sortFunction: function(sortAsc, index) {
        return function(a,b) {
            if ( sortAsc ) {
                return a.attr1 - b.attr1;
            } else {
                return b.attr1 - a.attr1;
            }

        }
    }
});
