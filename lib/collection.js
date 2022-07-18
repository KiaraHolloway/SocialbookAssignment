socialdb = new Mongo.Collection("social");

socialdb.allow({
    insert(userId, doc) {
    return true;
    },
  
    update(userId, doc, fields, modifier) {
    return true;
    },
  
    remove(userId, doc) {
      return true;
    },
  
    fetch: ['owner']
  });