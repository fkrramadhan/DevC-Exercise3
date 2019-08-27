var planets = [];
fetch('https://swapi.co/api/planets/')
.then(function(response){
    return response.json();
})
.then(function(json){
    planets = json.results
    f_showData(planets)
})

function f_filter(){
    var q =document.getElementById('filter').nodeValue;
    data = planets.filter(function(planets) {
        return planets.name.toLowerCase().includes(q) || planets.rotation_periode.includes(q) ||
        planet.orbital-Period.includes(q) || planets.diameter.includes(q) ||
        planet.climate.includes(q) || planet.gravity.includes(q) || planet.terrain.includes(q) ||
        planet.surface_water.includes(q) || planet.population.include(q)
    });
    F_showData
}

function f_showData(planets){
    var tr, td;
    var tbody = document.getElementById("tBody");
    tbody.innerHTML = '';
    // loop through data source
    for (var i=0; i< planets.length; i++){
        tr = tbody.insertRow(tbody.rows.length);
        td = tr.insertCell(tr.cells.length);
        td.setAttribute("align","center");
        td.innerHTML = i+1;
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = planets[i].name;
        td = tr.insertCell(tr.cells.length);
        td.setAttribute("align","center");
        td.innerHTML = planets[i].rotation_period;
        td = tr.insertCell(tr.cells.length);
        td.setAttribute("align","center");
        td.innerHTML = planets[i].orbital_period;
        td = tr.insertCell(tr.cells.length);
        td.setAttribute("align","center");
        td.innerHTML = planets[i].diameter;
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = planets[i].climate;
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = planets[i].gravity;
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = planets[i].terrain;
        td = tr.insertCell(tr.cells.length);
        td.setAttribute("align","center");
        td.innerHTML = planets[i].surface_water;
        td = tr.insertCell(tr.cells.length);
        td.setAttribute("align","right");
        td.innerHTML = planets[i].population;

    }

}