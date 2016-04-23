$.ajax({
  type: 'GET',
  url: '/data/skillsequence.csv',
  dataType: 'text',
  success: function(data) {
    console.log("You got it!");
    console.log(data);
    Sunburst($('#skillChart'), data);
  },
  error: function(err) {
    console.log("Keep trying!");
    console.log(err);
  }
}) ; 
