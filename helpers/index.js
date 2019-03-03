function hbsHelpers(hbs) {
    hbs.registerHelper("disabled", function(obj, field) {
        return obj && obj[field] ? '' : 'disabled';
    });

    hbs.registerHelper("selected", function(key, category) {
        return key === category ? 'selected' : '';
    });

    hbs.registerHelper("trim", function(value, length) {
        if (value.length > length) {
            return value.slice(0, length) + '...';
        }
        return value;
    });
  
    // More helpers...
}
  
module.exports = hbsHelpers;