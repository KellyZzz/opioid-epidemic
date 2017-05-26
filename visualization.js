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
	        break;
	    case 'age':
	    	setTimeout(function(){
		        chart.load({
		        	url: 'data/age.csv'
		    	});
	    	},1000);
	    	$("#filter-dropdown").html('Age <span class="caret"></span>');
	        break;
	    case 'ethnicity':
	    	setTimeout(function(){
		        chart.load({
		        	url: 'data/ethnicity.csv'
		    	});
	    	},1000);
	    	$("#filter-dropdown").html('Ethnicity <span class="caret"></span>');
	        break;
	    case 'intent':
	    	setTimeout(function(){
		        chart.load({
		        	url: 'data/intent.csv'
		    	});
	    	},1000);
	    	$("#filter-dropdown").html('Intent <span class="caret"></span>');
	        break;
	    case 'opioid-type':
	    	setTimeout(function(){
		        chart.load({
		        	url: 'data/opioid-type.csv'
		    	});
	    	},1000);
	    	$("#filter-dropdown").html('Opioid Type <span class="caret"></span>');
	        break;
	    case 'sex':
	    	setTimeout(function(){
		        chart.load({
		        	url: 'data/sex.csv'
		    	});
	    	},1000);
	    	$("#filter-dropdown").html('Sex <span class="caret"></span>');
	        break;
	    default:
	        chart.load({
	        	url: 'data/total-deaths.csv'
	    	});
	} 

}

function changeChartType(newType) {
	switch(newType) {
	    case 'area-spline':
			chart.transform('area-spline');
			//change selected value to area-spline
			$("#line-icon").removeClass("selected-chart");
			$("#bar-icon").removeClass("selected-chart");
			$("#area-icon").addClass("selected-chart");
	        break;
	    case 'line':
			chart.transform('line');
			//change selected value to line
			$("#area-icon").removeClass("selected-chart");
			$("#bar-icon").removeClass("selected-chart");
			$("#line-icon").addClass("selected-chart");
	        break;
	    case 'bar':
			chart.transform('bar');
			//change selected value to bar
			$("#area-icon").removeClass("selected-chart");
			$("#line-icon").removeClass("selected-chart");
			$("#bar-icon").addClass("selected-chart");
	        break;    
	    default:
			chart.transform('area-spline');
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

//console.log(data);
var ageData = parseCSV("data/age.csv");
var ethnicityData = parseCSV("data/ethnicity.csv");
var sexData = parseCSV("data/sex.csv");

var inputtedAge = "45-54";

console.log(ageData[7][inputtedAge]);
