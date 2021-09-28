
window.onload = function () {
    document.getElementById("download8")
        .addEventListener("click", () => {
            const invoice8 = this.document.getElementById("invoice8");
            console.log(invoice8);
            console.log(window);
            var opt = {
                margin: 1,
                filename: 'myfile.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(invoice8).set(opt).save();
        })
}