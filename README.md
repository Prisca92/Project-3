# Nuclear Energy Analysis Project

Overview

This project aims to conduct a comprehensive analysis of nuclear energy utilization in the United States. Our findings will be visualized through an interactive Flask App. The primary focus includes collecting data from the U.S. Energy Information Administration API, analyzing it using Pandas and Jupyter Notebook, and storing the results in a PostgreSQL database. Additionally, we utilized JavaScript libraries such as Papa Parse, jQuery, Leaflet, and Highcharts to enhance our visualizations.

Methodology

1. Data Collection:
We gathered data from the U.S. Energy Information Administration API to ensure the accuracy and relevance of our analysis.

2. Data Processing and Analysis:
Utilizing the Pandas library and Jupyter Notebook, we processed the collected data to derive meaningful insights.
The processed data was exported as CSV files, which were subsequently converted to JSON for further compatibility.

3. Database Integration:
To enhance data management and accessibility, we imported the CSV files into a PostgreSQL database. Our Flask web interface was styled by a bootstrap template created by Creative Tim (https://www.creative-tim.com/product/get-shit-done-kit). We customized the site so we would be able to display our visualizations. We used PSYCOPG2, a postgres adapter to connect the Flask Application to our server.

5. Visualization:
We employed the following JavaScript libraries for visualization: Papa Parse, jQuery, Leaflet, and Highcharts.

Created three visualizations:

Nuclear Plant Map:
Displays the geographical location of each nuclear plant.
Highlights the amount of nuclear outages for each plant in 2022.

Power Production Visualization:
Illustrates the amount of nuclear electric power production.
Includes insights into the operating units contributing to the production.

Electric Power Consumption and Outages:
A line graph was used to show trends, over time. As a result, it functions best because the data collection is continuous as opposed to having many beginnings and ends. This interactive model allows users to view historical energy consumption data and also interact with the visualization in some form using (zoom function, text box’s, and a drop down function to view the data collected) . It is this interactivity that will allow users the ability to investigate their energy usage behavior and patterns more closely, and possibly assist them to change their underlying energy consumption behaviors. 


When looking at the 'Nuclear Electric Power Consumption Over Time' graph, we observed a generally increasing trend in nuclear energy consumption from 1970 to 2022. There is a noticeable spike in the  late 1970’s early 1980s, which could be attributed to increased investment in nuclear power during that period. The trend remains relatively stable until the early 2000s when we see another uptick, possibly indicating renewed interest or expansion in nuclear energy production. It's essential to note the contextual factors, such as changes in energy policies or economic conditions, that may have influenced these consumption patterns. Overall, nuclear energy consumption has played a significant role in the energy mix over the years, with fluctuations that reflect both policy decisions and broader energy trends. Additionally, while the data shows that there was an outage at more than half of the plants in 2022, the information that was missing was the type of outage and the duration. 

Next Steps:

Conducting a more comprehensive analysis focusing on factors such as environmental impact, resource efficiency, waste management, safety, and economic aspects, will help draw a more informed opinion and or conclusion on the sustainability of nuclear electric energy. Take into consideration some advantages, like low greenhouse gas emissions and high energy density, against the challenges, such as nuclear waste management and safety concerns. While also considering the potential for technological advancements, regulatory improvements, and public perception changes over time.


Appendix:

U.S Energy Information Administration API Link

https://www.eia.gov/opendata/browser/

High Charts

https://www.highcharts.com/

Papa Parse

https://www.papaparse.com/

JQuery

https://jquery.com/

Psycopg

https://www.psycopg.org/docs/

Leaflet

https://leafletjs.com/
