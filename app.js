let aZGray=document.querySelector(".a-z-gray");
let aZBlack=document.querySelector(".a-z-black");
aZGray.addEventListener("mouseover",()=>{
    aZGray.classList.toggle('dis-none');
    aZBlack.classList.toggle('dis-none')
})
aZGray.addEventListener("mouseout",()=>{
    aZGray.classList.toggle('dis-none');
    aZBlack.classList.toggle('dis-none')
})
let clearGray=document.querySelector(".clear-gray");
let clearPurple=document.querySelector(".clear-purple");
clearGray.addEventListener("mouseover",()=>{
    clearGray.classList.toggle('dis-none');
    clearPurple.classList.toggle('dis-none');
})
clearGray.addEventListener("mouseout",()=>{
    clearGray.classList.toggle('dis-none');
    clearPurple.classList.toggle('dis-none');
})

let addElement=document.querySelector('.add img');
let input=document.querySelector(".input");
let addInput=document.querySelector("input");
clearPurple.addEventListener('click',() =>{
    addInput.value="";
})

clearGray.addEventListener('touchstart',() =>{
    addInput.value="";
})

let block= document.querySelector(".block");
let count=1;
let listNumber=1;
addElement.addEventListener('click',() =>{
    input.classList.toggle("dis-none");
    if(addInput.value == "" || addInput.value ==" "){
    }else{
        if(count %2 !=0){
            let mainBlock=document.createElement("div");
            mainBlock.classList.add("main-block");
            let blockNumberAndText=document.createElement("div");
            blockNumberAndText.classList.add("block-number-text");
            block.append(mainBlock);
            mainBlock.append(blockNumberAndText);
            block.classList.add("block-element");
            let number=document.createElement("div");
            blockNumberAndText.append(number);
            number.classList.add("number");
            let blockElementText=document.createElement("p");
            blockNumberAndText.append(blockElementText);
            blockElementText.classList.add("block-element-text");  
            number.textContent=listNumber+".";
            listNumber++;
            blockElementText.textContent=addInput.value;
            let imgBlock=document.createElement("div");
            imgBlock.classList.add("img-block");
            mainBlock.append(imgBlock);
            let imgGray=document.createElement("img");
            imgGray.classList.add("clear-gray");
            imgGray.src="./sekiller/clear_gray.svg";
            let imgPurple=document.createElement("img");
            imgPurple.classList.add("clear-purple");
            imgPurple.classList.add("dis-none");
            imgPurple.src="sekiller/clear_purple.svg";
            imgBlock.append(imgGray);
            imgBlock.append(imgPurple);
            block.classList.remove("dis-none")
            block.classList.add('new-block');
            imgGray.addEventListener("mouseover",()=>{
                imgGray.classList.toggle('dis-none');
                imgPurple.classList.toggle('dis-none');
            })
            imgGray.addEventListener("mouseout",()=>{
                imgGray.classList.toggle('dis-none');
                imgPurple.classList.toggle('dis-none');
            })
            imgPurple.addEventListener('click',()=>{
                mainBlock.remove();
                if(block.innerHTML==""){
                    block.classList.toggle("dis-none");
                    block.classList.toggle("new-block")
                }
            })
            imgGray.addEventListener('touchstart',()=>{
                mainBlock.remove();
                if(block.innerHTML==""){
                    block.classList.toggle("dis-none");
                    block.classList.toggle("new-block")
                }
            })

            
        }
    }
    count++;
    addInput.value="";
})


let emptyAndImg=document.querySelector(".empty-and-img");
let zAGray=document.createElement("img");
let zABlack=document.createElement("img");
zAGray.classList.add("a-z-gray", "dis-none");
zABlack.classList.add("a-z-black", "dis-none");
zAGray.src="./sekiller/z_a_gray.svg";
zABlack.src="./sekiller/z_a_black.svg";
emptyAndImg.append(zAGray);
emptyAndImg.append(zABlack);
function sortBlocks(location) {
    let blocks = Array.from(document.querySelectorAll(".block-element-text"));

    let texts = blocks.map(block => block.textContent);

    texts.sort((a, b) => {
        if (location === "A-Z") {
            return a.localeCompare(b); 
        } else {
            return b.localeCompare(a);         }
    });

    blocks.forEach((block, index) => {
        block.textContent = texts[index];
    });
}
aZBlack.addEventListener('click',() =>{
    sortBlocks("A-Z");
    aZGray.classList.toggle('dis-none');
    zAGray.classList.toggle('dis-none');
})
zAGray.addEventListener("mouseover",() =>{
    zAGray.classList.toggle("dis-none");
    zABlack.classList.toggle("dis-none")
})
zAGray.addEventListener('mouseout',() =>{
    zAGray.classList.toggle("dis-none");
    zABlack.classList.toggle("dis-none");
})
zABlack.addEventListener('click',() =>{
    sortBlocks("Z-A");

    zAGray.classList.toggle('dis-none');
    aZGray.classList.toggle("dis-none")
})


aZGray.addEventListener('touchstart',() =>{
    sortBlocks("A-Z");
    aZGray.classList.toggle('dis-none');
    zAGray.classList.toggle('dis-none');
})
zAGray.addEventListener('touchstart',() =>{
    sortBlocks("Z-A");
    zAGray.classList.toggle('dis-none');
    aZGray.classList.toggle("dis-none")
})