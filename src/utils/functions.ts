export function getBase64ImageFromURL(url) {
    return new Promise((resolve, reject) => {
      var img = new Image();
      img.setAttribute("crossOrigin", "anonymous");

      img.onload = () => {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        var dataURL = canvas.toDataURL("image/png");

        resolve(dataURL);
      };

      img.onerror = error => {
        reject(error);
      };

      img.src = url;
    });
  }

export  async function getBase64ImageFromUrl2(imageUrl) {
    var res = await fetch(imageUrl,{method: 'GET',mode: "no-cors",headers: {     "Content-Type": "image/png"   }});
    var blob = await res.blob();
  
    return new Promise((resolve, reject) => {
      var reader  = new FileReader();
      reader.addEventListener("load", function () {
          resolve(reader.result);
      }, false);
  
      reader.onerror = () => {
        return reject(this);
      };
      reader.readAsDataURL(blob);
    })
  }

  export function getBase64ImageFromUrl3(imageUrl) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
    var reader = new FileReader();
    reader.addEventListener("load", function () {
      reader.result;
  }, false);
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', imageUrl);
  xhr.responseType = 'blob';
  xhr.send();
  }

export function stringToDate(fecha: string):Date {
  const [day, month, year] = fecha.split('/');
  const date = new Date(+year, +month - 1, +day);
  //const date = moment("DD/MM/YYYY").toDate();
  return date
}

export function changeFormatDate(fecha: string):string {
  const [day, month, year] = fecha.split('/');
  const date = year+'-'+ month+'-' +day;
  //const date = moment("DD/MM/YYYY").toDate();
  return date
}

export function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

export function dateMonth(fecha:Date): string {
  return fecha.toISOString().substring(0,7);
}
