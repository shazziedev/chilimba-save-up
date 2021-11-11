import * as React from 'react';
import { Text, View, Dimensions } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";



function Chart() {
	const { height , width } = Dimensions.get("window"); 
	const data = {
		  labels: ["January", "February", "March", "April", "May", "June"],
		  datasets: [
		    {
		      data: [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100],
		      color: (opacity = 1) => `rgba(134, 65, 244, 0.4)`, // optional
		      strokeWidth: 2 // optional
		    }
		  ],
		  legend: ["Cycle Performance"] // optional
		};

		const chartConfig = {
			  backgroundGradientFrom: "#40E0D0",
			  backgroundGradientFromOpacity: 0.1,
			  backgroundGradientTo: "dodgerblue",
			  backgroundGradientToOpacity: 0.5,
			  color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
			  strokeWidth: 2, // optional, default 3
			  barPercentage: 0.5,
			  useShadowColorFromDataset: false // optional
			};


	return(
		<View>
		  <Text>Group Performance </Text>
		  <LineChart
  			data={data}
 				width={width * 0.85}
  			height={220}
  			chartConfig={chartConfig}
  			bezier
  			style={{borderRadius:10,paddingVertical:10}}
			/>
		</View>

	);
}

export default Chart;