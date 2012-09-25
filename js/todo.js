window.indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB;
if(!app) var app = {
  databaseName: "TodoDatabase", 
  request: null, 
  db: null, 
  console: $("#console"),
  IDBTransaction: window.IDBTransaction || window.webkitIDBTransaction,
  IDBKeyRange: window.IDBKeyRange || window.webkitIDBKeyRange
};
app.init = function(){
  var self = this, request = self.request;
  request = window.indexedDB.open(self.databaseName,1);
  request.onupgradeneeded = function(e){
    console.log("running upgrade");
    self.db = e.target.result;
    if(self.db.objectStoreNames.contains("todo")){
      console.log("Creating TODO store");
      var objectStore = thisDb.createObjectStore("todo", {keyPath: "id", autoIncrement: true});
      objectStore.createIndex("searchkey", "searchkey", {unique: false});
    }
  }
  request.onerror = function(e){
    self.log("Could not open DB");
  }
  request.onsuccess = function(e){
    self.db = request.result;
    self.log("DB opened");
  }
}
app.write = function(obj){
  var self = this;
  var transaction = self.db.transaction(["todo"], self.IDBTransaction.READWRITE);
  transaction.oncomplete = function(e){
    self.log("All done");
  }
  transaction.onerror = function(e){
    self.log("Something went wrong while writing");
  }
}
app.log = function(msg){
  this.console.append($("<div>").append(msg));
}
app.init();
