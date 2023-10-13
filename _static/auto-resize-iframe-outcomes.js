// listen for messages emitted by the iframe to set it to the proper height
//
// warning: if there are multiple iframes on the page a random one/all will be resized
// should not give issues elsewhere, as only the 'open-hardware-outcomes.html' page
// emits the "iframe-height-info" message
window.onmessage = function (event) {
    if (event.data.type && event.data.type == "iframe-height-info") {
        console.log("received height from iFrame")
        console.log(event.data.height)
        var iframeHeight = event.data.height;
        document.querySelector("iframe").height = iframeHeight
    }
};

// to open an existing iframe in a new tab 
function iframeNewTab() {    
    const myIframe= document.querySelector("iframe")
    var win = window.open(myIframe.src);
}