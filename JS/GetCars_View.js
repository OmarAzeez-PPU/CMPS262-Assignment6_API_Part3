new gridjs.Grid({
    search: true,
    sort: true,
    pagination: true,
    fixedHeader: true,
    height: "90%",

    columns: [
        {name: "id", width: "200px"},
        {name: "brand", width: "200px"},
        {name: "model", width: "200px"},
        {name: "year", width: "200px"} ],
        
    server: {
        url:"http://localhost:8003/api/v1/inventory",
        then: (data) => {
            data.sort((a,b) => b.id - a.id);
            return data.map((cars) => [
                cars.id,
                cars.brand,
                cars.model,
                cars.year
            ]);
        }
    },

}).render(document.getElementById("table"));