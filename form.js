function genderSelect(gender) {
    if (gender == "male") {
	$("#female").removeClass("active");
	$("#male").addClass("active");
	$("#gender").attr("value", "male");
	
    }
    else{
	$("#male").removeClass("active");
	$("#female").addClass("active");
	$("#gender").attr("value", "female");
    }
    
}

function removeAges(){
    $("#0-24").removeClass("active");
    $("#25-34").removeClass("active");
    $("#35-44").removeClass("active");
    $("#45-54").removeClass("active");
    $("#55-64").removeClass("active");
    $("#65-and-over").removeClass("active");
}

function ageSelect(age) {
    switch(age) {
	case '0-24':
	    removeAges();
	    $("#0-24").addClass("active");
	    $("#age").attr("value", "0-24");
	    break;
	case '25-34':
	    removeAges();
	    $("#25-34").addClass("active");
	    $("#age").attr("value", "25-34");
	    break;
	case '35-44':
	    removeAges();
	    $("#35-44").addClass("active");
	    $("#age").attr("value", "35-44");
	    break;
	case '45-54':
	    removeAges();
	    $("#45-54").addClass("active");
	    $("#age").attr("value", "45-54");
	    break;
	case '55-64':
	    removeAges();
	    $("#55-64").addClass("active");
	    $("#age").attr("value", "55-64");
	    break;
	case '65-and-over':
	    removeAges();
	    $("#65-and-over").addClass("active");
	    $("#age").attr("value", "65-and-over");
	    break;   
	default:
	    removeAges();
    }  
}

function removeEthnicity(){
    $("#white").removeClass("active");
    $("#black").removeClass("active");
    $("#hispanic").removeClass("active");
    $("#american-indian").removeClass("active");
    $("#asian-pi").removeClass("active");
    $("#other").removeClass("active");
}
function ethnicitySelect(ethnicity) {
    switch(ethnicity) {
	case 'white':
	    removeEthnicity();
	    $("#white").addClass("active");
	    $("#ethnicity").attr("value", "white");
	    break;
	case 'black':
	    removeEthnicity();
	    $("#black").addClass("active");
	    $("#ethnicity").attr("value", "black");
	    break;
	case 'hispanic':
	    removeEthnicity();
	    $("#hispanic").addClass("active");
	    $("#ethnicity").attr("value", "hispanic");
	    break;
	case 'american-indian':
	    removeEthnicity();
	    $("#american-indian").addClass("active");
	    $("#ethnicity").attr("value", "american-indian");
	    break;
	case 'asian-pi':
	    removeEthnicity();
	    $("#asian-pi").addClass("active");
	    $("#ethnicity").attr("value", "asian-pi");
	    break;
	case 'other':
	    removeEthnicity();
	    $("#other").addClass("active");
	    $("#ethnicity").attr("value", "other");
	    break;   
	default:
	    removeEthnicity();
    }  
}

