function hbsHelpers(hbs) {
    hbs.registerHelper("disabled", function(obj, field) {
        return obj && obj[field] ? '' : 'disabled';
    });

    hbs.registerHelper("selected", function(key, category) {
        return key === category ? 'selected' : '';
    });
  
    // More helpers...
}
  
module.exports = hbsHelpers;