//TABLUE INFRASTRUCTIOR
function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
        url = "https://public.tableau.com/views/Project1-DSS/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
        options = {
            hideTabs: true,
            onFirstInteractive: function () {
                console.log("Run this code when the viz has finished loading.");
            }
        };

    var viz = new tableau.Viz(containerDiv, url, options);
    // Create a viz object and embed it in the container div.
}

window.alert(`created By: \nAhamd Mohammad-140339\nAhmad Alqurashi-139829`)
