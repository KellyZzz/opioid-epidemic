var chart = c3.generate({
    data: {
        x: 'x',
        url: 'data/total-deaths.csv',
        axis: {
	        x: {
	            type: 'category' // this needed to load string x value
	        }
    	},
    	type: 'area-spline'
    },
    padding: {
	  right: 20
	}
});

function removeSelectedData (){
    $("#total-deaths").removeClass("selected-data");
    $("#age").removeClass("selected-data");
    $("#ethnicity").removeClass("selected-data");
    $("#intent").removeClass("selected-data");
    $("#opioid-type").removeClass("selected-data");
    $("#sex").removeClass("selected-data");
}
function changeData(dataToLoad){
	chart.unload();
	switch(dataToLoad) {
	    case 'total-deaths':
	        setTimeout(function(){
		        chart.load({
		        	url: 'data/total-deaths.csv'
		    	});
	    	},1000);
	    	$("#filter-dropdown").html('All Deaths <span class="caret"></span>');
		removeSelectedData();
		$("#total-deaths").addClass("selected-data");
	        break;
	    case 'age':
	    	setTimeout(function(){
		        chart.load({
		        	url: 'data/age.csv'
		    	});
	    	},1000);
	    	$("#filter-dropdown").html('Age <span class="caret"></span>');
		removeSelectedData();
		$("#age").addClass("selected-data");
	        break;
	    case 'ethnicity':
	    	setTimeout(function(){
		        chart.load({
		        	url: 'data/ethnicity.csv'
		    	});
	    	},1000);
	    	$("#filter-dropdown").html('Ethnicity <span class="caret"></span>');
		removeSelectedData();
		$("#ethnicity").addClass("selected-data");
	        break;
	    case 'intent':
	    	setTimeout(function(){
		        chart.load({
		        	url: 'data/intent.csv'
		    	});
	    	},1000);
	    	$("#filter-dropdown").html('Intent <span class="caret"></span>');
		removeSelectedData();
		$("#intent").addClass("selected-data");
	        break;
	    case 'opioid-type':
	    	setTimeout(function(){
		        chart.load({
		        	url: 'data/opioid-type.csv'
		    	});
	    	},1000);
	    	$("#filter-dropdown").html('Opioid Type <span class="caret"></span>');
		removeSelectedData();
		$("#opioid-type").addClass("selected-data");
	        break;
	    case 'sex':
	    	setTimeout(function(){
		        chart.load({
		        	url: 'data/sex.csv'
		    	});
	    	},1000);
	    	$("#filter-dropdown").html('Sex <span class="caret"></span>');
		removeSelectedData();
		$("#sex").addClass("selected-data");
	        break;
	    default:
	        chart.load({
	        	url: 'data/total-deaths.csv'
	    	});
		//removeSelectedData();
		//$("all-deaths").addClass("selected-data");
	} 

}
function removeSelectedChart(){
    $("#area-icon").removeClass("selected-chart");
    $("#line-icon").removeClass("selected-chart");
    $("#bar-icon").removeClass("selected-chart");
    $("#area-icon").attr("src", "assets/area-icon.png");
    $("#line-icon").attr("src", "assets/line-icon.png");
    $("#bar-icon").attr("src", "assets/bar-icon.png");
}

function changeChartType(newType) {
	switch(newType) {
	    case 'area-spline':
			chart.transform('area-spline');
			removeSelectedChart();
			$("#area-icon").addClass("selected-chart");
			$("#area-icon").attr("src", "assets/area-icon-blue.png");
	        break;
	    case 'line':
			chart.transform('line');
			removeSelectedChart();
			$("#line-icon").addClass("selected-chart");
			$("#line-icon").attr("src", "assets/line-icon-blue.png");
	        break;
	    case 'bar':
			chart.transform('bar');
			removeSelectedChart();
			$("#bar-icon").addClass("selected-chart");
			$("#bar-icon").attr("src", "assets/bar-icon-blue.png");
	        break;    
	    default:
			chart.transform('area-spline');
	}

}

function changeChartData(dataFilter) {
    switch(newType) {
	    case 'all-deaths':
		//removeSelectedChart();
		$("all-deaths").addClass("selected-chart");
	        break;
	    case 'age':
		//removeSelectedChart();
		$("#age").addClass("selected-chart");
	        break;
	    case 'ethnicity':
		//removeSelectedChart();
		$("#ethnicity").addClass("selected-chart");
	        break;    
	    default:
			
	}
}

function parseCSV(fileName){
	$.ajax({
	    url: fileName,
	    async: false,
	    success: function (csvd) {
	        data = $.csv.toObjects(csvd);
	    },
	    dataType: "text",
	    complete: function () {
	        // call a function on complete 
	    }
	});
	return data;
}

var ageData = parseCSV("data/age.csv");
var ethnicityData = parseCSV("data/ethnicity.csv");
var sexData = parseCSV("data/sex.csv");

var inputtedAge = "45-54";

console.log(ageData[7][inputtedAge]);


