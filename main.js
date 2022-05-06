prediction_1=""
prediction_2=""

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML='<img id="captured_image"src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/YiZ3-yoL3/model.json',modelLoaded);

function modelLoaded()
{
    console.log('Model Loaded!');
}

function speak()
{
    var synth=window.speechSynthesis;
    speak_data_1="The First Prediction is"+prediction_1;
    speak_data_2="And The Second Prediction is "+prediction_2;
    var utterThis= new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}

function check()
{
img=document.getElementById('captured_image');
classifier.classify(img, gotResults)
}

function gotResults(error,results)
{
    if (error){

    }else{
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML=results[0].label;
        document.getElementById("result_gesture_name2").innerHTML=results[1].label;
        prediction_1=results[0].label;
        prediction_2=results[1].label;
        speak();
        if(results[0].label=="Up")
        {
            document.getElementById("update_gesture").innerHTML="&#128070";
        }
        if(results[0].label=="Stop")
        {
            document.getElementById("update_gesture").innerHTML="&#9995";
        }
        if(results[0].label=="Cheese")
        {
            document.getElementById("update_gesture").innerHTML="&#9996";
        }
        if(results[0].label=="Down")
        {
            document.getElementById("update_gesture").innerHTML="&#128071";
        }
        if(results[0].label=="Bye Bye")
        {
            document.getElementById("update_gesture").innerHTML="&#128075";
        }
        if(results[0].label=="Good")
        {
            document.getElementById("update_gesture").innerHTML="&#128077";
        }
        if(results[0].label=="Swag")
        {
            document.getElementById("update_gesture").innerHTML="&#129304";
        }
        if(results[0].label=="Amazing")
        {
            document.getElementById("update_gesture").innerHTML="&#128076";
        }
        if(results[1].label=="Up")
        {
            document.getElementById("update_gesture2").innerHTML="&#128070";
        }
        if(results[1].label=="Stop")
        {
            document.getElementById("update_gesture2").innerHTML="&#9995";
        }
        if(results[1].label=="Cheese")
        {
            document.getElementById("update_gesture2").innerHTML="&#9996";
        }
        if(results[1].label=="Down")
        {
            document.getElementById("update_gesture2").innerHTML="&#128071";
        }
        if(results[1].label=="Bye Bye")
        {
            document.getElementById("update_gesture2").innerHTML="&#128075";
        }
        if(results[1].label=="Good")
        {
            document.getElementById("update_gesture2").innerHTML="&#128077";
        }
        if(results[1].label=="Swag")
        {
            document.getElementById("update_gesture2").innerHTML="&#129304";
        }
        if(results[1].label=="Amazing")
        {
            document.getElementById("update_gesture2").innerHTML="&#128076";
        }
    }
}