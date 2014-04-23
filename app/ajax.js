// app/ajax.js

var AJAX_METHOD = {
 
        handleData:function(resJSON) {
 
            var templateSource   = $("#stories-template").html(),
 
                template = Handlebars.compile(templateSource),
 
                storyHTML = template(resJSON);
 
           $('#my-container').html(storyHTML);
             
        },
        loadStoryData : function(){
 
            $.ajax({
                url:"http://localhost:4200/api/v1/stories",
                method:'get',
                success:this.handleData
 
            })
        }
};
 
$(document).ready(function(){
 
    AJAX_METHOD.loadStoryData();
});