$(document ).ready(function() { 
 
    $("#user_info").on("submit", function (event) {     
       
        event.preventDefault();   
        var formData = new FormData(this);
        $.ajaxSetup({
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
            },
        }); 
            $.ajax({
                url: baseUrlAdmin + "/users/store",
                method: "POST",
                data: formData,
                dataType: "json",
                processData: false,
                contentType: false,
                success: function (data) { 
    
                    if (data.data =='true') {
                        localStorage.setItem("message",'Records sucessfylly inserted')  ;
                        window.location.assign(baseUrlAdmin + "/users");  
                    }                   
    
                    $.each(data.data,function(field_name,error){
                        $('span[id^="'+field_name+'"]').remove();
                    $(document).find('[name='+field_name+']').after('<span id="'+field_name+'" class="text-danger text-left">' +error+ '</span>')
                    })
    
                },
                 
            });
        
        
    }); 


    $("#user_info_edit").on("submit", function (event) {     
        
        event.preventDefault();   
        var formData = new FormData(this);
        $.ajaxSetup({
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
            },
        }); 
            $.ajax({
                url: baseUrlAdmin + "/users/update",
                method: "POST",
                data: formData,
                dataType: "json",
                processData: false,
                contentType: false,
                success: function (data) { 
    
                    if (data.data =='true') {
                        localStorage.setItem("message",'Records sucessfylly updated')  ;
                        window.location.assign(baseUrlAdmin + "/users");  
                    }                   
                   
                    $.each(data.data,function(field_name,error){
                        $('span[id^="'+field_name+'"]').remove();
                    $(document).find('[name='+field_name+']').after('<span id="'+field_name+'" class="text-danger text-left">' +error+ '</span>')
                    })
    
                },
                 
            });
        
        
    }); 


    
    });