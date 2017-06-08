function genderSelect(gender) {
    if (gender == "male") {
	$("#female").removeClass("selected-button");
	$("#male").addClass("selected-button");
	$("#gender").attr("value", "male");
	
    }
    else{
	$("#male").removeClass("selected-button");
	$("#female").addClass("selected-button");
	$("#gender").attr("value", "female");
    }
    
}

function removeAges(){
    $("#0-24").removeClass("selected-button");
    $("#25-34").removeClass("selected-button");
    $("#35-44").removeClass("selected-button");
    $("#45-54").removeClass("selected-button");
    $("#55-64").removeClass("selected-button");
    $("#65-and-over").removeClass("selected-button");
}

function ageSelect(age) {
    switch(age) {
	case '0-24':
	    removeAges();
	    $("#0-24").addClass("selected-button");
	    $("#age").attr("value", "0-24");
	    break;
	case '25-34':
	    removeAges();
	    $("#25-34").addClass("selected-button");
	    $("#age").attr("value", "25-34");
	    break;
	case '35-44':
	    removeAges();
	    $("#35-44").addClass("selected-button");
	    $("#age").attr("value", "35-44");
	    break;
	case '45-54':
	    removeAges();
	    $("#45-54").addClass("selected-button");
	    $("#age").attr("value", "45-54");
	    break;
	case '55-64':
	    removeAges();
	    $("#55-64").addClass("selected-button");
	    $("#age").attr("value", "55-64");
	    break;
	case '65-and-over':
	    removeAges();
	    $("#65-and-over").addClass("selected-button");
	    $("#age").attr("value", "65-and-over");
	    break;   
	default:
	    removeAges();
    }  
}

function removeEthnicity(){
    $("#white").removeClass("selected-button");
    $("#black").removeClass("selected-button");
    $("#hispanic").removeClass("selected-button");
    $("#american-indian").removeClass("selected-button");
    $("#asian-pi").removeClass("selected-button");
    $("#other").removeClass("selected-button");
}

function ethnicitySelect(ethnicity) {
    switch(ethnicity) {
	case 'white':
	    removeEthnicity();
	    $("#white").addClass("selected-button");
	    $("#ethnicity").attr("value", "white");
	    break;
	case 'black':
	    removeEthnicity();
	    $("#black").addClass("selected-button");
	    $("#ethnicity").attr("value", "black");
	    break;
	case 'hispanic':
	    removeEthnicity();
	    $("#hispanic").addClass("selected-button");
	    $("#ethnicity").attr("value", "hispanic");
	    break;
	case 'american-indian':
	    removeEthnicity();
	    $("#american-indian").addClass("selected-button");
	    $("#ethnicity").attr("value", "american-indian");
	    break;
	case 'asian-pi':
	    removeEthnicity();
	    $("#asian-pi").addClass("selected-button");
	    $("#ethnicity").attr("value", "asian-pi");
	    break;
	case 'other':
	    removeEthnicity();
	    $("#other").addClass("selected-button");
	    $("#ethnicity").attr("value", "other");
	    break;   
	default:
	    removeEthnicity();
    }  
}

$("#submit-button").click(function(){
    //validate input and store value
    if ($("#gender").attr("value") == "" || $("#age").attr("value") == "" || $("#ethnicity").attr("value") == "") {
	alert("You are missing required fields");
    }
    else {
	var myRiskFactors = {gender:$("#gender").attr("value"), age:$("#age").attr("value"), ethnicity:$("#ethnicity").attr("value")};
	//clear form
	$("#patient-form").empty();
	//calculate risk
	calculateMyRisk(myRiskFactors);
	//load report
	addMyReport();
    }
    
});
//calculate myRisk
var myRisk, typicalRisk;

function calculateMyRisk(patientAttributes){
    var totalDeaths = 4109;
    var totalPopulation = 48440411;
    typicalRisk = totalDeaths/totalPopulation;
    var ageData = parseCSV("data/age.csv");
    var ethnicityData = parseCSV("data/ethnicity.csv");
    var sexData = parseCSV("data/sex.csv");
    var populationData = parseCSV("data/population.csv");
    
    var ageDeaths = ageData[7][patientAttributes.age];
    var ethnicityDeaths = ethnicityData[7][patientAttributes.ethnicity.charAt(0).toUpperCase() + patientAttributes.ethnicity.slice(1)];
    var sexDeaths = sexData[7][patientAttributes.gender.charAt(0).toUpperCase() + patientAttributes.gender.slice(1)];
    
    var AgeProbability = ageDeaths/totalDeaths;
    var ethnicityProbability = ethnicityDeaths/totalDeaths;
    var sexProbability = sexDeaths/totalDeaths;
    var myProbability = AgeProbability * ethnicityProbability * sexProbability;
    
    for(i=0; i < populationData.length; i++){
	if (populationData[i].Age == patientAttributes.age) {
	    if (populationData[i].Ethnicity.toLowerCase() == patientAttributes.ethnicity) {
		if (populationData[i].Sex.toLowerCase() == patientAttributes.gender) {
		   //console.log(populationData[i].N);
		   myRisk = ((myProbability * totalDeaths) / (populationData[i].N));
		   console.log("My risk: " + myRisk);
		}
	    }
	}	
    }    
}


//add my report
function addMyReport() {
    
    
    $("#patient-form").append('<section class="col-md-12"><h1>My Report</h1>'
			      +'<h2>You are <span style="color: #EB2A39;">2080%</span> more likely to overdose than the <span class="tooltip-hover" style="position: relative; display:inline-block; border-bottom: 1px dotted #00AEF5; ">typical*<span class="tooltiptext">Calculated using median values and assuming independence between variables.</span></span> opioid user.</h2>'
			      + '<div class="col-md-12" id="myRiskChart" style="padding-left:0; width: 100%; height: 500px;"></div></section>');
    var myRiskChart = c3.generate({
	bindto: '#myRiskChart',
	data: {
	columns: [
	    ['Typical Risk', typicalRisk],
	    ['Your Risk', myRisk]
	],
	type: 'bar'
	},
	padding: {
	    right: 20,
	    bottom: 20,
	    top: 20
	},
	color: {
	    pattern: ['#00AEF5', '#EB2A39', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
	}
    });
}
