# drug-data-viz

This is a data visualization project with the intent of raising awareness of the opioid epidemic and discouraging use of these painkillers.

# data sources
Our application uses drug overdose data from EpiCenter, a web-based query system run by the California Department of Public Health. http://epicenter.cdph.ca.gov/ReportMenus/AlcoholDrugTable.aspx

# how is risk factor calculated?
First we collect the user's gender, age, and ethnicity. From there, we calcuate the probability of each attribute individually using data from 2013.

We then assume independence between variables and multiply all 3 probabilites together to get the probability of that specific group.

Then we multiply the group probability by the total overdoses and divide that new number by the population of that same group.

# can I update the data?
Yes! Just make sure that the CSV files are formatted in the same way, with the same variable names, and there shouldn't be any issues.

# demo
http://opioids.surge.sh/


