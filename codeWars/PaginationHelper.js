class PaginationHelper {
	_collection;
    _itemsPerPage;

    constructor(collection, itemsPerPage) {
	// The constructor takes in an array of items and a integer indicating how many
	// items fit within a single page
    this._collection = collection;
    this._itemsPerPage = itemsPerPage;
	}
    totalPageIndex(){
        return (this.pageCount() -1);
    }
	itemCount() {
	// returns the number of items within the entire collection
    return this._collection.length;
	}
	pageCount() {
	// returns the number of pages
    return Math.ceil(this._collection.length / this._itemsPerPage);
	}
	pageItemCount(pageIndex) {
	// returns the number of items on the current page. page_index is zero based.
	// this method should return -1 for pageIndex values that are out of range.
   // 1 2 output 2 -1
    
    if(pageIndex < 0 || pageIndex > this.totalPageIndex()){
        return -1;
    }else if(pageIndex < this.totalPageIndex()){
        return this._itemsPerPage;
    }else{
        return (this._collection.length - (this.totalPageIndex() * this._itemsPerPage));
    }}
	pageIndex(itemIndex) {
	// determines what page an item is on. Zero based indexes
	// this method should return -1 for itemIndex values that are out of range
    //Item count 30 items per page = 7 pageIndex(13) expected 2 to equal 1.
    if(itemIndex > (this._collection.length -1) || itemIndex < 0){
        return -1;
    }else{
        return Math.floor(itemIndex / this._itemsPerPage);
    
    }
	}
    
}


var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
console.log(helper.pageCount()); // should == 2
console.log(helper.itemCount()); // should == 6
console.log(helper.pageItemCount(0)); // should == 4
console.log(helper.pageItemCount(1)); // last page - should == 2
console.log(helper.pageItemCount(2)); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
console.log(helper.pageIndex(5)); // should == 1 (zero based index)
console.log(helper.pageIndex(2)); // should == 0
console.log(helper.pageIndex(20)); // should == -1
console.log(helper.pageIndex(-10)); // should == -1
