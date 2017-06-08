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
	  right: 20,
	  bottom: 20,
	  top: 20
    },
    color: {
	pattern: ['#00AEF5', '#b83b5e', '#f9ed69', '#1fab89',  '#ffccfc', '#ff5335']
    },
    tooltip: {
	contents: function(d, defaultTitleFormat, defaultValueFormat, color) {
          var out, row, total, x, _i, _len;
          total = 0;
          x = d[0].x;
          out = '<table class="c3-tooltip" ><tbody><tr><th colspan="2">' + defaultTitleFormat(x) + '</th></tr>';
          for (_i = 0, _len = d.length; _i < _len; _i++) {
            row = d[_i];
            total += row.value;
            out += '<tr class="c3-tooltip-name-' + row.id + '"><td class="name">';
            out += '<span style="background-color:' + color(row.id) + '"></span>' + row.name + '</td>';
            out += '<td class="value">' + defaultValueFormat(row.value) + '</td></tr>';
          }
          out += '</tbody></table>';
          return out;
	}
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
	//check which chart is selected and transform according
	var transformType;
	if ($(".selected-chart").attr("id") == "line-icon") {
	    transformType = "line";
	    console.log('line');
	}
	else if ($(".selected-chart").attr("id") == "bar-icon") {
	    transformType = "bar";
	    console.log('bar');
	}
	else {
	    transformType = "area-spline";
	    console.log('area');
	}
	
	chart.unload();
	switch(dataToLoad) {
	    case 'total-deaths':
		
	        setTimeout(function(){
			
		        chart.load({
		        	url: 'data/total-deaths.csv'
		    	});
			
			
	    	},1000);
		setTimeout(function(){
		    chart.transform(transformType);		
	    	},1400);
		
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
		setTimeout(function(){
		    chart.transform(transformType);		
	    	},1400);
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
		setTimeout(function(){
		    chart.transform(transformType);		
	    	},1400);
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
		setTimeout(function(){
		    chart.transform(transformType);		
	    	},1400);
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
		setTimeout(function(){
		    chart.transform(transformType);		
	    	},1400);
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
		setTimeout(function(){
		    chart.transform(transformType);		
	    	},1400);
	    	$("#filter-dropdown").html('Sex <span class="caret"></span>');
		removeSelectedData();
		$("#sex").addClass("selected-data");
	        break;
	    default:
	        chart.load({
	        	url: 'data/total-deaths.csv'
	    	});
		setTimeout(function(){
		    chart.transform(transformType);		
	    	},400);
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

//console.log(ageData[7][inputtedAge]);

//for(i=0; i < populationData.length; i++){
//    switch(patientAttributes) {
//	case '0-24':
//	    break;
//	case '0':
//	    break;
//	default:
//	    break;
//    }
//    console.log(populationData);
//    
//}




