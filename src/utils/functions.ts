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
