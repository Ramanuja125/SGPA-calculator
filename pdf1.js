
window.onload = function () {
    document.getElementById("download")
        .addEventListener("click", () => {
            const invoice = this.document.getElementById("invoice");
            console.log(invoice);
            console.log(window);
            var opt = {
                margin: 1,
                filename: 'sem1.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(invoice).set(opt).save();
        })



// window.onload = function () {
    document.getElementById("download2")
        .addEventListener("click", () => {
            const invoice2 = this.document.getElementById("invoice2");
            console.log(invoice2);
            console.log(window);
            var opt = {
                margin: 1,
                filename: 'sem2.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(invoice2).set(opt).save();
        })


// window.onload = function () {
    document.getElementById("download3")
        .addEventListener("click", () => {
            const invoice3 = this.document.getElementById("invoice3");
            console.log(invoice3);
            console.log(window);
            var opt = {
                margin: 1,
                filename: 'sem3.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(invoice3).set(opt).save();
        })

        document.getElementById("download4")
        .addEventListener("click", () => {
            const invoice4 = this.document.getElementById("invoice4");
            console.log(invoice4);
            console.log(window);
            var opt = {
                margin: 1,
                filename: 'sem4.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(invoice4).set(opt).save();
        })

        document.getElementById("download5")
        .addEventListener("click", () => {
            const invoice5 = this.document.getElementById("invoice5");
            console.log(invoice5);
            console.log(window);
            var opt = {
                margin: 1,
                filename: 'sem5.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(invoice5).set(opt).save();
        })

        document.getElementById("download6")
        .addEventListener("click", () => {
            const invoice6 = this.document.getElementById("invoice6");
            console.log(invoice6);
            console.log(window);
            var opt = {
                margin: 1,
                filename: 'sem6.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(invoice6).set(opt).save();
        })

        document.getElementById("download7")
        .addEventListener("click", () => {
            const invoice7 = this.document.getElementById("invoice7");
            console.log(invoice7);
            console.log(window);
            var opt = {
                margin: 1,
                filename: 'sem7.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(invoice7).set(opt).save();
        })

        document.getElementById("download9")
        .addEventListener("click", () => {
            const invoice9 = this.document.getElementById("invoice9");
            console.log(invoice9);
            console.log(window);
            var opt = {
                margin: 1,
                filename: 'sem8.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(invoice9).set(opt).save();
        })
}



