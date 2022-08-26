function sendEmail(){
  window.open('mailto:rajib_dey@rocketmail.com');
}






/*--------------------------------------------------------------------*/
/*------------------------Block-info--------------------------------------------*/
/*--------------------------------------------------------------------*/
function displayBlockInfo(num){
    let _pointList = $(".point");
    let _blockInfoList = $(".block-info");
    //removing class
    
    for(let i =0; i<_pointList.length; i++){
         $($(_pointList[i]).children()[1]).removeClass("point-outer-selected");
            $($(_pointList[i]).children()[2]).removeClass("point-outer-selected");
            $($(_pointList[i]).children()[3]).removeClass("point-details-selected");
            $(_blockInfoList[i]).css("display", "none");
    }
    
    
    
    
    $($(_pointList[num]).children()[1]).addClass("point-outer-selected");
    $($(_pointList[num]).children()[2]).addClass("point-outer-selected");
    $($(_pointList[num]).children()[3]).addClass("point-details-selected");
    $(_blockInfoList[num]).css("display", "flex");
    
    if(num !== 3){
        let _education_level_list = $(_blockInfoList[num]).children();
        console.log(_education_level_list.length);
        _education_level_list.css("display", "none");       
 
        
        for(let j = _education_level_list.length -1; j >= 0; j--){
                $(_education_level_list[j].children[1]).css("display", "none");

            setTimeout(()=>{
                    $(_education_level_list[j]).fadeToggle();
                    $(_education_level_list[j].children[1]).slideDown();
            }, j* 500);
        }
        
    }
    else{
        let _projectList = $(".projects .project");
        $(_projectList).css("display", "none");
        
        for(let k =0; k<_projectList.length; k++){
            setTimeout(()=>{
                $(_projectList[k]).fadeIn();
            },k*100)
        }
    }
    
    
    
}







/*--------------------------------------------------------------------*/
/*------------------------More details--------------------------------------------*/
/*--------------------------------------------------------------------*/

function displayMoreDetails(_ele, _id){
    
    if($(_id).css("display")=== "none"){
     //   $(_id).toggle();
        $(_id).slideDown();
        $(_ele).text("Show less");
    }
    else{
        $(_id).slideUp();
        $(_ele).text("More Details");
    }
    
}













/*--------------------------------------------------------------------*/
/*------------------------Project doucment gallery--------------------------------------------*/
/*--------------------------------------------------------------------*/

function displayProjectFullInfo(_projectID){
    $(_projectID).css("display", "block");
    
    let _project_full_info = $(_projectID);
    $(_projectID + " .project-row").css("transform", "translate3d(0, -5000px, 0)");
   // $(_projectID + " .label").css("display", "none");
//    $(_projectID + " .label-info").css("display", "none");
    
    let _project_row = $(_projectID + " .project-row");

    
    for(let i=0; i<_project_row.length; i++){
        
        setTimeout(()=>{
            $(_project_row[i]).css("transform", "translate3d(0, 0, 0)");            
        },i*10);
        
    }
    console.log(_project_row.length);
    
    
    let _fligt_register_buttons = _projectID.toString() + "_buttons";
    let _fligt_register_documents = _projectID.toString() + "_documents";
    displayProjectDocument(_fligt_register_buttons, _fligt_register_documents, 0);
}


function closeProjectFullInfo(_projectID){
    $(_projectID).css("display", "none");
}





/*--------------------------------------------------------------------*/
/*------------------------Project doucment gallery--------------------------------------------*/
/*--------------------------------------------------------------------*/

function displayProjectDocument(galleryButtionID,  galleryDocumentID, buttonNumber){
    let _buttons = $(galleryButtionID);
    let _buttonHegight =0;
    //remove classes from the previouse selected butoons.
    for(let i=0; i< _buttons.children().length; i++){
        
        let _selected_button = $(_buttons.children()[i]);
         _buttonHegight +=_selected_button.innerHeight();
        $(_selected_button).removeClass("gallery-button-block-selected");
    
        let _round_button = $(_selected_button.children()[0])
        $(_round_button).removeClass("round-button-selected");    


        let _insie = $(_selected_button.children()[1])
        $(_insie).removeClass("inside-selected");  

        let _button_name = $(_selected_button.children()[2])
        $(_button_name).removeClass("button-name-selected");
    
    }
    
    
    _buttonHegight < $(".gallery-button").height()? $(".gallery-button").css("justify-content", "center"): $(".gallery-button").css("justify-content", "flex-start");
    
    //adding effects to the current selected button
    let _selected_button = $(_buttons.children()[buttonNumber]);
        $(_selected_button).addClass("gallery-button-block-selected");
    
    let _round_button = $(_selected_button.children()[0])
    $(_round_button).addClass("round-button-selected");    
    
    
    let _insie = $(_selected_button.children()[1])
    $(_insie).addClass("inside-selected");  
    
    let _button_name = $(_selected_button.children()[2])
    $(_button_name).addClass("button-name-selected");

    
    
    //hiding all  imge frome the document gallery
    let _galleryDocument = $(galleryDocumentID);
     for(let i =0; i< _galleryDocument.children().length; i++){
             $(_galleryDocument.children()[i]).css("display", "none");

     }
    //displaying selected image. 
    $(_galleryDocument.children()[buttonNumber]).css("display", "flex");
}








/*-------------------------------------------------------------------------*/
/*---------------------scrolling event-----------------------------------------------------*/
/*--------------------------------------------------------------------------*/

let isScrolled = false;

$(document).scroll(function(){
    
    if(!isScrolled){
        let _introHeight = $($(".intro")[0]).innerHeight();
            if(window.scrollY > (_introHeight/100)*60){
                displayBlockInfo(0);
                isScrolled =true;
            }

    }
})














