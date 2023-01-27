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

function buildTagRows(techs, tags, colNum){
    // TODO: make this cleaner
    let items = [];
    for(const tech of techs){
        items.push({ content : tech, isTag : false});
    }
    for(const tag of tags){
        items.push({ content : tag, isTag : true});
    }

    return buildRows(items, colNum);
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

export { buildRows, buildTagRows, filterArray };