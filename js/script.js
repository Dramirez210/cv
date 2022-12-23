/*document.addEventListener("DOMContentLoaded", () =>{
    const $boton = document.querySelector("#btnPrint");
    $boton.addEventListener("click", () =>{
        const $elemento = document.body;
        var opt = {
            margin:       1,
            filename:     'myfile.pdf',
            image:        { type: 'png', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
          };
        // html2pdf()
        // .set({
        //     margin: 1,
        //     filename: 'documento.pdf',
        //     image: {
        //         type: 'jpeg',
        //         quality: 0.98,
        //     },
        //     html2canvas:{
        //         scale: 5,
        //         letterRendering: true,
        //     },
        //     jsPDF: {
        //         unit: "in",
        //         format: "a3",
        //         orientation: 'portrait',
        //     },
        // })
        html2pdf().set(opt).from($elemento).save();

        // Old monolithic-style usage:
        html2pdf($elemento, opt);
        // .from($elemento)
        // .save()
        // .catch(err => console.log(err))
        // .finally()
        // .then(() =>{
        //     console.log("Guardado!")
        // })
    });
});*/


// const $boton = document.querySelector("#btnPrint");
//     $boton.addEventListener("click", function(){

//     })
btnPrint.onclick = function SaveScreenshot() {
    html2canvas(document.body).then(canvas => {
        const base64Image = canvas.toDataURL('image/jpeg', 1);
        try {
            localStorage.setItem("img1", base64Image);
        }
        catch (e) {
            console.log("Storage failed: " + e);
        }
    });
    return false;
}






