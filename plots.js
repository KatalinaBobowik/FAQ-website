// Define data for your plot
const data = [10, 20, 30, 40, 50];
const width = 400, height = 300;

// Create the SVG container
const svg = d3.select("#plot-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g");  // Group element for transformation (zoom and pan)

// Define zoom behavior
const zoom = d3.zoom()
    .scaleExtent([1, 10])  // Set the zoom range
    .on("zoom", function(event) {
        svg.attr("transform", event.transform);  // Apply transformation on zoom
    });

svg.call(zoom);  // Apply zoom to the SVG

// Create bars for the chart
svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * 80)
    .attr("y", d => height - d * 5)
    .attr("width", 50)
    .attr("height", d => d * 5)
    .attr("fill", "green");
