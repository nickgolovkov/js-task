$(document).ready(function(){
    var API_KEY = '6dc2f16f1c6245c8ac3b8a6815dc9044';
	var sourcesUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=' + API_KEY;
	var topHeadlinesUrlTemplate = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + API_KEY;  
  var buttonsContainer = $($('.buttons-container')[0]);
  
  
  buttonsContainer.on('click',onSourceClick);
  
  
  function onSourceClick(e){
    e.preventDefault();
    
    var sourceId = $(e.target).attr('data-source-id');
    
    if()
  }
  
    $.ajax ({
      url : sourcesUrl,
      method : "GET",
      success : onSourcesRecieved
    });
  
  
  function onSourcesRecieved(response){
    var sources = response.sources;
    
    [].forEach.call(sources, function(source){
          document.createElement('button');
          button.innerText = source.name;
    $(button).attr('data-source-id', source.id);
    buttonsContainer.append(button); }) ;}
    
    
    function getArticleBySourceId(sourceId){
      $.ajax({
        url: topHeadlinesUrlTemplate + '&sources=' + sourceId,
        success: onNewsReceived
      })
    }

    
    function onNewsReceived(response){
      var arcticles = response.articles;
      
      arcticles.forEach(function(article){
        var elem = $(
          <div><h2>
        
        )
      })
    }
    
    
})