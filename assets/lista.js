const calendar = document.querySelector(".calendar"),
date = document.querySelector(".date"),
daysContainer = document.querySelector(".date");
prev = document.querySelector(".prev");
next = document.querySelector(".next");

    let today = new date();
    let activeDay;
    let month = today.getFullMonth();
    let year = today.getFullyear();

    const  months = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ];

    function initCalendar(){
        const firsDay = new Date(year, month, 1);
        const lastsDay = new Date(year, month + 1, 0);
        const prevLastDay = new Date(year,month, 0);
        
    }


