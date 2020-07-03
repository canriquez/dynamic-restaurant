
function clearAllSections() {
  document.getElementById('content').innerHTML = '';
}


function addTagToContainerId(containerId, tagType, tagId = '', classes = '') {
  const contentTag = document.getElementById(containerId);
  const newTag = document.createElement(tagType);
  if (tagId !== '') {
    newTag.setAttribute('id', tagId);
  }

  if (classes !== '') {
    newTag.setAttribute('class', classes);
  }
  contentTag.appendChild(newTag);
}

function updateSectionName(sectionName, name) {
  const htmlTag = `<h1>${name}</h1>`;
  document.getElementById(sectionName).innerHTML = htmlTag;
}

function renderSectionContainer(childOfId, idName, className) {
  const contentTag = document.getElementById(childOfId);

  const newTag = document.createElement('div');
  newTag.setAttribute('class', className);
  newTag.setAttribute('id', idName);

  contentTag.appendChild(newTag);
}


export {
  clearAllSections, addTagToContainerId, updateSectionName, renderSectionContainer,
};