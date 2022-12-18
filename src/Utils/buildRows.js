function buildRows(data, colNum, tagFilter){
    let rows = [];
    if(tagFilter !== ""){
        data = data.filter(
            // filter items with the active filter. All items if filter is set to "All"
            item => (tagFilter === "All") ? true : item.tags.find(tag => tag === tagFilter)
        );
    }
    
    for(let i = 0; i < data.length; i++){
        if(i % colNum === 0){
            rows.push([data[i]]);
        }
        else{
            rows[Math.floor(i/colNum)].push(data[i]);
        }
    }
    
    return rows;
}

export default buildRows;