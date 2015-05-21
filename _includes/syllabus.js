function downloadInnerHtml(filename, elId, mimeType) {
    var elHtml = document.getElementById(elId).textContent;
    var link = document.createElement('a');
    mimeType = mimeType || 'text/plain';
    
    link.setAttribute('download', filename);
    link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(elHtml));
    link.click();
}

var openclose = function(a, b, c){
    $(c).click(function(){
    if(c==="#begin"){
    			$('#edit_a').css('float', 'right');
    			$('#add_a').css('float', 'right');
               $('#prep_a').removeClass('closed');
               $('#prep_a').addClass('open');
			$('#intro').toggle(function(){
	               $(this).hide; 
	               	$('#prep_b').show();
                });
setTimeout(function (){
        $('#add_a').css('float', 'left');
}, 400);                
    }
    if(c==="#prep_next"){
    	$('#prep_a').css('float', 'left');
    	$('#add_a').css('float', 'left');
	    $('#edit_a').css('float', 'right');
               $('#prep_a').removeClass('open');
               $('#prep_a').addClass('complete');
                $('#prep_b').toggle(function(){
	               $(this).hide; 
                });
                $('#add_b').toggle(function(){
	               $(this).show;
	            $('#edit').show();
                });               
    }if(c==="#add_next"){
		$('.menus').css('float', 'left');
               $('#add_a').removeClass('open');
               $('#add_a').addClass('complete');
                $('#prep_b').hide();
                $('#add_b').toggle(function(){
	               $(this).hide; 
                });
                $('#edit_b').toggle(function(){
	               $(this).show; 
                });               
    }
    
                $(a).removeClass('closed');
                $(a).addClass('open');

                      });
}



$(document).ready(function(){

                  var n_width = $('#bottom-box').width()/100;
                  var n_height = $(window).height();
                  $('.menus').css('width', n_width * 9.5 + 'px');
                  $('.panels').css('width', n_width * 70 + 'px');
                  $('#intro').css('padding-left', n_width * .5 + 'px');                  
                  $('#add_b').css('padding-left', n_width * .5 + 'px');
                  $('#prep_b').css('padding-left', n_width * .5 + 'px');  
                  $('.panels h1').css('margin-left', "-" + n_width * .4 + 'px');                                    
                  $('panel_middle').css('padding-left', n_width * 2 + 'px');
                  $('#print').hide();
                  $('#edit_done').hide();
                  $('#SyllabusDoc').css('max-height', n_height - 450 + 'px');
                  $('#edit').hide();
                
                  
//                  $('body').css({
//                                              opacity: '.1',
//                  })
//                  $('#alert').css({
//                                  opacity: '.5',
//                                  })
                  
                  $('.bib').click(function(){
                                  $('#bib').toggle(function(){
	                                 this.show(); 
                                  });
                                  });
                  
                  //BOTTOM-BOX STUFF
                  $('.menus').addClass('closed');
                  openclose('#prep_a', '#prep_b', '#begin');
                  openclose('#add_a', '#add_b', '#prep_next');
                  openclose('#edit_a', '#edit_b', '#add_next');
                  $('#prep_next').click(function(){
                                        var course = $('#course').val();
                                        var instructor = $('#instructor').val();
                                        var email = $('#email').val();
                                        var office = $('#office').val();
                                        var office_hours = $('#office_hours').val();
                                        var classroom = $('#classroom').val();
                                        
                                        if(course!==''){
                                        $("#Frontmatter").append("<h1 id='replace'>" +  course + "</h1>\n");
                                        }if(instructor!==''){
                                        $("#Frontmatter").append("Instructor: " + instructor + "\n");
                                        }if(email!==''){
                                        $("#Frontmatter").append("E-mail: " + email + "\n");
                                        }if(office!==''){
                                        $("#Frontmatter").append("Office: " + office + "\n");
                                        }if(office_hours!==''){
                                        $("#Frontmatter").append("Office Hours: " + office_hours + "\n");
                                        }if(classroom!==''){
                                        $("#Frontmatter").append("Classroom: " + classroom + "\n");
                                        }
                                        })
                  
                  $('.reset').click(function(){
                                    location.reload();
                                    });
                  
                  $('#edit').click(function(){
                                   $('#edit_done').show();
                                   $('#SyllabusDoc').attr('contentEditable',true);
                                   $('#SyllabusDoc').addClass('hot');
                                   });
                  
                  $('#edit_done').click(function(){
                                   $('#SyllabusDoc').attr('contentEditable',false);
                                   $('#SyllabusDoc').find('*').append('\n');
                                   $('#SyllabusDoc').removeClass('hot');
                                        $('#edit_a').removeClass('open');
                                        $('#edit_a').addClass('complete');
                                        //$('#edit').hide();
                                        //$(this).hide();
                                        $('#edit').removeClass('red');
                                        $(this).removeClass('blue');
                                        $('#edit').addClass('grayout');
                                        $(this).addClass('grayout');
                                        $('#print').toggle(function(){
                                                           $(this).show();
                                                           });
                                   });
                  
                  var fileName = 'syllabus.txt'; // You can use the .txt extension if you want
                  $('#print').click(function(){
                                    downloadInnerHtml(fileName, 'SyllabusDoc', 'text/plain');
                                    });
                  
                  
                  {% for org_hash in site.data.syllabus %}
                  {% assign org = org_hash[1] %}
                  
                  $('#switch{{ org.course }}expectations').on('change', function() {
                                                              if ($(this).is(':checked')) {
                                                              $("#learningme").append("<div id='{{ org.course }}expectations'>" + "{{ org.expectations }}" + "</div>\n");
                                                              } else {
                                                              $("#{{ org.course }}expectations").hide();
                                                              }
                                                              });
                  
                  
                  $('#switch{{ org.course }}attendance').on('change', function() {
                                                            if ($(this).is(':checked')) {
                                                            $("#attendanceme").append("<p id='{{ org.course }}attendance'>" + "\n {{ org.attendance }} \n" + "</p>");     
                                                            } else {
                                                            $('#{{ org.course }}attendance').remove();
                                                            }
                                                            });
                  
                  $('#switch{{ org.course }}reading').on('change', function() {
                                                         if ($(this).is(':checked')) {
                                                         $("#readingme").append("<p id='{{ org.course }}reading'>" + "{{ org.module }}: \n {{ org.readings }}" + "</p>");
                                                         } else {
                                                         $('#{{ org.course }}reading').remove();
                                                         }
                                                         
                                                         });
                  {% endfor %}
                  });