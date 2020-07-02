
function addTagToContainerId(containerId, tagType, tagId = '', classes = '') {
    let contentTag = document.getElementById(containerId);
    let newTag = document.createElement(tagType);
    if (tagId != '') {
        newTag.setAttribute("id", tagId);
    }

    if (classes != '') {
        newTag.setAttribute("class", classes);
    };
    contentTag.appendChild(newTag);
    return
}

function updateSectionName(sectionName, name) {
    let htmlTag = '<h1>' + name + '</h1>';
    document.getElementById(sectionName).innerHTML = htmlTag;
}

function renderSectionContainer(childOfId, idName, className) {
    let contentTag = document.getElementById(childOfId);

    let newTag = document.createElement('div');
    newTag.setAttribute("class", className);
    newTag.setAttribute("id", idName);

    contentTag.appendChild(newTag);
    return;
}


export { addTagToContainerId, updateSectionName, renderSectionContainer };