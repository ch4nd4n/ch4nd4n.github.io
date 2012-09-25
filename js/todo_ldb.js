if(!app) var app = {
  dbConfig : {
    dbName: "todoDB",
    storeName: 'todo',
    dbVersion: '1.0',
    onStoreReady: function(){
      app.dbReady();
    }
  },
  store: null,
  dbReady: function(){
    var self = this;
    self.store.getAll(function(r){
      for(var i=0; i<r.length; i++){
        self.appendItem(r[i]);
      }
    });
  }
}
app.init = function(){
  var self = this;
  self.store = new IDBStore(self.dbConfig);
  $("#add-item").click(function(){
    self.addItem();
  });
}
app.addItem = function(){
  var self = this;
  var todoItem = $("#todo-item");
  var todoText = todoItem.val();
  if($.trim(todoText) != ""){
    var data = { todo : todoText};
    self.store.put(data, function(r){
      todoItem.val("");
      self.store.get(r, function(r){
        self.appendItem(r);
      });
    });
  }
}
// FIXME Bad way to append items. Multiple DOM Manipulation
app.appendItem = function(r){
  var list = $("#todo-list");
  list.append($("<li>").html(r.todo));
}
app.init();
