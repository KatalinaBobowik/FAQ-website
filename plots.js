// Define data for your plot
const data = [10, 20, 30, 40, 50];
const width = 400, height = 300;

// Create the SVG container
const svg = d3.select("#plot-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("border", "1px solid black"); // Add a border for visual debugging

// Create a group element for zoomable content
const plotGroup = svg.append("g");

// Define zoom behavior
const zoom = d3.zoom()
    .scaleExtent([1, 10]) // Set zoom scale range
    .translateExtent([[0, 0], [width, height]]) // Optional: Restrict panning area
    .on("zoom", function(event) {
        plotGroup.attr("transform", event.transform); // Apply transformation
    });

// Apply zoom behavior to the SVG
svg.call(zoom);

// Add rectangles to the group (the actual chart content)
plotGroup.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * 80)
    .attr("y", d => height - d * 5)
    .attr("width", 50)
    .attr("height", d => d * 5)
    .attr("fill", "green");

// Debugging Log
console.log("SVG and zoom initialized successfully.");