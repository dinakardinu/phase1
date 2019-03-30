function loadJson(file,callback){
  var xhr= new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true)
  xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status=="200"){
    callback(xhr.responseText);
  }
}
xhr.send();
}
loadJson("dynamic.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  profile(data.profile);
  careear(data.careear);
  education(data.Educationdetails);
  Skills(data.Skills);
})
var left=document.querySelector(".left");
function profile(p){
  var images=document.createElement("img");
  images.src=p.images;
  left.append(images);

  var h2=document.createElement("h2");
  h2.textContent=p.name;
  left.append(h2);


  var h3=document.createElement("h3");
  h3.textContent=p.design;
  left.append(h3);

  var h2=document.createElement("h2");
  h2.textContent=p.mobile;
  left.append(h2);

  var h2=document.createElement("h2");
  h2.textContent=p.email;
  left.append(h2);
}


  var right=document.querySelector(".right");
  function careear(ca){
  var h2=document.createElement("h2");
  h2.textContent="careear";
  right.append(h2);

var hr=document.createElement("hr");
right.append(hr);

var h3=document.createElement("h3");
h3.textContent=ca.info;
right.append(h3);

}
//Education details
function education(edu){
  var h1=document.createElement("h1");
  h1.textContent="Education details";
  right.append(h1);

  var hr=document.createElement("hr");
  right.append(hr);

var table=document.createElement("table");
table.border="2";
right.append(table);
var tr1="<tr><th>Qualifications</th><th>institute</th><th>percen</th><th>yop</th></tr>";
var tr2=" ";
for(var i=0;i<edu.length;i++)
{
  tr2=tr2+"<tr><td>"+edu[i].Qualifications+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].percen+"</td><td>"+edu[i].yop+"</td></tr>";
}
table.innerHTML=tr1+tr2;
right.append(table);
}
function Skills(sk){
  var h1=document.createElement("h1");
h1.textContent="Skills";
right.append(h1);
var hr=document.createElement("hr");
right.append(hr);

var ul=document.createElement("ul");
for(var i in sk){
  var li=document.createElement("li");
  li.innerHTML=sk[i].name+":"+sk[i].info;
  ul.append(li);
}
right.append(ul);
}
