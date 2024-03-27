// const bulletedLineRegex = /^(\s*)([*+-])\s(.+?)$/gm

// const orderedLineRegex = /^(\s*)\d+\.\s(.+?)$/gm
export const checkForHeaders = (line) => {
    if (line.startsWith('#')) {  // Header
        let level = 0;
        while (level < line.length && line[level] === '#') {
            level++;
        }
        if (line[level] === ' '){
            return `<h${level}>${line.slice(level).trim()}</h${level}>`;
        }
    } 
    return line
}
export const checkForItalicsBoldandUnderline = (text) => {
    text = text.replace(/__(.*?)__/g, '<u>$1</u>');
    text = text.replace(/_(.*?)_/g, '<i>$1</i>');
    text = text.replace(/\*(.*?)\*/g, '<i>$1</i>')
    return text
    }
export const checkforBulletedLine = (line) => {
    line = line.replace(/^(\s*)([*+-])\s(.+?)$/gm, (match, p1, p2, p3) => `${p1}<ul><li>${p3}</li></ul>`);
    return line 
}
export const checkforOrderedLine = (line) => {
    let counter = 0;
    line = line.replace(/^(\s*)\d+\.\s(.+?)$/gm, (match, p1, p2) => {
        if (!counter) counter = 1;
        return `${p1}<ol start="${counter++}"><li>${p2}</li></ol>`;
    });
    return line; 
}

export const checkforCheckboxes =(line) => {
    line = line.replace(/\[\[(.*?)\]\]/g,`<input type="checkbox">$1<br>`)
    return line
}

export const checkforLineBreaks = (line) => {
    let blockTagRegex = /<(div|p|h[1-6]|ul|ol|li|table|blockquote)[^>]*>[\s\S]*<\/\1>\s*$/
    if (!blockTagRegex.test(line)){
        line = line.concat('<br>')
    }
    return line
}
export const checkforHorizotalLine = (line) => {
    if (line === '---'){
        line = '<hr>'
    }
    return line
}

const pipe  = (value) => ({
    value,
    to : cb => pipe(cb(value))
});

export const parseList = (lines) => {
    let start = -1;
    let current = 0;
    let finalLines = [...lines];
    console.log(finalLines);
    while (current < lines.length){
        const isMatching = bulletedLineRegex.test(finalLines[current])
        console.log(current, lines.length, isMatching, finalLines[current]);
        if (isMatching){
            if (start< 0){
                start = current
            }
            finalLines[current] = finalLines[current].replace(/^(\s*)([*+-])\s(.+?)$/gm, (match, p1, p2, p3) => `${p1} <li>${p3}</li>`);
        }else {
            if (start > 0){
                let finalList = `<ul> ${finalLines.splice(start, current-start).join('')} </ul>`
                finalLines.splice(start, 0, finalList)
                start = -1
            }
        }
        current += 1
    }
    return finalLines
}
export const handleNewLineInLists = () => {
    const selection = window.getSelection(); 
    const range = selection.getRangeAt(0);  
    const currentNode = range.startContainer;  
    const currentLine = currentNode.textContent.substring(0, range.startOffset); 
    const indent = currentLine.match(/^\s*/)[0];
    const isBulletPoint = /^s*\-\s+/.test(currentLine)
    const isNumberedPoint = /^\s*\d+\.\s/.test(currentLine);
    let newLine = '\n';
    if (isBulletPoint) {
        newLine = `\n${indent}- `
    }else if  (isNumberedPoint){
        const number = +currentLine.match(/^\s*(\d+)\.\s+/)[1] + 1
        newLine = `\n${indent}${number}. `
    }
    document.execCommand('insertText', false, newLine);
}
export const getCurrentLine= () =>{
    const selection = window.getSelection(); 
    const range = selection.getRangeAt(0);  
    const currentNode = range.startContainer;  
    const currentLine = currentNode.textContent.substring(0, range.startOffset); 
    let parentNodeElement = {...currentNode};
    while (parentNodeElement && parentNodeElement.nodeType !== Node.ELEMENT_NODE){
        parentNodeElement = parentNodeElement.parentNode
    }
    console.log(parentNodeElement,currentNode,'node', currentNode.nodeType, Node.ELEMENT_NODE, currentNode.__proto__, typeof currentLine, range);
    if (currentNode?.nodeType === Node.ELEMENT_NODE){
        currentNode?.classList?.add('activeLine');
    }
}

export const parseContent = (text) => {
    const textLines = text.trim().split('\n')
    let parsedTextLines = textLines.map((line) => {
        let parsedLine = line;
        parsedLine = pipe(parsedLine)
                        .to(checkForHeaders)
                        .to(checkForItalicsBoldandUnderline)
                        .to(checkforCheckboxes)
                        .to(checkforHorizotalLine).
                        to(checkforLineBreaks)
                        .to(checkforOrderedLine)
                        .to(checkforBulletedLine)
                        .value;

        return parsedLine
    })
    const finalText = parsedTextLines.join('');
    return finalText
}