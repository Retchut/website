function buildRows(data, colNum, tagFilter = ""){
    const baseFilter = "All";
    const rows = [];
    if(tagFilter !== ""){
        data = data.filter(
            // filter items with the active filter. All items if filter is set to baseFilter
            item => (tagFilter === baseFilter) ? true : item.tags.find(tag => tag === tagFilter)
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

function filterArray(data, tagFilter){
    const baseFilter = "All";
    if(tagFilter !== ""){
        data = data.filter(
            // filter items with the active filter. All items if filter is set to the baseFilter
            item => (tagFilter === baseFilter) ? true : item.tags.find(tag => tag === tagFilter)
        );
    }
    return data;
}

export { buildRows, filterArray };