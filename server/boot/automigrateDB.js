module.exports = function(app) {
  if (process.env.AUTOMIGRATE) {
    app.dataSources.db.automigrate(null, function(er) {
      if (er) throw er;
      console.log('Loopback tables created in ', app.dataSources.db.adapter.name);
        app.loadFixtures()
          .then(function() {
            console.log('Done!');
          })
          .catch(function(err) {
            console.log('Errors:', err);
          });
    });
  }
};
