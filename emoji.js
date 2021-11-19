Webcam.set({
    width: 200,
    height: 200,
    image_format: "png",
    png_quality: 100
});

camera = document.getElementById("cam");
Webcam.attach(camera);

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot_result").innerHTML = '<img id="cap_img" src="' + data_uri + '">';
    });
}
console.log("ml5 Version", ml5.version);







































































