// Example: Creating a simple bar chart
const data = [10, 20, 30, 40, 50];
const width = 400, height = 300;

const svg = d3.select("#plot-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * 80)
    .attr("y", d => height - d * 5)
    .attr("width", 50)
    .attr("height", d => d * 5)
    .attr("fill", "#4CAF50");
