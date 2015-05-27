//Function for exporting to txt
function downloadInnerHtml(filename, elId, mimeType) {
    var elHtml = document.getElementById(elId).textContent;
    var link = document.createElement('a');
    mimeType = mimeType || 'text/plain';
    
    link.setAttribute('download', filename);
    link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(elHtml));
    link.click();
}


//Function for bottom-box animation and navigation
var openclose = function(a, b, c){
    $(c).click(function(){
    if(c==="#begin"){
    			$('#revise_label').css('float', 'left');
    			$('#remix_label').css('float', 'right');
               $('#prepare_label').removeClass('closed');
               $('#prepare_label').addClass('open');
			$('#intro').toggle(function(){
	               $(this).hide; 
	               	$('#prepare_fields').show();
                });
setTimeout(function (){
        $('#remix_label').css('float', 'left');
        $('#revise_label').css('float', 'left');
}, 300);
    }
    if(c==="#prep_next"){
    	$('#prepare_label').css('float', 'left');
    	$('#remix_label').css('float', 'left');
	    $('#revise_label').css('float', 'right');
               $('#prepare_label').removeClass('open');
               $('#prepare_label').addClass('complete');
                $('#prepare_fields').toggle(function(){
	               $(this).hide; 
                });
                $('#remix_fields').toggle(function(){
	               $(this).show;
	            $('#edit').show();
                });               
    }if(c==="#add_next"){
		$('.menus').css('float', 'left');
               $('#remix_label').removeClass('open');
               $('#remix_label').addClass('complete');
                $('#prepare_fields').hide();
                $('#remix_fields').toggle(function(){
	               $(this).hide; 
                });
                $('#revise_fields').toggle(function(){
	               $(this).show; 
                });
    }
    
                $(a).removeClass('closed');
                $(a).addClass('open');

                      });
}

//check for moobile//
var check = false;
var mobileCheck = function(){
    (function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
}


$(document).ready(function(){

                  
                  //mobile redirect
                mobileCheck();
                  if(check){
                  document.location = "{{ site.baseurl }}/mobile_message.html";
                  }
                  
                  
                  //Dynamic sizing for bottom-box content
                  var n_width = $(window).width() / 100;
                  var n_height = $(window).height();
                  $('#bottom-box').css('width', n_width * 100 + 'px');
                  $('.menus').css('width', n_width * 9.5 + 'px');
                  $('.panels').css('width', n_width * 70 + 'px');
                  $('#intro').css('padding-left', n_width * .5 + 'px');
                  $('#remix_fields').css('padding-left', n_width * .5 + 'px');
                  $('#prepare_fields').css('padding-left', n_width * .5 + 'px');  
                  $('.panels h1').css('margin-left', "-" + n_width * .4 + 'px');                                    
                  $('panel_middle').css('padding-left', n_width * 2 + 'px');
                  $('#print').hide();
                  $('#edit_done').hide();
                  $('#SyllabusDoc').css('max-height', n_height - 450 + 'px');
                  $('#edit').hide();
                
                  
                  //Show bibliography
                  
                  var unchecked;
                  unchecked = true;
                  
                  $('#syllabus_bibliography').click(function(){
                                                    if(unchecked){
$('#SyllabusSpan').prepend("<span id='syllabus_contributors'> Contributors: {{ site.data.syllabus_bibliography.contributors }}</span>");
                                                    unchecked = false;
                                                    }else{
                                                    $('#syllabus_contributors').remove();
                                                    unchecked = true;
                                                    }
                                                    });

                  
                  //Navigation and animation for bottom-box content
                  $('.menus').addClass('closed');
                  openclose('#prepare_label', '#prepare_fields', '#begin');
                  openclose('#remix_label', '#remix_fields', '#prep_next');
                  openclose('#revise_label', '#revise_fields', '#add_next');
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
                                        $('#revise_label').removeClass('open');
                                        $('#revise_label').addClass('complete');
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
                  
                  //Call the export to txt function
                  var fileName = 'syllabus.txt';
                  $('#print').click(function(){
                                    downloadInnerHtml(fileName, 'SyllabusSpan', 'text/plain');
                                    });
                  
                  
                //Append JSON data to SyllabusSpan
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